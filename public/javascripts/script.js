$(document).ready(function(){

    //Create random numbers between 19 - 120 Asign the number to the id in html
        
        var randomNumber = function(){
             return Math.floor((Math.random() * 102)+19);
        };
        var number = randomNumber();
        $("#numberToMatch").text(number);
    
    
        //Declare variables for Score 
    
        var wins = 0;
        var losses = 0;
        var totalScore = 0;
    
        
        //Create random numbers between 1 - 12 for each Crystal defining a variable. Asign them to each Crystal in html
    
        
        var randomGreen = function(){
            return Math.floor((Math.random() * 12) + 1);
        };
        var greenCrystal = randomGreen();
        $("#green").html(greenCrystal);
    
        var randomPurple = function(){
            return Math.floor((Math.random() * 12) + 1);
        };
        var purpleCrystal = randomGreen();
        $("#purple").html(purpleCrystal);
    
        var randomYellow = function(){
            return Math.floor((Math.random() * 12) + 1);
        };
        var yellowCrystal = randomGreen();
        $("#yellow").html(yellowCrystal);
    
        var randomRed = function(){
            return Math.floor((Math.random() * 12) + 1);
        };
        var redCrystal = randomGreen();
        $("#red").html(redCrystal);
    
            
        //set up click for jewels
    
        $("#green").click(function() {
                    totalScore = totalScore + greenCrystal;
                    $("#totalScore").text(totalScore);
                    winLose(totalScore, number);
    
        });
    
        $("#purple").click(function() {
                    totalScore = totalScore + purpleCrystal; 
                    $("#totalScore").text(totalScore);
                    winLose(totalScore, number);
    
        });
    
        $("#yellow").click(function() {
                    totalScore = totalScore + yellowCrystal;
                    $("#totalScore").text(totalScore);
                    winLose(totalScore, number);
    
        });
    
        $("#red").click(function() {
                    totalScore = totalScore + redCrystal;
                    $("#totalScore").text(totalScore);
                    winLose(totalScore, number);
        });
    
        //Set win/lose conditions
        //Add the wins to the "wins"
        //Add the loses to the "loses"
        //Reset the totalScore after wining or loosing
        //Reset the value of the Crystals
    
        function winLose(total, random){
            if (total === random){
                wins = wins + 1;
                $("#winsSpan").text(wins);
                totalScore = 0;
                $("#totalScore").text(0);
                number = randomNumber();
                $("#numberToMatch").text(number);
                greenCrystal = randomGreen();
                $("#green").html(greenCrystal);
                purpleCrystal = randomGreen();
                $("#purple").html(purpleCrystal);
                yellowCrystal = randomGreen();
                $("#yellow").html(yellowCrystal);
                redCrystal = randomGreen();
                $("#red").html(redCrystal);
    
                
            };
            if (total > random){
                losses = losses + 1;
                $("#lossesSpan").text(losses);
                totalScore = 0;
                $("#totalScore").text(0);
                number = randomNumber();
                $("#numberToMatch").text(number);
                greenCrystal = randomGreen();
                $("#green").html(greenCrystal);
                purpleCrystal = randomGreen();
                $("#purple").html(purpleCrystal);
                yellowCrystal = randomGreen();
                $("#yellow").html(yellowCrystal);
                redCrystal = randomGreen();
                $("#red").html(redCrystal);
                
            };
        };
    });