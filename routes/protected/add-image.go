package protected

import (
	"isak-tech/config"
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

func AddImageController(c *fiber.Ctx) error {
	/*
		Expected JSON

		url
		postid

	*/

	var body routes.Image

	db := config.DefaultConfig().ConnectMySQL()

	if err := c.BodyParser(&body); err != nil {
		return c.JSON(routes.HTTPResponse{
			Message: "Internal Server Error",
			Success: false,
			Data:    nil,
		})
	}

	_, err := db.Exec(
		"INSERT INTO images (url, postid) VALUES (?, ?)",
		body.URL, body.PostID)

	if err != nil {
		return c.JSON(routes.HTTPResponse{
			Message: "Internal Server Error",
			Success: false,
			Data:    nil,
		})
	}

	_, err = db.Exec("UPDATE posts SET imageurl = ? WHERE id = ?", body.URL, body.PostID)

	if err != nil {
		return c.JSON(routes.HTTPResponse{
			Message: "Internal Server Error",
			Success: false,
			Data:    nil,
		})
	}

	/*
	   UPDATE table_name
	   SET column1 = value1, column2 = value2, ...
	   WHERE condition;
	*/

	return c.JSON(routes.HTTPResponse{
		Message: "/protected/add-image",
		Success: true,
		Data:    nil,
	})
}
