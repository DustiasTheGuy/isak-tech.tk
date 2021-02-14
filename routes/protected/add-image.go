package protected

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func AddImageController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/protected/add-image",
		Success: true,
		Data:    nil,
	})
}
