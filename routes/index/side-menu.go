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
	defer db.Close()
	return formatData(posts)
}

func formatData(p []routes.Post) []Data {
	var data []Data

	for i := 0; i < len(p); i++ {
		data = append(data, Data{
			Text: p[i].Title[0:20],
			Link: "/post",
			ID:   p[i].ID,
		})
	}

	return data
}
