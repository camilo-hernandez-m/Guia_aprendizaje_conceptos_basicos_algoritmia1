addEventListener("DOMContentLoaded"),(e)=>{
    function cambio(){
        let dol = 4800; 
        let re ;   
        let pe =parseInt(document.getElementById('pesos').value, 10);
         
        re = pe / dol ;
        document.getElementById('resul').innerHTML= re;
        
        }
}