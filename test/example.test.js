// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderOils } from '.utils.js';
import { oils } from './oils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderOils(oils);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
