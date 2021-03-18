# Introduction to React
## Content
- What is react?
- Why should we use react?
- Introduction
-- Create React app
-- Explanation of the components
- Key Understanding
-- State
-- Props
-- Class and stateless components- 
- Life Cycle Method
-- ComponentDidMount
- Communication Between Siblings
- Useful Links
- VSCode Extensions

## What is React
Useful JS Library that helps to make UI. **Can be a node base application**. [React org](https://reactjs.org/) describes two useful feature for react
- Declarative
- Component based

## Why Should I use React
Plenty of readsons with examples online but I like [this one](https://stories.jotform.com/7-reasons-why-you-should-use-react-ad420c634247) most.


## Introduction
`npx create-react-app . template typescript`

**Explanation of some common files and folder**

 - index.tsx
 - App.tsx
 - package.json

## Key Understanding

**State**
Is the visual state of the page. Whenever a page changes in appearance, we say the page state has change or the page/component has mutated.

**Props/Properties**
Immutable feature of a page. For instance a header of a page. A state of a parent can/should become props for a child. 

**Classes and Stateless Component** 
Classes generally mutes where Stateless, as the name suggested does not change. There is a drive recently to move to complete stateless web application which can be achieved via [hooks](https://reactjs.org/docs/hooks-intro.html). This is a direction of travel for FaceBook


## Life Cycle Methods for (Class) Component
Complete list can be found [here](https://reactjs.org/docs/react-component.html) but we should mostly learn about `ComponentDidMount` method. 

## Useful Links
 - Create React App [Website](https://create-react-app.dev/docs/getting-started)

## Useful VSCode Extensions


 - [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
 - [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
 - [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics) 
 - [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
 - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
 - [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
 - [Typescript React code snippets](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
