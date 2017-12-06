var bio = {
    "name" : "Karina Machado",
    "role" : "Web Developer",
    "contacts" : {
        "email" : "karinamachado@msn.com",
        "github" : "karinamachado",
        "twitter" : "@_karinasmachado",
        "location" : "Recife, PE - Brazil"
    },
    "picture": "images/karina.jpg",
    "welcomeMessage": "Hello! I'm a Front-End Developer from Recife - Brazil.",
    "skills": ["HTML", "CSS", "JS","Web Development", "Web Design"]
};

var works = {
    "jobs": [
        {
            "employer": "Owner",
            "title": "Web Developer and Designer",
            "location": "Recife,Pernambuco",
            "workDate": "July 2004 - 2009",
            "description": "he web service area responsible in the development of visual identity (brochures, banners, flyers and business cards) and development of websites."
        },
        {
            "employer": "Freelancer",
            "title": "Web Developer",
            "location": "Recife,Pernambuco",
            "workDate": "2009 - 2012",
            "description": "Working as an autonomous development of visual identity and website."
        },

        {
            "employer": "Guararapes College (Laureate Universities)",
            "title": "Computer Tech Course Teacher ",
            "location": "Recife,Pernambuco",
            "workDate": "2014 – 2016",
            "description": "Teacher in computer disciplines: applied computing, web development and mobile."
        },

        {
            "employer": "UFRPE (Federal University Rural of Pernambuco)",
            "title": "Web Developer",
            "location": "Recife,Pernambuco",
            "workDate": "2016 – 2017",
            "description": "Technological innovation Project – plataforma for mapping the ecosystem to Support the empowerment of Women in partnership with the Womanity Foundation, Brazil Foundation and UN Women."
         }   
    ]
};

var projects = {
	"projects": [
		{
			"title": "UNA Survey",
			"datesWorked": "2017",
			"description": "The Ecosystem of Initiatives for Gender Equality and Women Empowerment is an initiative of the UN Women, Womanity Foundation, BrazilFoundation and C & A Institute. Its main objective is to map organizations and initiatives that work with women's rights and empowerment to expand the interconnections between them and their impact..",
			"images": ["images/proj1.jpg"],
			"url": "http://www.u1na.org"
		},
		{
			"title": "UNA",
			"datesWorked": "2016/2017",
			"description": "Prototype of the UNA project website, which allows users to consult organizational charts and empower women initiatives. .",
			"images": ["images/proj2.jpg"],
			"url": "http://www.u1na.org/"
		}
	]
};

var education = {
    "onlineCourses": [
        {
            "school": "Udacity",
            "title": "Frontend Web Development Nanodegree",
            "dates": "January 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "school": "FreeCodeCamp",
            "title": "Frontend Web Development",
            "dates": "October 2016",
            "url": "https://www.freecodecamp.com/"
        }
    ]
};

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});


var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcomeMsg);

for (var i = 0; i < formattedContactInfo.length; i++) {
    $('#topContacts').append(formattedContactInfo[i]);
    $('#footerContacts').append(formattedContactInfo[i]);
}

// Verificar se nossa lista de habilidades tem um comprimento maior.

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);// se ok, vamos acrescentar na variavel start.

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);// variavel skill chamando o método replace e substituindo o espaço reservado de dados, pela primeira lista de habilidades.
        $('#skills').append(formattedSkills); // acrescentando habilidade na página.
    }
}

works.display = function() {
    if (works.jobs.length > 0) {
        $('#workExperience').append(HTMLworkStart);

        for (var job in works.jobs ) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', works.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace('%data%', works.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', works.jobs[job].location);
            var formattedWorkDate = HTMLworkDates.replace('%data%', works.jobs[job].workDate);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', works.jobs[job].description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedWorkDate);
            $('.work-entry:last').append(formattedWorkDescription);
        }
    }
};

projects.display = function() {
    if (projects.projects.length > 0) {
        $('#projects').append(HTMLprojectStart);


        for (var i in projects.projects) {
            var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjDates = HTMLprojectDates.replace('%data%', projects.projects[i].datesWorked);
            var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);


            $('.project-entry:last').append(formattedProjTitle);
            $('.project-entry:last').append(formattedProjDates);
            $('.project-entry:last').append(formattedProjDescription);


            if (projects.projects[i].images.length > 0) {
                for(var img in projects.projects[i].images) {
    				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
    				$(".project-entry:last").append(formattedProjectImage);
    			}
            }

        }
    }
};

education.display = function() {
    if(education.onlineCourses.length > 0) {
        $('#education').append(HTMLschoolStart);

        if(education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title );
                var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school );
                var formattedComplated = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates );
                var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url );
                // var formattedProjImg = HTMLprojectImage.replace('%data%', projects.projects[i].images);
                $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
                $('.education-entry:last').append(formattedComplated);
                $('.education-entry:last').append(formattedURL);

            }
        }
    }
};

$('#mapDiv').append(googleMap);
works.display();
projects.display();
education.display();
