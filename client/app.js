const imgContainer = document.getElementById("img-container");

async function getImages() {
  // make the fetch
  const res = await fetch("http://localhost:8080/images");

  // get the json from the response
  const data = await res.json();

  // put the images onto the DOM
  for (let i = 0; i < data.length; i++) {
    const img = document.createElement("img");
    img.src = data[i];
    imgContainer.appendChild(img);
  }
}

getImages();

const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // get the form inputs
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  console.log(formValues);

  // make an API call when we submit the form
  const response = await fetch("http://localhost:8080/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
});

//add element & fetch get end point to receive messages
//make it look pretty
