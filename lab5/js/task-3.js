"use strict"

let inputArea = document.getElementById('input');
let outputArea = document.getElementById('output');
inputArea.addEventListener('input', event => {
    transcript(event.target.value)
    }); 
let alphabetTable = {
    "а": "а",
    "б": "b",
    "в": "v",
    "г": "h",
    "ґ": "g",
    "д": "d",
    "е": "e",
    "є": "ye",
    "ж": "zh",
    "з": "z",
    "и": "y",
    "і": "i",
    "ї": "yi",
    "й": "q",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "kh",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "shch",
    "ь": "`",
    "ю": "yu",
    "я": "ya",
    "А": "A",
    "Б": "B",
    "В": "V",
    "Г": "H",
    "Ґ": "G",
    "Д": "D",
    "Е": "E",
    "Є": "Ye",
    "Ж": "Zh",
    "З": "Z",
    "И": "Y",
    "І": "I",
    "Ї": "Yi",
    "Й": "Q",
    "К": "K",
    "Л": "L",
    "М": "M",
    "Н": "N",
    "О": "O",
    "П": "P",
    "Р": "R",
    "С": "S",
    "Т": "T",
    "У": "U",
    "Ф": "F",
    "Х": "Kh",
    "Ц": "Ts",
    "Ч": "Ch",
    "Ш": "Sh",
    "Щ": "Shch",
    "Ь": "`",
    "Ю": "Yu",
    "Я": "Ya"
      };


let before = inputArea.textContent;
function transcript(inputText) {
    if(before.length < inputText.length) {
        const gotten = inputText.slice(-(inputText.length-before.length));
        gotten.split("").forEach(letter=> {
        outputArea.textContent += alphabetTable[letter] || letter;
        });
    } else{
        const lost = before.slice((inputText.length-before.length));
        const num = lost.split("").reduce((sum, current) => {return sum + (alphabetTable[current]? alphabetTable[current].length: 1)}, 0);
        outputArea.textContent = outputArea.textContent.slice(0, -num);
    }
    before = inputText;  
}