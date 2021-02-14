package index

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func ContactController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/contact",
		Success: true,
		Data:    nil,
	})
}
