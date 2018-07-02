// console.log(Array.from('Hello'));
// console.log([1,2,3,4,5].findIndex(val => val ===3));
// const getVal = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve(100);
//         reject(0);
//     }, 1000);
// });

// getVal()
//     .then(value => console.log('Value', value))
//     .catch(error => console.log('Error', error));



// const getId = (success) =>{
//     return new Promise((resolve,reject) => {
//         //fetch some data
//         const list = fetch('some api');

//         const ids= list.map(l => l.id);

//         success(ids);
//     });
// }

// getId(function(ids){
//     console.log(ids);
// })

// const getId = () =>{
//     return new Promise((resolve,reject) => {
//         //fetch some data
//         const list = fetch('some api');

//         const ids= list.map(l => l.id);

//         const length =ids.length;

//         if(length < 10){
//             reject(ids)
//         }else{
//             resolve(ids)
//         }
//     });
// }

// getId().then().catch();

var arr=['a','b','c'];
var val=20;

toNested(arr,val);

function toNested(arr,va){
    var obj={};
    for(var i =0; i< arr.length-1 ;i++){
        var ob={
            arr[i]
        };
        obj.i=ob;
    }
    return obj;
}