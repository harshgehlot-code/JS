

let mydate = new Date() // Create a new date object

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());


// let mydate2 = new Date(2024, 0, 1) // January is month 0
let mydate2 = new Date('2024-01-14') // ISO format 
// console.log(mydate2.toLocaleString());

let Timestamp = Date.now() // Get the timestamp in milliseconds
// console.log(mydate2.getTime());
// console.log(Timestamp);

// console.log(mydate2.getFullYear()); // Get the year

// console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    TimeZone: 'UTC'
})