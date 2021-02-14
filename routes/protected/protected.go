package protected

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func RootController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/protected",
		Success: true,
		Data:    nil,
	})
}
