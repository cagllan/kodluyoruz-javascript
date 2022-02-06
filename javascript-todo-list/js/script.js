// DOM
const inputTaskDOM = document.querySelector('#task');
const liveToastBtnDOM = document.querySelector('#liveToastBtn');
const ulListDOM = document.querySelector('#list');

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
