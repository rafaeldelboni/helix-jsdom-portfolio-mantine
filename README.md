# helix-jsdom-portfolio

A simple project to setup jsdom, portfolio with helix and shadow-cljs.

## How to use
```bash
# Install dependencies
npm ci

# Start application and tests
npm start

# Run tests in node with jsdom
npm test
```

### After running `npm start`
Main App available at http://localhost:5000  
Portfolio available at http://localhost:5001  
Tests available at http://localhost:5002  

### Select which project run
```bash
# Start application
npm run watch app

# Start application and tests
npm run watch app tests

# Start application, tests and portfolio
npm run watch app tests portfolio
```
