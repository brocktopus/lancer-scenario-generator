


function scenarioGenerate() {

  // Assemble world type & features.

  var world = world_type[Math.floor(Math.random() * world_type.length)];
  var nature = natural_feature[Math.floor(Math.random() * natural_feature.length)];

  // Adding possibility of no anthropocenic features on inhospitable planets. (Only happens 50% of the time.)

  if (world.includes("inhospitable")) {

    var rand_inhospitable = Math.floor(Math.random() * 2);
    
    if (rand_inhospitable < 1) {
      var anthropocene = "None.";
    }
  }
  
  if (anthropocene == null) {
    var anthropocene = anthropocentric_feature[Math.floor(Math.random() * anthropocentric_feature.length)];
  }

  document.getElementById("world-type").innerHTML = world;
  document.getElementById("natural-feature").innerHTML = nature;
  document.getElementById("anthropocentric-feature").innerHTML = anthropocene;


  // Add possibility for hazardous environment on station world.

  isHazardous("natural-feature");


 // Assemble mission parameters.

  var source = mission_source[Math.floor(Math.random() * mission_source.length)];
  var hook = mission_hook[Math.floor(Math.random() * mission_hook.length)];
  var location = mission_location[Math.floor(Math.random() * mission_location.length)];
  var complication = mission_complication[Math.floor(Math.random() * mission_complication.length)];
  var sitrep = mission_sitrep[Math.floor(Math.random() * mission_sitrep.length)];

  document.getElementById("mission-source").innerHTML = source;
  document.getElementById("mission-hook").innerHTML = hook;
  document.getElementById("mission-location").innerHTML = location;

  // Add possibility for hazardous environment on mission location world.

  isHazardous("mission-location");
  document.getElementById("mission-complication").innerHTML = complication;
  document.getElementById("mission-sitrep").innerHTML = "For additional combat, incorporate a(n) <strong>" + sitrep + "</strong> scenario.";

  // Populate NPC forces (currently, max 4).

  var rand_npc = Math.floor(Math.random() * 4);

  if (rand_npc < 1) {
    
    var no_npcs = document.createElement("p");
    no_npcs.innerHTML = "None.";
    document.getElementById("npcs").appendChild(no_npcs);

  } else {

    for (var i = 0; i < rand_npc; i++) {

      // Establish orientation of NPCs toward party.

      var is_friendly = npc_friendly[Math.floor(Math.random() * npc_friendly.length)];

      var faction = document.createElement("h3");
      faction.innerHTML = npc_faction[Math.floor(Math.random() * npc_faction.length)] + " (" + is_friendly + " the party)";
      faction.className = "npc-h3";

      var signature = document.createElement("p");
      signature.innerHTML = npc_signature[Math.floor(Math.random() * npc_signature.length)];

      var force = document.createElement("p");
      force.innerHTML = npc_force[Math.floor(Math.random() * npc_force.length)];


      document.getElementById("npcs").appendChild(faction);
      document.getElementById("npcs").appendChild(signature);
      document.getElementById("npcs").appendChild(force);

    }
  }
}

// Calculate possible hazardous environment, using document element ID as the input "element" argument.

function isHazardous(element) {
  var rand_hazard = Math.floor(Math.random() * 10);
  if (rand_hazard ==1 ) {
    var hazard = document.createElement("p");
    hazard.innerHTML = hazardous_environment[Math.floor(Math.random() * hazardous_environment.length)];
    document.getElementById(element).appendChild(hazard);
  }
}
