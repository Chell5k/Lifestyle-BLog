# Overview
The lifestyle blog app will implement a blog for use by a lifestyle expert who has built up a following potentially on other platforms, such as facebook twitter, etc. The blog owner plans to post articles on a number of topics. The blog owner will create topics (or categories), and will create, view, edit and potentially delete posts. Users will be able to view articles and learn about the perspective of the blog owner.

## Wireframes
Wireframes are in the ./img directory.

## Components
The app features a landing page which welcomes the user. She clicks an entry button, which takes her to the main page.

### Main Page
The main page contains an index list of blog entries, sorted from most recent to least recent.

### Individual Blog Post
The blog owner can click a "New Post" button to create content.

Each blog post will be displayed on its own page, with a link that will take the user to the post's edit page.

The blog post edit page allows the user to edit or delete the post.

### Category Components
The user an create a new category by first clicking on the "Manage Categories" page to produce the Categories Index page.. This action produces a list of all categories. The user will click the "Add New Category" on this page to add a new category.

From the Categories Index page, the user can select individual items by clicking on an ID. The invidual category page will provide links allowing the user to update or delete the specific item.

## Database Schema
The database tables and entity relationship diagram are in the ./db_docs directory.

## MVP
The minimum viable product will contain:
Landing Page
Main Page containing blog post index
Ability to create, view, edit/update, delete a blog post
Ability to view all blog posts.
Ability to create, view, edit/update, delete a category.
Abilitity to view all categories.
Retrieve selected information from a public API to enhance a blog post's content.

## Post MVP
Abiility to support multiple users (no authentication or authorization)
Ability to filter blog posts by author, category, date.
Ability to authenticate and authorize users
