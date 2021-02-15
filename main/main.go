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

func main() {
	app := fiber.New()

	// path, middleware
	indexGroup := app.Group("/", func(c *fiber.Ctx) error {
		return c.Next()
	})

	// path, middleware
	protectedGroup := app.Group("/protected", func(c *fiber.Ctx) error {
		return c.Next()
	})

	// All unprotected routes, no verification is nessecary
	indexGroup.Get("/", index.RootController)                // currently not used
	indexGroup.Get("/get-posts", index.GetPostsController)   // query all posts without images
	indexGroup.Get("/get-post/:id", index.GetPostController) // query a single post with images
	indexGroup.Get("/side-menu", index.SideMenuController)   // sidemenu controller
	indexGroup.Post("/contact", index.ContactController)     // when someone uses the contact form
	indexGroup.Get("/meta-data", index.MetaDataController)   // metadata for the site

	// Routes that require a valid jwt header token
	// header token should be placed in authorization:token
	protectedGroup.Get("/", protected.RootController)
	protectedGroup.Post("/add-post", protected.AddPostController)   // create a new post
	protectedGroup.Post("/add-iamge", protected.AddImageController) // add a new image to a post

	log.Fatal(app.Listen(fmt.Sprintf(":%d", PORT)))
}
