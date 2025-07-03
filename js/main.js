document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".skill-item");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 300); // jeda 300ms antar item
  });
});
