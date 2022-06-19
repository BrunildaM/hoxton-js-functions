/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a=0, b=0) {
    return a + b
  }
  console.log(add())
  
  // Input: number
  // Action: Check if the number given is even or not
  // Output: The result (boolean)
  function isEven(n= 5) {
    if (n % 2 == 0) return  true;
    else return false;   
  }
  console.log(isEven())
  

  // Input: name (string)
  // Action: Greet the user by name
  // Output: The greeting (string)
  function greet(name= 'Bruna') {
   let message= `Hello and welcome, ${name}!`
   console.log(message)
  }
greet()
  
  // Input: age (number)
  // Action: Check if the age is 18 or over
  // Output: The result (boolean)
  function isAnAdult(age= 19) {
    if (age < 18) return `Sorry, you can't get in!` 
    else return `Congrants, now you think you can enjoy life LOL!`
  }
  console.log(isAnAdult())
  
  // Input: age (number)
  // Action: Check how many years are left until adulthood (18)
  // Output: The result (number)
  function yearsToAdulthood(a= 12) {
    let yearsLeft = 18 - a
    if (age < 18)  return yearsLeft
    else return `You are an adult, got to work now!`
  }
  console.log(yearsToAdulthood())
  
  // Input: person ({ age: number, name: string })
  // Action:
  //   - check if a person is an adult
  //   - if they are, greet them
  //   - if they are not, tell them to come back in X years (when they are)
  // Output: The result (string)
  
  
  function admit(person) {
if (isAnAdult == true) return 'Welcome to the club';
else return Hello  + "come back in" + yearsLeft + "years!"
    // write your code here
    // use greet, isAnAdult and yearsToAdulthood to help you!
  }
  
  console.log(admit())
