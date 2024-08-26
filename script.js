function toggleMode() {
  const body = document.body
  const image = document.querySelector("#profile img")

  body.classList.toggle("light")

  if (body.classList.contains("light")) {
    image.setAttribute("src", "./assets/perfil-light.png")
    image.setAttribute(
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

// Verifique o modo no carregamento inicial da página
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body

  // Se o modo light não estiver ativo, defina o modo dark como padrão
  if (!body.classList.contains("light")) {
    body.classList.remove("light")
  }
  toggleMode() // Força a verificar e aplicar o modo correto
})
