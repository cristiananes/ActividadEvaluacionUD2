import { Partida } from "./Scripts/partida.js";
function mostrarTabla(){
    var codigoHTML="<table border=1>"
    for (var i = 0; i < partida._mazo.length; i++) {
    codigoHTML+="<tr>"
    for (var j=0;j<partida._mazo[i].length; j++){
    if (partida._mazo[i][j]==null)
    codigoHTML="<td></td>"
    else
    codigoHTML+="<td><br>"+partida._mazo[i][j]+"<br></td>";
    }
    codigoHTML+="</tr>"
    }
    codigoHTML+="</table>"
    document.getElementById("mazo").innerHTML=codigoHTML;
    }