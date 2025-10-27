// Task 1: Flexible String Manipulation with Functions

function formatFullName(lastName, firstName) {
    return lastName + ", " + firstName
}

formatFullName("Reid", "Shakira")

function formatFullNameCapitalize(firstName, lastName) {
    const capitalFirstName = firstName[0].toUpperCase() + firstName.substring(1);
    const capitalLastName = lastName[0].toUpperCase() + lastName.substring(1);
    return capitalFirstName + " " + capitalLastName
}

formatFullNameCapitalize("shakira", "reid")


// Task 2: Mathematical Operations with Multiple Parameters



// Task 3: Functions with Conditional Logic

// Task 4: Refactoring for Reusability