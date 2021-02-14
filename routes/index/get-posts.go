package index

import (
	"isak-tech/config"
	"isak-tech/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

func GetPostsController(c *fiber.Ctx) error {
	db := config.DefaultConfig().ConnectMySQL()
	var posts []Post

	rows, err := db.Query("SELECT * FROM posts")

	if err != nil {
		// return an error
	}

	for rows.Next() {
		var post Post

		if err := rows.Scan(
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

		posts = append(posts, post)
	}

	return c.JSON(routes.HTTPResponse{
		Message: "/get-posts",
		Success: true,
		Data:    posts,
	})
}
