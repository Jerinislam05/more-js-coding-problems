const phones = [
    {name: 'samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'walton', camera: 10, storage: '36gb', price: 22000, color: 'black'},
    {name: 'iphone', camera: 10, storage: '128gb', price: 82000, color: 'golden'},
    {name: 'xiomi', camera: 12, storage: '20gb', price: 40000, color: 'pink'},
    {name: 'oppo', camera: 12, storage: '132gb', price: 26000, color: 'violet'},
    {name: 'nokia', camera: 12, storage: '32gb', price: 30000, color: 'silver'},
    {name: 'HTC', camera: 8, storage: '20gb', price: 62000, color: 'blue'},
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const myChoice = cheapestPhone(phones);
console.log(myChoice);