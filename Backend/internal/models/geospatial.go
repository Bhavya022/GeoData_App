package models

// GeospatialData represents geospatial data uploaded by users
type GeospatialData struct {
	ID      int    `json:"id"`
	UserID  int    `json:"user_id"`
	Name    string `json:"name"`
	Type    string `json:"type"` // GeoJSON or KML
	Content []byte `json:"content"`
	// Add more fields as needed
}
