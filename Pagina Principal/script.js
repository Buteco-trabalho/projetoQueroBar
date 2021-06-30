let group = [...document.getElementsByClassName("chat")]
group.forEach(e => {
    e.addEventListener('click',function (){
        console.log(e)
        console.log(e.id)
        window.location.href = `./${e.id}/grupo.html`
    })
})