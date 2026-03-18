const navLink = document.querySelectorAll("header nav a")
const logoLink = document.querySelector(".logo");
const activePage = () => {
    navLink.forEach(link => {
        link.classList.remove('active')
    })
}
navLink.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add("active");
        }
    })
})
logoLink.addEventListener('click', () => {
    if (!navLink[0].classList.contains('active'))
        activePage();
    navLink[0].classList.add("active");
})

const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll(".resume-detail");

        resumeBtns.forEach(btn => {
            btn.classList.remove("active");
        })
        btn.classList.add("active")

        resumeDetails.forEach(detail => {
            detail.classList.remove("active");
        });
        resumeDetails[idx].classList.add("active")
    });
});

const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
    const porfolioDetails = document.querySelectorAll(".portfolio-detail")

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    porfolioDetails.forEach(detail => {
        detail.classList.remove("active")
    });
    porfolioDetails[index].classList.add("active")
};
arrowRight.addEventListener("click", () => {
    // console.log("chal rahe he")
    if (index < 4) {
        index++;
        arrowLeft.classList.remove("disabled")
    }
    else {
        index = 5
        arrowRight.classList.add("disabled")
    }
    activePortfolio();
})
arrowLeft.addEventListener("click", () => {
    // console.log("chal rahe he")
    if (index > 1) {
        index--;
        arrowRight.classList.remove("disabled")
    }
    else {
        index = 0
        arrowLeft.classList.add("disabled")
    }
    activePortfolio();
})