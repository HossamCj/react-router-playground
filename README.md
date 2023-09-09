# React Router Playing Around

Welcome to the "React Router Playing Around" repository! This project serves as a playground for practicing and experimenting with React Router. In this app, you will find various route components and navigation elements that demonstrate the use of React Router for creating dynamic and interactive user interfaces.

## Route Components

### Contact.jsx

This route component, located at `src/routes/Contact.jsx`, represents the "Contact" page. It's a simple example of rendering content within a route.

### ErrorPage.jsx

The `ErrorPage` route component, found in `src/routes/ErrorPage.jsx`, is responsible for displaying a "Page not found" message. It also provides a link to navigate back to the home page.

### Faq.jsx

The `Faq` route component, located at `src/routes/Faq.jsx`, represents the "Faq" page. Like the "Contact" page, it demonstrates how to render content within a route.

### Index.jsx

The `Index` route component, available at `src/routes/Index.jsx`, serves as the index or home page of the application. It showcases the main content for the home page.

### Root.jsx

The `Root` route component, found in `src/routes/Root.jsx`, is the core layout of the application. It includes a header, a footer, and an `Outlet` where child routes are rendered.

### UserEdit.jsx

`UserEdit` is a route component in `src/routes/UserEdit.jsx`. It is a placeholder for user editing functionality.

### UserInfo.jsx

The `UserInfo` route component, located at `src/routes/UserInfo.jsx`, represents user information. It's part of the user-related routes.

### UserRoot.jsx

`UserRoot` in `src/routes/UserRoot.jsx` is the root component for user-related routes. It includes navigation links to "User Info" and "User Edit" and a "Logout" button that uses `useNavigate` to simulate a logout action.

## Running the App

To explore and run this React Router app:

1. Clone this repository to your local machine.

```shell
git clone https://github.com/your-username/react-router-playing-around.git
```

### Navigate to the project directory.
```cd react-router-playing-around```
### Install the required dependencies.
```npm install```

### Start the development server.
```npm start```
### The app will be accessible in your web browser at http://localhost:3000. Feel free to navigate between routes and explore the various components and features implemented in this proje