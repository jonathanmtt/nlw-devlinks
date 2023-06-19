function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // pegar a tag img

    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains("light")) {
        img.setAttribute('src', './assets/avatar1.png'),
        img.setAttribute('alt', 'Foto de Perfil de Jonathan M. na Quinta da Boa Vista-RJ')
    } else {
        img.setAttribute('src', './assets/avatar-light.png'),
        img.setAttribute('alt', 'Foto de Perfil de Jonathan M. em cima da Moto.')
    }
    
}
