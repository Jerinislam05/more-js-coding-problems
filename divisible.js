/* 
1. show output from: 1-50
2. if the number is divisible by 3 then instead the number show 'foo'
3. if the number is divisible by 5 then instead the number show 'bar'
4. if the number is divisible by 3 and 5 then instead the number show 'foobar'
*/
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    } else if (i % 5 === 0) {
        console.log('bar');
    } else if (i % 3 === 0) {
        console.log('foo');
    } else {
        console.log(i);
    }
}