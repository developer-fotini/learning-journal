const viewPosts = document.getElementById("view-posts")
const canva = document.querySelector(".canva")
const  freecodecamp = document.querySelector(".freecodecamp")
const wordpress = document.querySelector(".wordpress")

viewPosts.addEventListener("click", function(){
        canva.style.display = "grid"
        freecodecamp.style.display = "grid"
        wordpress.style.display = "grid"
        viewPosts.style.display = "none"
})