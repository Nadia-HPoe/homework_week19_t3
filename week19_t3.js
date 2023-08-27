let container = document.getElementById("container");

function newPost() {
  const postData = {
    title: "Заголовок",
    body: "Текст поста",
  };

  let postTitle = document.createElement("p");
  let postBody = document.createElement("p");
  container.appendChild(postTitle);
  container.appendChild(postBody);
  postTitle.classList.add("title_style");
  postBody.classList.add("body_style");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((data) => {
      postData.title = document.getElementById("title").value;
      postData.body = document.getElementById("body").value;
      if (postData.title === "" || postData.body === "") {
        return;
      }
      postTitle.textContent = postData.title;
      postBody.textContent = postData.body;
    })
    .catch((error) => console.error("Ошибка:", error));
}
document.getElementById("postButton").addEventListener("click", newPost);
