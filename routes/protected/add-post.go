package protected

import (
	"isak-tech/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

func AddPostController(c *fiber.Ctx) error {
	var newPost routes.Post
	/*
		Expected JSON

		post
		title
		category
		imageurl
		userid
	*/

	if err := c.BodyParser(&newPost); err != nil {
		log.Fatal(err)
	}

	if err := newPost.NewPost(); err != nil {
		log.Fatal(err)
	}

	return c.JSON(routes.HTTPResponse{
		Message: "/protected/add-post",
		Success: true,
		Data:    nil,
	})
}
