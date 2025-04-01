const button = document.querySelector(".add")

const backdrop = document.querySelector(".add__backdrop")

button.addEventListener("click", () => {
    backdrop.style.display = "flex"
})