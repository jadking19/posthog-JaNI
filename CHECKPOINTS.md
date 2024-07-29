# Checkpoints

Tasks to build the PostHog clone.

- [x] Use node version manager (nvm) with latest node version

    * Acceptance criteria:
        * Install 2 different node versions with nvm
        * Switch between 2 different node versions with nvm

- [x] Setup a Node.JS typescript backend server with a hello world API route

    * Acceptance criteria:
        * Setup a backend server on port 3000
        * Create a hello world route `/hello`
        * Return a JSON response with a message `Hello world`
        * Add .gitignore for the backend (ignore `node_modules`, and `dist`) 

- [x] Setup a Node.JS typescript frontend server with a basic hello world page

    * Acceptance criteria:
        * Setup a frontend server on port 4000
        * Create a hello world page `/hello`
        * Display a hard-coded message `Hello world` on the page
        * Add .gitignore for the frontend (ignore `node_modules`)

- [x] Create a basic frontend page with a login form

    * Acceptance criteria:
        * Create a login form with email and password fields
        * Have a place for the error message
        * The page is rendered under `/login`

- [x] Create a basic backend API route to handle login

    * Acceptance criteria:
        * Create a POST route `/login` on the backend server
        * Accepts email and password in the request body
        * Return a JSON response with a message `Login successful`

- [ ] Move both servers to Docker Compose

    * Acceptance criteria:
        * Create a docker compose file
        * Setup the backend and frontend servers with Docker Compose
        * Create custom Dockerfile for each backend and frontend server
        * Run both servers with `docker compose up frontend backend`

    * Notes:
        * Dockerfile is for a single server
        * Docker compose is to orchestrate multiple servers

- [ ] Add a PostgreSQL database to Docker

    * Acceptance criteria:
        * Create a postgres service in the docker compose file
        * Run both servers and postgres with `docker compose up frontend backend postgres`

- [ ] Connect the backend server to the PostgreSQL database

    * Acceptance criteria:
        * Connect the backend server to the PostgreSQL database
        * Use the npm package `knex` to connect to the database 

- [ ] Create a database schema for the user

    * Acceptance criteria:
        * Create a migration file for the user table
        * Create a table `users` with columns `id`, `email`, `hashed_password`
            * ID should auto-increment
            * Email should be unique

- [ ] Sign up the user if they don't have an account

    * Acceptance criteria:
        * Upon login, check if the user exists in the database
        * If the user does not exist, sign them up
        * Return `Login successful` by default, at the end, whether we create a new user or not
        * Check `argon2` and `bcrypt` for password hashing
        * Use `bcrypt` for password hashing for now

- [ ] Login the user if they have an account

    * Acceptance criteria:
        * Upon login, check if the user exists in the database
        * If the user exists, log the user in, otherwise, create an account
        * If an account is created, directly return a valid session
        * If not, compare the password with the hashed password in the database
        * If the passwords don't match, throw an error
        * If the passwords match, create a cookie session
        * Store the "Sessions" in a Hashmap at the backend level for now

- [ ] Create a backend API route `/account` to return the current user

    * Acceptance criteria:
        * Create a GET route `/account` on the backend
        * Return `{ email: '<user-email>' }` if the user is logged in
        * Return an error message if the user is not logged in

- [ ] Create an auth-only route `/account` on the FE

    * Acceptance criteria:
        * Create a route `/account` on the frontend
        * Display a message `Welcome ${email}`
        * Only allow access to the route if the user is logged in
        * If the user is not logged in, redirect to the login page


- [ ] Create a logout route on the backend

    * Acceptance criteria:
        * Create a POST route `/logout` on the backend
        * Clear the session for the user
        * Return a message `Logged out successfully`

- [ ] Create a logout button on the frontend

    * Acceptance criteria:
        * Create a button to logout on the frontend
        * Upon clicking the button, send a POST request to `/logout`
        * Redirect the user to the login page
