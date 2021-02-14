package protected

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func AddPostController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/protected/add-post",
		Success: true,
		Data:    nil,
	})
}
