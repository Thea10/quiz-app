const displayyy = document.getElementById('highs');
//displayyy.classList.add('options');
const highScores = JSON.parse(localStorage.getItem("highScore")) || [];


//what i did
/*highScores.forEach( highsc => {
    console.log(highsc);
    
  var newD = document.createElement("div");
  newD.innerHTML = `${highsc.name + " => " + highsc.sc}`;
  newD.classList.add('options');
  newD.style.padding = "15px";
  newD.style.margin = "20px";
  displayyy.appendChild(newD);

}); */

//the simpler way

displayyy.innerHTML += highScores.map(highsc => {
    return `<li class = "options" style = "padding: 15px; margin: 20px auto;font-weight:bolder; width: 50%"> ${highsc.name} =>  ${highsc.sc}</li>`
}).join("");
console.log(highScores);


resetScore = (e) => {
    console.log(localStorage);
    localStorage.clear();
    console.log(localStorage);
    displayyy.innerHTML = "";
}