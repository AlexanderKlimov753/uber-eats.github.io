const tabs = document.getElementById("tabs"),
      content = document.querySelectorAll(".content");
      

// console.log(tabs); 
// console.log(content);  

const changeClass = el => {
    for(let i = 0;i < tabs.children.length; i++){
    tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');

    for(let i = 0;i < tabs.children.length; i++){
    tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}; 

console.log(content); 

tabs.addEventListener("click", e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0;i < content.length; i++){
        content[i].classList.remove('active');
        console.log(content[i].dataset.content); 
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active'); 
        }
    }
});