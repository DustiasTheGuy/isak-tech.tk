package index

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func SideMenuController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/side-menu",
		Success: true,
		Data:    nil,
	})
}
