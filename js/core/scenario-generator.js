


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

      var is_friendly = randomize(npc_friendly);

      var faction = document.createElement("h3");
      faction.innerHTML = npc_faction[Math.floor(Math.random() * npc_faction.length)] + " (" + is_friendly + " the party)";
      faction.className = "npc-h3";

      var signature = document.createElement("p");
      signature.innerHTML = randomize(npc_signature);

      var force = document.createElement("p");
      force.innerHTML = randomize(npc_force);


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

  var npc_class = randomize(person_class);
  var npc_template = randomize(person_template);
  // NOT randomizing npc_modules since this is a number
  var npc_modules = person_modules[Math.floor(Math.random() * person_modules.length)];
  // npc_tier is also a number
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
          npc_module[i] = randomize(person_template_ultra);
        case "Veteran":
          if (i > npc_tier) {
          } else {
          npc_module[i] = randomize(person_template_veteran);
          }
        case "Exotic":
          if (i > npc_tier) {
          } else {
          npc_module[i] = randomize(person_template_exotic);
          }
        case "Mercenary":
          npc_module[i] = randomize(person_template_mercenary);
        case "Commander":
          if (i > 0) {
          } else {
            npc_module[i] = randomize(person_template_commander);
          }
        case "Pirate":
          npc_module[i] = randomize(person_template_pirate);
        case "Spacer":
          npc_module[i] = randomize(person_template_spacer);
        default:
          npc_module[i] = "Basic class module (TBA)";
        break;
      };
      if (i < npc_modules) {
        module_list += npc_module[i] + ", ";
      }
    }
  }

  // Name the NPC.

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

  // Name the mech/ship used by the NPC.

  var rand_mech = Math.random();
  if (rand_mech < 0.33) {
    var rand_mech_adj = randomize(mech_name_adj);
    if (rand_mech < 0.15) {
      var rand_mech_noun = randomize(mech_name_animal);
    } else {
      var rand_mech_noun = randomize(mech_name_noun);
    }
    var mech_name = rand_mech_adj + " " + rand_mech_noun;
  } else if (rand_mech < 0.66) {
    if (rand_mech < 0.48) {
      var rand_mech_noun1 = randomize(mech_name_animal);
    } else {
      var rand_mech_noun1 = randomize(mech_name_noun);
    }
    var rand_mech_noun2 = randomize(mech_name_noun);
    var mech_name = rand_mech_noun1 + " of " + rand_mech_noun2;
  } else {
    if (rand_mech > 0.80) {
      var rand_mech_noun = randomize(mech_name_animal);
    } else {
      var rand_mech_noun = randomize(mech_name_noun);
    }
    var rand_mech_verb = randomize(mech_name_verb);
    var mech_name = rand_mech_noun + " " + rand_mech_verb;
}

  var npc_name_tag = document.createElement("h3");
  npc_name_tag.innerHTML = npc_name;
  document.getElementById("npcs").appendChild(npc_name_tag);

  var npc = document.createElement("p");
  npc.innerHTML = "<strong>Mech Name:</strong> " + mech_name + "<br /><strong>Mech Class:</strong> " + npc_class + "<br /><strong>Template:</strong> " + npc_template + "<br /><strong>Modules:</strong> " + module_list + "<br /><strong>Tier:</strong> " + npc_tier;
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
