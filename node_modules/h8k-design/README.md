The H8k design library aims to standardize the user interface of the 
Frontend Problem Statements created in the Hackerrank platform.

This library makes use of CSS Variables and SCSS to make the stylesheets modular and customisable. You can modify the 

## Get Started

1. Install the library

    #### NPM
    ```bash
    npm i h8k-design --save 
    ```
   
    #### CDN
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/h8k-design@latest/dist/index.css"    
    ```

2. Reference the assets in your Frontend project:

    **React**
    ---
    Include the compiled `index.css` from the dist folder in your index.css and you are good to go.
    
    ```css
    @import 'node_modules/h8k-design/dist/index.css';
    ```
   
   **Angular**
   ---
   Include the compiled `index.css` from the dist folder in your style.css.
      ```css
      @import 'node_modules/h8k-design/dist/index.css';
      ```
---
   
   ```text
   Note: If you are using scss or sass, it is also possible to include the index.scss file from 
   the lib folder.
   
   @import "node_modules/h8k-design/lib/index.scss" 
   ```
   
## Demo

Check out the [Live Demo](https://h8k-design.now.sh/demo.html) 




