
//Assignment 3(Day 3)
//Q1) For the given JSON iterate over all the for loops(for,forin,for of,forEach)

let obj=[{                            // Creation Of an Object
  "person":"shreeram",
  "age":26,
  "company":"TeraLogic"
},
{
  "person":"Mohan",
  "age":30,
  "company":"Wipro"
},
{
  "person":"Meera",
  "age":28,
  "company":"Reventure"
}
]

// for loop
console.log("for loop OUTPUT")
for(let i=0;i<obj.length;i++)
{
  console.log(`Person:${obj[i].person} 
Age:${obj[i].age} 
Company:${obj[i].company}
`);
}

//for Each loop
console.log("\nforEach loop OUTPUT")
obj.forEach(function(object){
  console.log(`Person Name:${object.person}
Age:${object.age}
Company Name:${object.company}`)
})

//for IN loop
console.log("\nfor In loop OUTPUT")
for(let shree in obj)
{
  console.log(`Person Name:${obj[shree].person}
Age:${obj[shree].age}
Company Name:${obj[shree].company}`)
}

//for Of loop
console.log("\nfor Of loop OUTPUT")
for(let object of obj)
{
  console.log(`Person Name:${object.person}
Age:${object.age}
Company Name:${object.company}`)
}

//Output q1

/*​ for loop OUTPUT
​Person:shreeram 
Age:26 
Company:TeraLogic

​Person:Mohan 
Age:30 
Company:Wipro

​Person:Meera 
Age:28 
Company:Reventure


forEach loop OUTPUT
​Person Name:shreeram
Age:26
Company Name:TeraLogic
​Person Name:Mohan
Age:30
Company Name:Wipro
​Person Name:Meera
Age:28
Company Name:Reventure
​ 
for In loop OUTPUT
​ Person Name:shreeram
Age:26
Company Name:TeraLogic
​ Person Name:Mohan
Age:30
Company Name:Wipro
​ Person Name:Meera
Age:28
Company Name:Reventure
​ 
for Of loop OUTPUT
​ Person Name:shreeram
Age:26
Company Name:TeraLogic
​ Person Name:Mohan
Age:30
Company Name:Wipro
​ Person Name:Meera
Age:28
Company Name:Reventure
*/


 //Q2) Create an your Own Resume Data in JSON Format.

 let Resume=[{
  "Name":"Nishitha m",
  "Phone Number":8997652290,
  "Email":"nishithareddy@gmail.com",
  "Activities And Interest":["Badminton","Cycling","Chess","Painting"],
  "Technical Knowledge":[{"Frontend Knowledge":["Angular","css","HTML"]},  
                         {"backend knowledge":["Java","Python(Knowledge)"]}
                        ],
                        "Education":[{"10th Standrad":"Army Public School"},
                        {"PUC":"Naryana PU colleg,Bangalore"},
                        {"B.Tech":"Presidency University,Bangalore"}]
 }]

 