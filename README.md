(Live Site)[https://origin-bookclub.herokuapp.com/#/home]

# Stack

This project was made using a Ruby on Rails backend, React/Redux frontend, and postgres database.

# API

Prefix | Verb | URI Pattern    
-------|------|-------------
api_users | GET | /api/users 
api_users | POST |  /api/users 
api_user | GET |    /api/users/:id                                                                
api_books | GET |  /api/books
api_books | POST |  /api/books
api_book | GET |   /api/books/:id
api_book | PATCH  | /api/books/:id
api_book | PUT |    /api/books/:id
api_book | DELETE | /api/books/:id
api_favorites | POST | /api/favorites
api_favorite | DELETE | /api/favorite
api_notes | GET | /api/notes
api_notes | POST |   /api/notes
api_note | GET |   /api/notes/:id
api_note | PATCH | /api/notes/:id
api_note | PUT |    /api/notes/:id
api_note | DELETE | /api/notes/:id

# Instructions

To run this project locally, perform the following steps:

1. Clone github repo
2. In the command prompt, cd to project directory
3. Run `bundle install` and `npm install`
4. Run `bundle exec rails db:setup` to create database and run migrations
5. Run `bundle exec rails server` to run the backend server
6. In a separate command prompt window, run `npm start` to run the frontend server
7. In the browser, navigate to `http://localhost:3000/`
