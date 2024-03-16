const titulo = document.querySelector('#titulo')
const principal = document.querySelector('#principal')
const secundario = document.querySelector('#secundario')
const terceario = document.querySelector('#terceario')
const normal = document.querySelector('#normal')


function mudarClasse(nome_classe){
    titulo.className = ""
    titulo.classList.add(nome_classe)
}

principal.addEventListener("click", () => mudarClasse("titulo_principal"))
secundario.addEventListener("click", () => mudarClasse("titulo_secundario"))
terceario.addEventListener("click", () => mudarClasse("titulo_terceario"))
normal.addEventListener("click", () => mudarClasse(""))



