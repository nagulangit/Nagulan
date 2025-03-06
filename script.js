document.addEventListener("DOMContentLoaded", function() {
    let title = document.querySelector(".rajini-intro");
    let words = title.innerText.split("");
    title.innerText = "";

    words.forEach((letter, index) => {
        let span = document.createElement("span");
        span.innerText = letter;
        span.style.animation = `letterBlast 1s ${index * 0.1}s infinite alternate ease-in-out`;
        title.appendChild(span);
    });
});

/* Blasting Animation */
let style = document.createElement('style');
style.innerHTML = `
    @keyframes letterBlast {
        0% { transform: rotate(-5deg) translateY(-5px); color: yellow; }
        50% { transform: rotate(5deg) translateY(5px); color: red; }
        100% { transform: rotate(-5deg) translateY(-5px); color: orange; }
    }
`;
document.head.appendChild(style);
