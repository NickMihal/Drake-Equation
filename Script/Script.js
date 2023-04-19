$(document).ready(function () {
   function getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
   }
   $("#info-button").click(function () {
      $("#info-box").toggle();
   });
   $("#random").click(function () {
      var inputFields = [
         "R-number",
         "fp-number",
         "ne-number",
         "fl-number",
         "fi-number",
         "fc-number",
         "L-number",
      ];
      for (var i = 0; i < inputFields.length; i++) {
         var inputId = inputFields[i];
         var randomNumber;
         switch (inputId) {
            case "R-number":
               randomNumber = getRandomNumber(1, 20);
               break;
            case "fp-number":
               randomNumber = getRandomNumber(0, 1);
               break;
            case "ne-number":
               randomNumber = getRandomNumber(0, 1);
               break;
            case "fl-number":
               randomNumber = getRandomNumber(0, 1);
               break;
            case "fi-number":
               randomNumber = getRandomNumber(0, 1);
               break;
            case "fc-number":
               randomNumber = getRandomNumber(0, 1);
               break;
            case "L-number":
               randomNumber = getRandomNumber(1, 10000);
               break;
         }
         $("#" + inputId).val(randomNumber);
         $("#" + inputId)
            .prev()
            .val(randomNumber);
         $("#submit").click();
         function getRandomNumber(min, max) {
            if (document.getElementById("decimalSwitch").checked) {
               return (Math.random() * (max - min) + min).toFixed(2);
            } else {
               return Math.random() * (max - min) + min;
            }
         }
      }
   });
   $("#submit").click(function () {
      var R = $("#R-range").val();
      var fp = $("#fp-range").val();
      var ne = $("#ne-range").val();
      var fl = $("#fl-range").val();
      var fi = $("#fi-range").val();
      var fc = $("#fc-range").val();
      var L = $("#L-range").val();
      // Drake equation calculation
      var N = R * fp * ne * fl * fi * fc * L;
      if (document.getElementById("decimalSwitch").checked) {
         N = N.toFixed(2);
      }
      $("#result").html(N);
   });
   $("input[type='range']").on("input", function () {
      $(this).next().val($(this).val());
   });
   $("input[type='number']").on("input", function () {
      $(this).prev().val($(this).val());
   });
 });
 document.getElementById("decimalSwitch").checked = true;
 document.getElementById("random").addEventListener("click", function () {
   // Assign random values to the text boxes
   document.getElementById("R-range").value = getRandomNumber(1, 20);
   document.getElementById("fp-range").value = getRandomNumber(0, 1);
   document.getElementById("ne-range").value = getRandomNumber(0, 1);
   document.getElementById("fl-range").value = getRandomNumber(0, 1);
   document.getElementById("fi-range").value = getRandomNumber(0, 1);
   document.getElementById("fc-range").value = getRandomNumber(0, 1);
   document.getElementById("L-range").value = getRandomNumber(1, 10000);
 });
 $(function () {
   var defaultR = 10;
   var defaultfp = 0.1;
   var defaultne = 0.2;
   var defaultfl = 0.01;
   var defaultfi = 0.001;
   var defaultfc = 0.0001;
   var defaultL = 1000;
   document.getElementById("R-number").addEventListener("input", function () {
      document.getElementById("R-range").value = this.value;
   });
   document.getElementById("fp-range").addEventListener("input", function () {
      document.getElementById("fp-number").value = this.value;
   });
   //same for ne, fl, fi, fc and L
   document.getElementById("reset").addEventListener("click", function () {
      // Reset input values
      document.getElementById("R-number").value = defaultR;
      document.getElementById("fp-number").value = defaultfp;
      document.getElementById("ne-number").value = defaultne;
      document.getElementById("fl-number").value = defaultfl;
      document.getElementById("fi-number").value = defaultfi;
      document.getElementById("fc-number").value = defaultfc;
      document.getElementById("L-number").value = defaultL;
      document.getElementById("R-range").value = defaultR;
      document.getElementById("fp-range").value = defaultfp;
      document.getElementById("ne-range").value = defaultne;
      document.getElementById("fl-range").value = defaultfl;
      document.getElementById("fi-range").value = defaultfi;
      document.getElementById("fc-range").value = defaultfc;
      document.getElementById("L-range").value = defaultL;
      // Reset result
      var resultHeading = document.getElementById("result");
      resultHeading.textContent = "Equation Reset";
   });
 });
 function myFunction() {
   var body = document.getElementsByTagName("BODY")[0];
   var currentClass = body.className;
   if (currentClass === "dark-mode") {
      body.className = "light-mode";
      document.getElementsByTagName("button")[0].innerHTML =
         '<i class="fas fa-moon"></i><span class="d-none d-md-inline">&nbsp;Dark Mode</span>';
   } else {
      body.className = "dark-mode";
      document.getElementsByTagName("button")[0].innerHTML =
         '<i class="fas fa-sun"></i><span class="d-none d-md-inline">&nbsp;Light Mode</span>';
   }
 }
 if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }
 document.querySelectorAll(".btn").forEach(function (btn) {
   btn.addEventListener("click", function () {
      var collapseId = this.getAttribute("data-target");
      var collapseEl = document.querySelector(collapseId);
      collapseEl.classList.toggle("show");
   });
 });
 function closeCollapse(id) {
   var collapse = document.getElementById(id);
   if (collapse.classList.contains("show")) {
      collapse.classList.remove("show");
   }
 }
 document.getElementById("save-button").addEventListener("click", function() {
   // Get the values entered in the text fields
   let rValue = document.getElementById("R-number").value;
   let fpValue = document.getElementById("fp-number").value;
   let neValue = document.getElementById("ne-number").value;
   let flValue = document.getElementById("fl-number").value;
   let fiValue = document.getElementById("fi-number").value;
   let fcValue = document.getElementById("fc-number").value;
   let LValue = document.getElementById("L-number").value;
 
   // Create a CSV string containing the field names and values
   let csvString = "R," + rValue + "\n" +
                   "fp," + fpValue + "\n" +
                   "ne," + neValue + "\n" +
                   "fl," + flValue + "\n" +
                   "fi," + fiValue + "\n" +
                   "fc," + fcValue + "\n" +
                   "L," + LValue + "\n";
 
   // Create a data URI for the CSV string
   let csvDataUri = "data:text/csv;charset=utf-8," + encodeURIComponent(csvString);
 
   // Create a link element and set its attributes to download the CSV file
   let linkElement = document.createElement("a");
   linkElement.setAttribute("href", csvDataUri);
   linkElement.setAttribute("download", "results.csv");
 
   // Simulate a click on the link element to trigger the download
   linkElement.click();
 });
 