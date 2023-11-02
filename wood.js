/* 
fixed: per item wood requirements
1. chair = 3 cft
2. table = 10 cft
3. bed = 50 cft
vary: quantity
*/

function woodCalculator(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBWood = 50;

    const ChairWood = chair * perChairWood;
    const tableWood = table * perChairWood;
    const bedWood = bed * perChairWood;
    // console.log(chair, table, bed);
    const totalWood = ChairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(6, 2, 5);
console.log(totalWood);