//Grab Elements
const selectElement = selector =>{
    const element = document.querySelector(selector);
    if(element)return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly`)
};

//Nav styles on scroll
const scrollHeader = () =>{
    const headerElement = selectElement("#header");
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll',scrollHeader);

function hamburger_menu() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}