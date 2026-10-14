const upup = document.getElementById("upup");
const firstlink = document.getElementById("firstlink");
const secondelink = document.getElementById("secondelink");
const thirdlink = document.getElementById("thirdlink");
const fordlink = document.getElementById("fordlink");
const firststyle = document.getElementById("firststyle");

/* initionaliza of Cards portofolio */

const firstitemofportofolio = document.getElementById("firstitemofportofolio");

const secondeitemofportofolio = document.getElementById("secondeitemofportofolio");

const thirditemofportofolio = document.getElementById("thirditemofportofolio");

const forthitemofportofolio = document.getElementById("forthitemofportofolio");

const fifthitemofportofolio = document.getElementById("fifthitemofportofolio");

const sixthitemofportofolio = document.getElementById("sixthitemofportofolio");

const seventhitemofportofolio = document.getElementById("seventhitemofportofolio");

const eaghtthitemofportofolio = document.getElementById("eaghtthitemofportofolio");

const ninthitemofportofolio = document.getElementById('ninthitemofportofolio');






/*finish anitioialization */


/*bagination*/

const containerofcardimg = document.querySelector(".containerofcardimg");
const btnsposition = document.querySelector(".btnsposition");
const btns = document.querySelectorAll(".btnsposition button");



for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        containerofcardimg.style.transform = ` translateX(-${i * 300}px) `

        for (let x = 0; x < btns.length; x++) {
            btns[x].classList.remove("active");
        }
        btns[i].classList.add("active");
    }
};


const cards = containerofcardimg.querySelectorAll(".stylecardimgclint img");

for (let i = 0; i < cards.length; i++) {
    const div = document.createElement("div");
    div.className = "stylecardimgclint";

    const img = document.createElement("img");
    img.src = cards[i].src;

    div.appendChild(img);
    containerofcardimg.appendChild(div);
}



window.addEventListener("scroll", () => {
    const scrolling = window.scrollY;
    allpage = document.documentElement.scrollHeight - window.innerHeight;
    statescroll = (scrolling / allpage) * 100;
    if (statescroll > 5) {
        upup.classList.remove('hiddenupup');
        upup.classList.add('appearupup');

    }
    else if (statescroll < 20) {
        upup.classList.remove('appearupup');
        upup.classList.add('hiddenupup');
    }

})

upup.addEventListener("click", () => {
    scrollTo({ top: 0, behavior: "smooth" })
})


/* function All btn*/

Allfunction = function () {
    firstitemofportofolio.style.display = "block";
    secondeitemofportofolio.style.display = "block";
    thirditemofportofolio.style.display = "block";
    forthitemofportofolio.style.display = "block";
    fifthitemofportofolio.style.display = "block";
    sixthitemofportofolio.style.display = "block";
    seventhitemofportofolio.style.display = "block";
    eaghtthitemofportofolio.style.display = "block";
    ninthitemofportofolio.style.display = "block";

    /* ألوان الزراير الباقيه */

    firstlink.style.color = "#EB5D1E";
    secondelink.style.color = "black";
    thirdlink.style.color = "black";
    fordlink.style.color = "black";


}
firstlink.addEventListener("click", Allfunction);

Appfunction = function () {
    firstitemofportofolio.style.display = "block";
    secondeitemofportofolio.style.display = "none";
    thirditemofportofolio.style.display = "block";
    forthitemofportofolio.style.display = "none";
    fifthitemofportofolio.style.display = "none";
    sixthitemofportofolio.style.display = "block";
    seventhitemofportofolio.style.display = "none";
    eaghtthitemofportofolio.style.display = "none";
    ninthitemofportofolio.style.display = "none";

    /* ألوان الزراير الباقيه */

    firstlink.style.color = "black";
    secondelink.style.color = "#EB5D1E";
    thirdlink.style.color = "black";
    fordlink.style.color = "black";

}
secondelink.addEventListener("click", Appfunction);

Cardfunction = function () {
    firstitemofportofolio.style.display = "none";
    secondeitemofportofolio.style.display = "none";
    thirditemofportofolio.style.display = "none";
    forthitemofportofolio.style.display = "block";
    fifthitemofportofolio.style.display = "none";
    sixthitemofportofolio.style.display = "none";
    seventhitemofportofolio.style.display = "block";
    eaghtthitemofportofolio.style.display = "block";
    ninthitemofportofolio.style.display = "none";

    /* ألوان الزراير الباقيه */

    firstlink.style.color = "black";
    secondelink.style.color = "black";
    thirdlink.style.color = "#EB5D1E";
    fordlink.style.color = "black";
}
thirdlink.addEventListener("click", Cardfunction);
Webfunction = function () {
    firstitemofportofolio.style.display = "none";
    secondeitemofportofolio.style.display = "block";
    thirditemofportofolio.style.display = "none";
    forthitemofportofolio.style.display = "none";
    fifthitemofportofolio.style.display = "block";
    sixthitemofportofolio.style.display = "none";
    seventhitemofportofolio.style.display = "none";
    eaghtthitemofportofolio.style.display = "none";
    ninthitemofportofolio.style.display = "block";


    /* ألوان الزراير الباقيه */

    firstlink.style.color = "black";
    secondelink.style.color = "black";
    thirdlink.style.color = "black";
    fordlink.style.color = "#EB5D1E";


}

fordlink.addEventListener("click", Webfunction);