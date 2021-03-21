// Write your code here!
//body.removeChild()

const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";

newHeader.innerHTML = 'Can is the champion';