
const para= document.querySelector('p')
para.addEventListener('click',changeText );

function changeText(){
    let name= prompt('Enter unique names! have fun');
    para.textContent= "hello  " + name
}

console.log("hello world!");

let list = document.getElementById('l1');


var xhttp = new XMLHttpRequest();
var ar= [1,2,3,4,5];
function loadDoc() {
    let dummy= {
        "id": 99,
        "email": "george.bluth@reqres.in",
        "name": "Anuswant",
        "last_name": "Pandey",
        "avatar": "https://reqres.in/img/faces/1-image.jpg"
    }
    this.xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          let data = JSON.parse(this.response)
          console.log(data.data);
          populate(data.data)
      }
    };
    this.xhttp.open("GET", "https://reqres.in/api/users", true);
    this.xhttp.send();
    // $.ajax({
    //     url: "https://reqres.in/api/users",
    //     type: "POST",
    //     data: dummy,
    //     success: function(response){
    //         console.log(response);
    //         // xhttp.open("GET", "https://reqres.in/api/users", true);
    //         // xhttp.send();
    //     }
    // });
  }
  loadDoc()

function populate(ar){
    for (i in ar){
        let newLi= document.createElement('li');
        // newLi.innerText= ar[i];
        newLi.id= i
        newLi. appendChild(document. createTextNode("hey" + " " + ar[i].first_name));
        list.appendChild(newLi);
    }
}
