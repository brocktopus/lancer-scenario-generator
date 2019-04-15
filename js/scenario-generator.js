


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
    document.getElementById("npc-forces").appendChild(no_npcs);

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


      document.getElementById("npc-forces").appendChild(faction);
      document.getElementById("npc-forces").appendChild(signature);
      document.getElementById("npc-forces").appendChild(force);

    }
  }

  // Bring in individual NPCs of note.

  var how_many_npcs = Math.floor(Math.random() * 4) + 1;
  for (var i = 0; i < how_many_npcs; i++) {
    composeNPC();
  }
}

function composeNPC() {

  // Sketch out individual NPC.

  var npc_class = person_class[Math.floor(Math.random() * person_class.length)];
  var npc_template = person_template[Math.floor(Math.random() * person_template.length)];
  var npc_modules = person_modules[Math.floor(Math.random() * person_modules.length)];
  var npc_tier = person_tier[Math.floor(Math.random() * person_tier.length)];

  var module_list = "";
  
  if (npc_modules == 0) {
    module_list = "None.";
  } else {
    var npc_module = new Array(npc_modules);
  }

  if (npc_modules > 0) {
    for (var i = 0; i < npc_modules; i++) {
      switch (npc_template) {
        case "Ultra":
          if (i == 0) {
            npc_modules++;
          }
          npc_module[i] = person_template_ultra[Math.floor(Math.random() * person_template_ultra.length)];
        case "Veteran":
          if (i > npc_tier) {
          } else {
          npc_module[i] = person_template_veteran[Math.floor(Math.random() * person_template_veteran.length)];
          }
        case "Exotic":
          if (i > npc_tier) {
          } else {
          npc_module[i] = person_template_exotic[Math.floor(Math.random() * person_template_exotic.length)];
          }
        case "Mercenary":
          npc_module[i] = person_template_mercenary[Math.floor(Math.random() * person_template_mercenary.length)];
        case "Commander":
          if (i > 0) {
          } else {
            npc_module[i] = person_template_commander[Math.floor(Math.random() * person_template_commander.length)];
          }
        case "Pirate":
          npc_module[i] = person_template_pirate[Math.floor(Math.random() * person_template_pirate.length)];
        case "Spacer":
          npc_module[i] = person_template_spacer[Math.floor(Math.random() * person_template_spacer.length)];
        default:
          npc_module[i] = "Basic class module (TBA)";
        break;
      };
      module_list += npc_module[i] + ". ";
    }
  }

  var rand_name = Math.random();
  if (rand_name < 0.5) {
    var npc_name = "TBA";
  } else {
    var npc_name = "TBA";
  }

  var npc_name_tag = document.createElement("h3");
  npc_name_tag.innerHTML = npc_name;
  document.getElementById("npcs").appendChild(npc_name_tag);

  var npc = document.createElement("p");
  npc.innerHTML = "<strong>Mech Class:</strong> " + npc_class + ".<br /><strong>Template:</strong> " + npc_template + ".<br /><strong>Modules:</strong> " + module_list + "<br /><strong>Tier:</strong> " + npc_tier + ".";
  document.getElementById("npcs").appendChild(npc);
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
