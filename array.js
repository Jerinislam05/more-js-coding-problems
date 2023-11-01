const country = 'london';
const age = 30;
const isIndependent = true;
const student = {id:121, class: 11, name: 'jerin'};
const friends = [13, 14, 17, 21, 16, 15, 20];
function add(num) {
    return num;
    console.log(typeof add);
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends)); //check array using arrray.isArray
console.log(typeof add);

// includes--------------- kono ekta upadan array er moddhe ache kina seta bojhar jonne .includes dite hobe
console.log(friends.includes(19));
console.log(friends.includes(21));
// rarely use korbo
if (friends.indexOf(19) !== -1) {
    
}
// concat-------- ekadhik array k jora dite eta use hoy
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);