const myname = document.getElementById('myname');
const save = document.getElementById('save');
const highScores = JSON.parse(localStorage.getItem("highScore")) || [];
//console.log(highScores);

myname.addEventListener('keyup', () => {
  //  console.log(myname.value);
    save.disabled = !myname.value;
});

saveScore = (e) => {
   //console.log('clicked');
    e.preventDefault();
    const recentscore =  localStorage.getItem("recentscore");
    //console.log(recentscore);
    const scores = {
        sc: recentscore,
        name: myname.value
    }
    highScores.push(scores);
    highScores.sort((a,b) => b.sc - a.sc);
    highScores.splice(5);
    localStorage.setItem("highScore", JSON.stringify(highScores));

    //console.log(highScores);
    window.location.href = "index.html";   
};
