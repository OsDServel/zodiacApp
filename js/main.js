var zodiacs = [
	{
		name: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg",
		date: "January 20th- February 18th"
	},
	{
		name: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.png",
		date: "March 21st- April 19th"
	},
	{
		name: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.jpg",
		date: "June 21st- July 22th"
	},
	{
		name: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.jpg",
		date: "Decemeber 22nd- January 19th"
	},
	{
		name: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg",
		date: "May 21st- June 20th"
	},
	{
		name: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.jpg",
		date: "July 23rd- August 22nd"
	},
	{
		name: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.jpg",
		date: "Septemeber 23rd- October 22nd"
	},
	{
		name: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg",
		date: "February 19th- March 20th"
	},
	{
		name: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.jpg",
		date: "November 22nd- December 21st"
	},
	{
		name: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.jpg",
		date: "October 23rd- November 21st"
	},
	{
		name: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.jpg",
		date: "April 20th- May 20th"
	},
	{
		name: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/scorpio.jpg",
		date: "August 23rd- September 22nd"
	}
];


var myH1 = document.getElementById("signName");
var myH6= document.getElementById("dates");
var myH3 = document.getElementById("fortune");
var myImage = document.getElementById("image");

function getZodiac(){

	for(var i= 0; i<= zodiacs.length; i++) {
		// var input = document.getElementById("userInput")
		var input = document.getElementById("userInput").value;

		if(input.trim().toLowerCase() == zodiacs[i].name) {
			// console.log("success!");
			myH1.innerText = zodiacs[i].name;
			myH6.innerText= zodiacs[i].date;
			myH3.innerText = zodiacs[i].fortune;
			myImage.src = zodiacs[i].image;
				return;
		} 
	}
	
};


	// else{ alert("Zodiac does not exist, please try again.");
	// 		return;
	// }