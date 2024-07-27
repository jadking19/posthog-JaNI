# Checkpoints

Tasks to build the PostHog clone.

- [ ] Use node version manager (nvm) with latest node version

    * Acceptance criteria:
        * Install 2 different node versions with nvm
        * Switch between 2 different node versions with nvm

- [ ] Setup a Node.JS typescript backend server with a hello world API route

    * Acceptance criteria:
        * Setup a backend server on port 3000
        * Create a hello world route `/hello`
        * Return a JSON response with a message `Hello world`

- [ ] Setup a Node.JS typescript frontend server with a basic hello world page

    * Acceptance criteria:
        * Setup a frontend server on port 4000
        * Create a hello world page `/hello`
        * Display a hard-coded message `Hello world` on the page

- [ ] Create a basic frontend page with a login form

    * Acceptance criteria:
        * Create a login form with email and password fields
        * Have a place for the error message
        * The page is rendered under `/login`

- [ ] Create a basic backend API route to handle login

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

```html
<form>
  <input type="text" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <button>Sign up</button>
  <button>Login</button>
</form>
```

- [ ] Create a backend API route to handle sign up + login

