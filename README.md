# GeoData_App 
# GeoData Web Application

Welcome to the GeoData web application! This application allows users to manage and visualize geospatial data. Users can create an account, upload GeoJSON or KML files, render these files on a map, draw custom shapes, save those shapes, and edit them.

## Features

- User authentication and account management
- Upload and manage GeoJSON and KML files
- Render maps and uploaded files using React Leaflet
- Draw custom shapes on the map
- Save and edit drawn shapes
- Secure user data storage
- Responsive and user-friendly design

## Technologies Used

- Frontend: React, React Leaflet
- Backend: Go (Golang), PostgreSQL
- Authentication: JWT (JSON Web Tokens)
- Styling: CSS

## Folder Structure

frontend/
│
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── Login.js
│ │ │ ├── Signup.js
│ │ │ └── ...
│ │ ├── Dashboard/
│ │ │ ├── UploadFile.js
│ │ │ ├── ManageFiles.js
│ │ │ ├── DrawShapes.js
│ │ │ ├── MapView.js
│ │ │ └── ...
│ │ └── Common/
│ │ ├── Header.js
│ │ ├── Footer.js
│ │ └── ...
│ │
│ ├── pages/
│ │ ├── Home.js
│ │ ├── About.js
│ │ ├── Login.js
│ │ ├── Signup.js
│ │ └── Dashboard.js
│ │
│ ├── services/
│ │ ├── authService.js
│ │ ├── fileService.js
│ │ ├── mapService.js
│ │ └── ...
│ │
│ ├── assets/
│ │ ├── images/
│ │ │ └── logo.png
│ │ └── ...
│ │
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── ...

markdown


## Setup Instructions

1. Clone the repository:

git clone <github.com/Bhavya022/GeoData_App>

css
Copy code

2. Navigate to the project directory:

cd GeoData_App/frontend

markdown


3. Install dependencies:

npm install

markdown


4. Start the development server:

npm start

markdown


5. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Authors

- Bhavya Khatri

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for 