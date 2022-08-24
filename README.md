## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Furet Work](#future-work)

## General info

This project is simple example of dashboard report with dropdown filters and date range.
Demo: https://angular-reports-dashboard.vercel.app/reports --> warning, since the API used in this case is not https, the only visible page is the no reports

## Technologies

Project is created with:

- Angular: 14.1.3
- Angular Material: 14.1.3
- Storybook: 6.5.10
- Karma (Unit Testing): 6.4.0
- Eslint
- Prettier
- Husky

## Setup

To run this project, install it locally using npm:

```
$ git clone https://github.com/katiaipduarte/angular-reports-dashboard.git
$ cd angular-reports-dashboard
$ npm install
$ npm run prepare
$ npm run start
```

## Future Work

[ ] Complete the unit tests cases
[ ] Add mocked services for unit test
[ ] Add e2e tests with Cypress
[ ] Complete storybook with all cases from the shared UI components
[ ] Make app completly responsive and accessible
[ ] Add docker build
