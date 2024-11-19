# JSTools

**Motto**: *A way to simplify your JavaScript programs*

JSTools is a lightweight and flexible JavaScript utility library aimed at simplifying your JavaScript programs by providing easy-to-use functions that enhance logging, debugging, and performance testing. Whether you're developing small scripts or complex applications, JSTools helps streamline common operations and gives you better control over logging and error-handling mechanisms.

## Features
- **Customizable Logging System**: Modify `console.log`, `console.error`, `console.warn`, and `console.info` to capture output, ensuring you have a full overview of what your application is logging.
- **Status Testing**: With built-in testing functions like `testStatus()`, easily verify whether your custom logging functions work as expected.
- **Print Function Monitoring**: Test print functions to ensure they output correctly in various log levels (log, error, warn, info).
  
## Getting Started

### Installation
You can easily include JSTools in your project by either downloading it directly or adding it to your JavaScript build system.

**Via npm (coming soon)**:
```bash
npm install jstools
```

**Manual inclusion**:
Simply copy the `JSTools.js` file into your project and add the following script tag in your HTML:
```html
<script src="path/to/JSTools.js"></script>
```

### Usage
After including the library, you can start using the available functions to test and manage your logging outputs.

#### Example: Testing Print Functions
The core of JSTools includes a `testStatus()` function that verifies whether your custom `print()` function works correctly across various log levels.

```js
function testStatus(funcName = 'all') {
  console.log('--- JSTools Status ---');

  // Custom logic for testing the print function
  // Capture outputs for log, error, warn, and info
  // The function returns a summary of outputs
}
```

By default, calling `testStatus()` will run through all print functions (`log`, `error`, `warn`, `info`) and ensure that they function as expected. You can specify a particular function like `'print'` to focus on that aspect.

### Output Example
When `testStatus()` runs, you'll receive detailed feedback in the console to help identify any issues in your log methods:
```
--- JSTools Status ---
Testing print function...
Print function is working correctly.
Test completed.
```

If any modifications are detected, it will output:
```
Print function has been altered.
```

### Customization
Feel free to customize the JSTools functions to suit your application. You can modify the logging behavior or extend the library with additional utility functions to fit your development needs.

## License
JSTools is licensed under the MIT License, making it free and open-source for anyone to use or modify.

## Contribution
We welcome contributions to enhance JSTools! Feel free to submit issues or pull requests on our GitHub repository to help improve the library and extend its functionality.

---

For more information, feel free to check our [documentation](#) or visit the project page.

