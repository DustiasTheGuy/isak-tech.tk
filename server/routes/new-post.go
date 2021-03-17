package routes

import (
	"fmt"
	"isak-tech/config"
)

func (p *Post) NewPost() error {
	db := config.DefaultConfig().ConnectMySQL() // create a new connection to mysql
	defer db.Close()

	result, err := db.Exec(
		"INSERT INTO posts (title, post, category, thumbnail, userid) VALUES (?, ?, ?, ?, ?) ",
		p.Title, p.Post, p.Category, p.Thumbnail, p.UserID,
	)

	if err != nil {
		return err
	}

	fmt.Println(result.LastInsertId())
	return nil
}
