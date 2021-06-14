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
