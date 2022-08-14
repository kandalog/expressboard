// const { default: axios } = require("axios");

const threadSectionDOM = document.querySelector(".thread-section");
const inputTextDOM = document.getElementById("inputTitle");
const inputContentDOM = document.getElementById("inputContent");
const formDOM = document.querySelector(".form-section");

let inputText = "";
let inputContentText = "";

// 全件表示(get)
const getAllThreads = async () => {
  try {
    let allThreads = await axios.get("/api/v1/threads");
    allThreads = allThreads.data
      .map((thread) => {
        const { title, content } = thread;
        console.log(title, content);
        return `
      <div class="single-thread">
        <h3>${title}</h3>
        <p>${content}</p>
      </div>
      `;
      })
      .join("");
    threadSectionDOM.innerHTML = allThreads;
  } catch (err) {
    console.log(err);
  }
};

getAllThreads();

// データの挿入(post)
inputTextDOM.addEventListener("change", (e) => {
  inputText = e.target.value;
  console.log(inputText);
});

inputContentDOM.addEventListener("change", (e) => {
  inputContentText = e.target.value;
  console.log(inputContentText);
});

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault;
  if (inputText && inputContentText) {
    console.log("add data");
    try {
      await axios.post("/api/v1/thread", {
        title: inputText,
        content: inputContentText,
      });
      getAllThreads();
    } catch (err) {
      console.log(err);
    }
  }
});
