    var colorFuente= "white";

    const muchosColores = ["green", "yellow", "purple", "red"];

    
    function saludar(id){
        let elem = document.getElementById(id);
        elem.style.color=colorFuente;
        elem.innerHTML="hello there";
        colorFuente=getComputedStyle(elem).backgroundColor;
    }
    function pintar(){
        for (let x=0; x<5; x++){
        let ident= "c"+(x+1);
        let cf= colores[x];
        rellenar(ident,cf);
    }
    }
    function rellenar(id,colorFondo){
        let elem = document.getElementById(id);
        elem.style.backgroundColor=colorFondo;
    }

 pintar();
