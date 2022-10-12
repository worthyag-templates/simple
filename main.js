const h3 = document.querySelectorAll("h3");
for (const tag of h3) {
    tag.style.cssText = "background-color: #9ec9ee; width: max-content;";
} 

const btn = document.querySelectorAll("button");
for (const tag of btn) {
    tag.style.cssText = "width: 100px; border: solid 2px #7460bf;\
                        border-radius: 20px; padding: 8px 8px; color: #fff;";
}

const btnMethod2 = document.querySelector("#btn");
btnMethod2.onclick = () => alert("Hello Worthy!");

const btnMethod3 = document.querySelector("#btn3");
btnMethod3.addEventListener('click', (e) => {
    alert("Hello Worthy!");
    console.log(e);
});