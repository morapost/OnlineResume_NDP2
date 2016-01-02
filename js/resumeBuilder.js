var bio = {
    "name": 'Bhushan Manoharan',
    "role": "Web Designer",
    "contacts": {
        "mobile": "989-460-9671",
        "email": "morapost@gmail.com",
        "twitter": "@morapost",
        "github": "morapost",
        "location": "Bangalore,Karnataka"
    },
    "picURL": "images/Bhushan.jpg",
    "welmsg": "I have been working in PeopleSoft for past 5 years and I have huge intrest in web development. I want to develop the websites which help everyone connects digitally and makes each one of us as a global citizen.",
    "skills": ["Cooking", "Programming", "Teaching", "JS", "Troubleshooting"],
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedpic = HTMLbioPic.replace("%data%", bio.picURL);
        var formattedwelmsg = HTMLWelcomeMsg.replace("%data%", bio.welmsg);

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
        "Employer": "Oracle",
        "Title": "Sr Consultant",
        "Dates": "Oct-26-2015",
        "location": "Bangalore,Karnataka",
        "Description": "PeopleSoft Product Developement on Various DB's and Platforms"
    }, {
        "Employer": "Cognizant",
        "Title": "Consultant",
        "Dates": "Mar-29-2010",
        "location": "Chennai,Tamil Nadu",
        "Description": "PeopleSoft Product Support on MS SQL server and Oracle"
    }],

    "display": function() {
        var job = work.jobs.length;
        for (var i = 0; i < job; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedworkEmp = HTMLworkEmployer.replace("%data%", work.jobs[i].Employer);
            var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].Title);
            var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[i].Dates);
            var formattedworkLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedworkDesc = HTMLworkDescription.replace("%data%", work.jobs[i].Description);
            var formattedEmpTitle = formattedworkEmp + formattedworkTitle + formattedworkDates + formattedworkLoc + formattedworkDesc;
            $(".work-entry:last").append(formattedEmpTitle);
        }

    }
};

work.display();

var projects = {
    "projwork": [{
        "Title": "Meteor JS",
        "Dates": "Nov-2015",
        "Description": "Meteor JS Tutorial building sample Apps",
        "image": "images/meteor.jpg"
    }, {
        "Title": "Portfolio",
        "Dates": "Dec-2015",
        "Description": "Creating Portfolio Page using CSS and HTML",
        "image": "images/portfolio.jpg"
    }, {
        "Title": "Online Resume",
        "Dates": "Dec-2015",
        "Description": "Creating Online Resume using Javascript and Jquery",
        "image": "images/resume.png"
    }],
    "display": function() {


        for (var project in projects.projwork) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projwork[project].Title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projwork[project].Dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projwork[project].Description);
            $(".project-entry:last").append(formattedProjectDescription);
            var formattedProjectimage = HTMLprojectImage.replace("%data%", projects.projwork[project].image);
            $(".project-entry:last").append(formattedProjectimage);


        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "PSNA College of Engineering",
        "location": "Dindigul,Tamil Nadu",
        "Degree": "Bachelor of Engineering",
        "Major": "Electronics & Communication",
        "GradYear": "2005-2009",
        "URL": "http://ieee.co.in"
    }],

    "onlineCourses": [{
        "title": "Front End Nano Degree Web Developer",
        "school": "Udacity",
        "GradYear": "2016",
        "url": "http://udacity.com"
    }],

    "display": function() {
        var school = education.schools.length;
        for (var i = 0; i < school; i++) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].Degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].GradYear);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].Major);
            $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
        }
        $("#education").append(HTMLonlineClasses);
        var course = education.onlineCourses.length;
        for (var i = 0; i < course; i++) {

            $("#education").append(HTMLschoolStart);
            var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].GradYear);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool, formattedonlineDate, formattedURL);
        }
    }
};
education.display();

//Function to international Name format; Commented as it is not needed for this Project!
// function inName(name) {
//     name = name.trim().split(" ");
//     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//     name[1] = name[1].toUpperCase();
//     var full_name = name[0] + " " + name[1];
//     return full_name;
// }

// $("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);