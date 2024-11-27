document.addEventListener("DOMContentLoaded", () => {
    const chincheta1 = document.getElementById("chincheta1");
    const article1 = document.getElementById("article1");
    const chincheta2 = document.getElementById("chincheta2");
    const chincheta3 = document.getElementById("chincheta3");
    const article2 = document.getElementById("article2");

    //  Animar chincheta 1
    chincheta1.style.animation = "mueveChincheta1 1s forwards";

    chincheta1.addEventListener("animationend", function chincheta1End() {
        chincheta1.removeEventListener("animationend", chincheta1End);
        // Animar artículo 1
        article1.style.animation = "animArticle1 2s forwards";

        article1.addEventListener("animationend", function article1End() {
            article1.removeEventListener("animationend", article1End);
            // Animar chincheta 2
            chincheta2.style.animation = "mueveChincheta2 2s forwards";

            chincheta2.addEventListener("animationend", function chincheta2End() {
                chincheta2.removeEventListener("animationend", chincheta2End);
                // Animar chincheta 3
                chincheta3.style.animation = "mueveChincheta3 2s forwards";

                chincheta3.addEventListener("animationend", function chincheta3End() {
                    chincheta3.removeEventListener("animationend", chincheta3End);
                    // Animar artículo 2
                    article2.style.animation = "animArticle2 2s forwards";
                });
            });
        });
    });
});
