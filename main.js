var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

var allUnorderedLists = document.getElementsByTagName('ul');
console.log(allUnorderedLists);

var firstUnorderedList = allUnorderedLists[0];
console.log(firstUnorderedList);

var allListItems = document.getElementsByTagName('li');

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i]);
}

var evenElements = document.getElementsByClassName('even');
console.log(evenElements)

var oddElements = document.getElementsByClassName('odd');
for (var i = 0; i < oddElements.length; i++) {
  console.log(oddElements[i].innerHTML)
}


var firstEvenElement = evenElements[0];
console.log(firstEvenElement)

var firstOddElement = oddElements[0];
console.log(firstOddElement)
