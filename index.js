let specifyOpen = false
let specifyInput

document.getElementById("radio-container").addEventListener("click", function(e) {
  if (e.target.id === "other") {
    openSpecify()
  }
  else if (e.target.id !== "other" && e.target.id !== "specify-input" && specifyOpen) {
    closeSpecify()
  }
})

function openSpecify() {
  if (document.getElementById("other").value === "other") {
    specifyInput = document.createElement("input")
    specifyInput.id = "specify-input"
    specifyInput.ariaLabel = "Please specify"
    specifyInput.placeholder = "Please specify"
    specifyInput.classList.add("please-specify-input")
    document.getElementById("other-input").appendChild(specifyInput)
    specifyOpen = true
  }
}

function closeSpecify() {
  document.getElementById("other-input").removeChild(specifyInput)
  specifyOpen = false
}