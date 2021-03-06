/*
Choose NPC class from the section below
Choose 0-2 optional modules
Pick a tier and set the stats for your NPC.
Choose and apply a template to your NPC, if applicable
Re-flavor, re-name, and customize
*/

var person_class =
[
  "Ace",
  "Assassin",
  "Assault",
  "Berserker",
  "Breacher",
  "Cataphract",
  "Engineer",
  "Spectre",
  "Ronin",
  "Scourer",
  "Bastion",
  "Demolisher",
  "Goliath",
  "Pyro",
  "Sentinel",
  "Archer",
  "Barricade",
  "Witch",
  "Hive",
  "Hornet",
  "Seeder",
  "Aegis",
  "Priest",
  "Mirage",
  "Scout",
  "Support",
  "Bombard",
  "Rainmaker",
  "Operator",
  "Sniper"
];

var person_modules = [ 0, 1, 2];

var person_template =
[
  "Ultra",
  "Elite",
  "Grunt",
  "Veteran",
  "Exotic",
  "Drone",
  "Mercenary",
  "Commander",
  "Pirate",
  "Spacer",
  "Outworlder",
  "Vehicle",
  "Ship"
];

var person_template_ultra =
[
  "Bersker",
  "Devastator",
  "Evasive",
  "Extra Deadly",
  "Fortress",
  "Legion",
  "Limitless",
  "Unstoppable",
  "Sight",
  "Superior Construction",
  "Superior Frame",
  "Superior Reactor",
  "Superior Targeting",
  "Supreme Maintenance",
  "Supreme Skirmisher",
  "ARGUS Armor",
  "Siege Shield",
  "Hellfire Projector",
  "Repulsion Field",
  "Spool Gun",
  "Ravager Turret",
  "SSC Slivershielding",
  "SSC Ex Hover Propulsion",
  "Volley Module",
  "WOLFHOUND Missile"
];

var person_template_veteran =
[
  "NHP Co-Pilot",
  "Acrobat",
  "Deadly",
  "Insulated",
  "Self Repair",
  "Feign Death",
  "Hacker",
  "Headshot",
  "Hardened Target",
  "Legendary",
  "Lesser Sight",
  "Limitless",
  "Lightning Reflexes",
  "Parting Gift",
  "Rodeo Master",
  "Shock Armor",
  "Skirmisher",
  "Slippery",
  "Steel Jaw",
  "Viper's Speed"
];

var person_template_exotic =
[
  "Bio-Integrated",
  "Blinkspace Carver",
  "Extrusion",
  "Living Weaponry",
  "Paracausal Weapon",
  "Ouroboros Brand",
  "Regenerator"
];

var person_template_mercenary =
[
  "Bounty Hunter",
  "Efficient Killer",
  "Call in Favor",
  "Scout Drone",
  "Tactical Retreat"
];

var person_template_commander =
[
  "Bolster Network",
  "Retribution",
  "Press On!",
  "Reposition",
  "Rank and File"
];

var person_template_pirate =
[
  "Boarding Clutch",
  "Splinter Rounds",
  "Borer Missiles",
  "Prying Claws",
  "Slaver Signal"
];

var person_template_spacer =
[
  "Concussion Gun",
  "Gravity Rifle",
  "Sealant Trap",
  "Thumper Grenades"
];

var person_tier = [ 1, 2, 3];

var person_name_first =
[
  'Akra', 'Aasathra', 'Antrara', 'Arava', 'Biri', 'Blendaeth', 'Burana', 'Chassath', 'Daar', 'Dentratha', 'Doudra', 'Driindar', 'Eggren', 'Farideh', 'Findex', 'Furrele', 'Gesrethe', 'Gilkass', 'Harann', 'Havilar', 'Hethress', 'Hillanot', 'Jaxi', 'Jezean', 'Jheri', 'Kadana', 'Kava', 'Koflnn', 'Megren', 'Mijira', 'Mishann', 'Nala', 'Nuthra', 'Perra', 'Pogranix', 'Pyxrin', 'Quespa', 'Raiann', 'Rezena', 'Ruloth', 'Saphara', 'Savaran', 'Sora', 'Surina', 'Synthrin', 'Tatyan', 'Thava', 'Uadflt', 'Vezera', 'Zykrofl', 'Adrex', 'Arjhan', 'Azzakh', 'Balasar', 'Baradad', 'Bharash', 'Bidreked', 'Dadalan', 'Dazzazn', 'Direcris', 'Donaar', 'Fax', 'Gargax', 'Ghesh', 'Gorbundus', 'Greethen', 'Heskan', 'Hirrathak', 'Illdrex', 'Kaladan', 'Kerkad', 'Kiirith', 'Kriv', 'Maagog', 'Medrash', 'Mehen', 'Mozikth', 'Mreksh', 'Mugrunden', 'Nadarr', 'Nithther', 'Norkruuth', 'Nykkan', 'Pandjed', 'Patrin', 'Pijjink', 'Quarethon', 'Rathkran', 'Rhogar', 'Rivaan', 'Sethrekar', 'Shamash', 'Shedinn', 'Srorthen', 'Tarhun', 'Torinn', 'Trynnicus', 'Valorean', 'Vrondiss', 'Zedaar', 'Anbera', 'Artin', 'Audhild', 'Balifra', 'Barbena', 'Bardryn', 'Bolhild', 'Dagnal', 'Dafifi', 'Delre', 'Diesa', 'Hdeth', 'Eridred', 'Falkrann', 'Fallthra', 'Finelien', 'Gillydd', 'Gunnloa', 'Gurdis', 'Helgret', 'Helja', 'Hihna', 'Illde', 'Jarana', 'Kathra', 'Kilia', 'Kristryd', 'Liftrasa', 'Marastyr', 'Mardred', 'Morana', 'Nalaed', 'Nora', 'Nurkara', 'Orifi', 'Ovina', 'Riswynn', 'Sannl', 'Therlin', 'Thodris', 'Torbera', 'Tordrid', 'Torgga', 'Urshar', 'Valida', 'Vistra', 'Vonana', 'Werydd', 'Whurdred', 'Yurgunn', 'Adrik', 'Alberich', 'Baern', 'Barendd', 'Beloril', 'Brottor', 'Dain', 'Dalgal', 'Darrak', 'Delg', 'Duergath', 'Dworic', 'Eberk', 'Einkil', 'Elaim', 'Erias', 'Fallond', 'Fargrim', 'Gardain', 'Garur', 'Gimgen', 'Gimurt', 'Harbek', 'Kildrak', 'Kilvar', 'Morgran', 'Morkral', 'Nalral', 'Nordak', 'Nuraval', 'Oloric', 'Olunt', 'Orsik', 'Oskar', 'Rangfim', 'Reirak', 'Rurik', 'Taklinn', 'Thoradin', 'Thorin', 'Thradal', 'Tordek', 'Traubon', 'Travok', 'Ulfgar', 'Urain', 'Veit', 'Vonbin', 'Vondal', 'Whurbin', 'Adria', 'Ahinar', 'Althaea', 'Anastrianna', 'Andraste', 'Antinua', 'Arara', 'Baelitae', 'Bethrynna', 'Birel', 'Caelynn', 'Chaedi', 'Claira', 'Dara', 'Drusilia', 'Elama', 'Enna', 'Faral', 'Felosial', 'Hatae', 'Ielenia', 'Ilanis', 'Irann', 'Jarsali', 'Jelenneth', 'Keyleth', 'Leshanna', 'Lia', 'Maiathah', 'Malquis', 'Meriele', 'Mialee', 'Myathethil', 'Naivara', 'Quelenna', 'Quillathe', 'Ridaro', 'Sariel', 'Shanairla', 'Shava', 'Silaqui', 'Sumnes', 'Theirastra', 'Thiala', 'Tiaathque', 'Traulam', 'Vadania', 'Valanthe', 'Valna', 'Xanaphia', 'Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis', 'Abalaba', 'Bimpnottin', 'Breena', 'Buvvie', 'Callybon', 'Caramip', 'Carlin', 'Cumpen', 'Dalaba', 'Donella', 'Duvamil', 'Ella', 'Ellyjoybell', 'Ellywick', 'Enidda', 'Lilli', 'Loopmottin', 'Lorilla', 'Luthra', 'Mardnab', 'Meena', 'Menny', 'Mumpena', 'Nissa', 'Numba', 'Nyx', 'Oda', 'Oppah', 'Orla', 'Panana', 'Pynfle', 'Quilla', 'Ranala', 'Reddlepop', 'Roywyn', 'Salanop', 'Shamil', 'Sifiress', 'Symma', 'Tana', 'Tenena', 'Tervaround', 'Tippletoe', 'Ulia', 'Unvera', 'Veloptima', 'Virra', 'Waywocket', 'Yebe', 'Zanna', 'Alston', 'Alvyn', 'Anverth', 'Arumawann', 'Bilbron', 'Boddynock', 'Brocc', 'Burgell', 'Cockaby', 'Crampernap', 'Dabbledob', 'Delebean', 'Dimble', 'Eberdeb', 'Eldon', 'Erky', 'Fablen', 'Fibblestib', 'Fonkin', 'Frouse', 'Frug', 'Gerbo', 'Gimble', 'Glim', 'lgden', 'Jabble', 'Jebeddo', 'Kellen', 'Kipper', 'Namfoodle', 'Oppleby', 'Orryn', 'Paggen', 'PaHabar', 'Pog', 'Qualen', 'Ribbles', 'Rimple', 'Roondar', 'Sappw', 'Seebo', 'Senteq', 'Sindri', 'Umpen', 'Warryn', 'Wiggens', 'Wobbles', 'Wrenn', 'Zaffrab', 'Zook', 'Abigayl', 'Aebria', 'Aeobreia', 'Breia', 'Aedria', 'Aodreia', 'Dreia', 'Aeliya', 'Aliya', 'Aella', 'Aemilya', 'Aemma', 'Aemy', 'Amy', 'Ami', 'Aeria', 'Arya', 'Aeva', 'Aevelyn', 'Evylann', 'Alaexa', 'Alyxa', 'Alina', 'Aelina', 'Aelinea', 'Allisann', 'Allysann', 'Alyce', 'Alys', 'Alysea', 'Alyssia', 'Aelyssa', 'Amelya', 'Maelya', 'Andreya', 'Aendrea', 'Arianna', 'Aryanna', 'Arielle', 'Aryell', 'Ariella', 'Ashlena', 'Aurora', 'Avaery', 'Avyrie', 'Bella', 'Baella', 'Brooklinea', 'Bryanna', 'Brynna', 'Brinna', 'Caemila', 'Chloe', 'Chloeia', 'Claira', 'Clayre', 'Clayra', 'Delyla', 'Dalyla', 'Elisybeth', 'Aelisabeth', 'Ellia', 'Ellya', 'Elyana', 'Eliana', 'Eva', 'Falyne', 'Genaesis', 'Genaesys', 'Gianna', 'Jianna', 'Janna', 'Graece', 'Grassa', 'Haenna', 'Hanna', 'Halya', 'Harperia', 'Peria', 'Hazyl', 'Hazel', 'Jasmyne', 'Jasmine', 'Jocelyne', 'Joceline', 'Celine', 'Kaelia', 'Kaelya', 'Kathryne', 'Kathrine', 'Kayla', 'Kaila', 'Kymber', 'Kimbera', 'Layla', 'Laylanna', 'Leia', 'Leya', 'Leah', 'Lilia', 'Lylia', 'Luna', 'Maedisa', 'Maelania', 'Melania', 'Maya', 'Mya', 'Myla', 'Milae', 'Naomi', 'Naome', 'Natalya', 'Talya', 'Nathylie', 'Nataliae', 'Thalia', 'Nicola', 'Nikola', 'Nycola', 'Olivya', 'Alivya', 'Penelope', 'Paenelope', 'Pynelope', 'Rianna', 'Ryanna', 'Ruby', 'Ryla', 'Samaentha', 'Samytha', 'Sara', 'Sarah', 'Savannia', 'Scarletta', 'Sharlotta', 'Caerlotta', 'Sophya', 'Stella', 'Stylla', 'Valentyna', 'Valerya', 'Valeria', 'Valia', 'Valea', 'Victorya', 'Vilettia', 'Ximena', 'Imaena', 'Ysabel', 'Zoe', 'Zoeia', 'Zoea', 'Zoesia', 'Adran', 'Aelar', 'Aerdeth', 'Ahvain', 'Aramil', 'Arannis', 'Aust', 'Azaki', 'Beiro', 'Berrian', 'Caeldrim', 'Carric', 'Dayereth', 'Dreali', 'Efieril', 'Eiravel', 'Enialis', 'Erdan', 'Erevan', 'Fivin', 'Galinndan', 'Gennal', 'Hadarai', 'Halimath', 'Heian', 'Himo', 'Immeral', 'Ivellios', 'Korfel', 'Lamlis', 'Laucian', 'Lucan', 'Mindartis', 'Naal', 'Nutae', 'Paelias', 'Peren', 'Quarion', 'Riardon', 'Rolen', 'Soveliss', 'Suhnae', 'Thamior', 'Tharivol', 'Theren', 'Theriatis', 'Thervan', 'Uthemar', 'Vanuath', 'Varis', 'Alain', 'Andry', 'Anne', 'Bella', 'Blossom', 'Bree', 'Callie', 'Chenna', 'Cora', 'Dee', 'Dell', 'Eida', 'Eran', 'Euphamia', 'Georgina', 'Gynnie', 'Harriet', 'Jasmine', 'Jillian', 'Jo', 'Kithri', 'Lavinia', 'Lidda', 'Maegan', 'Marigold', 'Merla', 'Myria', 'Nedda', 'Nikki', 'Nora', 'Olivia', 'Paela', 'Pearl', 'Pennie', 'Philomena', 'Portia', 'Robbie', 'Rose', 'Saral', 'Seraphina', 'Shaena', 'Stacee', 'Tawna', 'Thea', 'Trym', 'Tyna', 'Vani', 'Verna', 'Wella', 'Willow', 'Alton', 'Ander', 'Bernie', 'Bobbin', 'Cade', 'Callus', 'Corrin', 'Dannad', 'Danniel', 'Eddie', 'Egart', 'Eldon', 'Errich', 'Fildo', 'Finnan', 'Franklin', 'Garret', 'Garth', 'Gilbert', 'Gob', 'Harol', 'Igor', 'Jasper', 'Keith', 'Kevin', 'Lazam', 'Lerry', 'Lindal', 'Lyle', 'Merric', 'Mican', 'Milo', 'Morrin', 'Nebin', 'Nevil', 'Osborn', 'Ostran', 'Oswalt', 'Perrin', 'Poppy', 'Reed', 'Roscoe', 'Sam', 'Shardon', 'Tye', 'Ulmo', 'Wellby', 'Wendel', 'Wenner', 'Wes', 'Arha', 'Baggi', 'Bendoo', 'Bilga', 'Brakka', 'Creega', 'Drenna', 'Ekk', 'Emen', 'Engong', 'Fistula', 'Gaaki', 'Gorga', 'Grai', 'Greeba', 'Grigi', 'Gynk', 'Hrathy', 'Huru', 'Ilga', 'Kabbarg', 'Kansif', 'Lagazi', 'Lexre', 'Murgen', 'Murook', 'Myev', 'Nagarette', 'Neega', 'Nella', 'Nogu', 'Oolah', 'Ootah', 'Ovak', 'Ownka', 'Puyet', 'Reeza', 'Shautha', 'Silgre', 'Sutha', 'Tagga', 'Tawar', 'Tomph', 'Ubada', 'Vanchu', 'Vola', 'Volen', 'Vorka', 'Yevelda', 'Zagga', 'Argran', 'Braak', 'Brug', 'Cagak', 'Dench', 'Dorn', 'Dren', 'Druuk', 'Feng', 'Gell', 'Gnarsh', 'Grurnbar', 'Gubrash', 'Hagren', 'Henk', 'Hogar', 'Holg', 'Imsh', 'Karash', 'Karg', 'Keth', 'Korag', 'Krusk', 'Lubash', 'Megged', 'Mhurren', 'Mhflord', 'Morg', 'Nil', 'Nybarg', 'Odorr', 'Ohr', 'Rendar', 'Resh', 'Ront', 'Rrath', 'Sark', 'Scrag', 'Sheggen', 'Shump', 'Tanglar', 'Tarak', 'Thrag', 'Thokk', 'Trag', 'Ugarth', 'Varg', 'Vilberg', 'Yurk', 'Zed'
];


var person_name_last =
[
  'Akambheryliiax', 'Argenthrixus', 'Baharoosh', 'Beryntolthropal', 'Bhenkumbyrznaax', 'Caavylteradyn', 'Chumbyxirinnish', 'Clethtinthiallor', 'Daardendrian', 'Delmirev', 'Dhyrktelonis', 'Ebynichtomonis', 'Esstyrlynn', 'Fharngnarthnost', 'Ghaallixirn', 'Grrrmmballhyst', 'Gygazzylyshrift', 'Hashphronyxadyn', 'Hshhsstoroth', 'lmbixtellrhyst', 'Jerynomonis', 'Jharthraxyn', 'Kerrhylon', 'Kimbatuul', 'Lhamboldennish', 'Linxakasendalor', 'Mohradyllion', 'Mystan', 'Nemmonis', 'Norixius', 'Ophinshtalajiir', 'Orexijandilin', 'Pfaphnyrennish', 'Phrahdrandon', 'Pyraxtallinost', 'Qyxpahrgh', 'Raghthroknaar', 'Shestendeliath', 'Skaarzborroosh', 'Sumnarghthrysh', 'Tiammanthyilish', 'Turnuroth', 'Umbyrphrael', 'Vangdondalor', 'Verthisathurgiesh', 'Wiwyrholdalphiax', 'Wystongjiir', 'Xephyrbahnor', 'Yarjerit', 'Zzzxaaxthroth', 'Aranore', 'Balderk', 'Battlehammer', 'Bigtoe', 'Bloodkith', 'Bofdarm', 'Brawnanvil', 'Brazzik', 'Broodfist', 'Burrowfound', 'Caebrek', 'Daerdahk', 'Dankil', 'Daraln', 'Deepdelver', 'Durthane', 'Eversharp', 'FaHack', 'Fire-forge', 'Foamtankard', 'Frostbeard', 'Glanhig', 'Goblinbane', 'Goldfinder', 'Gorunn', 'Graybeard', 'Hammerstone', 'Helcral', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Morigak', 'Orcfoe', 'Rakankrak', 'RubyEye', 'Rumnaheim', 'Silveraxe', 'Silverstone', 'Steelfist', 'Stoutale', 'Strakeln', 'Strongheart', 'Thrahak', 'Torevir', 'Torunn', 'Trollbleeder', 'Trueanvil', 'Trueblood', 'Ungart', 'Aloro', 'Amakiir', 'Amastacia', 'Ariessus', 'Arnuanna', 'Berevan', 'Caerdonel', 'Caphaxath', 'Casilltenirra', 'Cithreth', 'Dalanthan', 'Eathalena', 'Erenaeth', 'Ethanasath', 'Fasharash', 'Firahel', 'Floshern', 'Galanodel', 'Goltorah', 'Hanali', 'Holimion', 'Horineth', 'Iathrana', 'temnr', 'lranapha', 'Koehlanna', 'Lathalas', 'Liadon', 'Meliamne', 'Mellerelel', 'Mystralath', 'Nalio', 'Netyoive', 'Ofandrus', 'Ostoroth', 'Othronus', 'Qualanthri', 'Raethran', 'Rothenel', 'Selevarun', 'Siannodel', 'Suithrasas', 'Sylvaranth', 'Teinithra', 'Tiltathana', 'Wasanthi', 'Withrethin', 'Xiloscient', 'Xistsrith', 'Yaeldrin', 'Albaratie', 'Bafflestone', 'Beren', 'Boondiggles', 'Cobblelob', 'Daergel', 'Dunben', 'Fabblestabble', 'Fapplestamp', 'Fiddlefen', 'Folkor', 'Garrick', 'Gimlen', 'Glittergern', 'Gobblefirn', 'Gummen', 'Horcusporcus', 'Humplebumple', 'Ironhide', 'Leffery', 'Lingenhall', 'Loofollue', 'Maekkelferce', 'Miggledy', 'Munggen', 'Murnig', 'Musgraben', 'Nackle', 'Ningel', 'Nopenstallen', 'Nucklestamp', 'Offund', 'Oomtrowl', 'Pilwicken', 'Pingun', 'Quillsharpener', 'Raulnor', 'Reese', 'Rofierton', 'Scheppen', 'Shadowcloak', 'Silverthread', 'Sympony', 'Tarkelby', 'Timbers', 'Turen', 'Umbodoben', 'Waggletop', 'Welber', 'Wildwander', 'Alder', 'Ash', 'Ashdown', 'Atwood', 'Barnes', 'Becker', 'Berry', 'Briar', 'Briggs', 'Brock', 'Brook', 'Bundy', 'Burnside', 'Burroughs', 'Bush', 'Butcher', 'Butler', 'Clay', 'Court', 'Cox', 'Croft', 'Cross', 'Crump', 'Dale', 'Deane', 'Delaney', 'Dike', 'Dodd', 'Ford', 'Forrest', 'Fox', 'Freeman', 'Garside', 'Gorsuch', 'Graves', 'Green', 'Greeves', 'Gross', 'Grove', 'Grover', 'Hall', 'Hawthorne', 'Hazel', 'Head', 'Heather', 'Hill', 'Holley', 'Holmes', 'Holt', 'Homer', 'Hooke', 'Hope', 'House', 'Howe', 'Hume', 'Hyde', 'Johnston', 'Kaye', 'Keats', 'Kerry', 'Kirk', 'Lamb', 'Layne', 'Lea', 'Lowell', 'March', 'Marsh', 'Marshal', 'Martin', 'May', 'Millerchip', 'Mills', 'Moore', 'Newby', 'Paine', 'Paxton', 'Perrin', 'Pike', 'Pitt', 'Preacher', 'Provost', 'Purple', 'Ridge', 'Rock', 'Rose', 'Rowen', 'Sangster', 'Sellers', 'Shaw', 'Short', 'Thorne', 'Underwood', 'Walsh', 'Wells', 'West', 'Whitney', 'Wilde', 'Wood', 'Wragge', 'Wynne', 'Appleblossom', 'Bigheart', 'Brightmoon', 'Brushgather', 'Cherrycheeks', 'Copperkettle', 'Deephollow', 'Elderberry', 'Fastfoot', 'Fastrabbit', 'Glenfellow', 'Goldfound', 'Goodbarrel', 'Goodearth', 'Goodbottle', 'Greenleaf', 'High-hill', 'Hilltopple', 'Hogcollar', 'Honeypot', 'Jamjar', 'Kettlewhistle', 'Leagallow', 'littlefoot', 'Nimblefingers', 'Porridgepot', 'Quickstep', 'Reedfellow', 'Shadowquick', 'Silvereyes', 'Smoothhands', 'Stonebridge', 'Stoutbridge', 'Stoutman', 'Strongbones', 'Sunmeadow', 'Swiftwhistle', 'Tallfellow', 'Tealeaf', 'Tenpenny', 'Thistletop', 'Thorngage', 'Tosscobble', 'Underbough', 'Underfoot', 'Warmwater', 'Whispermouse', 'Wildcloak', 'Wildheart', 'Wiseacre', 'Gultch', 'Goresmasher', 'Karaktoth', 'Krokk', 'Bogdoth', 'Bracka', 'Dargakk', 'Darknath', "Gul'Tchanth", 'Prathka', 'Rathkann', 'Rangakk', 'Amarzian', 'Carnago', 'Domarien', 'Iscitan', 'Meluzan', 'Menetrian', 'Paradas', 'Romazi', 'Sarzan', 'Serechor', 'Shadowhorn', 'Szereban', 'Torzalan', 'Trelenus', 'Trevethor', 'Tryphon', 'Vadu', 'Vrago'
];

var person_name_prefix =
[
  "Ad",
  "Al",
  "Ald",
  "An",
  "Bar",
  "Bart",
  "Bil",
  "Billy-Bob",
  "Bob",
  "Bur",
  "Cal",
  "Cam",
  "Chad",
  "Cor",
  "Dan",
  "Der",
  "Des",
  "Dil",
  "Do",
  "Don",
  "Dood",
  "Du",
  "Dud",
  "Dun",
  "Ed",
  "El",
  "En",
  "Er",
  "Fer",
  "Fred",
  "Fro",
  "Gene",
  "Geof",
  "Ger",
  "Gil",
  "Greg",
  "Gus",
  "Had",
  "Hal",
  "Han",
  "Har",
  "Hen",
  "Her",
  "Hud",
  "Jed",
  "Jen",
  "Jer",
  "Joe",
  "John",
  "Jeb",
  "Jed",
  "Jon",
  "Jor",
  "Kel",
  "Ken",
  "Ker",
  "Kir",
  "Lan",
  "Lem",
  "Len",
  "Lo",
  "Lod",
  "Lu",
  "Lud",
  "Mac",
  "Mal",
  "Mat",
  "Mel",
  "Mer",
  "Mil",
  "Mit",
  "Mun",
  "Ned",
  "Neil",
  "Nel",
  "New",
  "Ob",
  "Or",
  "Pat",
  "Phil",
  "Pod",
  "Ray",
  "Rib",
  "Rich",
  "Ro",
  "Rod",
  "Ron",
  "Sam",
  "Sean",
  "See",
  "Shel",
  "Shep",
  "Sher",
  "Sid",
  "Sig",
  "Son",
  "Tan",
  "Ted",
  "Theo",
  "Thom",
  "Thomp",
  "Tom",
  "Wehr",
  "Wil",
  "Aga",
  "Al",
  "An",
  "Ar",
  "As",
  "Bea",
  "Bar",
  "Ber",
  "Car",
  "Cat",
  "Cer",
  "Clau",
  "Cris",
  "Da",
  "Daph",
  "De",
  "Deb",
  "Di",
  "Dan",
  "Eil",
  "Eli",
  "Eri",
  "Fran",
  "Gra",
  "Ger",
  "Gem",
  "Gi",
  "Gil",
  "Gle",
  "Gwen",
  "Hai",
  "Hay",
  "Hel",
  "Hil",
  "Isa",
  "Ir",
  "Ja",
  "Jan",
  "Jen",
  "Jes",
  "Jo",
  "Jul",
  "Ka",
  "Kar",
  "Kat",
  "Kath",
  "Ker",
  "Kim",
  "La",
  "Lager",
  "Le",
  "Lea",
  "Lee",
  "Lin",
  "Lis",
  "Liz",
  "Lu",
  "Ma",
  "Mad",
  "Mag",
  "Mar",
  "Mau",
  "Max",
  "Meg",
  "Mel",
  "Mi",
  "Mil",
  "Mir",
  "Mo",
  "Na",
  "Nata",
  "Ne",
  "Pa",
  "Pho",
  "Ra",
  "Ro",
  "Ros",
  "Sam",
  "San",
  "Si",
  "Sie",
  "Sig",
  "Sta",
  "Stel",
  "Su",
  "Tam",
  "Tan",
  "Te",
  "Ti",
  "Tra",
  "Tri",
  "Ur",
  "Val",
  "Ver",
  "Vir",
  "Wen",
  "Wil",
  "Zel"
];
var person_name_suffix =
[
  "ald",
  "bal",
  "bald",
  "bart",
  "bas",
  "berry",
  "bert",
  "bin",
  "ble",
  "bles",
  "bo",
  "bree",
  "brett",
  "bro",
  "bur",
  "burry",
  "bus",
  "by",
  "cal",
  "can",
  "cas",
  "cott",
  "dan",
  "dard",
  "das",
  "den",
  "din",
  "do",
  "dock",
  "don",
  "dorf",
  "dos",
  "dous",
  "dred",
  "drin",
  "dun",
  "ely",
  "emone",
  "emy",
  "eny",
  "fal",
  "fel",
  "fen",
  "field",
  "ford",
  "fred",
  "frey",
  "frid",
  "frod",
  "fry",
  "furt",
  "gan",
  "gar",
  "gard",
  "gas",
  "gee",
  "gel",
  "ger",
  "gun",
  "hat",
  "ing",
  "ke",
  "kin",
  "lan",
  "las",
  "ler",
  "ley",
  "lie",
  "lin",
  "lo",
  "lock",
  "long",
  "lorf",
  "ly",
  "mal",
  "man",
  "min",
  "ming",
  "mon",
  "more",
  "mund",
  "my",
  "nand",
  "nard",
  "ner",
  "ney",
  "nie",
  "ny",
  "oly",
  "ory",
  "pond",
  "pont",
  "rey",
  "rick",
  "rie",
  "righ",
  "rim",
  "rod",
  "ry",
  "sby",
  "sel",
  "sen",
  "sey",
  "ski",
  "son",
  "sted",
  "ster",
  "sy",
  "ton",
  "top",
  "trey",
  "uki",
  "ul",
  "us",
  "van",
  "vey",
  "vin",
  "vis",
  "well",
  "wig",
  "win",
  "wise",
  "zer",
  "zon",
  "zor",
  "alla",
  "anda",
  "anna",
  "anne",
  "ayne",
  "be",
  "bel",
  "belle",
  "bella",
  "bie",
  "beth",
  "berta",
  "by",
  "ca",
  "cee",
  "chel",
  "chell",
  "chelle",
  "cia",
  "cie",
  "cine",
  "cella",
  "cy",
  "da",
  "dra",
  "di",
  "dia",
  "die",
  "dine",
  "drien",
  "dolin",
  "edith",
  "elyn",
  "ella",
  "elle",
  "emma",
  "ena",
  "ene",
  "enna",
  "et",
  "ette",
  "gela",
  "gee",
  "gie",
  "grid",
  "gy",
  "i",
  "ice",
  "icca",
  "ie",
  "iel",
  "iella",
  "igh",
  "ina",
  "isa",
  "issa",
  "ise",
  "jorie",
  "ke",
  "la",
  "lee",
  "lenna",
  "liana",
  "lie",
  "lin",
  "lina",
  "line",
  "linne",
  "lian",
  "llian",
  "lotte",
  "ly",
  "lyn",
  "ma",
  "mie",
  "my",
  "na",
  "ne",
  "nica",
  "nie",
  "nne",
  "ny",
  "phe",
  "phie",
  "phia",
  "ra",
  "re",
  "ree",
  "rie",
  "righ",
  "rina",
  "rine",
  "ris",
  "ry",
  "rys",
  "sa",
  "san",
  "sei",
  "selle",
  "sie",
  "sy",
  "ta",
  "te",
  "tha",
  "this",
  "thy",
  "ti",
  "tina",
  "tine",
  "trice",
  "trid",
  "tris",
  "trix",
  "trude",
  "ty",
  "uki",
  "ula",
  "una",
  "vie",
  "vy",
  "xie",
  "xy",
  "y",
  "ya",
  "yin",
  "zie",
  "zy"
];
