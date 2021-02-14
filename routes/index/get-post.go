package index

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func GetPostController(c *fiber.Ctx) error {

	// query relevant images

	return c.JSON(routes.HTTPResponse{
		Message: "/get-post/:id",
		Success: true,
		Data:    nil,
	})
}
