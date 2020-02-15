import {MainPage} from './MainPage.js';

fetch ("Documents/Web App/final-project/docs/Assets/data.json")
.then(resp => resp.json())
  .then(data => {
    console.log(data);
    MainPage(data);})