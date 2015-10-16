# veritaseum
Interview Challenge Veritaseum 

LIST OF ERRORS:

- GENERAL: best practice to use '===' instead of '=='.
- Can't compare to null, first you have to check if it is undefined.
- Best practice is to use [] to create a new array.
- Wrong reference to _closed.
- Removed unnecessary id parameter.
- If the id index is not defined in _all_ids, then it will return an undefined, not null.

This is a list of errors to make the code work, but it can be refactor in general to be shorter and more legible.


Also, method "getState" added to be able to test the "close" method.

-----------------------------

To Run Unit Test:

1. Run npm install (NodeJS needed).
2. Run karma start (If karma not installed, first run npm i -g karma-cli).
3. To check Code Coverage open tests/coverage/PhantomJS.../index.html (If folder coverage does not exist, make sure to run step 2 again).