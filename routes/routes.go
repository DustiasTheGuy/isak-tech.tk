package routes

import (
	"fmt"
	"isak-tech/config"
	"time"
)

type HTTPResponse struct {
	Message string      `json:"message"`
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
}

type Post struct {
	ID       uint        `json:"id"`
	Post     string      `json:"post"`
	Title    string      `json:"title"`
	Category string      `json:"category"`
	Date     time.Time   `json:"date"`
	UserID   uint        `json:"userid"`
	Archived int8        `json:"archived"`
	ImageURL string      `json:"imageurl"`
	Images   interface{} `json:"images"`
}

type Image struct {
	ID        uint      `json:"id"`
	URL       string    `json:"url"`
	Date      time.Time `json:"date"`
	PostID    uint      `json:"postid"`
	Thumbnail int8      `json:"thumbnail"`
}

func (p *Post) NewPost() error {
	db := config.DefaultConfig().ConnectMySQL() // create a new connection to mysql

	result, err := db.Exec(
		"INSERT INTO posts (title, post, category, imageurl, userid) VALUES (?, ?, ?, ?, ?) ",
		p.Title, p.Post, p.Category, p.ImageURL, p.UserID,
	)

	if err != nil {
		return err
	}

	fmt.Println(result.LastInsertId())
	return nil
}
