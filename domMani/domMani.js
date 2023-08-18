const link=document.querySelector("a"); //select and store reference inside variable; will select the first a it encounters
//Document.querySelectorAll(), which matches every element in the document that matches the selector, and stores references to them in an array-like object called a NodeList.
link.textContent="Mozilla Developer Network"//change text inside the node
link.href="https://developer.mozilla.org";//change the link inside the node

const sect=document.querySelector("section");//it will select and store section in sect

const para=document.createElement("p");//it will create a <p>
para.textContent="we hope you enjoyed the ride";//it will add text to para
sect.appendChild(para);//this will append the child para inside the parent sect;without this change will not be executed; also it moves this section to the end
// para.appendChild(text);//this doesnot work

const text=document.createTextNode("- the premier source for web development knowledge");//it will create a node which contains the text
const linkPara=document.querySelector("p"); //it refers to the alreday existing p

linkPara.appendChild(text);//it will make the text appear in p
// sect.appendChild(linkPara);; this will move this section to the end
const clone= linkPara.cloneNode(linkPara);// to  make acopy of the const or the node or the sect
sect.appendChild(clone);//make the clone appear
// sect.removeChild(linkPara);//remove the node or the sect
// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";
para.setAttribute("class","highlight");//sets a class name of highlight to para