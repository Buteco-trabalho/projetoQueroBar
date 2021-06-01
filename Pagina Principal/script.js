let group = [...document.getElementsByClassName("bardomacaco")]
group.forEach(e => {
    e.addEventListener('click',function (){
        window.location.href = './AmigosBarDoMacaco/grupo.html'
    })
})