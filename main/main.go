package main

import (
	"fmt"
	"isak-tech/routes/index"
	"isak-tech/routes/protected"
	"log"

	"github.com/gofiber/fiber/v2"
)

const (
	// PORT is where the server will listen
	PORT = 8081
)

func main() {
	app := fiber.New()

	indexGroup := app.Group("/", func(c *fiber.Ctx) error {
		return c.Next()
	})

	protectedGroup := app.Group("/protected", func(c *fiber.Ctx) error {
		return c.Next()
	})

	// All Routes
	indexGroup.Get("/", index.RootController)
	indexGroup.Get("/get-posts", index.GetPostsController)
	indexGroup.Get("/get-post/:id", index.GetPostController)
	indexGroup.Get("/side-menu", index.SideMenuController)
	indexGroup.Post("/contact", index.ContactController)
	indexGroup.Get("/meta-data", index.MetaDataController)

	protectedGroup.Get("/", protected.RootController)
	protectedGroup.Post("/add-post", protected.AddPostController)
	protectedGroup.Post("/add-iamge", protected.AddImageController)

	log.Fatal(app.Listen(fmt.Sprintf(":%d", PORT)))
}

/*
	GET /
	GET /get-posts
	GET /get-post/:id
	GET /side-menu
	POST /contact
	GET /meta-data

	GET /protected
	POST /protected/add-post
	POST /protected/add-image
*/
