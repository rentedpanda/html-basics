let list2= document.getElementById('l2');

var ar = [1,2,3,"66666","hey"]

function populate(ar){
    for(index in ar){
        let listElement= document.createElement('li')
        listElement.id= index;
        listElement.innerText= "namaste" + " " + ar[index].first_name + " " + ar[index].last_name;
        list2.appendChild(listElement);
    }
}

function loadDoc2(){
    // var xhttp = new XMLHttpRequest();
    this.xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data= JSON.parse(this.response)
            console.log(data.data);
            populate(data.data)
        }
      };
    this.xhttp.open("GET", "https://reqres.in/api/users", true);
    this.xhttp.send()
}

loadDoc2()
