package routes

import "time"

type HTTPResponse struct {
	Message string      `json:"message"`
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
}

type Post struct {
	ID          int64     `json:"id"`
	Post        string    `json:"post"`
	Title       string    `json:"title"`
	Category    string    `json:"category"`
	Date        time.Time `json:"date"`
	UserID      int64     `json:"user_id"`
	Archived    int8      `json:"archived"`
	Thumbnail   int64     `json:"thumbnail"`
	TotalImages int64     `json:"total_images"`
	Images      []Image   `json:"images"`
}

type Image struct {
	ID        int64     `json:"id"`
	URL       string    `json:"url"`
	Date      time.Time `json:"date"`
	PostID    int64     `json:"post_id"`
	Thumbnail int8      `json:"thumbnail"`
}
