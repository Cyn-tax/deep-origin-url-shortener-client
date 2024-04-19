# Short URL Generator Frontend

This project is the frontend for a simple URL shortening service. It allows users to enter a long URL and generate a shortened version of it.

## Requirements

- Build a web page with a form for entering a URL
- When the form is submitted, return a shortened version of the URL
- Ensure the slug of the URL is unique
- When the shortened URL is accessed, redirect to the stored URL
- If an invalid slug is accessed, display a 404 Not Found page

## Tech Stack

- React with TypeScript

## Installation

1. Navigate to the project directory: `cd client`
2. Install dependencies: `npm install`
3. Make a new .env file and set your backend url like REACT_APP_API_URL=your_url
4. Start the development server: `npm start`


## Environment Variables

You can set the following environment variables in a `.env` file:

- `REACT_APP_BACKEND_URL`: The URL of the backend server. Default is `http://localhost:5000`.

## Usage

1. Visit the provided URL in your browser.
2. Sign up and then login to access Shortner Url page.
3. On Click on My List you can see your all urls and visits.
4. Enter a long URL into the input field.
5. Click the "Shorten" button.
6. Copy and share the generated shortened URL.
7. On Click Logout you can expire the session.

## Docker

You can also run the backend using Docker. Follow these steps:

1. Build the Docker image: `docker-compose up --build .`
2. Run the Docker container: `docker-compose up`

After running these commands, the backend will be available at `http://localhost:3000` in your browser.

