let gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  intervalreducecost: 1000,
  lvl0passive: 0,
  passive1lvlcost: 10,
  passivelvl0give: 1,
};
let engamount = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};
let enggive = {
  1: 20,
  2: 20,
  3: 10,
  4: 10,
  5: 10,
  6: 10,
  7: 10,
  8: 10,
  9: 10,
};
let engcost = {
  1: 300,
  2: 20,
  3: 10,
  4: 10,
  5: 10,
  6: 10,
  7: 10,
  8: 10,
  9: 10,
};
var interval = 1000;
let pastimerIDupdate = setInterval(() => tickinggold(), 1);
let goldpertick = 0;
function tickinggold() {
  goldpertick =
    gameData.passivelvl0give * gameData.lvl0passive +
    engamount[1] * enggive[1] +
    engamount[2] * enggive[2] +
    engamount[3] * enggive[3] +
    engamount[4] * enggive[4] +
    engamount[5] * enggive[5] +
    engamount[6] * enggive[6] +
    engamount[7] * enggive[7] +
    engamount[8] * enggive[8] +
    engamount[9] * enggive[9];
  return goldpertick;
}
let infoupdate = setInterval(
  () =>
    (document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick"),
  1
);
let tickingold = setInterval(() => (gameData.gold += goldpertick), interval);
let timerID = setInterval(
  () =>
    (document.getElementById("libFarmed").innerHTML =
      Math.round(gameData.gold) + " lib Farmed"),
  1
);
function mineGold() {
  gameData.gold += gameData.goldPerClick;
}
function buygoldperclick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost;
    gameData.goldPerClick += 1;
    gameData.goldPerClickCost *= 2;
    document.getElementById("perclickupgrade").innerHTML =
      "Upgrade Earning (level " +
      gameData.goldPerClick +
      ") Cost: " +
      gameData.goldPerClickCost +
      "lib";
  }
}
function passive1lvl() {
  if (gameData.gold >= gameData.passive1lvlcost) {
    gameData.gold -= gameData.passive1lvlcost;
    gameData.passive1lvlcost *= 1.07;
    gameData.lvl0passive += 1;
    document.getElementById("passiveupgrade").innerHTML =
      "buy +1 lib passive farm Cost: " + Math.round(gameData.passive1lvlcost);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel1() {
  if (gameData.gold >= engcost[1]) {
    gameData.gold -= engcost[1];
    engcost[1] *= 1.08;
    engamount[1] += 1;
    document.getElementById("buyfarmlevel1").innerHTML =
      "farm tier2 cost: " + Math.round(engcost[1]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function reduceinterval() {
  if (gameData.gold >= gameData.intervalreducecost) {
    gameData.gold -= gameData.intervalreducecost;
    gameData.intervalreducecost *= 2;
    interval *= 0.9;
    clearInterval(tickingold);
    tickingold = setInterval(() => (gameData.gold += goldpertick), interval);
    document.getElementById("interval").innerHTML =
      "Passive farming tick: " + Math.round(interval) + " ms";
    document.getElementById("reduceinterval").innerHTML =
      "reduce farming interval Cost: " + gameData.intervalreducecost;
  }
}
function buyfarmlevel2() {
  if (gameData.gold >= engcost[2]) {
    gameData.gold -= engcost[2];
    engcost[2] *= 1.1;
    engamount[2] += 1;
    document.getElementById("buyfarmlevel2").innerHTML =
      "farm tier3 cost: " + Math.round(engcost[2]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel3() {
  if (gameData.gold >= engcost[3]) {
    gameData.gold -= engcost[3];
    engcost[3] *= 1.14;
    engamount[3] += 1;
    document.getElementById("buyfarmlevel3").innerHTML =
      "farm tier4 cost: " + Math.round(engcost[3]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel4() {
  if (gameData.gold >= engcost[4]) {
    gameData.gold -= engcost[4];
    engcost[4] *= 1.17;
    engamount[4] += 1;
    document.getElementById("buyfarmlevel4").innerHTML =
      "farm tier5 cost: " + Math.round(engcost[4]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel5() {
  if (gameData.gold >= engcost[5]) {
    gameData.gold -= engcost[5];
    engcost[5] *= 1.2;
    engamount[5] += 1;
    document.getElementById("buyfarmlevel5").innerHTML =
      "farm tier6 cost: " + Math.round(engcost[5]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel6() {
  if (gameData.gold >= engcost[6]) {
    gameData.gold -= engcost[6];
    engcost[6] *= 1.24;
    engamount[6] += 1;
    document.getElementById("buyfarmlevel6").innerHTML =
      "farm tier7 cost: " + Math.round(engcost[6]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel7() {
  if (gameData.gold >= engcost[7]) {
    gameData.gold -= engcost[7];
    engcost[7] *= 1.27;
    engamount[7] += 1;
    document.getElementById("buyfarmlevel7").innerHTML =
      "farm tier8 cost: " + Math.round(engcost[7]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel8() {
  if (gameData.gold >= engcost[8]) {
    gameData.gold -= engcost[8];
    engcost[8] *= 1.3;
    engamount[8] += 1;
    document.getElementById("buyfarmlevel8").innerHTML =
      "farm tier9 cost: " + Math.round(engcost[8]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
function buyfarmlevel9() {
  if (gameData.gold >= engcost[9]) {
    gameData.gold -= engcost[9];
    engcost[9] *= 1.32;
    engamount[9] += 1;
    document.getElementById("buyfarmlevel9").innerHTML =
      "farm tier10 cost: " + Math.round(engcost[9]);
    document.getElementById("goldpertick").innerHTML =
      "You gain " + goldpertick + " lib per tick";
  }
}
let savefile = {};
function savegame() {
  savefile.gameData = gameData;
  savefile.engamount = engamount;
  savefile.enggive = enggive;
  savefile.engcost = engcost;
  savefile.interval = interval;
  data = JSON.stringify(savefile);
  console.log(data);
  alert("copied");
  navigator.clipboard.writeText(data);
}
function loadgame() {
  const loadinput = prompt("load savefile");
  let savefile = JSON.parse(loadinput);
  console.log(savefile);
  gameData = savefile.gameData;
  engamount = savefile.engamount;
  enggive = savefile.enggive;
  engcost = savefile.engcost;
  interval = savefile.interval;
}
let data = JSON.stringify(savefile);
function savestorageauto() {
  localStorage.setItem("userdata", data);
  const username = localStorage.getItem("userdata");
  console.log(username);
}
function savegameauto1() {
  savefile.gameData = gameData;
  savefile.engamount = engamount;
  savefile.enggive = enggive;
  savefile.engcost = engcost;
  savefile.interval = interval;
  data = JSON.stringify(savefile);
  console.log(data);
  navigator.clipboard.writeText(data);
}
let savegameauto = setInterval(() => savegameauto1(), 15000);
function storagesave() {
  localStorage.setItem("gamedata", data);
  console.log("hi");
}
let savegamestorage = setInterval(() => storagesave(), 16000);
let savegame1 = JSON.parse(localStorage.getItem("gamedata"));
if (savegame1 !== null) {
  gameData = savefile.gameData;
  engamount = savefile.engamount;
  enggive = savefile.enggive;
  engcost = savefile.engcost;
  interval = savefile.interval;
}
