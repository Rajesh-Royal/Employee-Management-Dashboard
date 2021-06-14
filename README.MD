# <div align="center"> Employee Dashboard

<div align="center">

This project Is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and using tailwindcss for UI library. Backend is built with node.js on top of NestJS and MongoDB. Development enviornment is 64bit Windows 10.

</div>

## <p>Available Scripts :helicopter:</p>

This project usages Yarn as package manager and in the project directory, you can run:

### Root scripts

| Client Script            | Description                                              |
|--------------------------|----------------------------------------------------------|
| `start:client`           | Starts the development server of client                  |
| `start:server`           | Starts the development server of server                  |
| `start:all`              | Starts the development server of client and server both  |
| `install:server`         | Install server's npm packages                              |
| `install:client`         | Install client's npm packages                              |
| `install:server:client`  | Install server and client's npm packages                   |
| `build:server`           | build client production                                  |
| `build:client`           | build server production                                  |
| `prepare`                | Install husky hooks after package Installs               |
| `prepare`                | Install husky hooks after package Installs               |

>You can Ignore some of the weired looking commands they are related to heroku or netlify, but If you have experience with these platform and CI/CD pipeline go ahead 👍

<details>
  <summary># <b>Individual scripts</b></summary>

| Client Script      | Description                               | Server Script      | Description                         |
|--------------------|-------------------------------------------|--------------------|-------------------------------------|
| `start:dev`        | Starts the development server             | `start`             | Starts the server                   |
| `build`            | Production build                          | `start:dev`         | Starts the server in watch mode     |
|  `test`            | Runs unit tests                           | `start:debug`       | Starts the server in debug mode     |
|  `eject`           | [React Eject](https://bit.ly/2TOYE0A)     | `start:prod`        | Runs prod server, run `build` first |
| `lint`             | Shows all the linting errors in codebase  | `lint`              | Fix all the liting errors           |
| `lint:fix`         | Fix all the liting errors                 | `build`            | Production build                     |

</details>

> Husky hooks will lint code in client folder before commiting it.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

<details>
  <summary>Client</summary>

    ├── .vscode
    ├── node_modules
    ├── public
    ├── src
        ├── assets
        ├── components
        ├── container
        ├── context
        ├── pages
        ├── routes
        ├── utils
    ├──_redirects
    ├── netlify.toml
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc
    ├── craco.config.js
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    └── yarn.lock
</details>
1. **`.vscode/`**: This directory contains all of the workspace setting for vscode.

## Deploy on cloud

> <b>Server</b> graphql Server is deployed at heroku.
> <b>Client</b> is deployed on netlify.
> <b>Database</b> is at mongodb atlas.

> <b>How to deploy</b>

- <b>Deploy MongoDB</b>
  - Create a new cluster at [MongoDB Cluster](https://bit.ly/3zrWsfN)
  - Go to cluster click on connect and follow the steps.
  - Create a user of this collection and remember username and pwd.
  - You should allow IP access from everywhere.
  - Choose connect your application and copy URI and use It in server deployment step.
  - Change URI values with your pwd and username.
- <b>Deploy Server.</b>
  - create a new app on [heroku](https://dashboard.heroku.com/new-app).
  - Install heroku CLI locally.
  - Open cmd at root of the project.
  - Init heroku repository with `heroku git:remote -a YOUR_APP_NAME`
  - Open `server/app/app.module.ts` and change mongoDB URI to your mongoDB atlas URI.
  - Run `yarn build:server`
  - Now push to heroku master `git push heroku <branch_name>:master`
  - Your server is running at the `APP_URL/graphql`
  - Copy app url It will be needed in client deployment.
- <b>Deploy Client</b>
  - Upload or Clone this repository to github
  - Open `client/src/index.js`
  - Change ApolloClient to `projectData.graphqlServerLive`
  - Go to `projectData` file and replace the value of `graphqlServerLive` with your live GraphQL server URI which you have copied in server deployment.
  - Git push to repository.
  - Use deploy on netlify button at very bottom of this file.
  - You can deploy any branch I will prefer deploying master as It have production ready code.
  - leave the netlify variables empty don't put anything.
  - This project already have a netlify config file, netlify will use this file.

> Happy deploying 😄

### Notes

- if husky hooks not working it can be because of husky didn't created hooks in `.husky` directory. To fix this run the following commands in root of this project.

```json
yarn add -D husky

npm set-script prepare "husky install" && yarn prepare // don't worry if this not work It just add prepare script to npm Scripts which is already added.

npx husky add .husky/pre-commit "yarn lint-staged"

git commit -m "added husky and lint-stagged" // here you will notice the lint-staged checking the files with help of husky
```

- <b>Client</b> application will run at port 3000 if available otherwise it will pick any available port.
- <b>Server</b> will be running at port 4000. <b>GraphQL</b> playground is available at `URL:4000/graphql`
- Server usages default mongoDB port which is `27017`, check `server/src/app/app.module.ts` for details.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Rajesh-Royal/Employee-Management-Dashboard)
