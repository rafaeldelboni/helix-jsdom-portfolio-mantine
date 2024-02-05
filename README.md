# helix-jsdom-portfolio-mantine

A simple project to setup and evaluate mantine, jsdom, portfolio, helix and shadow-cljs.

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
npx shadow-cljs watch app

# Start application and tests
npx shadow-cljs watch app tests

# Start application, tests and portfolio
npx shadow-cljs watch app tests portfolio
```

## Used software
- [shadow-cljs](https://github.com/thheller/shadow-cljs)
- [helix](https://github.com/lilactown/helix)
- [jsdom](https://github.com/jsdom/jsdom)
- [portfolio](https://github.com/cjohansen/portfolio)
- [mantine](https://github.com/mantinedev/mantine)

## TODO
- [x] Fix: Weird bug on portfolio + mantine css [Issue](https://github.com/cjohansen/portfolio/issues/21)
- [x] Fix: Mantine not working on JSDOM [tests](https://github.com/rafaeldelboni/helix-jsdom-portfolio-mantine/blob/main/tests/main/mantine_test.cljs) probably related to use non mocked browser functions [Mock Web Apis](https://mantine.dev/guides/jest/#mock-web-apis)
