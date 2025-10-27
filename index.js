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
    return (price * quantity) * (1 + taxRate / 100)
}
calculateTotalCost(10, 30, 50)

function calculateTotalCost(price, quantity, taxRate) {
    if(!price || !quantity || !taxRate) {
        return ("Invalid input.")
    }
    return (price * quantity) * (1 + taxRate / 1--)
}
calculateTotalCost(30, 50)


// Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed = true) {
    if(age > 18 && isEmployed) {
        return "Eligible"
    }
    else if(age > 18 && !isEmployed) {
        return "Conditionally Eligible"
    }
    else  {
        return "Not Eligible"
    }
}
checkEligibility(25, true)
checkEligibility(25, false)
checkEligibility(16, false)

// Task 4: Refactoring for Reusability

function calculateTotalCost(price, quantity, taxRate, discount) {
    if(price == null || quantity == null || taxRate == null) {
        return ("Invalid input.")
    }
    else if(discount !== undefined) {
        return (price * quantity) * (1 + taxRate / 100) - discount
    }
    return (price * quantity) * (1 + taxRate / 100)
}
calculateTotalCost(30, 50, 10, 20)