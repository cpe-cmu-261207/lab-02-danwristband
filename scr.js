
var arrCredit=[];
var arrGrade=[];
var Term =document.getElementById("Term").value;





var rIndex,
    table = document.getElementById("table");

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        term = document.getElementById("Term").value,
        courseNO = document.getElementById("course").value,
        title = document.getElementById("title").value,
        credit = document.getElementById("credit").value,
        grade = document.getElementById("grade").value;

    if (term === "") {
        alert("term Connot Be Empty");
        isEmpty = true;
    }
    else if (courseNO === "") {
        alert("course no Connot Be Empty");
        isEmpty = true;
    }
    else if (title === "") {
        alert("title Connot Be Empty");
        isEmpty = true;
    }
    else if (credit === "") {
        alert("Credit Connot Be Empty");
        isEmpty = true;
    }
    else if (grade === "") {
        alert("grade Connot Be Empty");
        isEmpty = true;
    }
    return isEmpty;
}


function addHtmlTableRow() {
   
    if (!checkEmptyInput()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            term = document.getElementById("Term").value,
            courseNO = document.getElementById("course").value,
            title = document.getElementById("title").value,
            credit = document.getElementById("credit").value,
            grade = document.getElementById("grade").value;

        cell1.innerHTML = term;
        cell2.innerHTML = courseNO;
        cell3.innerHTML = title;
        cell4.innerHTML = credit;
        cell5.innerHTML = grade;

        arrCredit.push(+credit);
        arrGrade.push(+grade);
       
        selectedRowToInput();
    }
}


function selectedRowToInput() {

    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
           
            rIndex = this.rowIndex;
            document.getElementById("Term").value = this.cells[0].innerHTML;
            document.getElementById("course").value = this.cells[1].innerHTML;
            document.getElementById("title").value = this.cells[2].innerHTML;
            document.getElementById("credit").value = this.cells[3].innerHTML;
            document.getElementById("grade").value = this.cells[5].innerHTML;
        };
    }
}






function removeSelectedRow() {
    
    table.deleteRow(rIndex);
    document.getElementById("term").value = "";
    document.getElementById("course").value = "";
    document.getElementById("title").value = "";
    document.getElementById("credit").value = "";
    document.getElementById("grade").value = "";

    arrCredit.splice(rIndex,1);
    arrGrade.splice(rIndex,1);


}




function sumpointGrade(arrCredit, arrGrade) {

    let sumcredit=+0;
    let gradexcredit=+0;
    let gpax;

    for(let i=0 ; i<arrCredit.length;i++){
        sumcredit+=arrCredit[i];
        gradexcredit+=(arrCredit[i]*arrGrade[i]);

    
    }
    gpax=gradexcredit/sumcredit;
    alert("Your GPA in"+Term+" : "+gpax.toFixed(2));
   


}

