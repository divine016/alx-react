import $ from "jquery";

$(document).ready(function() {
    var txt1 = $("<p></p>").text("Holberton Dashboard"); 
    var txt2 = $("<p></p>").text("Dashboard data for the students"); 
    var txt3 = $("<p></p>").text("Copyright - Holberton School");  
    
    $("body").append(txt1, txt2, txt3);   // Append new elements
});