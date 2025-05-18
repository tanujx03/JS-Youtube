const btn = document.querySelector("button");

const BMI_Calculator = (page) => {
  page.preventDefault();
  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const bmi = weight / height ** 2;
  document.getElementById("results").textContent = "BMI: " + bmi;
};

btn.addEventListener("click", BMI_Calculator);
