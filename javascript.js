var a = 5;
var b = 10;
var c = 'i am a';
 console.log(a,b,c);

 a = a +1;
 b = b + 5;
 c = c + 'string';
 
 console.log( a,b,c);


 var sum = 10 + 10;
 console.log(sum);


 var diffrence = 45-10;
 console.log(diffrence);

 var product = 10*2;
 console.log(product);

var remainder ;
remainder = 9 % 3;
console.log(remainder);

var myStr = 'i come first.' + 'i come second.';
console.log(myStr);

var ourStr = 'This is the first sentence. ';
  ourStr += 'This  is the second sentence. ';
  console.log( ourStr);

var myName = 'Beau';
var myStr = 'My name is'+ '' +  myName +''+ 'and i am well !';
 console.log(myStr);


 var someAdjective = 'worthwhile';
 var myStr = 'Learning to code is ';
   myStr += someAdjective;
   console.log(myStr);

 var ourArray = [ 'Quincy', 23];
 console.log(ourArray);

 var ourArrays = [['the universe', 42], ['everything', 10101010]];
 console.log(ourArrays);

var ourArray = [50,60,70];
var myData = ourArray[0];
console.log(myData);


  var myArray = [' Tilas', 23 , 'Kenya'];
  myArray.push = (['Nairobi', 'City']);
  console.log(myArray);

   var myArray = [['John', 23], ['cat', 2]];
   var removedFromMyArray = myArray.pop();
   console.log(myArray);

           //shift() Function

 var ourArray = [['Tilas', 23], ['Lion', 1]] 
 var removedFromOurArray = ourArray.shift();
 console.log(ourArray);


              //shopping list

  var myList = [['Cereals',3],['Milk',2],['Eggs',12],['Juice',4]];
  console.log(myList);

             //unshift function

var ourArray = [['Chairman',7],['Landcruiser', 8]];
 var removedFromOurArray = ourArray.unshift();
 console.log(ourArray);

      // writing re-usable code with functions

function ourReusableFunction() {

    console.log('Hello World');
}

ourReusableFunction ();  

  function myFunction() {
     console.log('WASAFI VILLAGE');
  }
     myFunction();

     
          //.................. parameters and placeholder variables.....................


    function ourFunction (a,b){
   console.log(a-b);
  }
    ourFunction(100,10);

    function functionWithTilas (x,y){
      console.log(x+y);
    }
      functionWithTilas(100,10);  



      //................. Return a value from a function with the return statement.....................
       
       
function ourFunction (num){

     return num-7;}

  console.log(ourFunction(10));  



      //.................. Use conditional logic with 'IF' statements................ 

  function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
      return "Yes, that was true";
        }

        return"No, that was false"
  }
  
   console.log(trueOrFalse(true));

  
          // The Equality Operators
          
          
  function testEqual(val) {
        if (val == 12) {
      return"Equal";
        }
    return"Not Equal";
 
  }  

  console.log(testEqual(10));

  // Comparison with logical and operator.
     //. here, we use the greator than (>) operator.


  function testGreatorThan (val){
     if (val > 100){
      return "Over 100";
     }

     if (val>10){
      return "Over 10";
     }

     return "10 or Under"; 

     
  }

  console.log(testGreatorThan(10));



    // ............Checking if two things are true at the same time
     

   function testLogicalAnd (val) {

     if (val <= 50 && val >= 25){
      return "Yes";
       
     }
       return "No ";
      
    }
 
 console.log(testLogicalAnd(10));



      //.........comparison with the logical or operator which is (||)


    function testForLogicalAnd (val){ 
      if (val < 10) {
        return "Outside";
      }
        if (val > 20);{
          return "Outside";
        }

        return "inside";
    }

    console.log(testForLogicalAnd(15));   



         // we can shorten the above code by now removing the second if statement replacing it with (||)




  function testLogicalAnd (val){
    if (val < 10 || val > 20){
      return "Outside";
    }
    return " Inside";
   }

   console.log(testLogicalAnd (15));




   //........................ ... Else statements

   function testElse (val){

     if (val > 5){

     result= "Bigger than 5";

   }else{
      result= "5 0r smaller"
   }

     return result;
    }

    console.log(testElse(7));


          //..................... Else If statements......................


function testElseIf (val) {
  if (val > 10){
    return "Greator than 10";
  } else if (val < 5){
    return "smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
    
console.log(testElseIf(10));  

               
                // ...... Chaining Else statements..............


     function chainingElseIfStatements (num){

    if (num < 5){
    return "Tiny";
        }else if ( num < 10){
    return "Small";
     }else if ( num < 15){
    return "medium";
       }else if ( num < 20){
    return "Large";
    }else {
    return "Huge";
 }
 }

 console.log(chainingElseIfStatements(90));
     
    
                      //........... Golf code...................


 var names = ["Hole-in-one" , "Eagle", "Birdie", "Par", "Bogey" , "Double-Bogey" ,"Go-Home"]
 function golfScore (par, strokes){

  if (strokes == 1){
    return names [0];

  }else if (strokes <= par - 2){
    return names [1];
}
else if (strokes == par - 1){
  return names [2];

}else if (strokes == par) {
  return names [3];

}else if (strokes == par + 1) {
  return names [4];
  
}else if (strokes == par + 2) {
  return names [5];
  
}else if (strokes >= par + 3) {
  return names [6];
  
}
    
 }

 console.log(golfScore(5 ,4));


                      // ...... Switch Statement .................

      
      function caseInSwitch(val){

        var answer = "";
        switch(val){
          case 1:
            answer = "alpha";
            break;

          case 2:
          answer = "beta";
          break;

          case 3:
            answer = "Gamma";
            break;

          case 4:
              answer = "Delta";
              break;
        }
        return answer;
      }

  console.log(caseInSwitch(4));


             // .....Default option in a switch statement.............



        function  switchofStuff(val){
        var answer = ""

        switch(val){

          case "a":
               answer = "Apple";
               break;


               case "b":
               answer = " Bird";
               break;


               case "c":
               answer = "Cat";
               break;

               default: 
                 answer = "Stuff"

           }
           return answer;
           }

console.log(switchofStuff(c));


   
        //.............. Multiple identical option in switch statements...............



function sequentialSizes(val){

  var answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
       answer = "Low";
       break;

       case 4:
        case 5:
        case 6:
           answer = "High";
           break;

           case 7:
            case 8:
            case 9:
               answer = "Medium";
               break;
  }
  return answer;
}


console.log(sequentialSizes(1));


           //........... Replacing " if else chain statememnts with switch "...........

 // sometimes it is easier to write and understand a switch statement 


//...... The Else if statememnt .......

   function chainToSwitch(val){

       var answer = "";
      
  if (val === "Bob"){
    answer = "Marley";
  }else if (val === 58){
    answer = "Brooklyn";
  }else if (val === 1){
    answer = "There is no #1";
 }else if (val === 7){
  answer = "Ronaldo The GOAT";
   }else if(val === 99){
    answer = "Missed you Big";
  }else {
    return "Null";
  } 

      return answer;
  }

  console.log(chainToSwitch());


       
      //..... Replacing else if statements with switch statement in the above code 

    // Now , the code below is now the replica but with switch statement instead of else if 


         function chainToSwitch (val){

          var answer = "";

          switch (val){
            case "Bob":
               answer = "Marley";
               break;
            case 58 :
              answer = "Brooklyn";
              break;
            case 1 :
             answer = "There is no #1";
             break;
            case 7:
              answer = "Ronaldo The GOAT";
              break;
            case 99 :
              answer = "Missed You Big";
              break;

            default : 
             answer = "Null"

          }
          return answer;
            }
      
            console.log(chainToSwitch(7));


            //.................Building JavaScript objects...........


            var ourDog = {
              "name" : "King",
              "Legs" : 6,
              "Tails": 1,
              "Origin": ["Germany"]
            };

            console.log(ourDog);

           //................. simple example 2 of an object............


           var ourCountry = {
             "Name" : "Kenya",
             "Population" : 50000000 ,
            "Election" : 9,
            "Language" : ["English" , "Swahili"]
           };

           console.log(ourCountry);   

             
           // .......Adding a new property to an object..... using dot notation 
 


           var myDog = {

            "name" : "King ",
            "tail": 1,
            "Origin": ["Germany"]
           };

           myDog.bark = "Bow-wow";

            // .......Adding a new property to an object..... using bracket notation 


            var myDog = {

              "name" : "King ",
              "tail": 1,
              "Origin": ["Germany"]
             };
  
             myDog['bark'] = "Bow-wow";



              // ............Delete a propety from an object........



              var myDog = {

                "name" : "King ",
                "tail": 1,
                "Origin": ["Germany"]
               };
               delete myDog.bark;


                //...Using objects for lookups instead of switch statements.....

                // consider the switch statement bellow 


                function chainToSwitch (val){

                  var answer = "";
        
                  switch (val){
                    case "Bob":
                       answer = "Marley";
                       break;
                    case 58 :
                      answer = "Brooklyn";
                      break;
                    case 1 :
                     answer = "There is no #1";
                     break;
                    case 7:
                      answer = "Ronaldo The GOAT";
                      break;
                    case 99 :
                      answer = "Missed You Big";
                      break;
        
                    default : 
                     answer = "Null"
        
                  }
                  return answer;
                    }
              
                    console.log(chainToSwitch(7));



                    //....... Objects for lookups instead of swith 


                    function chainToSwitch (val){

                      var result = "";
            
                     var lookup = {
                      "Bob" : "Marley",
                      "58" : "Brooklyn",
                      "1"  : "There is no #1",
                      "7"  : "Ronaldo The GOAT",
                      "99" : "Missed you Big",

                     };
                  
            
                      
                      result = lookup[val];
                      return result;
                    }
                        
                  
                        console.log(chainToSwitch(7));

            
                         
  



                        //.... Manipulating Complex Objects.....

                    var myMusic = [
                        {
                          "Artist" : "Diamond Platnumz",
                          "Title" : "Yaya",
                          "Released" : 2023,
                          "Formats" : [
                            "CD",
                            "Spotify",
                            "Acostist"
                          ],

                          
                        },

                        {
                          "Artist" : "Wizkidayo",
                          "Title" : "Made in Lagos",
                          "Released" : 2021,
                          "Formats" : [
                            "CD",
                            "Spotify",
                            "Youtube"
                          ]
                        }
                      ]

                      console.log(myMusic);
   
                       
                             //.........Accessing Nested Objects............
                            




                        var myStorage = {

                          "car" : {
                            "inside" : {
                              "glove box " : "Maps" ,
                              "passenger seat" : "Crumbs"
                             },
                             "outside" : {
                              "trunk" : "jack"
                             }  
                          } 
                        }

        var gloveBoxContents = myStorage.car.inside["glove box"];
        
        console.log(gloveBoxContents);




           //  ........ Accessing Nested Arras.....

           var myPlants = [
            {
              "type": "Flowers",
              "list": [
                "rose",
                "tulip",
                "dandelion"
              ]
            },

            {
              "type" : "trees",
              "list": [
                "fir",
                "pine",
                "birch"
              ]

            }
           ];

           var secondTree = myPlants[1].list[1];
           console.log(myPlants);


                //......Iterate with (while loop)..........


                  var myArray = [];
                  var i = 0;

                  while (i < 5) {
                    myArray.push(i);
                    i++;
                  }

                  console.log(myArray);


                 //............ For Loop..........

                 var ourArray = []
                  for (var i = 0; i < 5; i++){
                    ourArray.push(i);
                  }

                  console.log(ourArray);
    


                  //..... A Do while Loop.......

                  var myArray = [];
                  var i = 10;

                  do {
                    myArray.push(i);
                    i ++ ;
                  } while (i < 5)
                  console.log(i,myArray);



                     //.....profile lookup.......

                     // <> we have the array of objects bellow.....

                     var contacts = [
                      {

                        "FirstName" : "Akira ",
                        "LastName" : "Larie",
                        "Number" : "0700639201",
                        "Likes" : ["Nyama Choma", "coding", "Coffe-Dates", "Adventures"]
                      },


                      {

                        "FirstName" : "mansoor ",
                        "LastName" : " sheikh",
                        "Number" : "0700690009",
                        "Likes" : ["investing", "football", "oil business", "stocks"]
                      },

                      {

                        "FirstName" : "Tilas ",
                        "LastName" : "Tobias",
                        "Number" : "0700639299",
                        "Likes" : ["Nyama ", "Watching", "Dates", ]
                      },

                      {

                        "FirstName" : "wasafi ",
                        "LastName" : "limited",
                        "Number" : "0700639200",
                        "Likes" : ["Broadcasting", "News", "Entertainment", ]
                      }


                     ];


                     function lookUProfile(name, prop){
                      for(var i = 0; i < contacts.length; i++){
                        if (contacts[i].firstName === name){
                          return contacts[i][prop] || "No such property";
                        }
                      }
                      return "No such contact";
                     }
                     

                     var data = lookUProfile("Akira" ,"Likes");
                     console.log(data);





                    //..... Generate a random Fraction or decimal number ..........



                    function randomFraction(){

                      return Math.random();

                    }

                    console.log((randomFraction));


                    // .... Generate random Whole Numbers .....





                    var randomNumberBetween0and19 = Math.floor(Math.random() * 20 );
                     
                    function randomWholeNum(){

                      return Math.floor(Math.random() * 10);

                    }

                    console.log(randomWholeNum());







                      //........Generate a random whole numbers within a range.....


                      function randomRange  (myMin,myMax){
                        return Math.floor(Math.random() * ( myMax - myMin + 1)) + myMin + 1;
                         
                      }
                       var myRandom = randomRange (1,9);

                       console.log (myRandom);
                        
                        
                        //..... Use the parseInt function ........



                          function convertToInteger (str){

                        return parseInt(str);

                        }

                        console.log(convertToInteger('56'));



                            //..... Use the parseInt function with a Radix.......


                            function convertToIntegerrr (str){

                            return parseInt (str,2);
                           }

                            console.log(convertToIntegerrr("10011"));


                               //......CONST Keyword........



                               function printManyTimes(str) {
                                "use strict";
                                 sentence = str +   "is amazing!"

                                 for (var i = 0; i < str.length; i+=2){
                                  console.log(sentence);
                                 }
                                  }
                                  printManyTimes("FreeCodeCamp");




                        //........ The above scope of code using CONST Keyword........


                        function printManyTimes(str) {
                          "use strict";
                          const SENTENCE = str +   "is amazing!"

                           for (let i = 0; i < str.length; i+=2){
                            console.log(SENTENCE);
                           }
                            }
                            printManyTimes("FreeCodeCamp");


                      //...... Bellow code is not gonna work because we have re assigned ......



                          /*
                          
                          const s = [5, 7,2];
                          function editInPlace(){
                            "use strict";
                             s = [2, 5, 7];

                          }

                          editInPlace();
                          */

                          //......Below code is goona work >>>> Mutate an Array declared with const

                          const s = [5, 7, 2];
                          function editInPlace(){
                            "use strict";

                             s [0] = 2;
                             s [1] = 5;
                             s [2] = 7;

                          }

                          editInPlace();

                          console.log(s);


                          







                          


                          












                                  



















          









                   


















      


  



      




      



























