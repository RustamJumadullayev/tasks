/*Berilgan yil va oyning oxirgi sanasi nechchi bo'lishinni aniqlovchi lastday(year, month) 
nomli funksiya yozing. INPUT: console.log(lastday(2014,0)); OUTPUT: 31 */

function lastday(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
console.log(lastday(2014, 0)); 
