//===================================Assignment # 6 JAVASCRIPT Chapter(6-8)======================//
//=======================================MATH EXPRESSIONS===========================//



//Q1: Write a program to take a variable in a number, do the required arithmetic to display the following in your browser.
//Result:
//The value of a is :10
// .........................
//The value of ++a is: 11
//Now the value of a is: 11
//The value of a++ is:11
//Now value of a is: 12
//The value of --a is: 11
//Now the value of a is: 11
//The value of a-- is: 11
//Now the value of a is: 10
//Ans:
// var a = 10;
// var preIncreament = ++a;
// var postIncreament = a++;
// var postIncreamentValue = a;
// var preDecreament = --a;
// var postDecreament = a--;
// var postDecreamentValue = a;
// document.write ( "<b> Result <b>" + "<br>" + "<br>" + "<br>" );
// document.write ( "The value of a is: " + a + "<br>" );
// document.write ( "....................................." + "<br>" + "<br>" );
// document.write ( "The value of ++a is: " + preIncreament + "<br>" );
// document.write ( "Now the value of a is: " + preIncreament + "<br>" + "<br>" );
// document.write ( "The value of a++ is: " + postIncreament + "<br>" );
// document.write ( "Now the value of a is: " + postIncreamentValue + "<br>" + "<br>" );
// document.write ( "The value of --a is: " + preDecreament + "<br>" );
// document.write ( "Now the value of a is: " + preDecreament + "<br>" + "<br>" );
// document.write ( "The value of a-- is: " + postDecreament + "<br>" );
// document.write ( "Now the value of a-- is: " + postDecreamentValue + "<br>" );




//Q2: What will be the out in variable a,b & result after execution of the following script:
//    var a = 2, b = 1;
//    var result = --a - --b + ++b + b--;
//    Explain the output at each stage:
//    --a;
//    --a - --b;
//    --a - --b + ++b;
//    --a - --b + ++b + b--;
//Ans:
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write ( "a is " + a + "<br>" );
// document.write ( "b is " + b + "<br>" );
// document.write ( "Result is " + result + "<br>" );
// --a - --b + ++b + b--;
//   1 -  0  +  1  + 1;
//   1  +  1  + 1;
//   2  + 1;
//   3;




//Q3:Write a program to that takes input a name from user & greet the user.
//Ans:
// var name = prompt("What is your name.");
// alert ("Welcome " + name);




//Q4:Write a program to take input a number from user & display it's multiplication table on your browser. 
//If the user does not enter a new number, multiplication table of 5 should be displayed by default.
//Ans:
// var table = +prompt ( "Enter a number, for the table.");
// if (table > 0){
//     var num1 = 1;
//     var num2 = 2;
//     var num3 = 3;
//     var num4 = 4;
//     var num5 = 5;
//     var num6 = 6;
//     var num7 = 7;
//     var num8 = 8;
//     var num9 = 9;
//     var num10 = 10;
//     document.write ("<b> Table of <b>" + "<b>"+ table +"<b>" + "<br>" + "<br>" + "<br>");
//     document.write (table + "x" + "1" + "=" + table*num1 + "<br>");
//     document.write (table + "x" + "2" + "=" + table*num2 + "<br>");
//     document.write (table + "x" + "3" + "=" + table*num3 + "<br>");
//     document.write (table + "x" + "4" + "=" + table*num4 + "<br>");
//     document.write (table + "x" + "5" + "=" + table*num5 + "<br>");
//     document.write (table + "x" + "6" + "=" + table*num6 + "<br>");
//     document.write (table + "x" + "7" + "=" + table*num7 + "<br>");
//     document.write (table + "x" + "8" + "=" + table*num8 + "<br>");
//     document.write (table + "x" + "9" + "=" + table*num9 + "<br>");
//     document.write (table + "x" + "10" + "=" + table*num10 + "<br>");
// }
// else {
//     var num1 = 1;
//     var num2 = 2;
//     var num3 = 3;
//     var num4 = 4;
//     var num5 = 5;
//     var num6 = 6;
//     var num7 = 7;
//     var num8 = 8;
//     var num9 = 9;
//     var num10 = 10;
//     document.write ("<b> Table of <b>" + "<b>"+ 5 +"<b>" + "<br>" + "<br>" + "<br>");
//     document.write (5 + "x" + "1" + "=" + 5*num1 + "<br>");
//     document.write (5 + "x" + "2" + "=" + 5*num2 + "<br>");
//     document.write (5 + "x" + "3" + "=" + 5*num3 + "<br>");
//     document.write (5 + "x" + "4" + "=" + 5*num4 + "<br>");
//     document.write (5 + "x" + "5" + "=" + 5*num5 + "<br>");
//     document.write (5 + "x" + "6" + "=" + 5*num6 + "<br>");
//     document.write (5 + "x" + "7" + "=" + 5*num7 + "<br>");
//     document.write (5 + "x" + "8" + "=" + 5*num8 + "<br>");
//     document.write (5 + "x" + "9" + "=" + 5*num9 + "<br>");
//     document.write (5 + "x" + "10" + "=" + 5*num10 + "<br>");
// }




//Q5:Take
//a.Take three subjects name from user and store them in three different variables.
//b.Total marks for each subject is 100, store it in another variable.
//c.Take obtained marks for first subject from user and stored it in different variable.
//d.Take obtained marks for remaining 2 subjects from user and store them in variables.
//e.Now calculate total marks and percentage and show the result in browser.
//Ans:
// var subject1 = prompt("Write the first subject name. ");
// var subject2 = prompt("Write the second subject name. ");
// var subject3 = prompt("Write the third subject name. ");
// var totlMarksOfSubject1 = 100;
// var totlMarksOfSubject2 = 100;
// var totlMarksOfSubject3 = 100;
// var ObtainedMarksOfFirstSubject = +prompt(" Write here the obtained marks of first subject. ");
// var ObtainedMarksOfSecondSubject = +prompt(" Write here the obtained marks of second subject. ");
// var ObtainedMarksOfThirdSubject = +prompt(" Write here the obtained marks of third subject. ");
// document.write( "Subjects Mark" + "<br>"+"<br>"+"<br>" +"<br>");
// document.write( subject1 + "<br>"+"Total Marks: " +totlMarksOfSubject1 +"<br>"+"Obtained Marks: " + ObtainedMarksOfFirstSubject +"<br>"+ "Percentage: "+(ObtainedMarksOfFirstSubject/totlMarksOfSubject1*100) +"%" + "<br>" + "<br>" );
// document.write( subject2 + "<br>"+"Total Marks: " +totlMarksOfSubject2 +"<br>"+"Obtained Marks: " + ObtainedMarksOfSecondSubject +"<br>"+ "Percentage: "+(ObtainedMarksOfSecondSubject/totlMarksOfSubject2*100) +"%" + "<br>" + "<br>" );
// document.write( subject3 + "<br>"+"Total Marks: " +totlMarksOfSubject3 +"<br>"+"Obtained Marks: " + ObtainedMarksOfThirdSubject +"<br>"+ "Percentage: "+(ObtainedMarksOfThirdSubject/totlMarksOfSubject3*100) +"%" + "<br>" + "<br>" +"<br>" + "<br>");
// document.write( "Total maks of all Subjects :"+ (totlMarksOfSubject1+totlMarksOfSubject2+totlMarksOfSubject3) +"<br>");
// document.write( "Obtained marks of all subjects :" + (ObtainedMarksOfFirstSubject+ObtainedMarksOfSecondSubject+ObtainedMarksOfThirdSubject)+ "<br>");
// document.write( "Percentage of all subjects: " + ((ObtainedMarksOfFirstSubject+ObtainedMarksOfSecondSubject+ObtainedMarksOfThirdSubject)/(totlMarksOfSubject1+totlMarksOfSubject2+totlMarksOfSubject3)*100) + "%");





//===============================================Chapter (6-8) completed=====================================//