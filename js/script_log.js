function logar(){
    var usuario;
    var senha;
    var valo_user;
    var valo_senha;
    usuario=window.document.getElementById("user");
    valo_user=String(usuario.value);
    senha = window.document.getElementById("senha");
    valo_senha = String(senha.value);
   
    if((valo_user == "admin") && (valo_senha=="admin123")){
        window.location.replace("index.html");
    }else{
       alert("Usuario ou senha invalida");
       usuario.value="";
       senha.value="";
    }
}