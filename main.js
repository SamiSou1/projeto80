var listaDeConvidados = [];

function enviar(){
    var Convidado1 = document.getElementById("Convidado1").value; 
    listaDeConvidados.push(Convidado1);
    

    
    document.getElementById("btnEnviar").style.display ="none";
    document.getElementById("btnMostrarNomes").style.display ="none";
    document.getElementById("btnOrganizar").style.display ="inline-block";

}

function organizar(){
    listaDeConvidados.sort();
    
}

function pesquisar(){
    var s = document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<listaDeConvidados.length; j++){
        if(s==listaDeConvidados[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="Nome encontrado"+found+"vez(es)";
    console.log("Nome encontrado"+found+"vez(es)");
}

function escreverHtml(){
    var tamArray = listaDeConvidados.length;
    var ArrayHtml = [];
    var html ="";

    for(var i = 0;i<tamArray;i++){
        ArrayHtml.push("<h4>Nome: "+listaDeConvidados[i]+"</h4>");
    }
    console.log(ArrayHtml);

    html= ArrayHtml.join("");
    console.log(html);
    document.getElementById("mostrarNomes").innerHTML = html;   
}