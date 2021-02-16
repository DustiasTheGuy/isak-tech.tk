package routes

import "time"

type HTTPResponse struct {
	Message string      `json:"message"`
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
}

type Post struct {
	ID          uint      `json:"id"`
	Post        string    `json:"post"`
	Title       string    `json:"title"`
	Category    string    `json:"category"`
	Date        time.Time `json:"date"`
	UserID      uint      `json:"userid"`
	Archived    int8      `json:"archived"`
	ImageURL    string    `json:"imageurl"`
	TotalImages uint      `json:"totalImages"`
	Images      []Image   `json:"images"`
}

type Image struct {
	ID        uint      `json:"id"`
	URL       string    `json:"url"`
	Date      time.Time `json:"date"`
	PostID    uint      `json:"postid"`
	Thumbnail int8      `json:"thumbnail"`
}
