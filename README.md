# Lab 4.1 - Variables and Functions

## Overview
This lab focuses on practicing fundamental JavaScript concepts such as variables, functions, conditional logic, string manipulation, and code refactoring. By completing these exercises, I strengthened my ability to write clean, reusable, and dynamic code.

---

## Learning Objectives
By the end of this activity, the following was accomplished:

- Manipulate variables to perform mathematical operations and string manipulation.
- Write and call functions that use parameters and return values.
- Use conditional logic inside functions to create more dynamic behavior.
- Refactor code to improve readability and reusability.

---

## Description
This lab contains four main tasks designed to progressively build your skills in writing flexible JavaScript functions:

### Task 1: Flexible String Manipulation with Functions
- Create a function called `formatFullName` that takes two parameters: `firstName` and `lastName`.
- Return the full name in the format: `lastName, firstName`.
- Ensure the first letter of each name is capitalized.
- Add a condition to check for missing input. If either name is missing, return `"Invalid name input."`.

### Task 2: Mathematical Operations with Multiple Parameters
- Write a function called `calculateTotalCost` that takes three parameters: `price`, `quantity`, and `taxRate`.
- Calculate the total cost including tax using the formula:  
  `totalCost = (price * quantity) * (1 + taxRate)`.
- Validate that `price`, `quantity`, and `taxRate` are all valid numbers.  
- If any input is invalid, return `"Invalid input."`.

### Task 3: Functions with Conditional Logic
- Write a function called `checkEligibility` that takes two parameters: `age` and `isEmployed`.
- Determine eligibility based on these rules:
  - If the person is over 18 **and employed**, return `"Eligible"`.
  - If the person is over 18 **but unemployed**, return `"Conditionally Eligible"`.
  - If the person is 18 or younger, return `"Not Eligible"`.

### Task 4: Refactoring for Reusability
- Refactor `calculateTotalCost` from Task 2 to include an optional `discount` parameter.
- If a discount is provided, subtract it from the total cost **after applying tax**.
- If no discount is provided, calculate the total cost as before.

---

## Getting Started

### Dependencies
- A modern browser (Chrome, Firefox, Safari, Edge)
- Node.js installed (optional, only if using npm scripts)
- Live Server extension for VS Code (or similar) to preview projects

### OS Compatibility
- Windows, macOS, or Linux

---

## Installing
1. Clone this repository to your local machine:
```bash
git clone https://github.com/KaeTheDev/Lab4VariablesandFunctions

## REFLECTIONS

1. How did you approach creating more flexible functions with parameters?
- I made sure to define the parameters in the correct order. This approach makes the functions more flexible because I can pass in any values, and the function will still behave dynamically without needing to be rewritten.

2. What challenges did you face while incorporating conditional logic in your functions?
- I learned that the final else statement does not require a condition in parentheses. It simply serves as a default return for cases that do not meet any of the previous conditions.

3. How does refactoring improve the readability and maintainability of your code?

- While refactoring, I realized that I didn’t need the extra totalCost variable. Refactoring helps me see my code from a fresh perspective and identify ways to simplify it, making it easier to read, maintain, and reuse in the future.