package index

import (
	"isak-tech/config"
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

// GetPostsController is used for getting all posts from the database
func GetPostsController(c *fiber.Ctx) error {
	var imageID int64
	db := config.DefaultConfig().ConnectMySQL() // create a new connection to mysql
	defer db.Close()
	var posts []routes.Post // store the posts that will be queried

	rows, err := db.Query("SELECT * FROM posts") // execute a query

	if err != nil {
		// return an error
	}

	// i=0; i <rows.length; i++;
	for rows.Next() { // loop over query results
		var post routes.Post // storage for every single iteration

		if err := rows.Scan( // scan content of query results index into post variable
			&post.ID,
			&post.Post,
			&post.Title,
			&post.Category,
			&post.Date,
			&post.UserID,
			&post.Archived,
			&imageID,
			&post.TotalImages); err != nil {
			return c.JSON(routes.HTTPResponse{
				Message: "Internal Server Error",
				Success: false,
				Data:    nil,
			})
		}

		img, err := GetImageByID(imageID)

		if err != nil {
			post.Thumbnail = "https://i.ibb.co/3d3gpFW/example-featured.png"
		} else {
			post.Thumbnail = img.URL
		}

		posts = append(posts, post) // append to posts slice
		// i++
	}
	return c.JSON(routes.HTTPResponse{
		Message: "/get-posts",
		Success: true,
		Data:    posts,
	})
}
