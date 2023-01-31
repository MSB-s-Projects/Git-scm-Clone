//grabbing the element
const element=document.getElementById("page-heading");


//different taglines 
var taglines=["--fast-version-control",
"--everything-is-local",
"--distributed-even-if-your-workflow-isn't",
"--local-branching-on-the-cheap",
"--distributed-is-the-new-centralized"];


//index of element of taglines 
var index=Math.floor(Math.random()*taglines.length)


//displaying the tagline
element.innerHTML=taglines[index];

