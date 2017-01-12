var names = ['Andrew', 'Andrew1', 'Andrew2'];
//
// names.forEach(function(name){
//   console.log('foreach: ', name);
// });
//
// names.forEach((name)=>{
//   console.log('ArrowFunc: ', name);
//
// });
//
// names.forEach((name)=>console.log(name));

// var returnMe = (name) => name + '!'
// console.log(returnMe('Andrewwww'));

//arrow func takes on parent this binding

// var person = {
//   name: 'Andrew',
//   greet: function(){
//     names.forEach((name)=>{
//       console.log(this.name + ' says hi to ' + name)
//     })
//   }
// };
//
// person.greet();

//Challenge Area

function add(a, b){
  return a + b;
}

var addStatement = (a,b)=>{
  return a + b;
};
console.log(addStatement(2,3));

var addExpression = (a, b) => a + b;
console.log(addStatement(4,5));

console.log(add(1,2));
console.log(add(10,1));
