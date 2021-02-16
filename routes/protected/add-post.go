package protected

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func AddPostController(c *fiber.Ctx) error {
	var newPost *routes.Post
	/*
		Expected JSON

		post
		title
		category
		imageurl
		userid
	*/

	if err := c.BodyParser(&newPost); err != nil {
		return c.JSON(routes.HTTPResponse{
			Message: "Internal Server Error",
			Success: false,
			Data:    nil,
		})
	}

	if err := newPost.NewPost(); err != nil {
		return c.JSON(routes.HTTPResponse{
			Message: "Internal Server Error",
			Success: false,
			Data:    nil,
		})
	}

	return c.JSON(routes.HTTPResponse{
		Message: "/protected/add-post",
		Success: true,
		Data:    nil,
	})
}
