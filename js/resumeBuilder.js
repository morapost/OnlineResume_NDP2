var name="Bhushan Manoharan";
var role="Web Designer";
var skills=["Cooking","Programming","Teaching","JS","Troubleshooting"];
var bio={
	"name" : name,
	"role" : role,
	"contacts": [{
		"mobile" : "989-460-9671",
		"email" : "morapost@gmail.com",
		"twitter" : "@morapost",
		"github" : "morapost",
		"location" : "Bangalore,Karnataka"
}],
	"picURL" : "images/Bhushan.jpg",
	"welmsg" : "Hello There!",
	"skills" : skills
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedpic = HTMLbioPic.replace("%data%",bio.picURL);
	var formattedwelmsg = HTMLWelcomeMsg.replace("%data%",bio.welmsg);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedpic,formattedwelmsg);
	$("#header").append(HTMLskillsStart);


	for(skill in bio.skills) {
		var formattedskills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedskills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedGithub = HTMLgithub.replace("%contact%","Github").replace("%data%",bio.contacts[contact].github);
		var formattedLocation =HTMLlocation.replace("%data%", bio.contacts[contact].location);
		var formattedTwitter =HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
       	$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
	
	 };
};

bio.display();

var work = {
	"jobs" : [
				{
					"Employer" : "Oracle",
					"Title" : "Sr Consultant",
					"Dates" : "Oct-26-2015",
					"location" : "Bangalore,Karnataka",
					"Description" : "PeopleSoft Product Developement on Various DB's and Platforms"
				},
				{
					"Employer" : "Cognizant",
					"Title" : "Consultant",
					"Dates" : "Mar-29-2010",
					"location" : "Chennai,Tamil Nadu",
					"Description" : "PeopleSoft Product Support on MS SQL server and Oracle"	
				}
			]
};

function displaywork(){
      for(job in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      var formattedworkEmp=HTMLworkEmployer.replace("%data%",work.jobs[job].Employer);
      var formattedworkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].Title);
      var formattedworkDates=HTMLworkDates.replace("%data%",work.jobs[job].Dates);
      var formattedworkLoc=HTMLworkLocation.replace("%data%",work.jobs[job].location);
      var formattedworkDesc=HTMLworkDescription.replace("%data%",work.jobs[job].Description);
      var formattedEmpTitle=formattedworkEmp+formattedworkTitle+formattedworkDates+formattedworkLoc+formattedworkDesc;
      $(".work-entry:last").append(formattedEmpTitle);
    }

    }
    displaywork();

var education = {
	"schools" : [
 			
					{
						"name" : "PSNA College of Engineering",
						"location" : "Dindigul",
						"Degree" : "Bachelor of Engineering",
						"Major" : "Electronics & Communication",
						"GradYear" : "2009",
						"URL" : "http://ieee.co.in"
					}

				]
	,

	"onlineCourses" : [
	{
	"title" : "Front End Nano Degree Web Developer",
	"school" : "Udacity",
	"GradYear" : "2016",
	"url" : "http://udacity.com"
	}]
};
 education.display = function() {
		
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].Degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].GradYear);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].Major);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
	 $("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
			 
			  $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].GradYear);
                  var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
}
education.display();

var projects ={
	"projwork" : [
	{
		"Title" : "Meteor JS",
		"Dates" : "Nov-2015",
		"Description" : "Meteor JS Tutorial building sample Apps",
		"image" : "images/meteor.jpg"
	},
	{
		"Title" : "Portfolio",
		"Dates" : "Dec-2015",
		"Description" : "Creating Portfolio Page using CSS and HTML",
		"image" : "images/portfolio.jpg"	
	},
	{
		"Title" : "Online Resume",
		"Dates" : "Dec-2015",
		"Description" : "Creating Online Resume using Javascript and Jquery",
		"image" : "images/resume.png"	
	}]
};

projects.display = function() {

      
      for (project in projects.projwork){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle=HTMLprojectTitle.replace("%data%",projects.projwork[project].Title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates=HTMLprojectDates.replace("%data%",projects.projwork[project].Dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription=HTMLprojectDescription.replace("%data%",projects.projwork[project].Description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectimage=HTMLprojectImage.replace("%data%",projects.projwork[project].image);
        $(".project-entry:last").append(formattedProjectimage);
        
        
      }
    }
    projects.display();



$("#mapDiv").append(googleMap);

