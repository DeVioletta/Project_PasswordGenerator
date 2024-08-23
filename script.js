let upcaseChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbolChar = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let usedChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const initialChar = [...usedChar]

//CHECKBOX NUM
const toggleNumber = document.getElementById("toggle-number");
toggleNumber.addEventListener("change", function () {
  if (this.checked) {
    usedChar = usedChar.concat(numberChar);
    console.log(usedChar);
  } else if (this.checked == false) {
    usedChar = usedChar.filter((char) => !numberChar.includes(char));
    console.log(usedChar);
  }
});

//CHECKBOX SYMBOL
const toggleSymbol = document.getElementById("toggle-symbol");
toggleSymbol.addEventListener("change", function () {
  if (this.checked) {
    usedChar = usedChar.concat(symbolChar);
    console.log(usedChar);
  } else {
    usedChar = usedChar.filter((char) => !symbolChar.includes(char));
    console.log(usedChar);
  }
});

//CHECKBOX UPPERCASE
const toggleUpcase = document.getElementById("toggle-upcase");
toggleUpcase.addEventListener("change", function () {
  if (this.checked) {
    usedChar = usedChar.concat(upcaseChar);
    console.log(usedChar);
  } else {
    usedChar = usedChar.filter((char) => !upcaseChar.includes(char));
    console.log(usedChar);
  }
});

//GENERATE BUTTON
const generateButton = document.getElementById("generate-btn");
let passwordResultContainer = document.querySelector(".password-result");
const passwordLengthInput = document.getElementById("pw-length");
let passwordLength;
const clearButton = document.getElementById("clear-btn");

generateButton.addEventListener("click", function () {
  passwordLength = parseInt(passwordLengthInput.value, 10);

  if (!checkInputNumber(passwordLength)) {
    return;
  }

  for (let i = 0; i < 2; i++) {
    console.log(i);
    let password = "";

    for (let j = 0; j < passwordLength; j++) {
      let randomIndex = Math.floor(Math.random() * usedChar.length);
      password += usedChar[randomIndex];
    }
    
    console.log(password);
    let passwordButton = document.createElement("button");
    passwordButton.classList.add("pw-result");
    passwordButton.textContent = password;
    passwordResultContainer.appendChild(passwordButton);
  }
  clearButton.style.display = "inline-block";
});

//CLEAR BUTTON
clearButton.addEventListener("click", function () {
  console.log("clear clicked");
  let inputEl = document.querySelectorAll("#toggle-number, #toggle-upcase, #toggle-symbol, #pw-length");
  inputEl.forEach((input) => {
    if (input.type === "checkbox") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });

  passwordResultContainer.innerHTML = ''
  clearButton.style.display = 'none'
  usedChar = [...initialChar]
  console.log(usedChar)
});

function checkInputNumber(length) {
  if (isNaN(length) || length < 5 || length > 15) {
    alert("Please enter the valid password length");
    console.log("hi");
    return false;
  } else {
    return true;
  }
}

function allowCopyOnclick() {
  passwordResultContainer.addEventListener("click", function(event){
    if (event.target.classList.contains("pw-result")){
      let textToCopy = event.target.textContent
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert("text copied")
      })
    }
  })
}
allowCopyOnclick();

//THEME SWITCH
const body = document.body;
const themeButton = document.getElementById("dark-switch-btn");
let themeDefine = document.getElementById("theme-check");
themeDefine.addEventListener("change", function () {
  if (this.checked) {
    body.classList.remove("lightmode");
    themeButton.style.boxShadow = "0px 0px 10px rgb(235, 160, 31)";
  } else {
    body.classList.add("lightmode");
    themeButton.style.boxShadow = "-2px -2px 8px rgb(54, 108, 123)";
  }
});