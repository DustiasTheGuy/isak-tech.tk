package index

import (
	"isak-tech/config"
	"isak-tech/routes"

	"github.com/gofiber/fiber/v2"
)

type Data struct {
	ID   uint   `json:"id"`
	Text string `json:"text"`
	Link string `json:"link"`
}

type Category struct {
	Title string `json:"title"`
	Data  []Data `json:"data"`
}

// SideMenuController provides a slice of menus that should be present in the dropdown menu
func SideMenuController(c *fiber.Ctx) error {
	return c.JSON(routes.HTTPResponse{
		Message: "/side-menu",
		Success: true,
		Data: []Category{
			{
				Title: "Recent Posts",
				Data:  queryPostsWith("SELECT * FROM posts ORDER BY id DESC LIMIT 5"),
			},
			{
				Title: "Archived Posts",
				Data:  queryPostsWith("SELECT * FROM posts WHERE archived=1 LIMIT 5"),
			},
		},
	})
}

func queryPostsWith(query string) []Data {
	db := config.DefaultConfig().ConnectMySQL()
	defer db.Close()
	var posts []routes.Post
	rows, err := db.Query(query)

	if err != nil {
		return nil
	}

	for rows.Next() {
		var post routes.Post

		if err := rows.Scan( // scan content of query results index into post variable
			&post.ID,
			&post.Post,
			&post.Title,
			&post.Category,
			&post.Date,
			&post.UserID,
			&post.Archived,
			&post.ImageURL,
			&post.TotalImages); err != nil {

			return nil
		}

		posts = append(posts, post)
	}
	return formatData(posts)
}

func formatData(p []routes.Post) []Data {
	var data []Data

	var t string

	for i := 0; i < len(p); i++ {
		if len(p[i].Title) > 20 {
			t = p[i].Title[0:20]
		} else {
			t = p[i].Title
		}

		data = append(data, Data{
			Text: t,
			Link: "/post",
			ID:   p[i].ID,
		})
	}

	return data
}
