package index

import (
	"isak-tech/config"
	"isak-tech/routes"
)

func GetImageByID(imageID int64) (routes.Image, error) {
	var image routes.Image

	db := config.DefaultConfig().ConnectMySQL() // create a new connection to mysql
	defer db.Close()

	row := db.QueryRow("SELECT * FROM images WHERE id=?", imageID)

	if err := row.Scan(
		&image.ID,
		&image.URL,
		&image.Date,
		&image.PostID,
		&image.Thumbnail); err != nil {
		return routes.Image{}, err
	}

	return image, nil
}
