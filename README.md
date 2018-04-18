# Overview
The lifestyle blog app will implement a blog for a lifestyle expert who has a large following on other platforms, i.e.,  facebook twitter, etc. The blog owner has decided leave behind conventional social media outlets in favor of developing her own lean, customized platform. She intends to post articles on a number of topics and to categorize the articles appropriately. The blog owner will create topics (or categories), and will create, view, edit and potentially delete posts and categories.

## Wireframes
Wireframes are in the jpg directory.

## Database Schema
The database tables and entity relationship diagram are in the
db_docs directory.

## Components

- Landing Page
- Main page - blog post index screen of all posts
- Individual post view screen
- Individual post edit screen with delete button
- Category index screen of all categories
- Individual category view screen
- Individual category edit screen with delete button

## User Stories

### Landing Page
The landing page welcomes both the blog owner and her followers and provides buttom to enter the application.

### View Post(s)
At any time, the blog owner can view all of her posts by clicking enter on the landing page to get to the Blog Post Index, which is a list of all posts sorted by most recent date. She can select any item from this screen by clicking its id number.

The blog owner's followers will use the blog post index screen and individual item screen to read her content. She plans to make the blog available in a limited fashion in its first release and is not worried (yet) about credentialling and authorizing access.

### New Post
When inspired to create a new post, the blog owner clicks "new post" on the navigation bar on the blog index page, which takes her to a screen with editable content and category fields. She has a fondness for books, and in particular, books which are available electronically in an open source format, and she has asked for the ability to optionally include an Open Library id, so that her blog can render selected information (such as a thumbnail) if it is available on that platform. She clicks a submit button on this page to save changes.

### Update Post
The blog owner will navigate to an item she wishes to update by clicking its item number on the blog index screen. She will select an edit button on this screen which launches a screen pre-filled with the content of this blog entry, and will allow her to edit the content, category and optional Open Library Book id field. She clicks a submit button to save changes.

### Delete Post
The user prides herself on her ability to curate experiences and perspectives, and wishes to prune her collection of posts from time to time. To do this, she navigates to the main page by clicking the 'Enter' button on the landing page, and reviews all of her posts. She identifies an item she wishes to cull and clicks the edit button. The edit screen contains an option to delete, which she can select.

### Categories
The blog owner has the ability to perform the same functions for the categories by clicking "manage categories" from the navigation bar on the main and subsequent pages. This launches a category index page, and she can select a category view screen by clicking on a category id. She clicks the edit button which launches a screen with editable name and description fields. saves changes by clicking the submit button, or can delete the category altogether by clicking the delete button. She is unable to delete a category which has been assigned to an article, however.

## MVP
The minimum viable product will contain:
Landing Page
- Main Page containing blog post index
- Ability to create, view, edit/update, delete a blog post
- Ability to view all blog posts.
- Ability to create, view, edit/update, delete a category.
- Abilitity to view all categories.
- Retrieve selected information from a public API to enhance a blog post's content.

## Post MVP
- Abiility to support multiple users (no authentication or authorization)
- Ability to filter blog posts by author, category, date.
- Ability to authenticate and authorize users
