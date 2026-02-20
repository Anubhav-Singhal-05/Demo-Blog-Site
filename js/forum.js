
let numberOfimages = document.querySelectorAll(".img-div").length;
for(i=0; i<numberOfimages; i++){
    document.querySelectorAll(".img-div")[i].addEventListener("click", function(){
        window.location.href = "post.html";
    })
}

let numberOfPosts = document.querySelectorAll(".post-content h2").length;
for(i=0; i<numberOfPosts; i++){
    document.querySelectorAll(".post-content h2")[i].addEventListener("click", function(){
        window.location.href = "post.html";
    })
}

let numberOfUpvotes = document.querySelectorAll(".upvote").length;
for(i=0; i<numberOfUpvotes; i++){
    document.querySelectorAll(".upvote")[i].addEventListener("click", function(){
        console.log(this.innerHTML)
        if (this.style.color === ""){
            this.innerHTML = '<i class="fa-solid fa-thumbs-up" style="color: #005eff;">';
            this.style.color = "#005eff";
        } else {
            this.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
            this.style.color = "";
        }
        console.log(this.innerHTML);
    })
}



let numberOfDownvotes = document.querySelectorAll(".downvote").length;
for(i=0; i<numberOfDownvotes; i++){
    document.querySelectorAll(".downvote")[i].addEventListener("click", function(){
        if (this.style.color === ""){
            this.innerHTML = '<i class="fa-solid fa-thumbs-up" style="color: #d80000;"></i>';
            this.style.color = "#d80000";
        } else {
            this.innerHTML = '<i class="fa-regular fa-thumbs-up"></i>';
            this.style.color = "";
        }
    })
}



let numberOfLikes = document.querySelectorAll(".heart").length;
for(i=0; i<numberOfLikes; i++){
    document.querySelectorAll(".heart")[i].addEventListener("click", function(){
        if (this.style.color === ""){
            this.innerHTML = '<i class="fa-solid fa-heart style= color: #f80000"></i>&nbsp;&nbsp;Like';
            this.style.color = "#f80000";
        } else {
            this.innerHTML = '<i class="fa-regular fa-heart"></i>&nbsp;&nbsp;Like';
            this.style.color = "";
        }
    })
}

let numberOfComments = document.querySelectorAll(".comment").length;
for(i=0; i<numberOfComments; i++){
    document.querySelectorAll(".comment")[i].addEventListener("click", function(){
        window.location.href = "demo.html";
    })
}

document.querySelector(".btn-2").onclick = function (){
    window.location.href = "demo.html";
}

let numberOfButtons = document.querySelectorAll(".btn").length;
for(i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        window.location.href = "demo.html";
    })
}

let num_comments = document.querySelectorAll("#comment").length;
for (i=0; i<num_comments; i++){
    document.querySelectorAll("#comment")[i].addEventListener("click", function(){
        window.location.href = "demo.html";
    })
}
