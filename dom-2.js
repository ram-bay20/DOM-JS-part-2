                    //        PART-2         //

// TRAVERSING  THE DOM //

var itemList = document.querySelector('ul');

//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.background = '#9f8349';
//console.log(itemList.parentNode.parentNode.parentNode);
//itemList.parentNode.parentNode.parentNode.style.background = 'cyan';

//parentElement
//console.log(itemList.parentElement);
itemList.parentElement.style.background = '#9f8349';
//console.log(itemList.parentElement.parentElement.parentElement);
itemList.parentElement.parentElement.parentElement.style.background = 'aqua';
//console.log(itemList.parentElement.parentElement);
itemList.parentElement.parentElement.style.background = 'coral';
itemList.parentElement.parentElement.style.padding = '20px';

//childNode
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);
//console.log(itemList.children[2]);
itemList.children[2].style.background = '#129303';
itemList.children[3].style.fontStyle = 'italic';

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
itemList.firstElementChild.style.fontFamily = 'cursive';
itemList.firstElementChild.style.color = '#ffdd00';

//lastChild
//console.log(itemList.lastChild);

//lastElementChild
//console.log(itemList.lastElementChild);
itemList.lastElementChild.style.fontFamily = 'cursive';
itemList.lastElementChild.style.color = '#fadecb';

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.fontFamily = 'cursive';
itemList.previousElementSibling.style.color = 'red';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);
itemList.nextElementSibling.style.fontFamily = 'sans-serif';
itemList.nextElementSibling.style.fontWeight = 'bold';
itemList.nextElementSibling.style.fontSize = '20px';
itemList.nextElementSibling.style.color = '#f468c6';

//  create element  //

//create div
var newDiv = document.createElement('div');

//create ClassName
newDiv.className = 'haed';
//console.log(newDiv.className);

//create Id
newDiv.id = 'first';
//console.log(newDiv.id);

//create Attribute
newDiv.setAttribute('title' , 'first attr');

//create textnode
var newText = document.createTextNode('Please add items');

//add text to div
newDiv.appendChild(newText);

var container = document.querySelector('header .container');
var head1 = document.querySelector('header spn');

//console.log(newDiv);

newDiv.style.fontSize = '22px';
newDiv.style.fontStyle = 'italic';

container.insertBefore(newDiv , head1);
