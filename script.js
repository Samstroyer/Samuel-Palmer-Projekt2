var cookies = 0,
  clicks = 0,
  cps = 0,
  clickPower = 1,
  universalMultiplier = 1.15;

var bigCookie = document.querySelector(".bigCookie");

var queriedObjects = {
  cookieCounter: document.querySelector("#cookies"),
  totalCps: document.querySelector(".cps"),
  totalClickCounter: document.querySelector(".totalClicks"),
  totalGrandmas: document.querySelector(".grandmaAmount"),
  totalFactories: document.querySelector(".factoryAmount"),
  totalColonies: document.querySelector(".colonyAmount"),
  totalRecipes: document.querySelector(".ancientRecipeAmount"),
  totalAncientGrandmas: document.querySelector(".ancientGrandmaAmount"),
  grandmaPrice: document.querySelector(".grandmaPrice"),
  factoryPrice: document.querySelector(".factoryPrice"),
  colonyPrice: document.querySelector(".colonyPrice"),
  ancientRecipePrice: document.querySelector(".ancientRecipePrice"),
  ancientGrandmaPrice: document.querySelector(".ancientGrandmaPrice"),
};

var buildingsOwned = [
  (grandmas = 0),
  (factories = 0),
  (colonies = 0),
  (ancientRecipes = 0),
  (ancientgrandmas = 0),
];

bigCookie.addEventListener("click", handleClick);

function handleClick() {
  cookies += clickPower;
  clicks++;
}

setInterval(() => {
  cookies += cps;
  queriedObjects.cookieCounter.textContent = cookies;

  if (cookies > Math.pow(10, 7)) {
    var displayedClicks = clicks.toExponential();
    queriedObjects.totalClickCounter.textContent = displayedClicks;
  } else {
    queriedObjects.totalClickCounter.textContent = clicks;
  }
}, 10);

function Purchase(item) {
  switch (item) {
    case "grandma":
      break;
    case "factory":
      break;
    case "colony":
      break;
    case "ancientRecipe":
      break;
    case "ancientGrandma":
      break;

    default:
      console.log("Error: Can't switch ", item);
      break;
  }
}
