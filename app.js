// import functions and grab DOM elements
import { renderOils } from './utils.js';
import { oils } from './oils.js';

// let state

const oilListElem = document.getElementById('oil-list');

for (let oil of oils) {
    const oilDiv = renderOils(oil);
    oilListElem.append(oilDiv);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
