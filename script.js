var textFields = document.getElementsByTagName("input");
var errorLabels = document.getElementsByClassName("errorText");
var addButton = document.getElementById("btnAdd");
var tabelBody = document.getElementById("body");

// create object using letral notation
var personObject =
{
    UserName: "",
    Password: "",
    Age: "",
    Address: ""
}
// or using Define Properties
var lPerson = {}
Object.defineProperties(lPerson, {
    UserName: { value: "", writable: true },
    Password: { value: "", writable: true },
    Age: { value: 0, writable: true },
    Address: { value: "", writable: true }
})

function createLiteralObject(userName, password, age, address) {
    lPerson.UserName = userName;
    lPerson.Password = password;
    lPerson.age = age;
    lPerson.address = address;
}

// Crerate Object Using Factory Methods
function fPerson(userName, password, age, address) {
    return {
        UserName: userName,
        Password: password,
        Age: age,
        Address: address
    }
}

// Create object using Function Constructor
function Person(userName, password, age, address) {
    this.userName = userName;
    this.Password = password;
    this.Age = age;
    this.Address = address;
}


// onClick Event
function addPerson(event) {
    event.preventDefault();
    var check = validateFields(textFields);
    if (check) {
        // var person = createLiteralObject(textFields[0].value, textFields[1].value, textFields[2].value, textFields[3].value);
        var p = new Person(textFields[0].value, textFields[1].value, textFields[2].value, textFields[3].value)
        console.log(p);
        appendRecord(p);
        clearFields(textFields);
    }

}

function validateFields(inputs) {
    var flag = true;
    for (var i = 0; i < textFields.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].className = "error";
            errorLabels[i].innerText = "Please enter a " + textFields[i].getAttribute("id") + "!";
            flag = false;
        } else {
            inputs[i].className = "txtfield";
            errorLabels[i].innerText = "";
            flag = true;
        }
    }
    return flag;
}

function validate(id) {
    var i;
    switch (id) {
        case "userName":
            i = 0;
            break;
        case "password":
            i = 1;
            break;
        case "age":
            i = 2;
            break;
        case "address":
            i = 3;
            break;
    }
    if (textFields[i].value == "") {
        textFields[i].className = "error";
        errorLabels[i].innerText = "Please enter a " + id + "!";
    } else {
        textFields[i].className = "txtfield";
        errorLabels[i].innerText = "";
    }
}

function appendRecord(record) {
    var row = document.createElement("tr");
    for (var key in record) {
        row.innerHTML += "<td>" + record[key] + "</td>";
    }
    tabelBody.appendChild(row);

}

function clearFields(fields) {
    for (var i = 0; i < fields.length; i++) {
        fields[i].value = ""
    }
}








// function createErrorLabel(message) {
//     var errorText = document.createElement("label");
//     errorText.className = "errorText";
//     errorText.innerText = message;
//     return errorText;
// }


// function () {
//     if (fname.value == "") {
//         fname.className = "error";
//         nameContainer.innerText = "Please enter a name!";
//     } else {
//         fname.className = "txtfield";
//         nameContainer.innerText = "";
//     }

//     if (age.value == "") {
//         age.className = "error";
//         ageContainer.innerText = "Please enter a age!";
//     } else {
//         age.className = "txtfield";
//         ageContainer.innerText = "";
//     }
//     if (address.value == "") {
//         address.className = "error";
//         addressContainer.innerText = "Please enter a address!";
//     } else {
//         address.className = "txtfield";
//         addressContainer.innerText = "";
//     }
//     if (password.value == "") {
//         password.className = "error";
//         passwordContainer.innerText = "Please enter a password!";
//     } else {
//         password.className = "txtfield";
//         passwordContainer.innerText = "";
//     }

//     //personObject = { fName: fname.value, Age: age.value, Address: address.value, Password: password.value };


//     //appendRecord(personObject);
//     //appendRecord(fPerson(fname.value, age.value, address.value, password.value));
//     //appendRecord(Person(fname.value, age.value, address.value, password.value));
// }