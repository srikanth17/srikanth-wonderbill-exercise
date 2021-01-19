## Application

This application is built on ES6 JavaScript using React with Redux and React Router. Information about the _create-react-app_ & to run this application is mentioned in the later part of this document.

## Directory Structure

All the TS code live in _/src/_ directory. _index.jsx_ is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.

## Redux Store

I've used provied Redux store & added my code to it. I've written actions inside the state.

## React Router

I've used _react-router_ for client side routing. Routers are configured in _src/routers/AppRouter.jsx_.

## Components

1. Home - Home page of the application. Lists all payments.
2. Header - Renders the header part of the application
3. AddPayment - Adds a payment to the application
4. EditPayment - Provides option to amend or delete a payment.
5. PaymentForm - Gets all the information from the user & pass it to the AddPayment component as a _prop_.
6. PaymentListItem - Renders a single payment
7. NotFound - Like a 404 page
8. Button - Rendera a button that can be used all over the application
9. Container - Sets width

## Styling

I've used styled components to style the component. Added a theme.js file, which contains the color codes from the style guide. It's the single source of truth.

## Tests

The application was configured to use _react-testing-library_ out of the box. I haven't used react testing library in the past. So, I've reconfigured to use jest & enzyme frameworks. I'm not entirely sure this is ok with you guys, so I've just written tests for _AddPayment_ component. Similary, I can write the tests for other components.
