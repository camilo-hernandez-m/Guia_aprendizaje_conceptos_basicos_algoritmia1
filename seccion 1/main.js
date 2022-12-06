addEventListener("DOMContentLoaded"),(e)=>{
    function conjuncion()
    {
        // para obetener el valor//
        var conj1 = document.getElementById("conjuncion1").value;
        var conj2 = document.getElementById("conjuncion2").value;
        if(conj1 == "v" && conj2 == "v"){
            document.getElementById("res").value="verdadero";
        }else if((conj1 == "v" && conj2 == "f") || (conj1 =="f" && conj2 == "v") || (conj1 == "f" && conj2 == "f")){
            document.getElementById("res").value = "falso";
        }
    }
    function disyuncion()
    {
        // para obetener el valor//
        var dis1 = document.getElementById("disyuncion1").value;
        var dis2 = document.getElementById("disyuncion2").value;
        if(dis1 == "f" && dis2 == "f"){
            document.getElementById("resdis").value="falso";
        }else if((dis1 == "v" && dis2 == "v") || (dis1 =="v" && dis2 == "f") || (dis1 == "f" && dis2 == "v")){
            document.getElementById("resdis").value = "verdadero";
        }
    }
}