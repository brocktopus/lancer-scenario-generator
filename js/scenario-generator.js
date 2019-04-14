


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

  document.getElementById("mission-source").innerHTML = source;
  document.getElementById("mission-hook").innerHTML = hook;
  document.getElementById("mission-location").innerHTML = location;

  // Add possibility for hazardous environment on mission location world.

  isHazardous("mission-location");
  document.getElementById("mission-complication").innerHTML = complication;


  // Populate NPC forces.

  var rand_npc = Math.floor(Math.random() * 4);

  if (rand_npc < 1) {
    
    var no_npcs_tag = document.createElement("p");
    var no_npcs = document.createTextNode("None.");
    no_npcs_tag.appendChild(no_npcs);
    document.getElementById("npcs").appendChild(no_npcs_tag);

  } else {

    for (var i = 0; i < rand_npc; i++) {

      var is_friendly = Math.random();

      if (is_friendly > 0.5) {
        var friendly = "Friendly";
      } else {
        var friendly = "Unfriendly";
      }

      var faction_tag = document.createElement("h3");
      var faction = document.createTextNode(npc_faction[Math.floor(Math.random() * npc_faction.length)] + " (" + friendly + " to the party)");
      faction_tag.appendChild(faction);
      faction_tag.className = "npc-h3";

      var signature_tag = document.createElement("p");
      var signature = document.createTextNode(npc_signature[Math.floor(Math.random() * npc_signature.length)]);
      signature_tag.appendChild(signature);

      var force_tag = document.createElement("p");
      var force = document.createTextNode(npc_force[Math.floor(Math.random() * npc_force.length)]);
      force_tag.appendChild(force);


      document.getElementById("npcs").appendChild(faction_tag);
      document.getElementById("npcs").appendChild(signature_tag);
      document.getElementById("npcs").appendChild(force_tag);

    }
  }
}

// Calculate possible hazardous environment, using document element ID as the input "element" argument.

function isHazardous(element) {
  var rand_hazard = Math.floor(Math.random() * 10);
  if (rand_hazard ==1 ) {
    var hazard_tag = document.createElement("p");
    hazard_tag.innerHTML = hazardous_environment[Math.floor(Math.random() * hazardous_environment.length)];
    //hazard_tag.appendChild(hazard);
    document.getElementById(element).appendChild(hazard_tag);
  }
}
