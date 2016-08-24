/********** Only JavaScript - JQuery here ***********/
/********** Only JavaScript - JQuery here ***********/
/********** Only JavaScript - JQuery here ***********/
/********** Only JavaScript - JQuery here ***********/
/********** Only JavaScript - JQuery here ***********/




/************ MAIN MENU ************/
// IIFE (immediately invoked function expression) that capitalize the link of the menu into the #mainMenu
(function () {
    $("a.capitalizeLI").each(function () {
        var liContent = $(this).text();
        var capitalizeLiContent = liContent.toUpperCase();
        $(this).html(capitalizeLiContent);
    });
}());
/************ MAIN MENU ************/





/************ MOBILE MENU ************/
// Open the mobile menu whe the user click 
function openMobileMenu() {
    document.getElementById("subMenu").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeMobileMenu() {
    document.getElementById("subMenu").style.width = "0";
}
/************ MOBILE MENU ************/





/************ BUTTON DEVELOPER SMOOTH SCROLL ************/
// Define a smooth scroll to the div #thirdSectionDeveloper in the developer page
$('#buttonDeveloper').click(function () {
    $('html, body').animate({scrollTop: $('#thirdSectionDeveloper').offset().top}, 1500);
});
/************ BUTTON DEVELOPER SMOOTH SCROLL ************/




/************ SELECT EXPERTISE / RESEARCH CENTER PAGE ************/
// Display the value of the select into a div under the select menu (research center page)
$("#selectExpertise").on('change', function () {
    var selected = $(this).val();
    $("#selectExpertiseDivLeft").css({"border": "1px solid white"});
    $("#selectExpertiseDivRight").css({"border": "1px solid white"});

    if (selected === "management") {
        $("#selectExpertiseDivLeft").text("27 Researchers");
        $("#selectExpertiseDivRight").text("125 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "agriculture") {
        $("#selectExpertiseDivLeft").text("30 Researchers");
        $("#selectExpertiseDivRight").text("93 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "analytics") {
        $("#selectExpertiseDivLeft").text("70 Researchers");
        $("#selectExpertiseDivRight").text("233 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "cognitive") {
        $("#selectExpertiseDivLeft").text("296 Researchers");
        $("#selectExpertiseDivRight").text("1,454 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "computational") {
        $("#selectExpertiseDivLeft").text("51 Researchers");
        $("#selectExpertiseDivRight").text("221 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "customer") {
        $("#selectExpertiseDivLeft").text("82 Researchers");
        $("#selectExpertiseDivRight").text("570 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "energy") {
        $("#selectExpertiseDivLeft").text("64 Researchers");
        $("#selectExpertiseDivRight").text("305 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "healthcare") {
        $("#selectExpertiseDivLeft").text("51 Researchers");
        $("#selectExpertiseDivRight").text("103 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "financial") {
        $("#selectExpertiseDivLeft").text("11 Researchers");
        $("#selectExpertiseDivRight").text("87 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "iot") {
        $("#selectExpertiseDivLeft").text("25 Researchers");
        $("#selectExpertiseDivRight").text("75 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "mobile") {
        $("#selectExpertiseDivLeft").text("65 Researchers");
        $("#selectExpertiseDivRight").text("369 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "cloud") {
        $("#selectExpertiseDivLeft").text("181 Researchers");
        $("#selectExpertiseDivRight").text("1,237 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "security") {
        $("#selectExpertiseDivLeft").text("64 Researchers");
        $("#selectExpertiseDivRight").text("304 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "nano") {
        $("#selectExpertiseDivLeft").text("484 Researchers");
        $("#selectExpertiseDivRight").text("7,237 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    } else if (selected === "cities") {
        $("#selectExpertiseDivLeft").text("119 Researchers");
        $("#selectExpertiseDivRight").text("167 Patents Granted *");
        $("#selectExpertiseNote").text("* To researchers in this domain over the past ten years");
    }
});
/************ SELECT EXPERTISE / RESEARCH CENTER PAGE ************/



/************ PLUGIN PARTICLES ************/
// Plugin particles
$('#particles').particleground({
    minSpeedX: 0.1,
    maxSpeedX: 0.7,
    minSpeedY: 0.1,
    maxSpeedY: 0.7,
    directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
    density: 10100, // How many particles will be generated: one particle every n pixels
    dotColor: '#F5F5F5',
    lineColor: '#666666',
    particleRadius: 7, // Dot size
    lineWidth: 1,
    curvedLines: false,
    proximity: 100, // How close two dots need to be before they join
    parallax: true,
    parallaxMultiplier: 7, // The lower the number, the more extreme the parallax effect
    onInit: function () {},
    onDestroy: function () {}
});
/************ PLUGIN PARTICLES ************/
