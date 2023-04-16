// Task 1

 var arr = [32,25,85,89,45,76,7,41,2,12]
 
// a) arr arrayin butun elementlerini cap edin
arr.forEach ((item) => {
console.log(item)
});


// b) arr arrayin en boyuk elementini cap edin
function uzunluq( arr, n){
    arr.sort()
    return arr[n-1];
}
let n= arr.length;
console.log(uzunluq(arr, arr.length));


// c) arr arrayin sonuna 15 ededini elave edin
arr.push(15);
console.log(arr);


// d) arr arrayin ilk elementini silin
var ilk = arr.slice(1);
console.log(ilk);


//  e) arr arrayi sort edin ve sonuncu elementini cap edin
let uzunluq = arr.length;
arr.sort;
console.log(arr[uzunluq-1])

// f) arr arrayin 3-cu elementinden sonra 43 ededini elave edin
 arr.splice(3, 0, 43);
 console.log(arr)

// g) arr arrayin 3-cu elementinden sonraki elementleri cap edin
arr.splice(0, 3);
console.log(arr)

// h) forEachdan istifade ederek arr arrayin butun elementlerini cap edin
arr.forEach(number =>{
    console.log(number)
})

// i) arr arrayin 40 dan boyuk elementlerini cap edin (hem for-dan istifade ederek, hemde iteration funksiyasindan istifdade ederek)

// for ile
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 40) {
      console.log(arr[i]);
    }
  }

// iteration funksiyasi ile
let newArr = arr.filter(function(element) {
    return element >= 40;
  });
  console.log(newArr);
  





// Task 2

getStudentName([
    {name : "Steve"},
    {name : "Mike"},
    {name : "John"},
])   

function getStudentName(sarry){
    let Names = [ ]
    sarry.forEach(student => {
        Names.push(student.Names)
        return Names
    });
    console.log(sarry)
}





// Task 3

function checkfaktors( arr, num){
    let product=1;
    arr.forEach(element => {
        product=product*element
    });
    return product==num
}
console.log(checkfaktors([1,2,3],6))
console.log(checkfaktors([1,5,3],10))




// Task 4

function massiv( low, high){
        let arr=[]
        for( let i=low; i<= high;i++ ) {

           arr.push(i)
        };
        return arr
    }
    console.log(massiv(1,5))