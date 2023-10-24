let $ = document

let pressKey = $.getElementById('starter-text')
let ascii = $.getElementById('ascii')
let heading = $.getElementById('heading')
let infos = $.getElementById('infos')
let starter = $.getElementById('starter')

let keyCode = $.getElementById('keyCode')
let key = $.getElementById('key')
let eventLocation = $.getElementById('location')
let which = $.getElementById('which')
let code = $.getElementById('code')
let keyCodHeading = $.getElementById('keyCodHeading')


$.addEventListener('keydown', function(event){
    event.preventDefault()
    ascii.style.display = 'flex'
    heading.style.display = 'flex'
    infos.style.display = 'flex'
    starter.style.display = 'none'
    

    keyCode.innerHTML =  event.keyCode
    key.innerHTML = event.key
    eventLocation.innerHTML = event.location
    which.innerHTML = event.which
    code.innerHTML = event.code
    keyCodHeading.innerHTML = event.keyCode

})