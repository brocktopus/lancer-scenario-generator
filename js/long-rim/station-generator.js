


function stationGenerate() {

  // Assemble station seed, name, etc.

  var stationSeed = randomize(station_seed);
  
  var stationNameNum = Math.random();
  if (stationNameNum > .9) {
    var stationName = randomize(station_name) + " " + randomize(station_name_suffix);
  } else if (stationNameNum > .8) {
    var stationName = randomize(station_name_prefix) + " " + randomize(station_name);
  } else {
    var stationName = randomize(station_name);
  }

  var districtNameNum = Math.random();
  if (districtNameNum > .9) {
    var districtName = randomize(district_name) + " " + randomize(district_name_suffix);
  } else if (districtNameNum > .8) {
    var districtName = randomize(district_name_prefix) + randomize(district_name);
  } else {
    var districtName = randomize(district_name);
  }

  var stationPurposeNum = Math.random();
  if (stationPurposeNum > .5) {
    var stationPurpose = "Major purpose: " + randomize(station_purpose) + "<br>Minor purpose: " + randomize(station_purpose); 
  } else {
    var stationPurpose = "Major purpose: " + randomize(station_purpose);
  }

  var stationQuirk = randomize(station_quirk);

  var stationProblem = randomize(station_problem);


  document.getElementById("station-seed").innerHTML = stationSeed;
  document.getElementById("station-name").innerHTML = "Station: " + stationName;
  document.getElementById("district-name").innerHTML = districtName;
  document.getElementById("station-purpose").innerHTML = stationPurpose;
  document.getElementById("station-quirk").innerHTML = stationQuirk;
  document.getElementById("station-problem").innerHTML = stationProblem;

  // generate drink details
  
  var drinkName = randomize(drink1) + randomize(drink2);
  
  document.getElementById("drink-name").innerHTML = drinkName;
  
  
  // generate diving details
  
  var divingUp = randomize(pick_up);
  var divingDown = randomize(lose);
  
  document.getElementById("go-diving").innerHTML = "You <b>pick up</b>: " + divingUp + "<br>You <b>lose</b>: " + divingDown;


  // generate enterprise details

  var enterpriseName = randomize(enterprise_name);
  var enterpriseHolding = randomize(enterprise_holding);
  var enterpriseChar = randomize(enterprise_character);
  var entCharName = npcName();
  var enterpriseStrength = randomize(enterprise_strength);

  document.getElementById("enterprise-name").innerHTML = "Enterprise: " + enterpriseName;
  document.getElementById("enterprise-holding").innerHTML = enterpriseHolding;
  document.getElementById("enterprise-char-name").innerHTML = "NPC: " + entCharName;
  document.getElementById("enterprise-character").innerHTML = enterpriseChar;
  document.getElementById("enterprise-strength").innerHTML = enterpriseStrength;


  // generate NPC details

  var npc_name = npcName();

  var npcRand = Math.random();
  if (npcRand > .5) {
    var npcDescriptor = randomize(npc_descriptor) + ", " + randomize(npc_descriptor) + " " + randomize(npc_occupation);
  } else {
    var npcDescriptor = randomize(npc_descriptor) + ", " + randomize(npc_descriptor) + " " + randomize(npc_occupation) + " (a secret " + randomize(npc_alt_occupation) + ")";    
  }

  var npcQuirk = randomize(npc_quirk);
  var npcMotivation = randomize(npc_motivation1) + " " + randomize(npc_motivation2);

  document.getElementById("npc-name").innerHTML = "Station NPC: " + npc_name;
  document.getElementById("npc-descriptor-occupation").innerHTML = npcDescriptor;
  document.getElementById("npc-quirk").innerHTML = npcQuirk;
  document.getElementById("npc-motivation").innerHTML = npcMotivation;


  // generate pirate details
  
  var pirateNum = Math.random();
  if (pirateNum > .74) {
    var pirateName = Math.floor(Math.random() * 100) + " " + randomize(pirate2);
  } else {
    var pirateName = randomize(pirate1) + randomize(pirate2);
  }
  
  var pirateHustle = randomize(pirate_hustle);
  
  var pirateAsset = randomize(pirate_asset);
  
  document.getElementById("pirate-name").innerHTML = "Pirate Clan: " + pirateName;
  document.getElementById("pirate-hustle").innerHTML = pirateHustle;
  document.getElementById("pirate-asset").innerHTML = pirateAsset;


}


// Pull a random element from the input list Array.

function randomize(my_list, lcase) {
  var randNumber = Math.floor(Math.random() * my_list.length);
  var randElement = my_list[randNumber];
  if (lcase == undefined) {
    var myElement = randElement.charAt(0).toUpperCase() + randElement.slice(1);
    randElement = myElement;
  }
  return randElement;
}

function npcName() {
  var rand_name = Math.random();
  if (rand_name < 0.5) {
    var npc_first = randomize(person_name_first);
    var npc_last = randomize(person_name_last);
    var npc_name = npc_first + " " + npc_last;
  } else {
    var npc_prefix = randomize(person_name_prefix);
    var npc_suffix = randomize(person_name_suffix, true);
    var world_name = world_name_gen(1);
//    var world_name = randomize(rand_world_name);
    var npc_name = npc_prefix + npc_suffix + " of " + world_name;
  }
  return npc_name;
}
