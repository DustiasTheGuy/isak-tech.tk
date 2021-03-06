package main

import (
	"fmt"
	"isak-tech/routes/index"
	"log"

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
var headerProtection string = "5a02e4042cab4a50a491dbbc117a415756c8362a8014dabd5472ef77278503b9"

// SET headerProtection={key}

func main() {
	app := fiber.New(fiber.Config{
		Views: html.New(publicFolder, ".html"),
	})
	app.Static("/", publicFolder)
	app.Use(cors.New())
	// path, middleware
	indexGroup := app.Group("/", func(c *fiber.Ctx) error {
		return c.Next()
	})

	// indexGroup.Get("/", templateSender)                   // send index.html ✅
	indexGroup.Get("/get-posts", index.GetPostsController)   // query all posts without images ✅
	indexGroup.Get("/get-post/:id", index.GetPostController) // query a single post with images ✅
	indexGroup.Get("/side-menu", index.SideMenuController)   // sidemenu controller ✅
	indexGroup.Post("/contact", index.ContactController)     // when someone uses the contact form ✅
	indexGroup.Get("/meta-data", index.MetaDataController)   // metadata for the site ✅
	indexGroup.Post("/place-order", index.OrderPostController)

	app.Get("**", templateSender)
	log.Fatal(app.Listen(fmt.Sprintf(":%d", PORT)))
}

func templateSender(c *fiber.Ctx) error {
	return c.Render("index", nil)
}
