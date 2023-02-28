# Umer's Assignment

## Tech

-   React js (version 18 latest)
-   SCSS
-   Redux & Redux Toolkit
-   Material UI
-   Typescript
-   Axios
-   lint
-   Prettier

## Features

-   On application load given api call will happen and loads the data on screen.
-   User will have option to sort the data, search the result using searchbar
-   User can sort using release date and Episode number
-   Tried to make it responsive so on mobile/tablet devices it should work

## Prerequisite

Environments variables.

```sh
REACT_APP_BASE_URL=https://swapi.dev/api/
ESLINT_NO_DEV_ERRORS=true
```

## Installation & scripts

You will requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd umer-sayyed-etraveli-assignmnet
```

For first time running application run below command as this will install dependancy and run the application

```sh
npm run install-start
```

> Note: `Due to material ui ` there is version miss match so is required to install dependencies forcefully.

To run lint

```sh
npm run lint
```

To format code using prettier

```sh
npm run format
```

To run test cases and create a report

```sh
npm run test
```

> Note You can see coverage folder gets created after this command and you can visualize the test result. (Find attached image in code with name test_report.jpg)

Now to run application

```sh
npm run start
```

Verify the application is running on your preferred browser.

```sh
http://localhost:3000/
```

[![Test Report](https://github.com/umer1989/etraveli-assignment/blob/master/test_report.jpg)]
