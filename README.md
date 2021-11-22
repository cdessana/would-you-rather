# Would You Rather Project
This is the project of react-redux classes. In this app A user is asked a question in the form: “Would you rather [option A] or [option B] ?” and has to answer it choosing only one option.

# How to run
`npm install`
`npm start`

# Project Structure

├── README.md - # This file.

├── package-lock.json #npm package manager file

├── package.json # npm package manager file.

└── src

    ├── actions # Actions for react-redux architecture
    │   ├── authedUser.js
    │   ├── questions.js
    │   └── shared.js
    │   └── users.js    
    ├── components
    │   ├── LeaderBoard # Files used to set up the leaderboard environments
    │   │   └── LeaderBoard.css
    │   │   └── LeaderBoard.js
    │   │   └── UserRank.css
    │   │   └── UserRank.js
    │   ├── Login # Files used to handle user login
    │   │   └── Login.css
    │   │   └── Login.js
    │   ├── nav # Files used to handle navigation
    │   │   └── Nav.css
    │   │   └── Nav.js
    │   ├── Pool # Files used to handle questions
    │   │   └── NewPool.css
    │   │   └── NewPool.js
    │   │   └── Pool.css
    │   │   └── Pool.js
    │   │   └── PoolPage.js
    │   │   └── PoolResult.css
    │   │   └── PoolResult.js
    │   │   └── PoolSneak.css
    │   │   └── PoolSneak.js
    │   ├── App.js # Main app
    │   ├── Home.js # Home pagee
    │   ├── Home.css # Home style
    │   ├── PageNotFound.js # Page not found component
    │   ├── TabPanel.js # Tab to handle home questions
    ├── middleware # Middleware for react-redux architecture
    │   ├── index.js
    │   ├── logger.js
    │   ├── shared.js
    ├── reducers # Reducers for react-redux architecture
    │   ├── authedUser.js
    │   ├── index.js
    │   ├── question.js
    │   ├── users.js
    ├── utils # Files to help development process
    │   ├── _Data.js
    │   ├── api.js
    │   ├── RouteGuard.js
    └── index.js # It is used for DOM rendering only.
