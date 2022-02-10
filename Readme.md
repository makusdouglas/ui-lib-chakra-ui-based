# Simple ui-lib based on chakra-ui

This is a POC for a ui-lib react using:

- Storybook for documentation
- Chakra-ui to serve the basic styles and components

## Installation

Install the <code>ui-lib-chakra-ui-based</code>

### Npm

```bash
# Npm
npm install ui-lib-chakra-ui-based --save

#Yarn
yarn add ui-lib-chakra-ui-based
```

## Usage

This package was made based on the [Chakra-ui](https://chakra-ui.com/docs) component library, follow the initial steps described in the documentation.

<br>

# Development of this package

This section, is just for developers of this package, here we describe how to build, publish and test this library.

## Run Storybook

To open the storybook page, make sure you have run **npm install** for install the dependencies of the project.
After this, you can run the following code to start the local server of storybook:

```bash
# Npm
npm run storybook

# Yarn
yarn storybook
```

## Build and Publish the package

After making changes to the package, you need to build the source code into **dist** folder.
Run the following code to make the build:

```bash
# Npm
npm run build

# Yarn
yarn build
```

The next step is publish the package for NPM, just run this code to do that:

```bash
npm publish
```

npm-package: [ui-lib-chakra-ui-based](https://www.npmjs.com/package/ui-lib-chakra-ui-based)  
Author: Markus Douglas
