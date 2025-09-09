let friends = []

function agregarAmigo(){
    let name = document.getElementById('amigo').value; 
    if (name == ''){
        alert("Por favor, inserte un nombre.");
    }
    else{
        
        friends.push(title(name)); 
        console.log(friends);
    }
    tranverseFriends(); 
    clearBox(); 
}

function clearBox(){
    document.getElementById("amigo").value = ''; 
}

function tranverseFriends(){
    let list = document.getElementById("listaAmigos"); 
    
    list.innerHTML = ""; 

    for(let i=0; i<friends.length; i++){
        list.innerHTML += `<li align=center>${friends[i]}</li>`; 

    }
}

function sortearAmigo(){
    
    if(friends.length>0){
      let random = Math.floor(Math.random() * friends.length);
      console.log(random);
      let secretFriend = friends[random];
      console.log(secretFriend);
      let result = document.getElementById("resultado");
      result.innerHTML = `<p>${secretFriend}</p`; 
    
    }
}

function title(str){
    return str.charAt(0).toUpperCase()+str.slice(1); 

}

    





