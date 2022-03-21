# TOKYO RAMEN FINDER (Oyo Frontend Assignment)

The project **Tokyo Ramen Finder** has been initialized with [Create React App](https://github.com/facebook/create-react-app).


The app is deployed at [Tokyo Ramen Finder](https://ramen-finder.herokuapp.com/)


# Folder Structure Used



CodeBase folder is placed inside **src/**

**src**
   - **assets** -> Contains assets like images, videos used by components
     - **images**
     - **videos**

   - **components** -> Contains reusable components
     - **Card**
       - **Card.component.tsx** (Contains actual component code)
       - **Card.test.tsx** (Contains test case using jest)
       - **Card.style.scss** (Contains the styles)
       - **index.tsx** (Imports component file and exports as default)
     - **CustomButton**
     - **SearchBox**
     - **FontAwesomeIcon**


  - **constants** -> Includes regex and structures that can be reused in the app

  - **config** -> This contains the config files using the env

  - **pages** -> Each folder in the pages folder is a page component and can layout component as top wrapper based on the page structure 

  - **helpers** -> This contains the reusable helper functions

  - **schema** -> This contain the schema files and validations 

  - **service** -> This contain the dynamic http request function using axios
  
  - **store** -> This contains the redux files like actions, reducers & actionTypes.

  - **styles** -> This contains the styled components reusable breakpoints file, global styles & theme constant file

  - **test.utils.tsx** -> It contain method to render the jest component file


**public** 
It contains static files such as index.html, javascript library files, images, css and other assets.

****
**.env file is part of the repository (Typically it is not pushed but since this is a demo project, it has been kept in the folder structure)**

****


### Contributor : Shagun Chaurasia (chaurasia.shagun@gmail.com)
