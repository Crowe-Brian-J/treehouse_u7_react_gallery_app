# React Gallery App

A responsive photo gallery built with React, Vite, and React Router that fetches images from the Pixabay API. This project demonstrates modular component design, state management, and routing in a React application.

## Default Topics

- Cats
- Dogs
- Computers

## Technologies Used

- React
- Vite
- React Router
- Fetch API
- Pixabay API
- HTML5 & CSS3 (provided CSS customized for the app)
- JavaScript (ES6+)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Crowe-Brian-J/treehouse_u7_react_gallery_app
2. **Navigate to the project folder:**
  cd treehouse_u7_react_gallery_app
3. **Install Dependencies:**
  npm install
4. **Add your Pixabay API Key:**
  - Create a config.js file inside the src folder.
  - Add the following:
    const apiKey = 'YOUR_PIXABAY_API_KEY' (please replace the string with your own key)
    export default apiKey
  - Important: Make sure config.js is listed in .gitignore to avoid committing your own API key
5. **Run the app:**
  npm run dev

## Features/Functionality

  - Display default topic pages (Cats, Dogs, Computers) with a grid of images.
  - Search for custom topics using the search bar.
  - Dynamic routing for search results (/search/:query).
  - 404 page with the option to search for unknown routes.
  - Reusable PhotoList and Photo components for displaying images.
  - Responsive design for desktop and mobile.
  - Loading indicator while fetching images.
  - Browser navigation works for search routes (forward/back buttons update content)
  - Displays a friendly "No results found" message if a search returns no images
  - Modular code structure with container and presentational components
  - Clean, Commented, and Maintanable codebase following React best practices

## Notes

This project was built as a learning exercise in React and demonstrates:

  - Writing JSX and using props to pass data
  - Managing state in a container component
  - Fetching and displaying data from an external API
  - Implementing dynamic and static routes using React Router