````markdown
# Babel & Terser Commands

This guide provides commands to transpile JavaScript code using **Babel** and minify it using **Terser**.

## **1. Install Dependencies**

Ensure you have Node.js installed, then install Babel and Terser:

```sh
npm install --save-dev @babel/cli @babel/preset-env terser
```
````

## **2. Babel: Transpile ES6+ to ES5**

Use Babel to convert ES6+ code to ES5.

### **a. Create `.babelrc` Configuration File**

```json
{
    "presets": ["@babel/preset-env"]
}
```

### **b. Run Babel to Transpile Code**

```sh
npx babel src.js --out-file es5.js
```

-   `src.js` → Input file (written in ES6+)
-   `es5.js` → Output file (transpiled to ES5)

## **3. Terser: Minify the Transpiled Code**

Use Terser to minify the Babel-transpiled file.

```sh
npx terser es5.js -o es5.min.js --compress --mangle
```

-   `es5.js` → Input file (transpiled by Babel)
-   `es5.min.js` → Output file (minified JavaScript)
-   `--compress` → Enables code compression
-   `--mangle` → Renames variable names for size reduction

## **4. One-Liner: Babel + Terser**

Transpile and minify in a single command:

```sh
npx babel src.js --out-file es5.js && npx terser es5.js -o es5.min.js --compress --mangle
```

## **5. Verify Output**

Check the minified file size:

```sh
ls -lh es5.min.js
```

## **Summary**

| Tool   | Command Example                                       |
| ------ | ----------------------------------------------------- |
| Babel  | `npx babel src.js --out-file es5.js`                  |
| Terser | `npx terser es5.js -o es5.min.js --compress --mangle` |

This ensures your JavaScript code is **backward compatible** and **optimized for performance**! 🚀

```

```
