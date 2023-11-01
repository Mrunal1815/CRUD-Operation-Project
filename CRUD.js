let selectedrow = null;
let userName = document.getElementById("userName");
let email = document.getElementById('email');
let phone =document.getElementById('phone');
let city =document.getElementById("city");

function enterData(){
    let studentData = fetchData();
    if (selectedrow == null){
        addData(studentData);
    }
    else{
        updataData(studentData);
    }
    clearForm();
}

function fetchData(){
    let studentData={};
    studentData.userName =userName.value;
    studentData.email=email.value;
    studentData.phone=phone.value;
    studentData.city=city.value;
    return studentData;
}

function addData(data){
    let table = document.getElementById("studentList").getElementsByTagName("tbody")[0];

    let newRow = table.insertRow(0);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML =data.userName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML =data.email;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML =data.phone;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML =data.city;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onclick="editData(this)">Edit</button>
     <button onclick="deleteData(this)">Delete</button>`;

}

//edit data

function editData(btn)
{
    selectedrow=btn.parentElement.parentElement;
    userName.value=selectedrow.cells[0].innerHTML;
    email.value=selectedrow.cells[1].innerHTML;
    phone.value=selectedrow.cells[2].innerHTML;
    city.value=selectedrow.cells[3].innerHTML;
}

//update data

function updataData(data)
{
    selectedrow.cells[0].innerHTML=data.userName;
    selectedrow.cells[1].innerHTML=data.email;
    selectedrow.cells[2].innerHTML=data.phone;
    selectedrow.cells[3].innerHTML=data.city;

}

// delete data

function deleteData(btn){
    if(confirm("Do you want to delete the data ?"))
    {
        row=btn.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
    }
}

function clearForm()
{
    userName.value="";
    email.value="";
    phone.value="";
    city.value="";
    selectedrow=null;
}