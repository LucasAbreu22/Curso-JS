 function checar(){
     let nacio = document.querySelector('select#nacio')
     let res = document.querySelector('div#res')
     let pais = nacio.value

    if(pais == 'Brasil'){

        res.innerHTML = 'Brasileiro'
    }else{

        res.innerHTML = 'Estrangeiro'
    }
 }