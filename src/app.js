// 
    // async function fetchdata()
    // {
    //   const response = await fetch('../src/question.json');
    //   console.log(response)
    // } 

    // import data from '../src/question.json' assert { type: 'JSON' };
    // console.log(data);

    /////////////////////////////
 
      fetch("../src/question.json")
      .then(response => response.json())
      .then(jsonString => {
        const data =  JSON.parse(jsonString);
        console.log(data);
        questions = data;
        var ran = generator()
        passTheNextquestion(ran,questions);
        document.getElementById('btnsub').onclick = function(){

          passTheNextquestion(ran,questions);
        }


      });
    
  


function displaywhen(){
  document.getElementById('btnsub').style.display ="none";
  document.querySelectorAll('.ques').forEach((item)=>{
     item.addEventListener('change',function(){
      document.getElementById('btnsub').style.display ="block";
    })
  })

}


const step= document.querySelector('.title-compo');
const step2= document.getElementById('spacediv2');
let  button = document.getElementById('btn');
let buttondata = document.getElementById('btn-test');
let questiontitle = document.getElementById('questiontitle');
var part = document.getElementById('displayQA').style.display ="none"; 
document.getElementById('displayQA2').style.display = "none"
document.getElementById('displayQA3').style.display = "none"
answerquestion1= document.getElementById('cb1');
answerquestion2 = document.getElementById('cb2');
answerquestion3 = document.getElementById('cb3');
answerquestion4 = document.getElementById('cb4');
valuecheck1 = document.getElementById('cb11');
 valuecheck2 = document.getElementById('cb21') 
 valuecheck3 = document.getElementById('cb31');
 valuecheck4 = document.getElementById('cb41');
 progressebar =document.getElementById('progressbar');
 correction = document.getElementById('correction');
var  correct = 0;

function reload()
{
      window.location.reload();
}
function arraygenratore()
{
  randArr =[];
  while(randArr.length < 10){
    val = Math.floor((Math.random() * 10));
    if(randArr.indexOf(val) < 0){
      randArr.push(val);
    }
  }
  return randArr;
}

var random = arraygenratore();
function* generator() {
  let toYield = random;
  for (let i=0; i<toYield.length-1; i++) yield toYield[i];
  return toYield.pop(); 
}
var ran = generator();
var rna1;
var compare ;
var position = 0;
var correctquestion = 0;
var arr = [];
var arr2 = [];

function passTheNextquestion(ran,questions)
{
  displaywhen();
  initilizethe();
  let rna1 = ran.next();
  p = thevalueofcheckedboxs();
  arr.push(p);
  if(rna1.done)
  {
    document.getElementById('spacediv3').style.backgroundColor = 'orange'
    if(arr2[9])
    {
      getresult();
      document.getElementById('displayQA').style.display ="none"; 
      document.getElementById('displayQA3').style.display = "block";
      document.getElementById('resultat').innerHTML ="YOUR CORRECT ANSWERS ARE"+ " " +counter +"/10" ;
      for(let i=0; i<arr.length-1;i++)
      {
        if(typeof arr[i] == "undefined")
        {
          arr[i] = "this is not a correct answer";
        }
       document.getElementById('accually').innerHTML +=  i +" "+ `<p>${arr[i+1]}</p>`;
       document.getElementById('correct').innerHTML += i + " "+`<p>${arr2[i]}</p>`; 
       
      }
    }
    console.log(arr)
    console.log(arr2)
  }

  fullthedata(rna1.value,questions)
  arr2.push(questions[rna1.value].correctAnswer);
  console.log(answerquestion4.textContent);
  position = rna1.value;
  progressebar.value = arr.length*10;
  console.log(arr)
  console.log(arr2)
}



  function fullthedata(nah,questions)
  {
    questiontitle.textContent = questions[nah].question;
    answerquestion1.textContent = questions[nah].answers[0]
    answerquestion2.textContent = questions[nah].answers[1]
    answerquestion3.textContent = questions[nah].answers[2]
    answerquestion4.textContent = questions[nah].answers[3]
    valuecheck1.value = questions[nah].answers[0];
    valuecheck2.value = questions[nah].answers[1];
    valuecheck3.value = questions[nah].answers[2];
    valuecheck4.value = questions[nah].answers[3];
  }




  
    function createresult()
    {
      let i =0;
      while( i <arr )
      {
        document.getElementById('displayQA3').innerHTML +=  '<div>hello world</div>'
      }
    }



 var counter = 0;

  function getresult()
  {
      let i = 0;
    while(i<arr.length +1)
    {
     
      if(arr[i + 1] == arr2[i])
      {
        counter += 1;
      }
      i++;  
    }
  }


var myvalue;
function thevalueofcheckedboxs()
{
  let checkboxes = [valuecheck1, valuecheck2, valuecheck3, valuecheck4]
  checkboxes.forEach(box=>{box.onclick = e =>  myvalue= e.target.value})
 return myvalue
}


function initilizethe()
{
  valuecheck1.checked = false;
  valuecheck2.checked = false;
  valuecheck3.checked = false;
  valuecheck4.checked = false;
}

function StepForward(lol)
{
  questiontitle.textContent = questions[lol.value].question;
  answerquestion1.textContent = questions[lol.value].answers[0]
  answerquestion2.textContent = questions[lol.value].answers[1]
  answerquestion3.textContent = questions[lol.value].answers[2]
  answerquestion4.textContent = questions[lol.value].answers[3]
}
  

function turn1(){

if(document.getElementById('username').value)
{
step.style.backgroundColor ='orange',
document.getElementById('title').textContent = "Welcome" + "  " + document.getElementById('username').value;
document.getElementById('username').style.display = "none";
document.getElementById('username').value = "";
document.getElementById('btn').innerHTML = " proceed to the next step"
document.getElementById('svgdis').style.display = "none";
document.getElementById('displayQA2').style.display = "block"
}else if(step.style.backgroundColor =='orange')
{
      step2.style.backgroundColor = 'orange';
      document.getElementById('btn').style.display = "none";
      document.getElementById('displayQA2').style.display = "none"
      document.getElementById('displayQA').style.display ="block"; 
      passTheNextquestion();
    
}
else if( document.getElementById('btn').style.display == "none" && step2.style.backgroundColor == 'yellow')
{
      alert('happy to see you ')
      
}else{
      alert('insert you name please');
      }
}
function start(){}