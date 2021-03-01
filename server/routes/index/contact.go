package index

import (
	"isak-tech/config"
	"isak-tech/routes"
	"time"

	"github.com/gofiber/fiber/v2"
)

type Email struct {
	ID          uint      `json:"id"`
	Inquiry     string    `json:"inquiry"`
	SenderName  string    `json:"fullName"`
	SenderEmail string    `json:"email"`
	Message     string    `json:"message"`
	Date        time.Time `json:"date"`
}

func ContactController(c *fiber.Ctx) error {
	db := config.DefaultConfig().ConnectMySQL()
	defer db.Close()
	var body Email

	if err := c.BodyParser(&body); err != nil {
		return c.JSON(routes.HTTPResponse{
			Message: "JSON formatting error",
			Success: false,
			Data:    nil,
		})
	}

	if !checkField(body.Inquiry, 4) {
		return c.JSON(routes.HTTPResponse{
			Message: "Missing Field Inquiry",
			Success: false,
			Data:    nil,
		})

	} else if !checkField(body.SenderName, 2) {
		return c.JSON(routes.HTTPResponse{
			Message: "Missing Field Name",
			Success: false,
			Data:    nil,
		})

	} else if !checkField(body.SenderEmail, 10) {
		return c.JSON(routes.HTTPResponse{
			Message: "Missing Field Email",
			Success: false,
			Data:    nil,
		})

	} else if !checkField(body.Message, 25) {
		return c.JSON(routes.HTTPResponse{
			Message: "Message too short. Minimum 25 characters",
			Success: false,
			Data:    nil,
		})

	}

	_, err := db.Exec(
		"INSERT INTO emails (inquiry, sender_name, sender_email, message) VALUES (?, ?, ?, ?)",
		body.Inquiry, body.SenderName, body.SenderEmail, body.Message)

	if err != nil {
		return c.JSON(routes.HTTPResponse{
			Message: "Missing Field Error",
			Success: false,
			Data:    nil,
		})
	}

	return c.JSON(routes.HTTPResponse{
		Message: "Your email has been sent!",
		Success: true,
		Data:    nil,
	})
}

func checkField(str string, min int) bool {
	if len(str) > min {
		return true
	}

	return false
}
