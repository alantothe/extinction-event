let crossOff = document.querySelectorAll("#cross-off li")



for(let i=0; i< crossOff.length; i++){

     let click = crossOff[i]


    crossOff[i].addEventListener('click', function(event){
      click.style.textDecoration = "line-through"
      console.log(crossOff[i])
    })
}

let fade = document.querySelectorAll("#fade li")

for(let i=0; i< fade.length; i++){
    let click = fade[i]
    
    fade[i].addEventListener('click', function(event){
        console.log("yo")
        click.style.opacity = "0.0";
        console.log(fade[i])
        console.log("yo")

    })




}

let gone = document.querySelectorAll("#row img")

for (let i=0; i< gone.length; i++){
    let click = gone[i]

    gone[i].addEventListener('click', function(event){
        console.log("yo")
        click.style.width = "0px";
    })
}
