# National Park Pal
Plan a trip around your favorite National Parks with ease!

# Description

National Park Pal is an application that helps users find National Parks in any state.
When the site is visited, the homepage with the park slideshow renders. Park and activity search are not availiable for users not logged in. 

1. User clicks login to sign in with google.
    - Takes the user to another page to log in

2. After the user logs in, they're redirected back to the homepage. User is authorized to use the park search, activity 
     search, and can also view their profile.  

3. Park Search
    - Able to enter a starting and ending destination
    - Map renders a route based on locations provided
    - The map will show all the National Parks along the route
    - When clicking on a National Park icon, an info-window popup renders a photo from the park along with a description
    - From the info-window, the user is able to add to a wishlist (displayed in profile), also you can specify if you've already been to the 
        park and click on the image to be brought to the specific park's website

4. Activity Search
    - The activity shows a list of all availiable activities. 
    - When the user clicks on an activity, the page renders a list of parks who have the activity available.
    - The parks listed are an active link, the link will take you to a site with more information about the activity you chose.

5. Profile Page
    - The user has a profile. The profile has the user's photo, and the park wishlist of all the parks the user added.

# Dependencies:

- Axios
- Eslint
- Node
- Express
- Nodemon
- Passport
- React
- React Router
- React Slideshow Image
- Google Map React
- MySQL
- MySQL2
- Sequelize
- TypeScript

```javascript
"dependencies": {
    "@react-google-maps/api": "^1.9.12",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.2",
    "concurrently": "^5.3.0",
    "cookie-parser": "^1.4.5",
    "cookie-session": "^1.4.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "google-map-react": "^2.0.8",
    "http-proxy-middleware": "^1.0.5",
    "mysql": "^2.18.1",
    "mysql2": "^2.1.0",
    "nodemon": "^2.0.4",
    "passport": "^0.4.1",
    "passport-google-oauth20": "^2.0.0",
    "prop-types": "^15.7.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.1",
    "react-slideshow-image": "^3.0.2",
    "sequelize": "^6.3.4",
    "serve": "^11.3.2",
    "typescript": "^3.9.7"
  },
    "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.2.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.20.6",
    "eslint-plugin-react-hooks": "^4.0.8"
  }
  ```

# Installation

First install MySQL on your machine:
https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/

Development:

```
npm install                         // install dependencies
mysql -U root                       // log in to MySQL shell with your password
CREATE DATABASE (your DB name);     // create database
npm run dev                         // runs the client build and backend server in same terminal
```
* note - this application was built using Create React App and makes use of two separate running servers,
         a front-end/client server and a back-end/express server which communicate with each other via proxy
         middleware 

# Environment Variables

Add .env file inside of the team-code-force folder with the following env_variables:
```
    SERVER_PORT=                    // back-end server port (default=8080)
    DB_USER=                        // MySQL login username
    DB_PASS=                        // MySQL password 
    DB_NAME=                        // database name (default=parksdb)
    DB_HOST=                        // database host (default=localhost)
    REACT_APP_SERVER_PORT=          // back-end server port used on front-end (default=8080)
                                        // this needs to match SERVER_PORT value
```

# Config Files

- Create two .config.js files, one in the team-code-force folder and one inside of src/components
- Obtain clientId and clientSecret for google auth from google dev console:
    https://support.google.com/cloud/answer/6158849?hl=en
- Obtain a Google Maps api key:
    https://developers.google.com/maps/documentation/javascript/get-api-key
- Obtain a National Park Service api key:
    https://www.nps.gov/subjects/digital/nps-data-api.htm
```
TeamCodeForce/team-code-force/.config.js:

module.exports = {
  google: {
    clientID: (your client ID),
    clientSecret: (your client secret),
    MAPS_API_KEY: (your google maps api key),
  },
  session: {
    cookieKey: (your cookie session key) // can be whatever you want
  },
  nps: {
    NPS_API_KEY: (your nps api key)
  },
};

TeamCodeForce/team-code-force/src/components/.config.js

module.exports = {
  google: {
    clientID: (your client ID),
    clientSecret: (your client secret),
    MAPS_API_KEY: (your google maps api key),
  },
  nps: {
    NPS_API_KEY: (your nps api key)
  },
};
```
* note - add .config and .env files to .gitignore file
* note - MySQL database should be running when testing page

# References

[Install MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

# Contact

- schratz.connor@gmail.com
- ioctosteigner@gmail.com
- jazminetsmith@gmail.com
- lzepeda.it@gmail.com
