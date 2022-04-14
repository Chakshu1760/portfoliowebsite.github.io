//the radiobutton
function ShowHideDiv() {
    var chkYes = document.getElementById("sal");
    var new_field = document.getElementById("hrly_rate");
    new_field.style.display = chkYes.checked ? "block" : "none";
}