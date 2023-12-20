/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve,reject)=>{setTimeout(()=>{resolve();},t*1000);});
}

function wait2(t) {
    return new Promise((resolve,reject)=>{setTimeout(()=>{resolve();},t*1000);});
}

function wait3(t) {
    return new Promise((resolve,reject)=>{setTimeout(()=>{resolve();},t*1000);});
}

function calculateTime(t1, t2, t3) {

    try{
    let startTime = performance.now();

    return new Promise((resolve,reject)=>{
    wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
        // Calculate elapsed time and return a new promise
        let elapsed_time = performance.now() - startTime;
        resolve(elapsed_time);
    }); })
    } catch(error){
        reject(error);
    }



}

/*
calculateTime(3,4,7)
.then((result) => {
    console.log('Time elapsed:', result, 'milliseconds');
})
.catch((error) => {
    console.error('Error:', error);
});
*/
module.exports = calculateTime;
