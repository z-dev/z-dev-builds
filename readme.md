# ZDEV Build - our example site built with React and Next

We've built this site to show-off how we build things you can checkout the running site [here](https://builds.z-dev.com).

## Tech Stack

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Next](https://nextjs.org/) for server side rendering React

## Technical highlights

* We've built neat components for all the on-screen elements
* We're managing application state inside Redux
* The site is server side rendered - check out how fast it loads!
* All the code is linted and autoformatted when you commit code and once pushed (by the build)
* The code is automatically deployed when you push code to `master` and `production` branches using [Now](https://zeit.co/now)
* We've used Redux's [Reselect](https://github.com/reduxjs/reselect) to calculate a derived state of which projects to show based on the `projects` and the `filters` the user has selected
* We've built small common components for small things e.g. `<input>` which allows us to style the application using React components (e.g. we can modify all `<input>`s by changing our own `<Input>` component)
* We've written a small amount of code in `node.js` to send the projects to the front end in real-time using [Socket.io](https://socket.io/)
