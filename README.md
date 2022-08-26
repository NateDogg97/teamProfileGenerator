# teamProfileGenerator
Object Oriented Programming: Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

## My Process

For this assignment I needed to think about sending objects and data between files. I setup up inquirer inside index.js and kept the function to write the html file inside a separate file to try and keep things organized.

I needed to filter() and map() through the data so I could run the createHtml() function properly. These methods require an array. Naturally, I needed to store each employee object inside of an array called epmloyeeArray. All that was left was to run the createHtml() function imported from page-template.js on the array of employee classes to generate the html.

## Description

To generate a team profile page, simply run 'npm install' to install inquirer and jest, then open integrated terminal from index.js and type 'node index' to begin generating the team. 

![Screenshot](./profilePage.png?raw=true)

View the denstration video here:

(https://drive.google.com/file/d/1pLXcGsNUcxPA5LF3pn08ymIkvgFQu0C2/view)