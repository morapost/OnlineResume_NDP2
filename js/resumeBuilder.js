var bio = {
    "name": 'Bhushan Manoharan',
    "role": 'Web Designer',
    "contacts": {
        "mobile": '989-460-9671',
        "email": 'morapost@gmail.com',
        "twitter": '@morapost',
        "github": 'morapost',
        "location": 'Bangalore,Karnataka'
    },
    "biopic": 'images/Bhushan.jpg',
    "welcomeMessage": 'I have been working in PeopleSoft for past 5 years and I have huge intrest in web development. I want to develop the websites which help everyone connects digitally and makes each one of us as a global citizen.',
    "skills": ['Cooking', 'Programming', 'Teaching', 'JS', 'Troubleshooting'],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedpic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelmsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").prepend(formattedRole).prepend(formattedName).append(formattedpic, formattedwelmsg);
        $("#header").append(HTMLskillsStart);

        var skill = bio.skills.length;
        for (var i = 0; i < skill; i++) {
            var formattedskills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedskills);
        }


        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%contact%", "Github").replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);


    }
};


bio.display();

var work = {
    "jobs": [{
        "employer": "Oracle",
        "title": "Sr Consultant",
        "dates": "Oct-26-2015",
        "location": "Bangalore,Karnataka",
        "description": "PeopleSoft Product Developement on Various DB's and Platforms"
    }, {
        "employer": "Cognizant",
        "title": "Consultant",
        "dates": "Mar-29-2010",
        "location": "Chennai,Tamil Nadu",
        "description": "PeopleSoft Product Support on MS SQL server and Oracle"
    }],

    "display": function() {
        var job = work.jobs.length;
        for (var i = 0; i < job; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedworkEmp = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedworkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedworkDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmpTitle = formattedworkEmp + formattedworkTitle + formattedworkDates + formattedworkLoc + formattedworkDesc;
            $(".work-entry:last").append(formattedEmpTitle);
        }

    }
};

work.display();

var projects = {
    "projects": [{
        "title": "Meteor JS",
        "dates": "Nov-2015",
        "description": "Meteor JS Tutorial building sample Apps",
        "images": ["images/meteor.jpg"]
    }, {
        "title": "Portfolio",
        "dates": "Dec-2015",
        "description": "Creating Portfolio Page using CSS and HTML",
        "images": ["images/portfolio.jpg"]
    }, {
        "title": "Online Resume",
        "dates": "Dec-2015",
        "description": "Creating Online Resume using Javascript and Jquery",
        "images": ["images/resume.png"]
    }],
    "display": function() {

        var project = projects.projects.length;
        for (var i = 0; i < project; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedProjectDescription);
            var formattedProjectimage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry:last").append(formattedProjectimage);


        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "PSNA College of Engineering",
        "location": "Dindigul,Tamil Nadu",
        "degree": "Bachelor of Engineering",
        "majors": ["Electronics & Communication"],
        "dates": "2005-2009",
        "url": "http://ieee.co.in"
    }],

    "onlineCourses": [{
        "title": "Front End Nano Degree Web Developer",
        "school": "Udacity",
        "date": "2016",
        "url": "http://udacity.com"
    }],

    "display": function() {
        var school = education.schools.length;
        for (var i = 0; i < school; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
        }
        $("#education").append(HTMLonlineClasses);
        var course = education.onlineCourses.length;
        for (var i = 0; i < course; i++) {

            $("#education").append(HTMLschoolStart);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool, formattedonlineDate, formattedURL);
        }
    }
};
education.display();

$("#mapDiv").append(googleMap);