const btn = document.getElementById("fetch-posts");
console.log(btn);
btn.onclick = () => {
    let xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4 && xhr.status === 200){
            console.log(xhr.responseText)
            let posts = JSON.parse(xhr.responseText)
            let postList
            for (const post of posts){
                console.log(post.title);
                /*postList +=
                "<h1>" + post.title + "</h1>"
                "<p>" + post.body + "</p>"*/
                postList += `<h1>${post.title}</h1><p>${post.body}</p>`
            }
        document.getElementById("post-list-container").innerHTML = postList;
        }
        else{
            console.log("Hiba a keresés során!")
        }
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
    xhr.send();
}