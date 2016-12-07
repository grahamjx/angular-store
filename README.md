# Angular Store Page

### Getting Started

1. [Install Node.js] (https://nodejs.org/en/download/)
2. Clone the repository

    `$ git clone https://github.com/grahamjx/angular-store`

3. Navigate to the project folder and run npm install

  ```bash
  $> cd /path/to/your-project-folder
  $> npm install
  ```
4. This will install everything necessary to evaluate the project. If you're curious about what gets installed, check out the package.json file.

5. Run the npm start script from the project directory

    `$ npm start`

6. Open a browser and visit localhost:8000


###Overview

This project is a simple store page built using Angular. No build system (bower,webpack,gulp,ect) was used this time. Fetches an external javascript file and parses the data. An image of the product as well as the price, name and date are displayed to the user. Incorporated a simple sort and filter with the view being updated dynamically based on user input. Styling is done in vanilla css with a basic responsive layout.

###To-Do / Improvements

1. Integrate unit testing via frameworks like Jasmine.
2. Utilize build/package system (webpack) for html minifcation, bundling and other process improvements.
