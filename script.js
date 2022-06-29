const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  console.log(item, "item");
  item.addEventListener("click", function () {
    const next = item.nextElementSibling;
    next.classList.toggle("visible");
    icone = item.lastElementChild;
    icone.classList.toggle("fa-chevron-up");
  });
});
