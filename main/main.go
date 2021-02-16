package main

import (
	"fmt"
	"isak-tech/routes"
	"isak-tech/routes/index"
	"isak-tech/routes/protected"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/template/html"
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

var publicFolder string = "./public"
var headerProtection string = os.Getenv("headerProtection")

// SET headerProtection={key}

func main() {
	app := fiber.New(fiber.Config{
		Views: html.New(publicFolder, ".html"),
	})
	app.Static("/", publicFolder)
	app.Use(cors.New())
	// path, middleware
	indexGroup := app.Group("/", func(c *fiber.Ctx) error {
		// if c.Get("authorization") != headerProtection {
		// 	return c.JSON(routes.HTTPResponse{
		// 		Message: "Invalid Auth Token",
		// 		Success: false,
		// 		Data:    nil,
		// 	})
		// }

		return c.Next()
	})

	// path, middleware
	protectedGroup := app.Group("/protected", func(c *fiber.Ctx) error {
		if c.Get("authorization") != headerProtection {
			return c.JSON(routes.HTTPResponse{
				Message: "Invalid Auth Token",
				Success: false,
				Data:    nil,
			})
		}

		return c.Next()
	})

	// All unprotected routes, no verification is nessecary
	// indexGroup.Get("/", templateSender)                   // send index.html ✅
	indexGroup.Get("/get-posts", index.GetPostsController)   // query all posts without images ✅
	indexGroup.Get("/get-post/:id", index.GetPostController) // query a single post with images ✅
	indexGroup.Get("/side-menu", index.SideMenuController)   // sidemenu controller ✅
	indexGroup.Post("/contact", index.ContactController)     // when someone uses the contact form ✅
	indexGroup.Get("/meta-data", index.MetaDataController)   // metadata for the site ✅

	// Routes that require a valid jwt header token
	// header token should be placed in authorization:token
	protectedGroup.Post("/add-post", protected.AddPostController)   // create a new post ✅
	protectedGroup.Post("/add-image", protected.AddImageController) // add a new image to a post ✅

	app.Get("**", templateSender)

	log.Fatal(app.Listen(fmt.Sprintf(":%d", PORT)))
}

func templateSender(c *fiber.Ctx) error {
	return c.Render("index", nil)
}
