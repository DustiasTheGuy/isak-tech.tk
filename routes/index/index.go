package index

import (
	"isak-tech/routes"
	"time"

	"github.com/gofiber/fiber/v2"
)

type Post struct {
	ID       uint      `json:"_id"`
	Post     string    `json:"post"`
	Title    string    `json:"title"`
	Category string    `json:"category"`
	Date     time.Time `json:"date"`
	UserID   uint      `json:"userid"`
	Archived int8      `json:"archived"`
	ImageURL string    `json:"imageurl"`
	Images   uint      `json:"images"`
}

func RootController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/",
		Success: true,
		Data:    nil,
	})
}
