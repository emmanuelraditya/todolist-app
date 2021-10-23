const inputText = document.querySelector('#inputText');
const myButton = document.querySelector('.btn-list'); //ini
const list = document.querySelector('.container ul');

myButton.addEventListener('click', (e) => {
    if(inputText.value != "") {
        e.preventDefault();

        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);

        const mySpan = document.createElement('span');
        mySpan.innerHTML = '<i class="fa fa-minus-circle"></i>';
        myLi.appendChild(mySpan);
    }

    const close = document.querySelectorAll('span');
    for(let i=0; i<close.length;i++) {
        close[i].addEventListener('click', () => {
            close[i].parentElement.style.opacity = 0;
            setTimeout(() => {
                close[i].parentElement.style.display = "none";
            },500); 
           
        })
    }
    inputText.value = "";
})









// add new todolist
/*var myArr = [];

function pushData() {
    var inputText = document.getElementById('inputText').value;
   
    myArr.push(inputText);
    if(inputText == null){
        return alert("Must be filled");
    }

    var pval = "";

    for(i = 0; i < myArr.length; i++)
    {
        pval = pval + myArr[i] + `<span id="del">
        <i class="fa fa-minus-circle"></i>
   </span>`+"<br>";
    }
    document.getElementById('pList').innerHTML = pval;
        document.getElementById("del").onclick = function() {
            var node = document.getElementById("pList");
            node.parentNode.removeChild(node);
            }
}

*/





/* const inputBox = document.querySelector(".inputfield input");
const addBtn = document.querySelector(".inputfield button")
const todo = document.querySelector(".inputfield button");

addBtn.onClick = () => {
    let userData = inputBox.value ; 
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
}
*/