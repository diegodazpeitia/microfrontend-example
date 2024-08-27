# Microfrontend React Project

This project is a simple example of a microfrontend architecture using React. It demonstrates the use of Webpack's Module Federation to expose components from one application (the "primary" app) for use in another (the "secondary" app). The primary application provides two components, `Navbar` and `Footer`, which can be consumed by the secondary application.

## Project Structure

The project is divided into two main folders:

- **primary**: Contains the components to be exposed (`Navbar` and `Footer`) and their configuration.
- **secondary**: Consumes the exposed components from the primary application.

### Folder Structure

```
.
├── primary
│   ├── src
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── index.js
│   ├── webpack.config.js
│   └── package.json
└── secondary
    ├── src
    │   ├── App.jsx
    │   └── index.js
    ├── webpack.config.js
    └── package.json
```

## Primary Application

### Exposed Components

The primary application exposes the following components:

- **Navbar**: A navigation bar component.
- **Footer**: A footer component.

These components are available for consumption by other microfrontend applications.

### Configuration

The primary app uses Webpack with the `ModuleFederationPlugin` to expose the components. Here's a snippet of the Webpack configuration:

```javascript
new ModuleFederationPlugin({
  name: "primary",
  filename: "remoteEntry.js",
  exposes: {
    "./Navbar": "./src/Navbar.jsx",
    "./Footer": "./src/Footer.jsx",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
}),
```

## Secondary Application

### Consuming Components

The secondary application will consume the `Navbar` and `Footer` components from the primary application. Ensure that the primary app is running so that these components are available.

### Configuration

The secondary app's Webpack configuration includes the `ModuleFederationPlugin` to access the exposed components:

```javascript
new ModuleFederationPlugin({
  remotes: {
    primary: "primary@http://localhost:3000/remoteEntry.js",
  },
}),
```

## Getting Started

### Running the Primary Application

1. Navigate to the `primary` folder:
   ```bash
   cd primary
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The primary application will be served at `http://localhost:3000`.

### Running the Secondary Application

1. Navigate to the `secondary` folder:
   ```bash
   cd secondary
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The secondary application will be served at `http://localhost:3001`.

## Development

- **Primary Application**: Modify components and update their configuration in the `primary` folder.
- **Secondary Application**: Import and use the exposed components in the `secondary` folder.

## Notes

- Make sure both applications are running concurrently to see the components in action.
- Webpack Dev Server configurations may need to be adjusted based on your development environment.

For any questions or issues, please refer to the [Webpack Module Federation documentation](https://webpack.js.org/concepts/module-federation/) or contact the project maintainers.
