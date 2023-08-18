const Input=document.querySelector("input"); //creating reference to input
const Button=document.querySelector("button");//creating reference to button
const list=document.querySelector("ul");//creating reference to ul

Button.addEventListener("click",showInput)//tells what to do when the buton is clicked
function showInput(){
    const myItem=Input.value; //creating a variable where the input canbe stored
    Input.value="";// emptying the value of input so that new input can be stored

    const listItem=document.createElement('li');
    const listText=document.createElement('span');
    const listBtn=document.createElement('button');//creating elements like list, span and a button in html document

    listItem.appendChild(listText);//parent is listItem and child will be listText
    listText.textContent=myItem;//storing the value of myItem in listText
    listItem.appendChild(listBtn);//making listbtn the child of listItem
    listBtn.textContent="Delete";//button is shown as delete
    list.appendChild(listItem);//finally making the listItem child of ul or list

    listBtn.addEventListener("click",deleteInput)//tells what to do when delete button is clicked
    function deleteInput(){ 
        list.removeChild(listItem);//deletes the child listItem from the list
    }
    Input.focus();//it keeps the input ready to take entry
}
