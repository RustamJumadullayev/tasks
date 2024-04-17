/*Foydalanuvchining tug'ilgan sanasi kiritilganida keyingi tug'ilgan kunigacha necha
oy va necha kun qolganligini aniqlab beruvchi dastur tuzing. */

function calculateDays(birthDate) {
    const currentDate = new Date();
    const nextBirthday = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < currentDate) {
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    const daysRemaining = Math.floor((nextBirthday - currentDate) / millisecondsInDay);
    const monthsRemaining = nextBirthday.getMonth() - currentDate.getMonth();
    const yearsRemaining = nextBirthday.getFullYear() - currentDate.getFullYear();

    return {
        years: yearsRemaining,
        months: monthsRemaining,
        days: daysRemaining
    };
}
const birthDate = new Date("2000-04-17");
const remainingDays = calculateDays(birthDate);
console.log("Tug'ilgan kunizdan keyingi tu'g'ilgan kunizdacha:", remainingDays.years, "yil", remainingDays.months, "oy", remainingDays.days, "kun", "qoldi");
