var cookies = 0,
  clicks = 0,
  cps = 0,
  clickPower = 1,
  lifetimeCookies = 0;

var bigCookie = document.querySelector(".bigCookie");

var queriedObjects = {
  cookieCounter: document.querySelector("#cookies"),
  totalCps: document.querySelector(".cps"),
  totalClickCounter: document.querySelector(".totalClicks"),
  lifetimeCookies: document.querySelector(".lifetimeCookies"),
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

var shopObjects = {
  universalMultiplier: 1.15,
  grandmaPrice: 10,
  factoryPrice: 20,
  colonyPrice: 50,
  ancientRecipePrice: 200,
  ancientGrandmaPrice: 500,
  grandmaProduction: 1,
  factoryProduction: 2,
  colonyProduction: 5,
  ancientRecipeProduction: 30,
  ancientGrandmaProduction: 70,
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
  lifetimeCookies += clickPower;
  clicks++;
}

setInterval(() => {
  cookies += cps / 100;
  lifetimeCookies += cps / 100;

  queriedObjects.cookieCounter.textContent = Math.round(cookies);
  queriedObjects.totalCps.textContent = Math.round(cps);

  if (cookies > Math.pow(10, 7)) {
    let displayedClicks = clicks.toExponential();
    queriedObjects.totalClickCounter.textContent = displayedClicks;
  } else {
    queriedObjects.totalClickCounter.textContent = clicks;
  }

  if (lifetimeCookies > Math.pow(10, 7)) {
    let displayedLifetimeCookies = lifetimeCookies.toExponential();
    queriedObjects.lifetimeCookies.textContent = Math.round(
      displayedLifetimeCookies
    );
  } else {
    queriedObjects.lifetimeCookies.textContent = Math.round(lifetimeCookies);
  }
}, 10);

function Purchase(item) {
  switch (item) {
    case "grandma":
      if (cookies >= shopObjects.grandmaPrice) {
        cookies -= shopObjects.grandmaPrice;
        shopObjects.grandmaPrice *= shopObjects.universalMultiplier;
        buildingsOwned[0]++;
        queriedObjects.totalGrandmas.textContent = buildingsOwned[0];
      } else {
        console.log(
          "Nono, cookie monster is not getting enough cookies for that!"
        );
      }
      break;
    case "factory":
      if (cookies >= shopObjects.factoryPrice) {
        cookies -= shopObjects.factoryPrice;
        shopObjects.factoryPrice *= shopObjects.universalMultiplier;
        buildingsOwned[1]++;
        queriedObjects.totalFactories.textContent = buildingsOwned[1];
      } else {
        console.log(
          "Nono, cookie monster is not getting enough cookies for that!"
        );
      }
      break;
    case "colony":
      if (cookies >= shopObjects.colonyPrice) {
        cookies -= shopObjects.colonyPrice;
        shopObjects.colonyPrice *= shopObjects.universalMultiplier;
        buildingsOwned[2]++;
        queriedObjects.totalColonies.textContent = buildingsOwned[2];
      } else {
        console.log(
          "Nono, cookie monster is not getting enough cookies for that!"
        );
      }
      break;
    case "ancientRecipe":
      if (cookies >= shopObjects.ancientRecipePrice) {
        cookies -= shopObjects.ancientRecipePrice;
        shopObjects.ancientRecipePrice *= shopObjects.universalMultiplier;
        buildingsOwned[3]++;
        queriedObjects.totalRecipes.textContent = buildingsOwned[3];
      } else {
        console.log(
          "Nono, cookie monster is not getting enough cookies for that!"
        );
      }
      break;
    case "ancientGrandma":
      if (cookies >= shopObjects.ancientGrandmaPrice) {
        cookies -= shopObjects.ancientGrandmaPrice;
        shopObjects.ancientGrandmaPrice *= shopObjects.universalMultiplier;
        buildingsOwned[4]++;
        queriedObjects.totalAncientGrandmas.textContent = buildingsOwned[4];
      } else {
        console.log(
          "Nono, cookie monster is not getting enough cookies for that!"
        );
      }
      break;

    default:
      console.log("Error: Can't switch ", item);
      break;
  }

  UpdateCPS();
}

function UpdateCPS() {
  cps = 0;
  cps += shopObjects.grandmaProduction * buildingsOwned[0];
  cps += shopObjects.factoryProduction * buildingsOwned[1];
  cps += shopObjects.colonyProduction * buildingsOwned[2];
  cps += shopObjects.ancientRecipeProduction * buildingsOwned[3];
  cps += shopObjects.ancientGrandmaProduction * buildingsOwned[4];
}
