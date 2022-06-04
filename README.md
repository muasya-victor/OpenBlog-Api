# blog_back
This is a restful API for a blog 

Access it on https://gracieblog.herokuapp.com/posts

**FILTER BLOGS BY CATEGORY NAME **
Make a get **GET** request to :     https://gracieblog.herokuapp.com/posts/category/gospel     to get all blogs that have a category name of gospel

**DELETE**
you can make a **DELETE** request by using an object title https://gracieblog.herokuapp.com/posts/title

**GET SPECIFIC BLOG**
you can **find a specific blog** by making a **GET** request with the title of the blog https://gracieblog.herokuapp.com/posts/title

**POST BLOG**
you can **add a blog** by making a **POST** request to https://gracieblog.herokuapp.com/posts .The structure is :
{
"category" : "",
"title" : "",
"body" : ""
}

**UPDATE A BLOG**
Make a **PUT** request to https://gracieblog.herokuapp.com/posts/title  to change the blog's body. The structure of change is now :
{
"body" : ""
}
