document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("h2").forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
