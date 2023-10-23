let button = Array.from(document.querySelectorAll('button'));

button.forEach(element => {
  element.addEventListener('click',clickFunction)
});

function clickFunction(e){
let parent = e.currentTarget.parentElement;
let isUnlocked = parent.querySelector('input[value="unlock"]').checked;



if(isUnlocked){
  let lockedSection = parent.querySelector('.user1Username');
  console.log(e.currentTarget.textContent)
if(e.currentTarget.textContent==="Show More"){
  e.currentTarget.textContent='Hide It'
  lockedSection.style.display="grid"
}else{
  e.currentTarget.textContent='Show More'
  lockedSection.style.display='none'
}
}
}