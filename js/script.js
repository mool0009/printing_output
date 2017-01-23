// EXERCISE 1 :
    // TASK 1 
    /*
    Declare three variables, a and b and c.

    If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines): */

  // alert( "description of alerted_value: " + alerted_value );
    /*
    a + b
    a - b
    a * b
    b / a
    b % a
    a += 1
    a -= 1
    a *= b
    a /= b
    a %= b
    a == b
    a != b
    a > b
    a < b
    !a && !c 
    !a || !c 
    */
    
    var a = 3;
    var b = 5;
    var c;

    alert("var a = 3;\nvar b = 5;\nvar c;\n--------\n\n" +       "a + b = " + (a + b) + "\n" +
          "a - b = " + (a - b) + "\n" +
          "a * b = " + (a * b) + "\n" +
          "b / a = " + (b / a) + "\n" +
          "b % a = " + (b % a) + "\n" +
          "a += 1 = " + (a += 1) + "\n" +
          "a -= 1 = " + (a -= 1) + "\n" +
          "a *= 1 = " + (a *= 1) + "\n" +
          "a /= b = " + (a /= b) + "\n" +
          "a %= b = " + (a %= b) + "\n" +
          "a == b = " + (a == b) + "\n" +
          "a != b = " + (a != b) + "\n" +
          "a > b = " + (a > b) + "\n" +
          "a < b = " + (a < b) + "\n" +
          "!a && !c = " + (!a && !c) + "\n" +
          "!a || !c = " + (!a || !c) + "\n" +);
          
//Task 2

/*Declare the variable first_name and assign it with the value of your first name;
Declare the variable last_name and assign it with the value of your last name;
Declare the variable email and assign it with the value of your email;
Declare the variable output;
Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
Assign output with gotten expression;
Alert output.*/
          var first_name = "Khushboo";
          var last_name = "Moolchandani";
          var email = "mool0009@algonquinlive.com"
          var experiment;


          experiment = "My name is " + 
             first_name +
             " " +
             last_name + 
             ". " +
             " You can contact me at " +
             email +
             ".";

          alert(experiment);
          console.log(experiment);


    
    // TASK 3
          
    /*Add up the first and last element of the array.
Declare variable sum and assign it with value gotten by addition of the two array elements.
Check if sum is an even or an odd number.
If sum is an even number print the output confirming that, for example:*/
          
    var numbers = [
        Math.floor(Math.random() * (200 - 100) + 100), 
        Math.floor(Math.random() * (200 - 100) + 100), 
        Math.floor(Math.random() * (200 - 100) + 100), 
        Math.floor(Math.random() * (200 - 100) + 100), 
        Math.floor(Math.random() * (200 - 100) + 100)
    ];

    var sum = 0;
    var sum = numbers[0] + numbers[4];

    if(sum % 2 == 1){
        alert("This is an odd number.") 
    }else if(sum % 2 ==0){
    alert("This is an even number.")
    
}

console.log(numbers[0]); // first array element
console.log(numbers[4]); // first array element 
console.log(numbers[0] + " + " + numbers[4] + " = " + sum);


    /*
    console.log(numbers[0]); // first array element
    console.log(numbers[4]); // last array element */
    /*
    console.log(numbers[0] + " + " + numbers[4] + " = " + (numbers[0] + numbers[4])); */
    /*
    // check if number is even or odd?
    5 % 2 = 1 // means a number is odd 
    6 % 2 = 0 // means a number is even */
