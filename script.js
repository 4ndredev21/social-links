function toggleMode() {
  const body = document.body
  body.classList.toggle("light")
  const image = document.querySelector("#profile img")
  const setAlt = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    image.setAttribute("src", "./assets/perfil-light.png")
    setAlt.setAttribute(
      "alt",
      "Foto futura do André Luis Mendes um dos melhores programadores do mundo !!! estudou muito!!!!"
    )
  } else {
    image.setAttribute("src", "./assets/perfil-dark.png")
    image.setAttribute(
      "alt",
      "imagem de perfil do andré luis programador aos 36 anos de idade em seu primeiro projeto no link tree feito com html ,css e javascript"
    )
  }
}
