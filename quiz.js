document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");
  let currentQuestion = 0;

  questions[currentQuestion].classList.add("active");

  document.querySelector("button").addEventListener("click", function (e) {
    e.preventDefault();

    if (currentQuestion < questions.length - 1) {
      questions[currentQuestion].classList.remove("active");
      currentQuestion++;
      questions[currentQuestion].classList.add("active");
      updateMap(currentQuestion);
    } else {
      document.getElementById("quiz-form").submit();
    }
  });

  function updateMap(index) {
    const locations = document.querySelectorAll(".location");
    locations.forEach((loc, i) => {
      if (i === index + 1) {
        loc.classList.add("active");
      } else {
        loc.classList.remove("active");
      }
    });
  }
});
