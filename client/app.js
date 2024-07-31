const imgContainer = document.getElementById("img-container");
const messageList = document.getElementById("messageList");

async function getImages() {
  // make the fetch
  const res = await fetch("https://traveljournal-qahi.onrender.com/images");

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

async function getMessages() {
  const messages = await fetch(
    "https://traveljournal-qahi.onrender.com/message",
    (mode = "no-cors")
  );

  console.log(messages);

  const data = await messages.json();

  console.log(data);

  messageList.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].message);
    const message = document.createElement("li");
    message.textContent = `${data[i].username} ${data[i].message}`;
    messageList.appendChild(message);
  }
}

getMessages();

const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // get the form inputs
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  console.log(formValues);

  // make an API call when we submit the form
  const response = await fetch(
    "https://traveljournal-qahi.onrender.com/message",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }
  );
  const data = await response.json();
  console.log(data);
  getMessages();
});

//async function deleteMessage () {}

//add element & fetch get end point to receive messages
//make it look pretty

// Click Sound Effect
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

