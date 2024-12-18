# React Poster

React Poster is a simple blogging platform built using React and Express. It allows users to post text content and view posts from other users.

## Installation

To set up React Poster locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- npm or yarn installed.

### Frontend Setup

1. Clone the repository and navigate to the frontend directory:
   ```bash
   git clone [Your Repository URL]
   cd react-poster/frontend
   ```
2. Install the dependencies:
```bash
npm install
```
3. Start the frontend development server:
```bash
npm start
```

### Backend Setup
1. Navigate to the backend directory:
```bash
cd ../backend
```
2. Install the dependencies:
```bash
npm install
```
3. Start the backend server:
```bash
npm run start
```

## Project Structure
### Frontend Components
- MainHeader.jsx: Navigation header displaying the site logo and a link to create new posts.
- Modal.jsx: Reusable modal component for displaying content overlays.
- Post.jsx: Component for rendering an individual post in a list.
- PostsList.jsx: Component for rendering a list of posts.
- NewPost.jsx: Form for submitting a new post.
- PostDetails.jsx: Page for displaying details of a specific post.
- Posts.jsx: Page for displaying all posts.
- RootLayout.jsx: Layout component that includes the MainHeader and router Outlet.  

### Backend Components
- posts.js: Module for handling storage and retrieval of posts using a JSON file.
- app.js: Express server setup with routes for getting and posting data.

### Usage
- Navigate to http://localhost:8080 to view the frontend.
- Use the React application to create, view, and interact with posts.

### API Endpoints
- GET /posts: Fetches all posts.
- GET /posts/:id: Fetches a single post by ID.
- POST /posts: Creates a new post.

Enjoy building and customizing your version of React Poster!
