# Argent Bank - API

This codebase contains the code needed to run the backend for Argent Bank website.

## MongoDB Installation

1. Download & install [MongoDB](https://www.mongodb.com/try/download/community)
2. If on Windows 11, download [Mongo Shell](https://www.mongodb.com/try/download/shell)
3. If Mongo Shell is necessary, extract the files from the Mongo Shell zip folder into your MongoDB folder in your C disk folder _(the path might look like `C:\Program Files\MongoDB\mongosh-0.0.1-win32-x64\bin`)_
4. Copy the previous path of the MongoDB bin & the Mongo Shell bin path
5. Go to your Windows environment variables and click on the 'Environment Variables' button at the bottom
6. On this window, click on the 'Path' variable, then on the 'Modify' button and finally on the 'New' button
7. Paste both of the previously copied paths in the list
8. Open a terminal and enter either `mongo --version` or `mongosh --version` to see if the terminal returns the version number
9. 🎉 **_Congrats ! MongoDB is installed on your machine and ready to be used !_**

## Project Installation

1. Clone the repo onto your computer
2. Open a terminal window in the cloned project
3. Run the following commands:

```js
// Install dependencies
npm install

// Start local dev server
npm run dev:server

// Populate database with two users
npm run populate-db
```

4. The server linked to the MongoDB database will be running normally at `http://locahost:3001`.

## Database Data

Once the `populate-db` script is run, two users will be available in the newly created database:

### User 1

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### User 2

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: `http://localhost:3001/api-docs`
