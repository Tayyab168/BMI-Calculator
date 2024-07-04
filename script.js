let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  let result = document.getElementById("result");
  if (height == "" || height < 1 || isNaN(height)) {
    result.innerHTML = "plz enter a valid height";
  }
   else if (weight == "" || weight < 1 || isNaN(weight)) {
    result.innerHTML = "plz enter a valid weight";
  }
  else{
    let bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML="RESULT : "+ bmi+"<br>"
    if(bmi<18.4){
      result.innerHTML=bmi+" Underweight"
    }
   else if(bmi>=18.5 && bmi<24.9){
      result.innerHTML=bmi+" Normal"
    }
    else if(bmi>=25 && bmi<39.9){
      result.innerHTML=bmi+" Overwieght"
    }
    else if(bmi>40){
      result.innerHTML= bmi+" obses "
    }
  }
});
