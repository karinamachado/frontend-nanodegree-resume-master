

$("#header").append()

//$("#main").append(["funThoughts"]);


var email="karina@womenwhocode.com";

var newEmail=email.replace("womenwhocode","gmail");

//console.log(email);
//console.log(newEmail);


var awesomeThoughts = "My names is Karina and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

//$("#main").append(funThoughts);


var formattedName = HTMLheaderName.replace("%data%",name);

$("#header").append(formattedName);


var role= "Web Developer";

var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);

	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data",bio.skills[1]);

	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data",bio.skills[2]);

	$("#skills").append(formattedSkill);
	formattedSkill=HTMLskills.replace("%data",bio.skills[3]);

	$("#skills").append(formattedSkill);
}








