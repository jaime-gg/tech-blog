# Um Technically: A Tech Blog
Using my experience with full-stack web development, I was tasked with creating and deploying an application that serves as a sort of tech blog. This was a challenging experience that required me to employ the many skills that I have had to develop over the course of the last couple months. As a result, I have successfully deployed an application to Heroku that utilizes various front-end and back-end portions. 

Through the use of HTML (In the form of express-handlebars), CSS, and JavaScript I created the client side webpage. Then through the use of Node, and several node modules such as Express, Sequelize, MySQL2, Dotenv, Bcrypt, and Express-Sessions was I able to develop the necessary database, routes, and functional code to properly host and deploy this application. 

Thanks to the guidance provided to my in the modules and the acceptance criteria I was given, I was able to implement a Login/Logout system that properly stores data such as emails, usernames, and hashed passwords. Then with the use of conditional express-handlebars html, I was able to allow users who were logged in, the ability to post new content and new comments, as well as edit any content they had posted in the past. 


## Given: User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Given: Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Demo
![a gif demonstrating the functionality og the application](./assets/UM.gif)

## Installation 
You may simply visit the deployed website to use this application. Otherwise, you may clone the repo and install on your local device. In the case of the latter, you will need to set environmental variables, use mysql to run the schema.sql in order to establish a database, and properly seed the application using the command 'npm run seed'. 


## Review

* Github Repo: https://github.com/jaime-gg/tech-blog 

* Deployed Application: https://um-technically-blog.herokuapp.com/
