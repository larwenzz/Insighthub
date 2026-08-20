const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        const url = this.href;

        if (url && !url.includes("#") && url.startsWith(window.location.origin)) {
            e.preventDefault();

            document.body.classList.add("exit");

            setTimeout(() => {
                window.location.href = url;
            }, 500);
        }
    });
});

/* Fade to #topic*/
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});