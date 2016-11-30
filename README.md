# Microcosm Starter

An extension of [create-react-pack](https://github.com/facebookincubator/create-react-app)
to make getting started with Microcosm easier.

Check the [quickstart guide](http://code.viget.com/microcosm/guides/quickstart.html) to get started.

## Setup

```
npm install
npm start
```

## Test

```
npm test
```

This will run the unit test suite. Acceptance tests are not run by
default. To execute them:

### Acceptance Tests

```
npm run test:acceptance
```

Or run the entire test suite with:

```
npm run test:all
```

### Coverage

Run test coverage with:

```
npm run test:cov
```

Then open `./coverage/index.html`

## Folder structure

```
src/
├── actions
├── presenters
├── domains
├── effects
├── style
├── views
├── index.js
├── repo.js
└── routes.js
test/
├── helpers
├── unit
└── integration
```
