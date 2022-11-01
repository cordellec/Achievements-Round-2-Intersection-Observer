const picture = document.querySelectorAll(".picture");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

picture.forEach((picture) => {
  observer.observe(picture);
});
