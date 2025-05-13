# Export-ential Crisis: JavaScript Modules Demo

This project demonstrates how JavaScript ES6 modules work, using a simple car service scenario. It is structured to help you understand **default exports**, **named exports**, and **imports**—concepts that are also fundamental to Lightning Web Components (LWC) development.

---

## File Overview

### `index.html`
- Loads the JavaScript module (`index.js`) using `<script type="module">`.
- Renders a button (`#myButton`) that, when clicked, triggers the logic in `index.js`.

### `index.js`
- **Imports**:
  - The default export (`deliver`) from `vehicle.js` as `deliverWithDiffName`.
  - Named exports (`pickup`, `service`, `repair`, `DELIVERY_DURATION`) from `vehicle.js`.
  - The default export from `car.js` as `cars`.
- **Button Click Handler**:
  - When the button is clicked, it:
    1. Creates a new car instance.
    2. Logs the car's color and type using methods from the `cars` class.
    3. If `DELIVERY_DURATION` is `60`, it calls the imported functions (`deliverWithDiffName`, `pickup`, `service`, `repair`) with `'BMW'` and logs their results.

### `vehicle.js`
- **Exports**:
  - `deliver` as the **default export**.
  - `pickup`, `service`, `repair` as **named exports**.
  - `DELIVERY_DURATION` as a **named export** constant.
- These functions simulate different vehicle service actions.

### `car.js`
- Exports a `hatchback` class as the **default export**.
- The class has properties (`colour`, `type`) and methods to get these properties in a formatted string.

---

## Parallels with LWC

Lightning Web Components (LWC) are built on top of ES6 modules. The way you import and export code in this project is directly related to how you work with LWC components.

### Example: LWC Component

```javascript
import { LightningElement } from 'lwc';

export default class HelloToTheWorldOfTargets extends LightningElement {
    // Component logic here
}
```

**How this relates:**

- `import { LightningElement } from 'lwc';`  
  This is a **named import** from the LWC engine, just like `import {pickup, service} from "./vehicle.js";` in your project.

- `export default class HelloToTheWorldOfTargets extends LightningElement {}`  
  This is a **default export** of the component class, just like `export default class hatchback {}` in your `car.js`.

- LWC files are ES6 modules. Each `.js` file in an LWC component is a module, and you use `import`/`export` just like in this demo.

- **Reusability:**  
  Just as you import utility functions or classes in your demo, LWC allows you to import utility libraries, base classes, or other modules to keep your code modular and maintainable.

---

## How to Run

1. **Install a simple server** (if you haven't already):
   ```
   npm install -g serve
   ```
2. **Start the server** in the project folder:
   ```
   npx serve
   ```
3. **Open** `http://localhost:3000/Export-ential Crisis/index.html` in your browser.
4. **Click the button** to see the module imports and logic in action (check the browser console for output).

---

## Summary

This project is a practical illustration of ES6 module syntax and usage, which is foundational for building modular, maintainable code in both standard JavaScript and Salesforce Lightning Web Components (LWC).