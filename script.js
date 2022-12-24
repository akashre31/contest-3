let arr = [
    { id: 1 , name: "paul" , age: 19 , profession: "developer"},
    { id: 2 , name: "jake" , age: 20 , profession: "developer"},
    { id: 3 , name: "mill" , age: 21 , profession: "admin"},
    
]

// console.log(arr);
let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");

function filterByProfession() {

    result.innerHTML = "";


    let dropdownValue = dropdown.value;
    console.log(dropdownValue);

    
    if (dropdownValue == "profession") {
        alert("Please select a profession");
        return;
    }

  arr.forEach((item) => {

    // if the profession matches, then create a div and append it to the result div
    if (item.profession === dropdownValue) {
        let div = document.createElement("div");
        div.innerText = item.id + ".  Name:" + item.name + "    Profession:" + item.profession + "    Age:" + item.age;
        result.append(div);
    }
})

}


// adding event listener to the button
btn.addEventListener("click", filterByProfession)