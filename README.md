#Restful API Design Abstract


**Design patttern for developing simple, declarative, and modular Restful APIs**

##Install

**Clone this repository:**

```
$ git clone https://github.com/ddluc/restful-api-design.git
```

**Install Dependencies:**

cd into the api directory and then use npm to install the dependencies

```
$ cd api
$ npm install
```

**Set Environment:**

```
$ export DATABASE_CONNECTION_URI='mongodb://localhost/[database]'
```

**Create the database:**

In order to create a new database with mongo, you simply `use [database]` with mongo. Then you need to save a new document to the database in order for it to persist. Since you will need a user inorder to create users in the app, go ahead and save a new document to the user colllection.

```
$ mongo
$ > use [database]
$ > db.users.save({"username":'lucas', password:'123'})
```

**Run!**

```
$ node app.js
```

##Guide

**Example request: **

Let's login first, as some of the other available endpoints require a user key.

```
$ curl -H "Content-Type: application/json" -d '{"username":"lucas","password":"123"}' http://localhost:3000/users/login
```

This should respond with a JSON object containing the key, which you can then use to create new users
