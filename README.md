# NoSQL Challenge: Social Network API

This project is a demonstration of building an API for a social network web application using Express.js for routing, MongoDB for the database, and Mongoose ODM. The goal is to create an API that can handle large amounts of unstructured data typical of social network platforms.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## User Story

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Acceptance Criteria

- When the command to invoke the application is entered, the server is started and the Mongoose models are synced to the MongoDB database.
- Opening API GET routes in Insomnia for users and thoughts displays the data for each route in a formatted JSON.
- Testing API POST, PUT, and DELETE routes in Insomnia allows for successful creation, updating, and deletion of users and thoughts in the database.
- Testing API POST and DELETE routes in Insomnia allows for successful creation and deletion of reactions to thoughts and addition and removal of friends.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/yourusername/yourrepository.git
```

2. Navigate to the project directory:

```
cd yourrepository
```

3. Install dependencies:

```
npm install
```

4. Set up your MongoDB database.

5. Create a `.env` file in the root directory and add the following environment variables:

```
DB_NAME=your_mongodb_database_name
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
```

6. Start the server:

```
npm start
```

## Usage

Once the server is running, you can use a tool like Insomnia to test the API routes. Use the following routes:

- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a single user by ID
- `POST /api/users`: Create a new user
- `PUT /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID

Similar routes are available for thoughts, reactions, and friends.

## Walkthrough Video

[Link to walkthrough video demonstrating the functionality](#https://app.screencastify.com/v3/watch/6esrfjwaX66P3LwTUqZs)

Please watch the walkthrough video to see the API in action and to ensure that all acceptance criteria are met.

## License

This project is licensed under the [MIT License](LICENSE).
