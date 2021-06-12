function toggleA11Y(e) {
  // accordion
  const el = e.target.closest(".faq__item");
  let show = el.getAttribute("aria-expanded") === "true" ? false : true;
  el.setAttribute("aria-expanded", show);
  // accordion panel
  const panel = el.querySelector(".panel");
  panel.setAttribute("aria-hidden", !show);
}

const faqs = document.querySelectorAll(".faq__item");
faqs.forEach((item) => {
  const input = item.querySelector("input");
  input.addEventListener("click", function (e) {
    toggleA11Y(e);
  });
  const question = item.querySelector("label > span");

  question.addEventListener("keydown", function (e) {
    // toggle on space or enter key
    if (e.keyCode === 32 || e.keycode === 13) {
      input.toggleAttribute("checked");
      toggleA11Y(e);
    }
  });
});
