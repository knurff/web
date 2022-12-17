"use strict"

const weeks = {
    0: "Неділя",
    1: "Понеділок",
    2: "Вівторок",
    3: "Середа",
    4: "Четверг",
    5: "П'ятниця",
    6: "Субота",
}
function getDayOfWeek(){
    const date = new Date(document.getElementById("dateOfBirth").value);
    const output = document.getElementById("4-output");
    output.textContent = weeks[date.getDay()] ?? 'Некоректна дата!'; 
}