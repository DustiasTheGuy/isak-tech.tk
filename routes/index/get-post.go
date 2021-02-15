package index

import (
	"isak-tech/config"
	"isak-tech/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

func GetPostController(c *fiber.Ctx) error {
	var post Post
	var images []Image
	db := config.DefaultConfig().ConnectMySQL()
	row := db.QueryRow("SELECT * FROM posts WHERE id=?", c.Params("id"))

	if err := row.Scan(
		&post.ID,
		&post.Post,
		&post.Title,
		&post.Category,
		&post.Date,
		&post.UserID,
		&post.Archived,
		&post.ImageURL,
		&post.Images); err != nil {
		log.Fatal(err)
	}
	// query relevant images

	images = append(images, Image{
		ID:        0,
		URL:       post.ImageURL,
		Date:      post.Date,
		PostID:    post.ID,
		Thumbnail: 1,
	})

	rows, err := db.Query("SELECT * FROM images WHERE postid=?", post.ID)

	if err != nil {
		log.Fatal(err)
	}

	for rows.Next() {
		var image Image
		if err := rows.Scan(
			&image.ID,
			&image.URL,
			&image.Date,
			&image.PostID,
			&image.Thumbnail); err != nil {
			log.Fatal(err)
		}

		images = append(images, image)
	}

	post.Images = images

	return c.JSON(routes.HTTPResponse{
		Message: "/get-post/:id",
		Success: true,
		Data:    post,
	})
}
