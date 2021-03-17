package index

import (
	"fmt"
	"isak-tech/config"
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

// GetPostController selects one post with its primary key
func GetPostController(c *fiber.Ctx) error {
	var imageID int64
	var post routes.Post                        // will be populated with data from mysql
	var images []routes.Image                   // will be populated with data from mysql
	db := config.DefaultConfig().ConnectMySQL() // create a new connection to mysql
	defer db.Close()
	row := db.QueryRow("SELECT * FROM posts WHERE id=?", c.Params("id")) // select one row with primary key

	if err := row.Scan( // scan row into post variable
		&post.ID,
		&post.Post,
		&post.Title,
		&post.Category,
		&post.Date,
		&post.UserID,
		&post.Archived,
		&imageID,
		&post.TotalImages); err != nil {
		fmt.Println(err)
		return c.JSON(routes.HTTPResponse{
			Message: "Internal Server Error",
			Success: false,
			Data:    nil,
		})
	}

	rows, err := db.Query("SELECT * FROM images WHERE post_id=?", post.ID) // select all images with postid

	if err != nil {
		fmt.Println(err)
		return c.JSON(routes.HTTPResponse{
			Message: "Internal Server Error",
			Success: false,
			Data:    nil,
		})
	}

	for rows.Next() { // loop images and append to images slice
		var image routes.Image // temporary variable
		if err := rows.Scan(
			&image.ID,
			&image.URL,
			&image.Date,
			&image.PostID,
			&image.Thumbnail); err != nil {
			fmt.Println(err)
			return c.JSON(routes.HTTPResponse{
				Message: "Internal Server Error",
				Success: false,
				Data:    nil,
			})
		}

		images = append(images, image) // append to slice
	}

	post.Images = images // update images to slice populated with images from mysql
	img, err := GetImageByID(imageID)

	if err != nil {
		post.Thumbnail = "https://i.ibb.co/3d3gpFW/example-featured.png"
	} else {
		post.Thumbnail = img.URL
	}

	return c.JSON(routes.HTTPResponse{
		Message: "/get-post/:id",
		Success: true,
		Data:    post,
	})
}
