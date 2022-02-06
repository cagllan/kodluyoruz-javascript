// DOM
const inputTaskDOM = document.querySelector('#task');
const liveToastBtnDOM = document.querySelector('#liveToastBtn');
const ulListDOM = document.querySelector('#list');
const liDOM = document.querySelectorAll('#list>li')



// check input value
function checkValue(value){
    return value.trim() ? true : false;
}

// add new li element in ul tag
function newElement(){
    let listText = inputTaskDOM.value

    if(checkValue(listText)){
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `${listText} <span class="close">&times;</span>`;
        ulListDOM.append(liDOM);

    }else{
        console.log("there is a problem");
    }
    
}


// delete element
function removeElement(e){
    if(e.target.classList.contains('close')){       
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)
    }
}


// checked Element
function checkElement(e){
    if(e.target.tagName === 'LI')
     {
        e.target.classList.toggle('checked')
     }
}


// event listeners
ulListDOM.addEventListener('click', checkElement);
ulListDOM.addEventListener('click', removeElement);


