// Ändra på texten.

let ourElement = document.getElementById("about_us");
ourElement.textContent = "Not about us";

// Ändra färg.

ourElement.style.color = "red";

// QuerySelector, hittar första h1 i koden.
// Vi loggar ut den.

const firstH1 = document.querySelector("h1");

// Hitta alla H1

const allH1 = document.querySelectorAll("h1");
console.log(allH1);
console.log(firstH1);

// Lägga till element, appendchild.

let newLi = document.createElement("li");

newLi.textContent = "New Li";

let container = document.getElementById("menu");

// Vi måste köra metoden för att lägga till den nya div:en
function addNewDiv() {
  menu.appendChild(newLi);
}

// Ta bort

const removeService = document.getElementById("service1");
removeService.remove();

// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
