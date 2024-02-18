# Front End Developer Code Challenge - Transmax Dashboard Sidebar

## Project Description

The practical exercise involves developing a sidebar for a situational awareness dashboard using React and Typescript. The sidebar will display various widgets such as weather, delayed routes, and a ramp chart, which will be populated using an API. The ramp chart will update dynamically as new data is received, requiring a performant and visually appealing implementation. Additionally, a non-trivial unit test for one of the sidebar components is required to demonstrate testing proficiency.

## Project Structure

- `src/index.tsx`: The entry point for this React application.
- `src/App.tsx`: Main application component.
- `src/pages`: Contains all pages functional compoents for building the user interface.
- `src/components`: Contains all children components for building the user interface.
- `src/hooks`: Stores all custom hooks that encapsulate reusable logic.
- `src/types`: Stroes TypeScript interfaces or enums that represent the data models
- `src/utils`: Houses utility functions for data manipulation.
- `src/constants`: Stores constant values, configurations that are used throughout the application.
- `src/__tests__`: Contains all the test files.

## Main Packages:

- `dayjs`: Often used in projects for handling and manipulating dates.
- `jest`: A popular JavaScript testing framework that is often used in React projects.
- `Material UI`: A popular open-source library that provides a set of pre-built React components for building user interfaces with a Material Design look and feel.
- `lodash`: A popular JavaScript utility library that provides a wide range of functions for simplifying and optimizing common programming tasks.
- `AG Charts`: A powerful and feature-rich JavaScript charting library developed by ag-Grid, known for its high-performance data grid component.

## Getting Started:

Follow these steps to set up and run the project locally:

1. Clone the repository:

```js
git clone https://github.com/sunyang-629/transmax-dashboard.git
```

2. Navigate to the project directory:

```js
cd transmax
```

3. Install dependencies:

```js
npm install
```

4. Run the development server:

```js
npm run start
```

This will start the development server, and you can view the app at http://localhost:3000 in your browser.

5. Run Tests

```js
npm run test
```
