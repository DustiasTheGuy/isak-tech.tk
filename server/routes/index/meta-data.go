package index

import (
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func MetaDataController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/meta-data",
		Success: true,
		Data:    nil,
	})
}

/*
   Articles,
   News,
   Product Reviews,
   Guides,
   Uncategorized
*/
