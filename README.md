# GUIDESMITHS INTERVIEW CODE CHALLENGE 🎯

The challenge consists in creating a simple product catalogue app using:

- React Js
- REST API
- Axios 
- Express
- Responsive Design

## Challenge Instructions :clipboard:

https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue/instructions.md

## Installing :wrench:

1. Install Node.js.
2. Download or clone the repository.
3. Install local dependencies using \$ npm install.
4. Open a parallel terminal and go into my-backend root then run $ node server.js. From this moment, localhost:5000 will be running the backend part of the project.
5. Launch project in the other terminal using \$ npm start. From this moment, localhost:3000 will be running the frontend part of the project.

## Folder Structure :open_file_folder:
```
`- _my-backend
   |  |		|- node_modules
`- package.json
`- package-lock.json
`- server.js

`- _public
   |   `favicon.ico
   |   `index.html
   |   `manifest.json
   |   `logo192.png
   |   `logo512.png
   |   `robots.txt

`- _src
   |- components
   |  |    `App.js
   |  |    `PhoneItem.js
   |  |    `PhoneItemDetail.js
   |  |    `PhoneList.js
   |- images
   |- services
   |  |    `getDataFromApi.js
   |- stylesheets
   |  |		|- core
   |  |    	|	`- _variables.scss
   |  |		|- components
   |  |    	|	`- _App.scss
   |  |    	|	`- _PhoneItem.scss
   |  |    	|	`- _PhoneItemDetail.scss
   |  |    	|	`- _PhoneList.scss
   |-index.css
   |-index.js
   |
`- .gitignore
`- architecture.jpg
`- debug.log
`- package.json
`- package-lock.json
`- README.md 

```

## Component structure diagram 📌

![](architecture.jpg)

## Development ⚙

A RESTful API has been created to host the information about the different products using Express. This information, or better called data, is hosted in "proxy: localhost:5000". The data has been fetched using Axios and therefore linked to the React App Project. The data has been saved into the main component 'App.js' state using 'hooks' and then transferred to its children components using 'props'.

## Built With 🛠

- HTML5
- CSS3
  *Sass
  *CSS Grid
  *Flexbox
- JavaScript
- React Js
- Axios
- Express
- Git and Github
- Responsive Design
   *Mobile First 

## Author :octocat:

- **Cristina Pontijas** - [pontijas](https://github.com/pontijas)

Thanks for reading!
Have a nice day 🌞
