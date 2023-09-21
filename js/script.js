// STEP 1 Convert to Camel Case
// let someMonth                // Removed underscore and converted to Camel Case
// function theMonth() {}       // Removed space and converted to Camel Case (also added curly braces to make it a true function)
// let currentMonth             // Removed hyphen and converted to Camel Case
// let summerMonth              // Removed underscore and converted to Camel Case
// let myLibraryFunction() {}   // Removed hypen and converted to CamelCase (also added parentheses & curly braces to make it a true function)

// STEP 2 Literal Expressions
// 3.14            // numeric literal
// 'Go Padres!'    // string literal
// true            // boolean literal
// null            // null literal

// STEP 3 Complex / Variable Expressions
// let averageGrade = totalGrades / numberOfTests
// let monthlySalary = annualSalary / 12

// STEP 4 Variable Declarations (first using Camel Case, then using Hungarian Notation)
// let firstName
// let lastName
// let address
// let city
// let state
// let zipCode
// let yourAge
// let referralSource
// let mayWeContactYou
// let strFirstName
// let strLastName
// let strAddress
// let strCity
// let strState
// let strZipCode
// let intYourAge
// let strReferralSource
// let blnMayWeContactYou

// STEP 5 3 Variables Declared & Assigned Using 3 Different Ways Each
// let intYourAge
// let strReferralSource
// let blnMayWeContactYou
// intYourAge = 21
// strReferralSource = 'Mary Smith'
// blnMayWeContactYou = true

// let intYourAge = 21
// let strReferralSource = 'Mary Smith'
// let blnMayWeContactYou = true

// let intYourAge = 21, strReferralSource = 'Mary Smith', blnMayWeContactYou = true

// STEP 6 Number & String Coercion
// let myFavoriteNum = 3
// document.write('My favorite number is ' + myFavoriteNum)


// STEP 7 Boolean & String Coercion and Number & Boolean Coercion
// let male = true
// document.write(male + ' - I am a male<br/>')

// let weight = 280
// document.write(weight + ' lbs is a healthy weight for a 5 foot 3 inch person: ' + false + '<br/>')

// STEP 8 I fixed the following string by adding an escape backslash character in front of the "I'm" apostrophe within the string
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

// STEP 9 Null Value & Undefined Value
// let startingPosition = null
// console.log(startingPosition)

// let year
// console.log(year)

// STEP 10 typeof Operator
// let firstName = 'Michael'
// let hireYear = 2019
// let male = true
// let classRoster = {classNum:'12345', studentNum:'98753'}
// let termYear
// console.log(typeof firstName)
// console.log(typeof hireYear)
// console.log(typeof male)
// console.log(typeof classRoster)
// console.log(typeof termYear)

// STEP 11 Concatenation Operator (+)
// alert('Hello ' + 'Michael Gall' + ', welcome to the JavaScript class!')

// STEP 12 Concatenation Operator (+) using a variable for the student's name
// let name = 'Michael Gall'
// alert('Hello ' + name + ', welcome to the JavaScript class!')    //NOTE:  The variable 'name' is deprecated

// STEP 13 Concatenation Operator (+) using a variable for the student's name & course
// let name = 'Michael Gall'
// let course = 'JavaScript'
// alert('Hello ' + name + ', welcome to the ' + course + ' class!')    //NOTE:  The variable 'name' is deprecated

// STEP 14 Modify alert output to display on 2 lines
// let name = 'Michael Gall'
// let course = 'JavaScript'
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')    //NOTE:  The variable 'name' is deprecated

// STEP 15 Replace 'name' hardcoded value with user-provided value
// let name = prompt('Please enter your name: ')
// let course = 'JavaScript'
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')    //NOTE:  The variable 'name' is deprecated

// STEP 16 Replace 'course' hardcoded value with user-provided value
// let name = prompt('Please enter your name: ')
// let course = prompt('Please enter which class you are taking:')
// alert('Hello ' + name + '.\nWelcome to the ' + course + ' class!')    //NOTE:  The variable 'name' is deprecated

// STEP 17 Declare & assign 2 numeric variables and display the total in the console window
// let x = 10
// let y = 20
// let total = x + y
// console.log(x + ' + ' + y + ' = ' + total)

// STEP 18 Add & Assign example
// let x = 20
// x += 20
// console.log('x = ' + x)

// STEP 19 Multiply & Assign example
// let x = 20
// x *= 5
// console.log('x = ' + x)

// STEP 20 Divide & Assign example using the Modulus remainder from 20 % 3
// let x = 20 % 3
// x /= 1
// console.log('x = ' + x)

// STEP 21 Comparison & Logical Operators where evaluation is true
// let numMaleStudents = 30
// let numFemaleStudents = 20
// console.log('This class contains a minimum of 20 male & 20 female students:')
// console.log(numMaleStudents >= 20 && numFemaleStudents >= 20)

// STEP 22 Comparison & Logical Operators where evaluation is false
// let numMaleStudents = 30
// let numFemaleStudents = 20
// console.log('This class contains 25 male & 25 female students:')
// console.log(numMaleStudents == 25 ||  numFemaleStudents == 25)
