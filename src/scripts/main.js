window.addEventListener("scroll", function () {
  const header = document.querySelector(".header--transparent");
  if (!header) return;

  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelectorAll(".contact-us-label").forEach((label) => {
  label.addEventListener("click", () => {
    document
      .querySelectorAll(".contact-us-label")
      .forEach((l) => l.classList.remove("active"));
    label.classList.add("active");
  });
});
