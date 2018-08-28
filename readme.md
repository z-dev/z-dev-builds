# ZDEV Build - our example site built with React and Next.js

We've built this site to show-off how we build things you can checkout the running site [here](https://builds.z-dev.com).

## Tech Stack

* React
* Redux
* Next.js (for server side rendering)

## Technical highlights

* We've built components for everything
* We're managing application state inside Redux
* All the code is linted and autoformatted when you commit code and once pushed (by the build)
* The code is automatically deployed when you push code to master and production branches using Now for stateless deployments.
* We've used redux-select to calculate a derived state of which projects to show based on the `projects` and the `filters` the user has selected.
* We've built small common components for small things e.g. `<input>` which allows us to style the application using React components (e.g. we can modify all `<input>`s by changing our own `<Input>` component)
* We've written a small amount of code in `node.js` to send the projects to the front end in realtime using socket.io.
