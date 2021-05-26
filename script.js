var neilLikes = document.querySelector("#neilLikes")
var nicholeLikes = document.querySelector("#nicholeLikes")
var jimLikes = document.querySelector("#jimLikes")

var likeCount = 0

thumbsUp.innerHTML = likeCount

function oneUp(element) {
    likeCount++
    element.innerHTML = likeCount
}

