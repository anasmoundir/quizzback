var questions =  [
      {
        "question": "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
        "answers": [
          "Amazon EC2 costs are billed on a monthly basis.",
          "Amazon EC2 instances can be launched on demand when needed.",
          "Users retain full administrative access to their Amazon EC2 instances.",
          "Users can permanently run enough instances to handle peak workloads."
        ],
        "correctAnswer": "Amazon EC2 instances can be launched on demand when needed.",
        "the explication":"The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
      },
      {
          "question": "Which AWS service would simplify the migration of a database to AWS?",
          "answers": [
            "AWS Storage Gateway",
            "AWS Database Migration Service (AWS DMS)",
            "Amazon EC2",
            "Amazon AppStream 2.0"
          ],
          "correctAnswer": "AWS Database Migration Service (AWS DMS)",
          "the explication":"AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases."
        },
        {
          "question": "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
          "answers": [
            "AWS Config",
            "AWS OpsWorks",
            "AWS SDK",
            "AWS Marketplace"
          ],
          "correctAnswer": "AWS Marketplace.",
          "the explication":"AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS."
        },
        {
          "question": "Which AWS networking service enables a company to create a virtual network within AWS?",
          "answers": [
            "AWS Config",
            "Amazon Route 53",
            "AWS Direct Connect",
            "Amazon Virtual Private Cloud (Amazon VPC)"
          ],
          "correctAnswer": "Amazon Virtual Private Cloud (Amazon VPC)",
          "the explication":"Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define."
        },
        {
          "question": "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
          "answers": [
            "Configuring third-party applications",
            "Maintaining physical hardware",
            "Securing application access and data",
            "Managing guest operating systems"
          ],
          "correctAnswer":  "Maintaining physical hardware",
          "the explication":"Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model."
        },
        {
          "question": "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
          "answers": [
            "AWS Regions",
            "Edge locations",
            "Availability Zones",
            "Virtual Private Cloud (VPC)"
          ],
          "correctAnswer": "Edge locations",
          "the explication":"To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide."
        },
        {
          "question": "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
          "answers": [
            "Use Amazon Cloud Directory",
            "Audit AWS Identity and Access Management (IAM) roles",
            "Enable multi-factor authentication",
            "Enable AWS CloudTrail"
          ],
          "correctAnswer": "Enable multi-factor authentication.",
          "the explication":" Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources."
        },
        {
          "question": "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
          "answers": [
            "AWS Trusted Advisor",
            "AWS CloudTrail",
            "AWS X-Ray",
            "AWS Identity and Access Management (AWS IAM)"
          ],
          "correctAnswer": "AWS CloudTrail",
          "the explication":"AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs."
        },
        {
          "question": "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
          "answers": [
            "Amazon Simple Notification Service (Amazon SNS)",
            "AWS CloudTrail",
            "AWS Trusted Advisor",
            "Amazon Route 53"
          ],
          "correctAnswer": "Amazon Simple Notification Service (Amazon SNS)",
          "the explication":"The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
        },
        {
          "question": "Where can a user find information about prohibited actions on the AWS infrastructure?",
          "answers": [
            "AWS Trusted Advisor",
            "AWS Identity and Access Management (IAM)",
            "AWS Billing Console",
            "AWS Acceptable Use Policy"
          ],
          "correctAnswer": "AWS Acceptable Use Policy",
          "the explication":"The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure."
        }
    ]
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

function passTheNextquestion()
{
  initilizethe();
  let rna1 = ran.next();
  let p = thevalueofcheckedboxs();
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
       document.getElementById('accually').innerHTML +=  i +" "+ `<p>${arr[i+1]}</p>`;
       document.getElementById('correct').innerHTML += i + " "+`<p>${arr2[i]}</p>`; 
       
      }

     
  
    }
    console.log(arr)
    console.log(arr2)
  }

  fullthedata(rna1.value)
  arr2.push(questions[rna1.value].correctAnswer);
  console.log(answerquestion4.textContent);
  position = rna1.value;
  progressebar.value = arr.length*10;
  console.log(arr)
  console.log(arr2)
}
  function fullthedata(nah)
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