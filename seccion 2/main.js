addEventListener("DOMContentLoaded" ,(e)=>{
let form=document.querySelector('#input')
form.addEventListener("submit",(e)=>{
        let datosEntrada=Object.fromEntries(new FormData(e.target))
        e.preventDefault(); 
        let c=datosEntrada.ciudad    
        let f=Number(datosEntrada.Fahrenheit) 
        let res=(f =9/5)  + 32
        let tabla=document.querySelector("tbody")
        tabla.insertAdjacentHTML("beforeend",`
        <tr>
            <td>${c} </td>
            <td>${f} </td>
            <td>${res}  </td>
        </tr>
        `)
    }) 
})