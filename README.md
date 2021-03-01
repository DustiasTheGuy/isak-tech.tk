# App

- Angular 11
- Golang 1.15
- Mysql

##### server/config/config.go

```GO
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
		Database:  "db",
		Port:      3306,
		Reconnect: true,
	}
}

```

## License
[MIT](https://choosealicense.com/licenses/mit/)