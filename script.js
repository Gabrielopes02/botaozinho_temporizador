var segpass = 0

function temporizador(){
    tempo = 10
    let data = new Date()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
   let texto = document.getElementsByClassName('teste')
    let div1 = document.getElementsByClassName('tempo1')[0]
    let div2 = document.getElementsByClassName('tempo2')[0]
    segpass+= 0.1
    
    let divisao = (tempo - segpass)*10
    texto[0].innerHTML = divisao

  div2.style.width = `${divisao}%`
    div1.style.width = `${100 - divisao}%`

  
    if(segpass >= tempo){

        segpass = 0
    }
    
}



setInterval(temporizador,100)
