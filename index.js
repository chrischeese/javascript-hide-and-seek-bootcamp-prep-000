function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('app').querySelector('div#nested div.target');
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
//list now contains list of li elements
  for(let i=0;i<list.length;i++){
    //to iterate through the list we start at index 0 to the length of list
    list[i].innerHTML = (parseInt(list[i].innerHTML)+n).toString();
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node');
  var child = current.querySelector('div');
  while(child){
    current = child;
    child = current.querySelector('div');
  }
  return current;
}
