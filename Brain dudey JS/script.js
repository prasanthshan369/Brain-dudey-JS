
const divcontainer=document.createElement("div");
document.querySelector("body").appendChild(divcontainer);
const divheading=document.createElement("div");//heading
divcontainer.appendChild(divheading);
divheading.className="divheading";
const headimg=document.createElement("div");
headimg.innerHTML="<div><img src='profile.png'/></div>"
headimg.className="headimg";
divheading.appendChild(headimg);
const divheadingtext=document.createElement("div");
divheading.appendChild(divheadingtext);
const divheadingtexth1=document.createElement("h1");
divheadingtexth1.innerHTML="<span>BRAIN DUDEY<span>";
divheadingtexth1.className="divheadingtexth1";
divheadingtext.appendChild(divheadingtexth1);
/*/////////////////////////////heading div finish//////////////////////////////////////////////////*/
const p=document.createElement("p");
p.innerHTML="N.Daman Avenue, Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com";
divcontainer.appendChild(p);
p.className="pra";
//pra finish

const hr=document.createElement("hr");
divcontainer.appendChild(hr);
//fishi hr
const container=document.createElement("div");
divcontainer.appendChild(container);
container.className="container";
const containerleft=document.createElement("div");
container.appendChild(containerleft);
containerleft.className="containerleft";
//profile start
const profile=document.createElement("div");
containerleft.appendChild(profile);
const profileh1=document.createElement("h1");
profileh1.innerHTML="<i class='fa fa-user-md' aria-hidden='true'></i>&nbsp;Profile";
profileh1.className="profileh1";
profile.appendChild(profileh1);
const profilepra=document.createElement("p");
profilepra.innerHTML="<p>Innovative optimized solution seeker. Excited to be<br> at the deployment phase of my new career as a<br>web developer.I am ambitious, adventurous,<br>assiduous, animated, and an alliteration advocate.</p>";
profile.appendChild(profilepra);
//profile finish
//sckill start
const Skills=document.createElement("div");
containerleft.appendChild(Skills);
const skillsh1=document.createElement("h1");
skillsh1.innerHTML="<i class='fa fa-flask' aria-hidden='true'></i>&nbsp;Skills";
Skills.appendChild(skillsh1);
skillsh1.className="skillsh1";
const technical=document.createElement("h3");
technical.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Technical Skills"
Skills.appendChild(technical);
const skillstable=document.createElement("table");
const skilltr1=document.createElement("tr");
skillstable.appendChild(skilltr1);
const tdtr1=document.createElement("td");
tdtr1.innerHTML="JavaSrips";
skilltr1.appendChild(tdtr1);
const tdtr2=document.createElement("td");
tdtr2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80'disabled>";
skilltr1.appendChild(tdtr2);

const skilltr2=document.createElement("tr");
skillstable.appendChild(skilltr2);
const tr2td1=document.createElement("td");
tr2td1.innerHTML="CSS"
skilltr2.appendChild(tr2td1);
const tr2td2=document.createElement("td");
tr2td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skilltr2.appendChild(tr2td2);

const skilltr3=document.createElement("tr");
skillstable.appendChild(skilltr3);
const tr3td1=document.createElement("td");
tr3td1.innerHTML="HTML";
skilltr3.appendChild(tr3td1);
const tr3td2=document.createElement("td");
tr3td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skilltr3.appendChild(tr3td2);

const skilltr4=document.createElement("tr");
skillstable.appendChild(skilltr4);
const tr4td1=document.createElement("td");
tr4td1.innerHTML="Redux";
skilltr4.appendChild(tr4td1);
const tr4td2=document.createElement("td");
tr4td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skilltr4.appendChild(tr4td2);

const skilltr5=document.createElement("tr");
skillstable.appendChild(skilltr5);
const tr5td1=document.createElement("td");
tr5td1.innerHTML="Mongo";
skilltr5.appendChild(tr5td1);
const tr5td2=document.createElement("td");
tr5td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skilltr5.appendChild(tr5td2);

const skilltr6=document.createElement("tr");
skillstable.appendChild(skilltr6);
const tr6td1=document.createElement("td");
tr6td1.innerHTML="Deployment";
skilltr6.appendChild(tr6td1);
const tr6td2=document.createElement("td");
tr6td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skilltr6.appendChild(tr6td2);

const skillatidional=document.createElement("h3");
skillatidional.innerHTML="&nbsp;&nbsp;&nbsp;Additional Skills";
skillstable.appendChild(skillatidional);
const skillatr1=document.createElement("tr");
skillstable.appendChild(skillatr1);
const atr1td1=document.createElement("td");
atr1td1.innerHTML="Recuitment";
skillatr1.appendChild(atr1td1);
const atr1td2=document.createElement("td");
atr1td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skillatr1.appendChild(atr1td2);

const skillatr2=document.createElement("tr");
skillstable.appendChild(skillatr2);
const atr2td1=document.createElement("td");
atr2td1.innerHTML="Business Development";
skillatr2.appendChild(atr2td1);
const atr2td2=document.createElement("td");
atr2td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skillatr2.appendChild(atr2td2);

const skillatr3=document.createElement("tr");
skillstable.appendChild(skillatr3);
const atr3td1=document.createElement("td");
atr3td1.innerHTML="Editing";
skillatr3.appendChild(atr3td1);
const atr3td2=document.createElement("td");
atr3td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skillatr3.appendChild(atr3td2);

const skillatr4=document.createElement("tr");
skillstable.appendChild(skillatr4);
const atr4td1=document.createElement("td");
atr4td1.innerHTML="Fundraising";
skillatr4.appendChild(atr4td1);
const atr4td2=document.createElement("td");
atr4td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skillatr4.appendChild(atr4td2);

const skillatr5=document.createElement("tr");
skillstable.appendChild(skillatr5);
const atr5td1=document.createElement("td");
atr5td1.innerHTML="Project Management";
skillatr5.appendChild(atr5td1);
const atr5td2=document.createElement("td");
atr5td2.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='range' value='80' disabled>";
skillatr5.appendChild(atr5td2);


Skills.appendChild(skillstable);
//skilll finish
const Work_experiences=document.createElement("div");
containerleft.appendChild(Work_experiences);
const workh1=document.createElement("h1");
workh1.innerHTML="<i class='fas fa-briefcase'></i>&nbsp;Work Experience";
workh1.className="workh1";
Work_experiences.appendChild(workh1);

const workh4=document.createElement("h4");
workh4.innerHTML="Event Manager &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03/2014-02/2017";
Work_experiences.appendChild(workh4);
const workp=document.createElement("p");
workp.innerHTML="C3 Presents,Washington DC";
Work_experiences.appendChild(workp);
const workul=document.createElement("ul");
Work_experiences.appendChild(workul);
const workli1=document.createElement("li");
workli1.innerHTML="Lead and execute all phases ofevent planning<br>and production spanning committee<br> recruitment, training, vendor relationships and<br> onsite facilitation.";
workul.appendChild(workli1);
Work_experiences.appendChild(workul);
const workli2=document.createElement("li");
workli2.innerHTML=" Brought new business to the organization<br> through relentless networking and stewardship<br> which helped the company win the bid for the<br> State Department Summit on the Middle East<br> and, the companies largest civic event to date,<br> the United State of Women";
workul.appendChild(workli2);
Work_experiences.appendChild(workul);
const workli3=document.createElement("li");
workli3.innerHTML="  Exercise fiscal control over budget creation,<br>   tracking and reporting. Collaborate with<br>   employees at all organizational levels to<br>   advance cohesive operations.";
workul.appendChild(workli3);

//finish work and left
const code=document.createElement("div");
code.className="code";
container.appendChild(code);
//finish code

const rightcontainer=document.createElement("div");
rightcontainer.className="rightcontainer";
container.appendChild(rightcontainer);

//g
const Workexperiences=document.createElement("div");
Workexperiences.className="Workexperiences";
rightcontainer.appendChild(Workexperiences);
const workeh1=document.createElement("h1");
workeh1.innerHTML="<i class='fas fa-briefcase'></i>&nbsp; Community Relations &nbsp;&nbsp;&nbsp; 03/2014-02/2017";
workeh1.className="workeh1";
Workexperiences.appendChild(workeh1);

const workep=document.createElement("p");
workep.innerHTML="Gray & Lesb ien Elder Housing Los Angeles";
Workexperiences.appendChild(workep);
const workeul=document.createElement("ul");
Workexperiences.appendChild(workeul);
const workeli1=document.createElement("li");
workeli1.innerHTML="  Arranging presentations and pitch deck";
workeul.appendChild(workeli1);
const workeli2=document.createElement("li");
workeli2.innerHTML=" Designing a PR plan and establishing<br>      important focus points.";
workeul.appendChild(workeli2);
const workeli3=document.createElement("li");
workeli3.innerHTML="Designing, creating and managing content<br>    across multiple communication platforms.";
workeul.appendChild(workeli3);
const workeli4=document.createElement("li");
workeli4.innerHTML="Building relationships with key media players";
workeul.appendChild(workeli4);

//finish work

const education=document.createElement("div");
education.className="Workexperiences";
rightcontainer.appendChild(education);
const educationh1=document.createElement("h1");
educationh1.innerHTML="<i class='fas fa-graduation-cap'></i>&nbsp;Education";
educationh1.className="educationh1";
education.appendChild(educationh1);
const educationh3=document.createElement("h3");
educationh3.innerHTML="Engineering Immersion &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11/2018-06/2018";
education.appendChild(educationh3);
const educationh31=document.createElement("h3");
educationh31.innerHTML="program";
education.appendChild(educationh31);
const educationp1=document.createElement("p");
educationp1.innerHTML="Thinkul Chicago. IL";
education.appendChild(educationp1);
const educationp2=document.createElement("p");
educationp2.innerHTML="Project-focused intensive program with emphasis<br>   on Mongo, Express, React, and JavaScript (MERN)<br>   technical stack.";
education.appendChild(educationp2);
const educationul=document.createElement("ul");
education.appendChild(educationul);
const educationli1=document.createElement("li");
educationli1.innerHTML="Developed a fulkstack web application,<br>'RenewU'’, using React that allows users to<br>explore various aspects of meditation. Users<br>progress is stored on a backend created using<br>Node and MongobB.";
educationul.appendChild(educationli1);
const educationli2=document.createElement("li");
educationli2.innerHTML="Developed a language learning app, 'Foodie<br>Phonetics' using spaced repetition and a linked<br>list data structure. React was used to create<br>the front end components while Node and<br>Mongo were used to create a backend that<br>stores user data."
educationul.appendChild(educationli2);
const educationli3=document.createElement("li");
educationli3.innerHTML="Developed a concierge app, “Pley’, for<br>individuals looking for curated suggestions<br>when visiting a new place. React was used to<br>develop the front end which includes realtime<br>chat, drag and drop and variety of advanced<br>features. The backend, built using Node,<br>Express, and Mongo, takes advantage of well<br>developed RESTful API, Geospatial searching,<br>and user authentication with JWT.";
educationul.appendChild(educationli3);

//finish
const edu=document.createElement("div");
edu.className="Workexperiences";
rightcontainer.appendChild(edu);
const eduh3=document.createElement("h3");
eduh3.innerHTML="Ba.English &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 09/2001-09/2005";
edu.appendChild(eduh3);
const edup=document.createElement("p");
edup.innerHTML="University of California, Los Angeles";
edu.appendChild(edup);
