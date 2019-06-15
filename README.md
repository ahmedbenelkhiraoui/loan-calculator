# Loan Calculator

Web application to calculate minimum monthly payments to meet specified interest rate and number of repayment years.

## Technologies

* JavaScript ES6: plain JS (as opposed to jQuery, etc.) is used to dynamically query, create, modify, and remove HTML elements/nodes
* Pure CSS

## Features

1. A loading GIF is displayed after a user submits the form. This enhances the user experience (ever so slightly) as it informs the user that some kind of processing is occurring.

2. Form validation checks user input by using JavaScript's isFinite() method. If, during calculation, an issue arises with any intermediate value, using isFinite() verifies this scenario and displays an error message at the top.
