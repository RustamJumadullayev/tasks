/* 2000-yildan 2050-yilgacha necha marta va qaysi yillari 1 yanvar yakshanba 
kuni bo'lishini aniqlovchi dastur yozing. */

function countSaturdays() {
    let count = 0;
    for (let year = 2000; year <= 2050; year++) {
        for (let month = 0; month < 12; month++) {
            const date = new Date(year, month, 1);
            if (date.getDay() === 6) {
                count++;
            }
        }
    }
    return count;
}
console.log("2000-yildan 2050-yilgacha", countSaturdays(), "marta 1 yanvar yakshanba kuni bo'lib o'tadi.");
