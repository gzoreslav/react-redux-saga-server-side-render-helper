# React Redux-Saga server-side rendering helper

*"Under the hood"* for React server-side rendering.
See usage example there - https://github.com/gzoreslav/react-redux-saga-universal-application

[![NPM package version](https://img.shields.io/npm/v/react-redux-saga-server-side-render-helper.svg)]()
[![Dependency Status](https://david-dm.org/gzoreslav/react-redux-saga-server-side-render-helper.svg)](https://david-dm.org/gzoreslav/react-redux-saga-server-side-render-helper)
[![devDependencies Status](https://david-dm.org/gzoreslav/react-redux-saga-server-side-render-helper/dev-status.svg)](https://david-dm.org/gzoreslav/react-redux-saga-server-side-render-helper?type=dev)

This package hide server and client sides rendering mechanism. Built using official recommendations from redux and react router v4

## Installation

```shell
> npm i react-redux-saga-server-side-render-helper --save
```

## Examples

### client.js

```javascript
import { doClient } from 'react-redux-saga-server-side-render-helper';
import { appData } from './config';

doClient(appData);
```

### server.js

```javascript
import Express from 'express';
import { handleRender as defaultHandleRender } from 'react-redux-saga-server-side-render-helper';
import { appConfig } from './config';

const handleRender = defaultHandleRender(appConfig);

const app = Express();
const port = 3030;
app.use(Express.static('dist'));
app.use(handleRender);
app.listen(port);
```

### config.js

```javascript
import routes from './routes';
import rootReducer from './reducers';
import rootSaga from './sagas';
import App from './containers/App.jsx';
import { apiHandler, reactRender, pageRender } from 'react-redux-saga-server-side-render-helper';


const appName = 'My Application';

export const appData = {
    routes,
    rootReducer,
    rootSaga,
    App
};

const pageConfig = {
    appName,
    getPageTitle: route => `${route ? route.pageTitle + ' - ' : ''}${appName}`,
    appData
};

const reactConfig = {
    next: pageRender(pageConfig),
    appData
};

const apiConfig = {
    next: reactRender(reactConfig),
    appData
};

export const appConfig = {
    next: apiHandler(apiConfig),
    appData
};
```

## What new?

### v.2.x.x

* separated server, client and story features into separate files for better support
* fixed routing params

## Credits

* https://redux.js.org/docs/recipes/ServerRendering.html
* https://reacttraining.com/react-router/web/guides/server-rendering
* https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-1
* https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-2

## Sending Feedback

I am always open to [your feedback](https://github.com/gzoreslav/react-redux-saga-server-side-render-helper/issues).

## License

This software is distributed under an MIT licence.

Copyright 2017 © Zoreslav Goral