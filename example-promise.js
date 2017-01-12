// // c550b5589a70f6bc9854465070202c37
//
function getTempCallBack (location, callback) {
  callback(undefined, 78);
  callback('City Not Found');
}

getTempCallBack('Singapore', function(err, temp) {
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp)
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(79);
      reject('City Not Found');
    }, 1000);
  });
}

getTempPromise('Singa').then(function(temp){
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
});

//Challenge Area

function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b ==='number'){
      resolve(a + b);
    } else {
      reject('a dn b must be numbers')
    }
  });
}

addPromise(2,5).then(function(sum){
  console.log('success', sum)
}, function(err){
  console.log('error', err);
});

addPromise("andrew", 10).then(function(sum){
  console.log('this shouldnt show up');
}, function(err){
  console.log('this should appear', err);
})
