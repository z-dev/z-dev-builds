# ZDEV Builds - our example site built with React and Next

We've built this site to show-off how we build things. You can checkout the running site [here](https://builds.z-dev.com).

## Tech Stack

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Next](https://nextjs.org/) for server side rendering React

## Technical highlights

### React Components

We've built neat components for all the on-screen elements

### Application state inside Redux

There's more than one way to do Redux. See how we write our [actions](redux/actions) and [reducers](redux/reducers).

We've used Redux's [Reselect](https://github.com/reduxjs/reselect) to calculate a derived state of [which projects to show](redux/selectors/projects.js) based on the `projects` and the `filters` the user has selected. These kind of derived state calculations are amazingly powerful.

### How fast the site renders

[Next](https://nextjs.org/) server side rendering is very fast. The site loads very fast - even on mobile.

### Automatic code checks

Our build process lints and autoformats when you commit and push code.


### Automatic code deployments

The code is automatically deployed when you push code to `master` and `production` branches using [Now](https://zeit.co/now)

### Real time builds using Socket

We've written a small amount of code in `node.js` to send the projects to the front end in real-time using [Socket.io](https://socket.io/)

## Questions?

Drop us a mail to hello@z-dev.com - we'll be happy to field any questions or even show you through the code :smile:
