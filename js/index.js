// let otherdata= document.getElementById("other-data");
// let meeting =document.getElementById("meeting");
// let result =document.getElementById("result");
// let formRegisteration=document.getElementById("form-Registeration");
// let forminterviwe=document.getElementById("form-interviwe");
// let formaccept=document.getElementById("form-accept");
// console.log(otherdata,meeting,result);
// function display(id){
//     if(id=="other-data"){
//         formRegisteration.style.display="block";
//         forminterviwe.style.display="none";
//         formaccept.style.display="none";
//     }
//     else if(id=="meeting"){
//         forminterviwe.style.display="block";
//         formRegisteration.style.display="none";
//         formaccept.style.display="none";
//     }
//     else {
//         formaccept.style.display="block";
//         formRegisteration.style.display="none";
//         forminterviwe.style.display="none";
//     }
// }
// console.log(display());

const buttons = document.querySelectorAll('#buttons-container button');
const forms = document.querySelectorAll('#forms-container form');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        forms.forEach((form) => form.classList.add('hidden'));
        forms[index].classList.remove('hidden');
    });
});