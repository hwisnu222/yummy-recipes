# Unit and Integration Testing

## Installation

```
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom
```

make `tests` directory. it is contain file testing

every file testing add name `[name-file].test.jsx` or `[name-file].spec.jsx`.

why test file use jsx format? because some case file test appear error parse token

add command test in `package.json` like below

```json
"scripst": {
    "test": "vitest"
}
```

Setup vite config `vite.config.js`

```javascript
plugins: [],
test: {
    environtment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    testmatch: ["./tests/**/*.test.jsx"],
    globals: true
}

```

because vite config have `setupFiles` we should create file `setup.js`. please create on `./tests/setup.js` with following content

```javascript
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```
