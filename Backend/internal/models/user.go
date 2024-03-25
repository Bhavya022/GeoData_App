package models

// User represents a user in the system
type User struct {
    ID       int    `json:"id"`
    Username string `json:"username"`
    Password string `json:"password"`
    // Add more fields as needed
}
