package index

import (
	"encoding/json"
	"io/ioutil"
	"isak-tech/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Order struct {
	Email string
}

func OrderPostController(c *fiber.Ctx) error {
	var body map[string]string

	if err := c.BodyParser(&body); err != nil {
		log.Fatal(err)
	}

	if err := UpdateFile(body["email"]); err != nil {
		log.Fatal(err)
	}

	return c.JSON(routes.HTTPResponse{
		Message: "Works",
		Success: true,
		Data:    nil,
	})
}

func UpdateFile(email string) error {
	var emails []Order

	bytes, err := ioutil.ReadFile("orders.json")

	if err != nil {
		return err
	}

	if err = json.Unmarshal(bytes, &emails); err != nil {
		return err
	}

	emails = append(emails, Order{Email: email})

	data, err := json.Marshal(emails)

	if err != nil {
		return err
	}

	if err = ioutil.WriteFile("orders.json", data, 0644); err != nil {
		return err
	}

	return nil
}
