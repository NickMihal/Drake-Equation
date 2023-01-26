$(document).ready(function(){
    function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
    }
    $("#info-button").click(function(){
    $("#info-box").toggle();
    });
    $("#random").click(function(){
    var inputFields = ["R-text", "fp-text", "ne-text", "fl-text", "fi-text", "fc-text", "L-text"];
    for (var i = 0; i < inputFields.length; i++) {
    var inputId = inputFields[i];
    var randomNumber;
    switch(inputId) {
    case "R-text":
    randomNumber = getRandomNumber(1, 20);
    break;
    case "fp-text":
    randomNumber = getRandomNumber(0, 1);
    break;
    case "ne-text":
    randomNumber = getRandomNumber(0, 1);
    break;
    case "fl-text":
    randomNumber = getRandomNumber(0, 1);
    break;
    case "fi-text":
    randomNumber = getRandomNumber(0, 1);
    break;
    case "fc-text":
    randomNumber = getRandomNumber(0, 1);
    break;
    case "L-text":
    randomNumber = getRandomNumber(1, 10000);
    break;
    }
    $("#" + inputId).val(randomNumber);
    $("#" + inputId).prev().val(randomNumber);
    $("#submit").click();
    function getRandomNumber(min, max) {
    if (document.getElementById("decimalSwitch").checked) {
    return (Math.random() * (max - min) + min).toFixed(2);
    } else {
    return (Math.random() * (max - min) + min);
    }
    }
    }
    });
    $("#submit").click(function(){
    var R = $("#R-range").val();
    var fp = $("#fp-range").val();
    var ne = $("#ne-range").val();
    var fl = $("#fl-range").val();
    var fi = $("#fi-range").val();
    var fc = $("#fc-range").val();
    var L = $("#L-range").val();
    // Drake equation calculation
    var N = R * fp * ne * fl * fi * fc * L;
    if(document.getElementById("decimalSwitch").checked) {
    N = N.toFixed(2);
    }
    $("#result").html(N);
    });
    $("input[type='range']").on("input", function(){
    $(this).next().val($(this).val());
    });
    $("input[type='text']").on("input", function(){
    $(this).prev().val($(this).val());
    });
    });

    
    document.getElementById("random").addEventListener("click", function() {
    // Assign random values to the text boxes
    document.getElementById("R-range").value = getRandomNumber(1,20);
    document.getElementById("fp-range").value = getRandomNumber(0,1);
    document.getElementById("ne-range").value = getRandomNumber(0,1);
    document.getElementById("fl-range").value = getRandomNumber(0,1);
    document.getElementById("fi-range").value = getRandomNumber(0,1);
    document.getElementById("fc-range").value = getRandomNumber(0,1);
    document.getElementById("L-range").value = getRandomNumber(1,10000);
    });


   