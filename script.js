/* ---- TARGETS && INITIALIZERS ---- */
const url = "https://icanhazdadjoke.com/";
const btn = getElement(".btn");
const result = getElement(".result");

/* ---- SCRIPT ---- */

// GET new joke on click
btn.addEventListener("click", () => {
  fetchDadJoke();
});

/* ---- FUNCTIONS ---- */

// Fetch dad joke from API
const fetchDadJoke = async () => {
  // init with loading text while loading
  result.textContent = "Loading...";
  try {
    // fetch request & push to DOM
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "educational",
      },
    });
    // console.log(response);
    const data = await response.json();
    result.textContent = data.joke;
  } catch (error) {
    result.textContent = "There is an error :(";
    result.style.color = "red";
    // console.log(error);
  }
};

// GET joke on page load
fetchDadJoke();

//-- Get DOM element function
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${element} is not found`);
}
