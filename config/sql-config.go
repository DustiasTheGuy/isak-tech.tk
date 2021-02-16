package config

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

// MySqlConfig
type MySqlConfig struct {
	Host      string
	User      string
	Password  string
	Database  string
	Port      uint
	Reconnect bool
}

// ConnectMySQL creates a new connection to mysql
func (c MySqlConfig) ConnectMySQL() *sql.DB {
	connectionURI := fmt.Sprintf("%s:%s@/%s?parseTime=true", c.User, c.Password, c.Database)

	db, err := sql.Open("mysql", connectionURI)

	if err != nil {
		return nil
	}

	return db
}

// DefaultConfig generates the default config for the server
func DefaultConfig() *MySqlConfig {
	return &MySqlConfig{
		Host:      "localhost",
		User:      "root",
		Password:  "password",
		Database:  "nodejs_portfolio",
		Port:      3306,
		Reconnect: true,
	}
}
