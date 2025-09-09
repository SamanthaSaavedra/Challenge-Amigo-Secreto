let friends = []

function agregarAmigo(){
    let name = document.getElementById('amigo').value; 
    if (name == ''){
        alert("Por favor, inserte un nombre.")
    }
    else{
        friends.push(name)
        console.log(friends)
    }
    clearBox(); 
}

function clearBox(){
    document.getElementById("amigo").value = ''; 
}





