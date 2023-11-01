const friends = [12, 32, 45, 64, 77, 54, 29, 87];
// Removes elements from an array and, 
// if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array
const partial = friends.splice(2, 2, 99, 12, 88); //konta theke suru korte hobe and koytake sorano hobe tar number tarporer number gulo add hoye jabe array er moddhe
console.log(partial);
console.log(friends);