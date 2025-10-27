// Task 1: Flexible String Manipulation with Functions

function formatFullName(firstName, lastName) {
    return lastName + ", " + firstName
}

formatFullName("Shakira", "Reid")

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
formatFullNameMissing("", "reid")
formatFullNameMissing("shakira", "")
formatFullNameMissing("", "")


// Task 2: Mathematical Operations with Multiple Parameters
function calculateTotalCost(price, quantity, taxRate) {

}

function calculateTotalCost(price, quantity, taxRate) {
    return totalCost = (price * quantity) * (1 + taxRate)
}
calculateTotalCost(10, 30, 50)


// Task 3: Functions with Conditional Logic

// Task 4: Refactoring for Reusability