/* ---- TARGETS && INITIALIZERS ---- */
const url = "https://icanhazdadjoke.com/";
const btn = getElement(".btn");
const result = getElement(".result");

/* ---- SCRIPT ---- */

btn.addEventListener("click", () => {
  fetchDadJoke();
});

/* ---- FUNCTIONS ---- */

// Fetch dad joke from API
const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "educational",
    },
  });
  // console.log(response);
  const data = await response.json();
  result.textContent = data.joke;
};

//-- Get DOM element function
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${element} is not found`);
}
