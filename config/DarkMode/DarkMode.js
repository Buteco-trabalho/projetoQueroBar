window.onload = e => {
    let user = JSON.parse(sessionStorage.getItem("user"))
    if(user.darkMode == true){
        console.log("darkmode ativado")
        $("p, a, b").css({"color": "white"})
        $("body").css({"background": "#121212"})
        $(".head, footer").css({"background": "linear-gradient(0deg, rgba(18, 18, 18, 0.95), rgba(18, 18, 18, 0.95)), #FFFFFF"})
        console.log($(".head"))
        $("p, a, b, svg, h1, h2, h3, h4, button").css({"color": "#C4C4C4"})
        $(".darkMode").css({"background": "linear-gradient(0deg, rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), #FFFFFF"})
        $(".darkMode a").css({"color": "gray"})
    }
}