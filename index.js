// Task 1: Flexible String Manipulation with Functions

function formatFullName(firstName, lastName) {
    return lastName + ", " + firstName
}

formatFullName("Reid", "Shakira")

function formatFullNameCapitalize(firstName, lastName) {
    const capitalFirstName = firstName[0].toUpperCase() + firstName.substring(1);
    const capitalLastName = lastName[0].toUpperCase() + lastName.substring(1);
    return  capitalLastName + ", " + capitalFirstName 
}

formatFullNameCapitalize("shakira", "reid")

function formatFullNameMissing(firstName, lastName) {
    if(!firstName || !lastName) {
        return 'Invalid name input';
    } 
    const capitalFirstName = firstName[0].toUpperCase() + firstName.substring(1);
    const capitalLastName = lastName[0].toUpperCase() + lastName.substring(1);
    return  capitalLastName + ", " + capitalFirstName 
}

formatFullNameMissing("shakira", "reid")

// Task 2: Mathematical Operations with Multiple Parameters



// Task 3: Functions with Conditional Logic

// Task 4: Refactoring for Reusability