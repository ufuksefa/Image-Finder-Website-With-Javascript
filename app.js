const input = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn")
const clearBtn = document.querySelector("#clearBtn")
const form = document.querySelector("#form")
const listDiv = document.querySelector("#imageLists")

const key = "OJx1WUyAsGtwcxdOxyYNmPaEYAvbmpkqDyNOE-siZlM"

runEvents()
function runEvents(){
    form.addEventListener("submit", search)
}

function search(e){
    const value = input.value.trim()
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers: {
            Authorization: `Client-ID ${key}`
        }
    })
    .then((response)=>response.json())
    .then((data)=>{
        Array.from(data.results).forEach(images=>{
            createUI(images.urls.thumb)
        })
    })
    .catch(err=>console.log(err))

    e.preventDefault()
}

function createUI(url){
    const div = document.createElement("div")
    div.className = "col-4"
    const img = document.createElement("img")
    img.className = "img-fluid"
    img.src = url
    div.appendChild(img)
    listDiv.appendChild(div)
}