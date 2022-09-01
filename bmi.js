const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let feet = document.querySelector("#feet").value;
  let inch = document.querySelector("#inch").value;
  let Age = document.querySelector("#Age").value;
  let gender = document.querySelector("#gender").value;
  let weight = document.querySelector("#weight").value;


  if (feet== "" || inch == "" || weight == "" || Age== "" || gender== "") {
    alert("Please fill out the input fields!");
  return; 
  
}


  // BMI = weight in KG / (height in m * height in m)
 
  let height = (feet * 0.3048) + (inch * 0.0254)
  

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight";
  }
  if (BMI >= 30) {
    status = "Obese";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = ` Indicating you are in the <span id="comment">${status} Category</span> based on  your Age, Weight, Gender and  height Information.`;
});


// Your BMI is 20.7, indicating your weight is in the normal category for a 25 years old 4'7" heigh man