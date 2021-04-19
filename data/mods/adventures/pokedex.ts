export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	palossand: {
		inherit: true,
		baseStats: {hp: 95, atk: 100, def: 135, spa: 100, spd: 85, spe: 20},
		abilities: {0: "Water Compaction", H: "Power Compaction", 1: "Sand Stream", },
		otherFormes: ["Palossand-Mega"],
		formeOrder: ["Palossand", "Palossand-Mega"],
	},
	centiskorch: {
		inherit: true,
		baseStats: {hp: 125, atk: 125, def: 85, spa: 70, spd: 85, spe: 65},
		abilities: {0: "Flash Fire", H: "Flame Body", 1: "Arena Trap"},	
	},
	trevenant: {
		inherit: true,
		baseStats: {hp: 85, atk: 110, def: 87, spa: 65, spd: 122, spe: 56},
		abilities: {0: "Natural Cure", 1: "Regenerator", H: "Harvest"},
	},
	samurott: {
		inherit: true,
		baseStats: {hp: 95, atk: 118, def: 85, spa: 100, spd: 70, spe: 70},
		abilities: {0: "Torrent", 1: "Shell Armor", H: "Lightning Rod"},
	},
	emboar: {
		inherit: true,
		baseStats: {hp: 110, atk: 133, def: 115, spa: 60, spd: 85, spe: 35},
		abilities: {0: "Blaze", 1: "Reckless", H: "Intimidate"},
	},
	incineroar: {
		inherit: true,
		baseStats: {hp: 95, atk: 115, def: 90, spa: 60, spd: 85, spe: 90},
		abilities: {0: "Blaze", 1: "Intimidate", H: "Moxie"},
	},
	chesnaught: {
		inherit: true,
		baseStats: {hp: 98, atk: 107, def: 132, spa: 44, spd: 105, spe: 44},
		abilities: {0: "Overgrow", 1: "Bulletproof", H: "Iron Barbs"},
	},
	blastoise: {
		inherit: true,
		types: ["Water", "Steel"],
		abilities: {0: "Torrent", H: "Rain Dish", 1: "Mega Launcher"},	
	},
	blastoisemega: {
		inherit: true,
		types: ["Water", "Steel"],
	},
	guzzlord: {
		inherit: true,
		baseStats: {hp: 223, atk: 127, def: 71, spa: 47, spd: 61, spe: 41},
	},
	drifblim: {
		inherit: true,
		baseStats: {hp: 150, atk: 60, def: 54, spa: 120, spd: 64, spe: 80},
	},
	oricorio: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 70, spa: 108, spd: 70, spe: 113},
	},
	oricoriopau: {
		inherit: true,
		types: ["Fairy", "Flying"],
		baseStats: {hp: 65, atk: 110, def: 70, spa: 108, spd: 70, spe: 113},
	},
	oricoriosensu: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 70, spa: 108, spd: 70, spe: 113},
	},
	oricoriopompom: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 70, spa: 108, spd: 70, spe: 113},
	},
	bruxish: {
		inherit: true,
		baseStats: {hp: 88, atk: 135, def: 70, spa: 70, spd: 70, spe: 92},
	},
	malamar: {
		inherit: true,
		baseStats: {hp: 96, atk: 102, def: 98, spa: 68, spd: 85, spe: 83},
	},
	seaking: {
		inherit: true,
		baseStats: {hp: 80, atk: 122, def: 65, spa: 105, spd: 80, spe: 78},
	},
	basculin: {
		inherit: true,
		baseStats: {hp: 70, atk: 152, def: 65, spa: 80, spd: 55, spe: 98},
	},
	barraskewda: {
		inherit: true,
		baseStats: {hp: 61, atk: 123, def: 60, spa: 90, spd: 50, spe: 136},
	},
	kabutops: {
		inherit: true,
		baseStats: {hp: 75, atk: 115, def: 115, spa: 65, spd: 70, spe: 80},
		abilities: {0: "Swift Swim", H: "Adaptability", 1: "Weak Armor"},
	},
	weezing: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 120, spa: 115, spd: 70, spe: 60},
		abilities: {0: "Aftermath", H: "Levitate", 1: "Neutralizing Gas"},
	},
	weezinggalar: {
		inherit: true,
		baseStats: {hp: 65, atk: 90, def: 120, spa: 115, spd: 70, spe: 60},
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 95, atk: 115, def: 100, spa: 55, spd: 75, spe: 85},
		abilities: {0: "Aftermath", H: "Intimidate", 1: "Poison Point"},
	},
	pidgeot: {
		inherit: true,
		baseStats: {hp: 93, atk: 95, def: 75, spa: 95, spd: 70, spe: 101},
		abilities: {0: "Keen Eye", H: "Gale Wings", 1: "Defiant"},
	},
	pidgeotmega: {
		inherit: true,
		baseStats: {hp: 93, atk: 115, def: 85, spa: 135, spd: 80, spe: 121},
	},
	golduck: {
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 100, atk: 122, def: 78, spa: 125, spd: 80, spe: 95},
		abilities: {0: "Simple", H: "Psychic Surge", 1: "Cloud Nine"},
	},
	pangoro: {
		inherit: true,
		types: ["Fighting", "Dark"],
		baseStats: {hp: 95, atk: 124, def: 115, spa: 69, spd: 75, spe: 58},
		abilities: {0: "Iron Fist", H: "Scrappy", 1: "Prankster"},	
	},
    regigigas: {
		inherit: true,
		baseStats: {hp: 110, atk: 160, def: 110, spa: 80, spd: 110, spe: 110},
		abilities: {0: "Slow Start"},	
	},
	articuno: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 95, spa: 125, spd: 100, spe: 85},
		abilities: {0: "Pressure", H: "Snow Warning", 1: "Multiscale"},	
	},
	froslass: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 70, spa: 110, spd: 70, spe: 110},
		abilities: {0: "Snow Cloak", H: "Snow Warning", 1: "Cursed Body"},	
	},
	ursaring: {
		inherit: true,
		baseStats: {hp: 90, atk: 130, def: 75, spa: 75, spd: 75, spe: 85},
	},
	sandslash: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 115, spa: 65, spd: 75, spe: 85},
		abilities: {0: "Skill Link", 1: "Water Absorb", H: "Sand Rush"},		
	},
	sandslashalola: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 115, spa: 45, spd: 95, spe: 85},
		abilities: {0: "Skill Link", 1: "Permafrost", H: "Slush Rush"},		
	},
	raticate: {
		inherit: true,
		baseStats: {hp: 65, atk: 121, def: 70, spa: 90, spd: 80, spe: 97},	
	},
	raticatealola: {
		inherit: true,
		baseStats: {hp: 85, atk: 111, def: 80, spa: 80, spd: 90, spe: 77},
	},
	tapubulu: {
		inherit: true,
		baseStats: {hp: 100, atk: 130, def: 115, spa: 55, spd: 95, spe: 75},
	},
	bastiodon: {
		inherit: true,
		types: ["Dragon", "Steel"],
		baseStats: {hp: 60, atk: 82, def: 168, spa: 47, spd: 138, spe: 30},
		abilities: {0: "Unaware", H: "Soundproof", 1:"Dauntless Shield"},
	},
	rampardos: {
		inherit: true,
		baseStats: {hp: 137, atk: 165, def: 60, spa: 55, spd: 50, spe: 68},
		abilities: {0: "Rock Head", 1: "Reckless", H: "Mold Breaker"},		
	},
	exploud: {
		inherit: true,
		baseStats: {hp: 111, atk: 71, def: 63, spa: 111, spd: 111, spe: 68},
		abilities: {0: "Punk Rock", 1: "Scrappy", H: "Soundproof"},		
	},
	xatu: {
		inherit: true,
		baseStats: {hp: 85, atk: 75, def: 105, spa: 95, spd: 125, spe: 45},
		abilities: {0: "Oracle", 1: "Forewarn", H: "Magic Bounce"},	
	},
	mew: {
		inherit: true,
		abilities: {0: "Synchronize", 1: "Psychic Surge", H: "Protean"},			
	},
	florges: {
		inherit: true,
		types: ["Fairy", "Grass"],
		baseStats: {hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75},
		abilities: {0: "Flower Veil", 1: "Regenerator", H: "Harvest"},
	},
	floette: {
		inherit: true,
		types: ["Fairy", "Grass"],
		baseStats: {hp: 58, atk: 45, def: 47, spa: 105, spd: 108, spe: 72},
		abilities: {0: "Flower Veil", 1: "Regenerator", H: "Chlorophyll"},
	},
	persianalola: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 60, spa: 95, spd: 85, spe: 115},
		abilities: {0: "Fur Coat", 1: "Technician", H: "Sheer Force"},
	},
	persian: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 60, spa: 85, spd: 85, spe: 115},
		abilities: {0: "Super Luck", 1: "Technician", H: "Tough Claws"},
	},
	starmie: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 95, spa: 100, spd: 95, spe: 115},
		abilities: {0: "Neuroforce", 1: "Natural Cure", H: "Analytic"},
	},
	ludicolo: {
		inherit: true,
		baseStats: {hp: 80, atk: 70, def: 70, spa: 100, spd: 120, spe: 90},
		abilities: {0: "Swift Swim", 1: "Rain Dish", H: "Dancer"},
	},
	ariados: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 115, spa: 65, spd: 75, spe: 90},
		abilities: {0: "Insomnia", 1: "Compound Eyes", H: "Sniper"},
	},
	bellossom: {
		inherit: true,
		baseStats: {hp: 75, atk: 5, def: 30, spa: 100, spd: 100, spe: 110},
		abilities: {0: "Chlorophyll", 1: "Natural Cure", H: "Dancer"},
		types: ["Grass", "Fire"],
	},
	hitmontop: {
		inherit: true,
		baseStats: {hp: 65, atk: 115, def: 105, spa: 55, spd: 110, spe: 70},
		abilities: {0: "Intimidate", 1: "Technician", H: "Dancer"},
	},
	hitmonlee: {
		inherit: true,
		baseStats: {hp: 65, atk: 120, def: 63, spa: 55, spd: 110, spe: 107},
	},
	hitmonchan: {
		inherit: true,
		baseStats: {hp: 65, atk: 115, def: 89, spa: 55, spd: 110, spe: 86},
	},
	dhelmise: {
		inherit: true,
		baseStats: {hp: 80, atk: 131, def: 100, spa: 86, spd: 90, spe: 40},
		abilities: {0: "Steelworker", H: "Illusion"},
	},
	aggronmega: {
		inherit: true,
		baseStats: {hp: 70, atk: 140, def: 200, spa: 60, spd: 80, spe: 80},
	},
	eelektross: {
		inherit: true,
		baseStats: {hp: 85, atk: 120, def: 85, spa: 120, spd: 85, spe: 50},
	},
	swoobat: {
		inherit: true,
		baseStats: {hp: 67, atk: 97, def: 55, spa: 97, spd: 95, spe: 114},
	},
	jynx: {
		inherit: true,
		baseStats: {hp: 65, atk: 50, def: 35, spa: 165, spd: 35, spe: 115},
	},
	walrein: {
		inherit: true,
		baseStats: {hp: 110, atk: 130, def: 100, spa: 55, spd: 110, spe: 30},
	},
	krookodile: {
		inherit: true,
		baseStats: {hp: 105, atk: 117, def: 80, spa: 65, spd: 70, spe: 92},
		abilities: {0: "Intimidate", 1: "Moxie", H: "Sniper"},
	},
	gigalith: {
		inherit: true,
		baseStats: {hp: 95, atk: 135, def: 135, spa: 60, spd: 85, spe: 25},
		abilities: {0: "Sturdy", 1: "Lightning Rod", H: "Sand Force"},
	},
	armaldo: {
		inherit: true,
		baseStats: {hp: 75, atk: 125, def: 100, spa: 70, spd: 80, spe: 75},
		abilities: {0: "Battle Armor", 1: "Technician", H: "Swift Swim"},
		types: ["Bug", "Water"],
	},
	shedinja: {
		inherit: true,
		baseStats: {hp: 1, atk: 100, def: 100, spa: 145, spd: 145, spe: 45},
	},
	sableye: {
		inherit: true,
		baseStats: {hp: 50, atk: 95, def: 75, spa: 85, spd: 65, spe: 50},
	},
	sableyemega: {
		inherit: true,
		baseStats: {hp: 50, atk: 105, def: 125, spa: 105, spd: 115, spe: 50},
	},
	toucannon: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 90, spa: 75, spd: 90, spe: 60},
	},
	heliolisk: {	
		inherit: true,
		baseStats: {hp: 82, atk: 55, def: 52, spa: 129, spd: 94, spe: 109},
	},
	durant: {
		inherit: true,
		baseStats: {hp: 58, atk: 109, def: 112, spa: 48, spd: 88, spe: 109},
		abilities: {0: "Download", 1: "Hustle", H: "Truant"},
	},
	nidoking: {	
		inherit: true,
		baseStats: {hp: 81, atk: 85, def: 77, spa: 102, spd: 75, spe: 85},
	},
	nidoqueen: {	
		inherit: true,
		baseStats: {hp: 90, atk: 92, def: 87, spa: 92, spd: 85, spe: 76},
	},
	tyrantrum: {
		inherit: true,
		baseStats: {hp: 82, atk: 121, def: 119, spa: 69, spd: 69, spe: 71},
		abilities: {0: "Strong Jaw", 1: "Solid Rock", H: "Rock Head"},
	},
	wishiwashischool: {
		inherit: true,
		types: ["Water", "Dragon"],
	},
	gengar: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 60, spa: 130, spd: 95, spe: 110},
		abilities: {0: "Cursed Body", 1: "Merciless", H: "Levitate"},
	},
	gengarmega: {
		inherit: true,
		baseStats: {hp: 60, atk: 65, def: 80, spa: 170, spd: 115, spe: 130},
		abilities: {0: "Cursed Body", 1: "Merciless", H: "Levitate"},
	},
	hoopa: {
		inherit: true,
		baseStats: {hp: 80, atk: 90, def: 60, spa: 150, spd: 130, spe: 90},
	},
	hoopaunbound: {
		inherit: true,
		baseStats: {hp: 90, atk: 160, def: 60, spa: 170, spd: 130, spe: 70},
		abilities: {0: "Magician", 1: "Skill Link", H: "Unaware"},
	},
	camerupt: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 85, spa: 125, spd: 90, spe: 40},
		abilities: {0: "Magma Armor", 1: "Solid Rock", H: "Drought"},
	},
	cameruptmega: {
		inherit: true,
		baseStats: {hp: 80, atk: 120, def: 115, spa: 165, spd: 120, spe: 20},
	},
	houndoom: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 50, spa: 110, spd: 110, spe: 95},
		abilities: {0: "Drought", 1: "Flash Fire", H: "Unnerve"},
	},
	houndoommega: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 90, spa: 140, spd: 120, spe: 115},
	},
	cacturne: {
		inherit: true,
		baseStats: {hp: 70, atk: 125, def: 80, spa: 125, spd: 80, spe: 55},
		abilities: {0: "Sand Veil", 1: "Drought", H: "Water Absorb"},
	},
	murkrow: {
		inherit: true,
		baseStats: {hp: 50, atk: 85, def: 82, spa: 85, spd: 82, spe: 91},
	},
	honchkrow: {
		inherit: true,
		baseStats: {hp: 120, atk: 125, def: 72, spa: 105, spd: 72, spe: 71},
		abilities: {0: "Insomnia", 1: "Super Luck", H: "Moxie"},
	},
	celebi: {
		inherit: true,
		types: ["Grass", "Fairy"],
		abilities: {0: "Natural Cure", H: "Grassy Surge"},
	},
	audinomega: {
		inherit: true,
		abilities: {0: "Regenerator"},
	},
	ferrothorn: {
		inherit: true,
		abilities: {0: "Iron Barbs", 1: "Anticipation", H: "Shell Armor"},
	},
	yanmega: {
		inherit: true,
		baseStats: {hp: 86, atk: 76, def: 86, spa: 116, spd: 66, spe: 95},
	},
	fearow: {
		inherit: true,
		baseStats: {hp: 75, atk: 125, def: 65, spa: 101, spd: 61, spe: 100},
	},
	vileplume: {
		inherit: true,
		baseStats: {hp: 105, atk: 80, def: 85, spa: 110, spd: 90, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Corrosion" , H: "Effect Spore"},
	},
	gloom: {
		inherit: true,
		baseStats: {hp: 85, atk: 70, def: 80, spa: 95, spd: 80, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Corrosion" , H: "Effect Spore"},
	},
	onix: {
		inherit: true,
		baseStats: {hp: 65, atk: 75, def: 160, spa: 35, spd: 45, spe: 70},
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Dry Skin"},
	},
	rhydon: {
		inherit: true,
		baseStats: {hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40},
		abilities: {0: "Lightning Rod", 1: "Huge Power", H: "Reckless"},
	},
	rhyperior: {
		inherit: true,
		baseStats: {hp: 115, atk: 140, def: 120, spa: 45, spd: 75, spe: 40},
		abilities: {0: "Lightning Rod", 1: "Solid Rock", H: "Sand Stream"},
	},
	tauros: {
		inherit: true,
		baseStats: {hp: 85, atk: 130, def: 95, spa: 40, spd: 70, spe: 110},
		abilities: {0: "Sheer Force", 1: "Anger Point", H: "Super Luck"},
	},
	mamoswine: {
		inherit: true,
		baseStats: {hp: 110, atk: 130, def: 80, spa: 60, spd: 70, spe: 80},
		abilities: {0: "Oblivious", 1: "Thick Fat", H: "Slush Rush"},
	},
	eldegoss: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 90, spa: 80, spd: 150, spe: 90},
	},
	haxorus: {
		inherit: true,
		types: ["Dragon", "Steel"],
		baseStats: {hp: 96, atk: 147, def: 90, spa: 60, spd: 70, spe: 97},
		abilities: {0: "Mold Breaker", 1: "Defiant", H: "Unnerve"},
	},
	aromatisse: {
		inherit: true,
		types: ["Fairy", "Poison"],
		baseStats: {hp: 111, atk: 72, def: 72, spa: 129, spd: 109, spe: 29},
		abilities: {0: "Stench", 1: "Misty Surge", H: "Aroma Veil"},
	},
	eevee: {
		inherit: true,
		baseStats: {hp: 65, atk: 85, def: 70, spa: 85, spd: 85, spe: 75},
	},
	pikachu: {
		inherit: true,
		baseStats: {hp: 45, atk: 90, def: 50, spa: 90, spd: 60, spe: 120},
	},	
	eeveestarter: {
		inherit: true,
		baseStats: {hp: 65, atk: 85, def: 70, spa: 85, spd: 85, spe: 75},
	},
	pikachustarter: {
		inherit: true,
		baseStats: {hp: 45, atk: 90, def: 50, spa: 90, spd: 60, spe: 120},
	},
	raichu: {
		inherit: true,
		types: ["Electric", "Fighting"],
		baseStats: {hp: 60, atk: 110, def: 55, spa: 110, spd: 80, spe: 110},
		abilities: {0: "Static", 1: "Scrappy", H: "Lightning Rod"},
	},
	raichualola: {
		inherit: true,
		baseStats: {hp: 60, atk: 100, def: 50, spa: 115, spd: 85, spe: 110},
	},
	linoone: {
		inherit: true,
		abilities: {0: "Guts", 1: "Gluttony", H: "Quick Feet"},
	},
	linoonegalar: {
		inherit: true,
		abilities: {0: "Guts", 1: "Gluttony", H: "Quick Feet"},
	},
	pyroar: {
		inherit: true,
		baseStats: {hp: 86, atk: 68, def: 72, spa: 129, spd: 66, spe: 106},
		abilities: {0: "Rivalry", 1: "Catalyst", H: "Competitive"},
	},
	dragalge: {
		inherit: true,
		baseStats: {hp: 75, atk: 75, def: 90, spa: 127, spd: 123, spe: 44},
		abilities: {0: "Poison Point", 1: "Corrosion", H: "Adaptability"},
	},
	blissey: {
		inherit: true,
		baseStats: {hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55},
	},
	scrafty: {
		inherit: true,
		baseStats: {hp: 95, atk: 100, def: 115, spa: 45, spd: 115, spe: 58},
	},
	marowak: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 110, spa: 80, spd: 80, spe: 70},
		abilities: {0: "Cursed Body", 1: "Defiant", H: "Battle Armor"},
	},
	marowakalola: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 110, spa: 100, spd: 80, spe: 70},
		abilities: {0: "Lightning Rod", 1: "Cursed Body", H: "Rock Head"},
	},
	milotic: {
		inherit: true,
		types: ["Water", "Fairy"],
	},
	tropius: {
		inherit: true,
		baseStats: {hp: 119, atk: 98, def: 103, spa: 72, spd: 87, spe: 51},
		abilities: {0: "Chlorophyll", 1: "Harvest", H: "Thick Fat"},
	},
	jumpluff: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 70, spa: 90, spd: 95, spe: 110},
		abilities: {0: "Chlorophyll", 1: "Aerilate", H: "Infiltrator"},
	},
	vespiquen: {
		inherit: true,
		baseStats: {hp: 90, atk: 80, def: 122, spa: 80, spd: 122, spe: 40},
		abilities: {0: "Queenly Majesty", 1: "Immunity", H: "Pressure"},
	},
	sceptile: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 65, spa: 80, spd: 85, spe: 120},
		abilities: {0: "Overgrow", 1: "Grassy Surge", H: "Unburden"},
	},
	sceptilemega: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 75, spa: 145, spd: 85, spe: 145},
	},
	appletun: {
		inherit: true,
		baseStats: {hp: 120, atk: 85, def: 100, spa: 100, spd: 100, spe: 30},
	},
	vivillon: {
		inherit: true,
		baseStats: {hp: 80, atk: 52, def: 70, spa: 100, spd: 70, spe: 89},
	},
	flapple: {
		inherit: true,
		baseStats: {hp: 70, atk: 120, def: 80, spa: 100, spd: 80, spe: 85},
	},
	breloom: {
		inherit: true,
		baseStats: {hp: 60, atk: 130, def: 80, spa: 60, spd: 80, spe: 70},
		abilities: {0: "Long Reach", 1: "Poison Heal", H: "Technician"},
	},
	roserade: {
		inherit: true,
		baseStats: {hp: 70, atk: 70, def: 65, spa: 125, spd: 105, spe: 90},
		abilities: {0: "Natural Cure", 1: "Solar Power", H: "Stench"},
	},
	maractus: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 125, spa: 80, spd: 125, spe: 55},
		abilities: {0: "Iron Barbs", 1: "Dancer", H: "Storm Drain"},
	},
	raikou: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Lightning Rod", H: "Drizzle"},
	},
	entei: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Flash Fire", H: "Drought"},
	},
	suicune: {
		inherit: true,
		types: ["Water", "Ice"],
		abilities: {0: "Pressure", 1: "Water Absorb", H: "Snow Warning"},
	},
	infernape: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Illusion", H: "Iron Fist"},
	},
	charizard: {
		inherit: true,
		types: ["Fire", "Dragon"],
		abilities: {0: "Blaze", 1: "Levitate", H: "Solar Power"},
	},
	charizardmegay: {
		inherit: true,
		types: ["Fire", "Dragon"],
	},
	lapras: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Ice Scales", H: "Hydration"},
	},
	weavile: {
		inherit: true,
		baseStats: {hp: 70, atk: 120, def: 65, spa: 65, spd: 85, spe: 125},
		abilities: {0: "Pressure", 1: "Pickpocket", H: "Screen Cleaner"},
	},
	gardevoir: {
		inherit: true,
		abilities: {0: "Synchronize", 1: "Trace", H: "Misty Surge"},
	},
	gallade: {
		inherit: true,
		baseStats: {hp: 68, atk: 125, def: 75, spa: 65, spd: 115, spe: 80},
		abilities: {0: "Steadfast", 1: "Defiant", H: "Justified"},
	},
	gallademega: {
		inherit: true,
		baseStats: {hp: 68, atk: 165, def: 105, spa: 65, spd: 115, spe: 110},
		abilities: {0: "Neuroforce"},
	},
	blaziken: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Speed Boost", H: "Motor Drive"},
	},
	blazikenmega: {
		inherit: true,
		abilities: {0: "Speed Boost"},
	},
	crobat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Forewarn", H: "Infiltrator"},
		baseStats: {hp: 90, atk: 105, def: 70, spa: 70, spd: 70, spe: 130},
	},
	diancie: {
		inherit: true,
		abilities: {0: "Magic Bounce"},
	},
	dianciemega: {
		inherit: true,
		abilities: {0: "Queenly Majesty"},
	},
	deoxys: {
		inherit: true,
		abilities: {0: "Contrary"},
		baseStats: {hp: 50, atk: 110, def: 110, spa: 110, spd: 110, spe: 110},
	},
	deoxysattack: {
		inherit: true,
		abilities: {0: "Sheer Force"},
	},
	deoxysdefense: {
		inherit: true,
		abilities: {0: "Regenerator"},
		baseStats: {hp: 50, atk: 50, def: 180, spa: 50, spd: 180, spe: 90},
	},
	deoxysspeed: {
		inherit: true,
		abilities: {0: "Speed Boost"},
	},
	espeon: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 65, spa: 130, spd: 95, spe: 110},
	},
	jolteon: {
		inherit: true,
		abilities: {0: "Volt Absorb", 1: "Technician", H: "Static"},
		baseStats: {hp: 65, atk: 95, def: 60, spa: 110, spd: 65, spe: 130},
	},
	leafeon: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 130, spa: 60, spd: 95, spe: 65},
		abilities: {0: "Rattled", 1: "Immunity", H: "Chlorophyll"},
	},
	glaceon: {
		inherit: true,
		abilities: {0: "Snow Cloak", 1: "Slush Rush", H: "Ice Body"},
	},
	umbreon: {
		inherit: true,
		abilities: {0: "Synchronize", 1: "Dark Aura", H: "Inner Focus"},
	},
	flareon: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 65, spa: 60, spd: 110, spe: 95},
	},
	floetteeternal: {
		inherit: true,
		types: ["Fairy", "Grass"],
		baseStats: {hp: 78, atk: 65, def: 67, spa: 125, spd: 128, spe: 92},
		abilities: {0: "Flower Veil", 1: "Regenerator", H: "Chlorophyll"},
	},
	cresselia: {
		inherit: true,
		types: ["Fairy", "Psychic"],
		baseStats: {hp: 120, atk: 70, def: 120, spa: 100, spd: 120, spe: 70},
	},
	barbaracle: {
		inherit: true,
		baseStats: {hp: 72, atk: 105, def: 120, spa: 54, spd: 116, spe: 68},
		abilities: {0: "Tough Claws", 1: "Pickpocket", H: "Sap Sipper"},
	},
	crawdaunt: {
		inherit: true,
		baseStats: {hp: 68, atk: 120, def: 90, spa: 75, spd: 75, spe: 75},
	},
	noctowl: {
		inherit: true,
		baseStats: {hp: 100, atk: 50, def: 70, spa: 116, spd: 116, spe: 70},
	},
	hypno: {
		inherit: true,
		baseStats: {hp: 115, atk: 83, def: 50, spa: 83, spd: 125, spe: 67},
		abilities: {0: "Insomnia", 1: "Forewarn", H: "No Guard"},
	},
	exeggutor: {
		inherit: true,
		baseStats: {hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55},
		abilities: {0: "Chlorophyll", 1: "Psychic Surge", H: "Harvest"},
	},
	exeggutoralola: {
		inherit: true,
		baseStats: {hp: 95, atk: 125, def: 85, spa: 105, spd: 75, spe: 45},
		abilities: {0: "Limber", 1: "Long Reach", H: "Harvest"},
	},
	stonjourner: {
		inherit: true,
		baseStats: {hp: 110, atk: 125, def: 185, spa: 20, spd: 20, spe: 70},
		abilities: {0: "Power Spot", H: "Gravity Surge"},
	},
	beheeyem: {
		inherit: true,
		baseStats: {hp: 75, atk: 75, def: 85, spa: 150, spd: 105, spe: 40},
		abilities: {0: "Telepathy", 1: "Analytic", H: "Gravity Surge"},
	},
	swellow: {
		inherit: true,
		baseStats: {hp: 60, atk: 115, def: 60, spa: 105, spd: 60, spe: 125},
		abilities: {0: "Guts", 1: "Scrappy", H: "Competitive"},
	},
	crustle: {
		inherit: true,
		baseStats: {hp: 70, atk: 125, def: 125, spa: 65, spd: 75, spe: 65},
	},
	torterra: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Thick Fat", H: "Gravity Surge"},
	},
	torkoal: {
		inherit: true,
		baseStats: {hp: 90, atk: 95, def: 140, spa: 95, spd: 95, spe: 20},
	},
	drednaw: {
		inherit: true,
		baseStats: {hp: 90, atk: 145, def: 110, spa: 48, spd: 68, spe: 74},
	},
	carracosta: {
		inherit: true,
		baseStats: {hp: 84, atk: 73, def: 65, spa: 138, spd: 133, spe: 32},
		abilities: {0: "Solid Rock", 1: "Sturdy", H: "Drizzle"},
	},
	turtonator: {
		inherit: true,
		abilities: {0: "Shell Armor", 1: "White Smoke", H: "Contrary"},
		baseStats: {hp: 80, atk: 78, def: 135, spa: 111, spd: 85, spe: 36},
	},
	shuckle: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Huge Power", H: "Contrary"},
	},
	dialga: {
		inherit: true,
		abilities: {0: "Pressure", 1: "No Guard", H: "Clear Body"},
	},
	mimikyu: {
		inherit: true,
		baseStats: {hp: 55, atk: 100, def: 80, spa: 50, spd: 105, spe: 96},
	},
	flygon: {
		inherit: true,
		types: ["Bug", "Dragon"],
		baseStats: {hp: 80, atk: 110, def: 80, spa: 110, spd: 80, spe: 100},
		abilities: {0: "Levitate", H: "Sand Force"},
	},
	lugia: {
		inherit: true,
		types: ["Water", "Flying"],
		baseStats: {hp: 106, atk: 50, def: 130, spa: 130, spd: 154, spe: 110},
	},
	hooh: {
		inherit: true,
		baseStats: {hp: 106, atk: 130, def: 50, spa: 130, spd: 154, spe: 110},
	},
	kyogreprimal: {
		inherit: true,
		types: ["Water", "Electric"],
	},
	solgaleo: {
		inherit: true,
		types: ["Fire", "Steel"],
	},
	mewtwo: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Unnerve", H: "Psychic Surge"},
	},
	mewtwomegax: {
		inherit: true,
		abilities: {0: "Guts"},
	},
	mewtwomegay: {
		inherit: true,
		abilities: {0: "Adaptability"},
	},
	xerneas: {
		inherit: true,
		types: ["Fairy", "Ground"],
	},
	trapinch: {
		inherit: true,
		types: ["Bug", "Ground"],
		baseStats: {hp: 70, atk: 100, def: 100, spa: 80, spd: 80, spe: 10},
	},
	golisopod: {
		inherit: true,
		abilities: {0: "Emergency Exit", H: "Shell Armor"},
	},
	grimmsnarl: {
		inherit: true,
		baseStats: {hp: 95, atk: 120, def: 75, spa: 95, spd: 85, spe: 60},
	},
	dodrio: {
		inherit: true,
		baseStats: {hp: 60, atk: 125, def: 90, spa: 60, spd: 60, spe: 110},
		abilities: {0: "Stakeout", 1: "Early Bird", H: "Tangled Feet"},
	},
	cofagrigus: {
		inherit: true,
		baseStats: {hp: 58, atk: 50, def: 155, spa: 115, spd: 115, spe: 30},
	},
	runerigus: {
		inherit: true,
		baseStats: {hp: 58, atk: 115, def: 115, spa: 50, spd: 155, spe: 30},
	},
	dunsparce: {
		inherit: true,
		types: ["Normal", "Ground"],
		baseStats: {hp: 100, atk: 100, def: 80, spa: 85, spd: 75, spe: 75},
	},
	pinsir: {
		inherit: true,
		baseStats: {hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 105},
		abilities: {0: "Sniper", 1: "Mold Breaker", H: "Moxie"},
	},
	regice: {
		inherit: true,
		abilities: {0: "Ice Body", 1: "Filter", H: "Permafrost"},
	},
	regirock: {
		inherit: true,
		abilities: {0: "Iron Fist", 1: "Filter", H: "Sturdy"},
	},
	registeel: {
		inherit: true,
		abilities: {0: "Clear Body", 1: "Filter", H: "Iron Barbs"},
	},
	regidrago: {
		inherit: true,
		baseStats: {hp: 200, atk: 80, def: 50, spa: 100, spd: 50, spe: 100},
	},
	delibird: {
		inherit: true,
		baseStats: {hp: 45, atk: 95, def: 45, spa: 95, spd: 45, spe: 115},
		abilities: {0: "Vital Spirit", 1: "Hustle", H: "Snow Warning"},
	},
	glalie: {
		inherit: true,
		types: ["Ice", "Dark"],
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Sniper", 1: "Strong Jaw", H: "Moody"},
	},
	glaliemega: {
		inherit: true,
		types: ["Ice", "Dark"],
		baseStats: {hp: 100, atk: 120, def: 120, spa: 120, spd: 120, spe: 120},
	},
	solrock: {
		inherit: true,
		types: ["Rock", "Fire"],
		baseStats: {hp: 90, atk: 115, def: 105, spa: 55, spd: 85, spe: 70},
	},
	lunatone: {
		inherit: true,
		types: ["Rock", "Ice"],
		baseStats: {hp: 90, atk: 55, def: 85, spa: 115, spd: 105, spe: 70},
	},
	toxicroak: {
		inherit: true,
		baseStats: {hp: 83, atk: 106, def: 65, spa: 66, spd: 130, spe: 85},
	},
	magnezone: {
		inherit: true,
		abilities: {0: "Magnet Pull", 1: "Levitate", H: "Analytic"},
	},
	ponyta: {
		inherit: true,
		types: ["Fire", "Normal"],
	},
	rapidash: {
		inherit: true,
		types: ["Fire", "Normal"],
		baseStats: {hp: 90, atk: 110, def: 70, spa: 80, spd: 80, spe: 105},
		abilities: {0: "Speed Boost", 1: "Reckless", H: "Flame Body"},
	},
	rapidashgalar: {
		inherit: true,
		types: ["Fairy", "Psychic"],
		baseStats: {hp: 90, atk: 100, def: 80, spa: 70, spd: 90, spe: 105},
		abilities: {0: "Queenly Majesty", 1: "Pastel Veil", H: "Pixilate"},
	},
	aurorus: {
		inherit: true,
		types: ["Ice", "Fairy"],
		baseStats: {hp: 123, atk: 77, def: 72, spa: 99, spd: 92, spe: 58},
		abilities: {0: "Refrigerate", 1: "Misty Surge", H: "Snow Warning"},
	},
	grumpig: {
		inherit: true,
		types: ["Psychic", "Dark"],
		baseStats: {hp: 100, atk: 45, def: 65, spa: 100, spd: 125, spe: 80},
	},
	feraligatr: {
		inherit: true,
		baseStats: {hp: 85, atk: 125, def: 100, spa: 79, spd: 83, spe: 78},
	},
	typhlosion: {
		inherit: true,
		baseStats: {hp: 78, atk: 84, def: 78, spa: 129, spd: 85, spe: 100},
		abilities: {0: "Blaze", 1: "Fur Coat", H: "Flash Fire"},
	},
	meganium : {
		inherit: true,
		baseStats: {hp: 100, atk: 82, def: 100, spa: 83, spd: 100, spe: 80},
		abilities: {0: "Natural Cure", 1: "Huge Power", H: "Leaf Guard"},
	},
	empoleon : {
		inherit: true,
		baseStats: {hp: 104, atk: 66, def: 88, spa: 111, spd: 101, spe: 60},
		abilities: {0: "Torrent", 1: "Berserk", H: "Competitive"},
	},
	melmetal: {
		inherit: true,
		abilities: {0: "Motor Drive", 1: "Iron Fist"},
	},
	cryogonal: {
		inherit: true,
		baseStats: {hp: 80, atk: 50, def: 50, spa: 115, spd: 135, spe: 105},
		abilities: {0: "Levitate", H: "Catalyst"},
	},
	avalugg: {
		inherit: true,
		baseStats: {hp: 95, atk: 137, def: 184, spa: 44, spd: 46, spe: 28},
		abilities: {0: "Sturdy", 1: "Unaware", H: "Slush Rush"},
	},
	slowbro: {
		inherit: true,
		abilities: {0: "Oblivious", 1: "Unaware", H: "Regenerator"},
	},
	slowbrogalar: {
		inherit: true,
		baseStats: {hp: 95, atk: 120, def: 95, spa: 120, spd: 70, spe: 30},
		abilities: {0: "Quick Draw", 1: "Unaware", H: "Regenerator"},
	},
	slowking: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 80, spa: 110, spd: 120, spe: 30},
		abilities: {0: "Oblivious", 1: "Unaware", H: "Regenerator"},
	},
	slowkinggalar: {
		inherit: true,
		baseStats: {hp: 95, atk: 65, def: 80, spa: 120, spd: 120, spe: 30},
		abilities: {0: "Curious Medicine", 1: "Unaware", H: "Regenerator"},
	},
	electivire: {
		inherit: true,
		types: ["Electric", "Fighting"],
		baseStats: {hp: 85, atk: 123, def: 67, spa: 85, spd: 85, spe: 95},
		abilities: {0: "Motor Drive", 1: "Analytic", H: "Moxie"},
	},
	magmortar: {
		inherit: true,
		types: ["Fire", "Dark"],
		baseStats: {hp: 125, atk: 45, def: 67, spa: 125, spd: 95, spe: 83},
		abilities: {0: "Flame Body", 1: "Analytic", H: "Catalyst"},
	},
	steelix: {
		inherit: true,
		abilities: {0: "Heatproof", 1: "Sturdy", H: "Sand Force"},
	},
	steelixmega: {
		inherit: true,
		abilities: {0: "Arena Trap"},
	},
	slaking: {
		inherit: true,
		abilities: {0: "Slumber", H: "Truant"},
	},
	zarude: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Synchronize", H: "Guts"},
	},
	nihilego: {
		inherit: true,
		abilities: {0: "Beast Boost", 1: "Levitate"},
	},
	galvantula: {
		inherit: true,
		baseStats: {hp: 70, atk: 77, def: 60, spa: 117, spd: 90, spe: 108},
	},
	frosmoth: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Compound Eyes", H: "Ice Body"},
		baseStats: {hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100},
	},
	volcarona: {
		inherit: true,
		abilities: {0: "Flame Body", 1: "Compound Eyes", H: "Swarm"},
	},
	dusknoir: {
		inherit: true,
		types: ["Ghost", "Fighting"],
		abilities: {0: "Iron Fist", 1: "Pressure", H: "Frisk"},
		baseStats: {hp: 55, atk: 100, def: 135, spa: 65, spd: 135, spe: 45},
	},
	alcremie: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 75, spa: 120, spd: 141, spe: 64},
	},
	excadrill: {
		inherit: true,
		abilities: {0: "Sand Rush", H: "Mold Breaker"},
	},
	spiritomb: {
		inherit: true,
		abilities: {0: "Neutralizing Gas", 1: "Tinted Lens", H: "Pressure"},
		baseStats: {hp: 55, atk: 112, def: 128, spa: 112, spd: 128, spe: 5},
	},
	archeops: {
		inherit: true,
		abilities: {0: "Defeatist", 1: "Defiant", H: "Reckless"},
	},
	rotom: {
		inherit: true,
		baseStats: {hp: 65, atk: 50, def: 77, spa: 95, spd: 77, spe: 91},
	},
	rotomheat: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate", H: "Drought"},
	},
	rotomfan: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate", H: "Delta Stream"},
	},
	rotommow: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate", H: "Regenerator"},
	},
	rotomfrost: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate", H: "Slush Rush"},
	},
	rotomwash: {
		inherit: true,
		baseStats: {hp: 65, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate", H: "Screen Cleaner"},
	},
	crabominable: {
		inherit: true,
		baseStats: {hp: 97, atk: 132, def: 97, spa: 62, spd: 67, spe: 73},
		abilities: {0: "Hyper Cutter", 1: "Iron Fist", H: "Fur Coat"},
	},
	sirfetchd: {
		inherit: true,
		baseStats: {hp: 62, atk: 135, def: 115, spa: 68, spd: 82, spe: 65},
		abilities: {0: "Dauntless Shield", 1: "Steadfast", H: "Scrappy"},
	},
	ninjask: {
		inherit: true,
		baseStats: {hp: 61, atk: 110, def: 60, spa: 65, spd: 65, spe: 160},
		abilities: {0: "Moxie", 1: "Aerilate", H: "Speed Boost"},
	},
	garchomp: {
		inherit: true,
		baseStats: {hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102},
	},
	garchompmega: {
		inherit: true,
		baseStats: {hp: 108, atk: 170, def: 125, spa: 110, spd: 85, spe: 102},
		abilities: {0: "Rough Skin"},
	},
	lanturn: {
		inherit: true,
		baseStats: {hp: 125, atk: 58, def: 58, spa: 106, spd: 106, spe: 77},
	},
	banettemega: {
		inherit: true,
		types: ["Ghost", "Dark"],
	},
	banette: {
		inherit: true,
		types: ["Ghost", "Dark"],
	},
	metagross: {
		inherit: true,
		baseStats: {hp: 95, atk: 135, def: 130, spa: 80, spd: 90, spe: 70},
		abilities: {0: "Clear Body", 1: "Iron Fist", H: "Light Metal"},
	},
	wailord: {
		inherit: true,
		baseStats: {hp: 170, atk: 80, def: 55, spa: 100, spd: 55, spe: 75},
		abilities: {0: "Oblivious", 1: "Thick Fat", H: "Dry Skin"},
	},
	drapion: {
		inherit: true,
		baseStats: {hp: 80, atk: 90, def: 75, spa: 60, spd: 130, spe: 95},
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Intimidate"},
	},
	swalot: {
		inherit: true,
		baseStats: {hp: 130, atk: 83, def: 93, spa: 83, spd: 93, spe: 55},
		abilities: {0: "Simple", 1: "Corrosion", H: "Gluttony"},
	},
	magcargo: {
		inherit: true,
		baseStats: {hp: 70, atk: 50, def: 230, spa: 120, spd: 100, spe: 30},
		abilities: {0: "Flame Body", 1: "Solid Rock", H: "Unaware"},
	},
	pyukumuku: {
		inherit: true,
		baseStats: {hp: 50, atk: 60, def: 150, spa: 30, spd: 150, spe: 5},
		abilities: {0: "Innards Out", H: "Unaware"},
	},
	politoed: {
		inherit: true,
		baseStats: {hp: 90, atk: 75, def: 80, spa: 95, spd: 100, spe: 70},
		abilities: {0: "Drizzle", 1: "Water Absorb", H: "Damp"},
	},
	poliwrath: {
		inherit: true,
		baseStats: {hp: 90, atk: 135, def: 100, spa: 35, spd: 80, spe: 70},
		abilities: {0: "Swift Swim", 1: "Water Absorb", H: "No Guard"},
	},
	accelgor: {
		inherit: true,
		types: ["Bug", "Dark"],
		baseStats: {hp: 80, atk: 100, def: 40, spa: 120, spd: 40, spe: 145},
		abilities: {0: "Unburden", 1: "Technician", H: "Competitive"},
	},
	escavalier: {
		inherit: true,
		baseStats: {hp: 70, atk: 135, def: 115, spa: 60, spd: 115, spe: 20},
		abilities: {0: "Swarm", 1: "Shell Armor", H: "Overcoat"},
	},
	eiscue: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 110, spa: 65, spd: 100, spe: 50},
	},
	eiscuenoice: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 70, spa: 65, spd: 50, spe: 130},
	},
	silvally: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
	},
	silvallypsychic: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallypoison: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyice: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallydragon: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyghost: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyelectric: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyfire: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallywater: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyground: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyrock: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyflying: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallygrass: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyfairy: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallydark: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallysteel: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallyfighting: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	silvallybug: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 105},
		abilities: {0: "Battle Armor"},
		requiredItem: null,
	},
	typenull: {
		inherit: true,
		baseStats: {hp: 105, atk: 105, def: 105, spa: 105, spd: 105, spe: 64},
	},
	cramorant: {
		inherit: true,
		baseStats: {hp: 100, atk: 85, def: 55, spa: 85, spd: 125, spe: 85},
	},
	calyrex: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Unnerve", 1: "Neuroforce", H: "Cursed Body"},
	},
	miniormeteor: {
		inherit: true,
		baseStats: {hp: 60, atk: 60, def: 130, spa: 60, spd: 130, spe: 60},
	},
	minior: {
		inherit: true,
		baseStats: {hp: 60, atk: 130, def: 60, spa: 130, spd: 60, spe: 130},
	},
	zoroark: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 65, spa: 120, spd: 65, spe: 105},
		abilities: {0: "Illusion", H: "Imposter"},
	},
	duraludon: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 115, spa: 120, spd: 65, spe: 85},
		abilities: {0: "Stalwart",1: "Clear Body", H: "Steelworker"},
	},
	golurk: {
		inherit: true,
		baseStats: {hp: 89, atk: 124, def: 110, spa: 55, spd: 90, spe: 60},
		abilities: {0: "Iron Fist", 1: "Solid Rock", H: "No Guard"},
	},
	chandelure: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80},
		abilities: {0: "Flash Fire", 1: "Infiltrator", H: "Shadow Tag"},
	},
	decidueye: {
		inherit: true,
		baseStats: {hp: 78, atk: 107, def: 75, spa: 85, spd: 75, spe: 110},
		abilities: {0: "Overgrow", 1: "Sniper", H: "Long Reach"},
	},
	noivern: {
		inherit: true,
		baseStats: {hp: 95, atk: 50, def: 85, spa: 97, spd: 85, spe: 123},
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Aerilate"},
	},
	absol: {
		inherit: true,
		types: ["Dark", "Fairy"],
		baseStats: {hp: 65, atk: 130, def: 60, spa: 105, spd: 60, spe: 115},
		abilities: {0: "Omen", 1: "Super Luck", H: "Justified"},
	},
	absolmega: {
		inherit: true,
		types: ["Dark", "Fairy"],
		baseStats: {hp: 65, atk: 150, def: 75, spa: 150, spd: 80, spe: 115},
	},
	dubwool: {
		inherit: true,
		abilities: {0: "Fluffy", 1: "Defiant", H: "Bulletproof"},
	},
	parasect: {
		inherit: true,
		baseStats: {hp: 30, atk: 90, def: 200, spa: 60, spd: 200, spe: 20},
		abilities: {0: "Effect Spore", 1: "Dry Skin", H: "Poison Heal"},
	},
	perrserker: {
		inherit: true,
		baseStats: {hp: 100, atk: 120, def: 115, spa: 65, spd: 70, spe: 60},
	},
	thievul: {
		inherit: true,
		types: ["Dark", "Ghost"],
		baseStats: {hp: 70, atk: 108, def: 68, spa: 87, spd: 92, spe: 100},
		abilities: {0: "Pickpocket", 1: "Unburden", H: "Stakeout"},
	},
	gogoat: {
		inherit: true,
		baseStats: {hp: 123, atk: 100, def: 72, spa: 97, spd: 81, spe: 88},
		abilities: {0: "Sap Sipper", 1: "Grass Pelt", H: "Reckless"},
	},
	kommoo: {
		inherit: true,
		abilities: {0: "Bulletproof", 1: "Soundproof", H: "Intimidate"},
	},
	volcanion: {
		inherit: true,
		abilities: {0: "Water Absorb", H: "Steam Engine"},
	},
	primeape: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 80, spa: 50, spd: 90, spe: 100},
		abilities: {0: "Anger Point", 1: "Defiant", H: "Gorilla Tactics"},
	},
	conkeldurr: {
		inherit: true,
		baseStats: {hp: 105, atk: 140, def: 95, spa: 55, spd: 75, spe: 65},
	},
	vikavolt: {
		inherit: true,
		baseStats: {hp: 77, atk: 60, def: 110, spa: 145, spd: 105, spe: 43},
		abilities: {0: "Levitate", 1: "Lightning Rod", H:"Motor Drive"},
	},
	beedrill: {
		inherit: true,
		baseStats: {hp: 65, atk: 110, def: 40, spa: 45, spd: 80, spe: 100},
		abilities: {0: "Swarm", 1: "Sniper", H: "Poison Touch"},
	},
	beedrillmega: {
		inherit: true,
		baseStats: {hp: 65, atk: 150, def: 40, spa: 15, spd: 115, spe: 145},
	},
	miltank: {
		inherit: true,
		baseStats: {hp: 115, atk: 100, def: 105, spa: 40, spd: 70, spe: 100},
	},
	bisharp: {
		inherit: true,
		baseStats: {hp: 75, atk: 125, def: 110, spa: 60, spd: 80, spe: 80},
		abilities: {0: "Defiant", 1: "Inner Focus", H: "Iron Fist"},
	},
	hariyama: {
		inherit: true,
		baseStats: {hp: 144, atk: 125, def: 75, spa: 40, spd: 75, spe: 50},
		abilities: {0: "Thick Fat", 1: "Technician", H: "Sheer Force"},
	},
	omastar: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 125, spa: 115, spd: 70, spe: 55},
		abilities: {0: "Shell Armor", 1: "Storm Drain", H: "Weak Armor"},
	},
	mienshao: {
		inherit: true,
		baseStats: {hp: 75, atk: 135, def: 70, spa: 75, spd: 70, spe: 105},
	},
	scolipede: {
		inherit: true,
		baseStats: {hp: 60, atk: 120, def: 99, spa: 55, spd: 79, spe: 112},
	},
	castform: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 70, spa: 100, spd: 70, spe: 110},
	},
	castformsunny: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 70, spa: 100, spd: 70, spe: 110},
	},
	castformrainy: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 70, spa: 100, spd: 70, spe: 110},
	},
	castformsnowy: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 70, spa: 100, spd: 70, spe: 110},
	},
	ledian: {
		inherit: true,
		baseStats: {hp: 55, atk: 35, def: 50, spa: 35, spd: 110, spe: 85},
		types: ["Bug", "Fighting"],
		abilities: {0: "Swarm", 1: "Stellar Striker", H: "Iron Fist"},
	},
	cradily: {
		inherit: true,
		baseStats: {hp: 86, atk: 91, def: 107, spa: 91, spd: 117, spe: 43},
		abilities: {0: "Suction Cups", H: "Storm Drain"},
	},
	druddigon: {
		inherit: true,
		baseStats: {hp: 77, atk: 130, def: 100, spa: 60, spd: 95, spe: 58},
	},
	pincurchin: {
		inherit: true,
		baseStats: {hp: 48, atk: 101, def: 115, spa: 91, spd: 135, spe: 15},
		abilities: {0: "Lightning Rod", 1: "Iron Barbs", H: "Electric Surge"},
	},
	zapdos: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Lightning Rod", H: "Static"},
	},
	moltres: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Flash Fire", H: "Flame Body"},
	},
	machamp: {
		inherit: true,
		baseStats: {hp: 100, atk: 130, def: 95, spa: 50, spd: 85, spe: 75},
	},
	mantine: {
		inherit: true,
		baseStats: {hp: 95, atk: 40, def: 70, spa: 90, spd: 160, spe: 70},
	},
	staraptor: {
		inherit: true,
		baseStats: {hp: 85, atk: 120, def: 90, spa: 50, spd: 90, spe: 100},
	},
	lycanroc: {
		inherit: true,
		abilities: {0: "Unburden", 1: "Sand Rush", H: "Sturdy"},
	},
	lycanrocmidnight: {
		inherit: true,
		baseStats: {hp: 85, atk: 125, def: 95, spa: 45, spd: 95, spe: 82},
		abilities: {0: "Adaptability", 1: "Vital Spirit", H: "No Guard"},
	},
	articunogalar: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 90, spa: 125, spd: 90, spe: 100},
		abilities: {0: "Competitive", H: "Tinted Lens"},
	},
	necrozma: {
		inherit: true,
		baseStats: {hp: 97, atk: 137, def: 101, spa: 137, spd: 89, spe: 79},
	},
	clawitzer: {
		inherit: true,
		baseStats: {hp: 61, atk: 67, def: 108, spa: 120, spd: 109, spe: 59},
	},
	meloetta: {
		inherit: true,
		abilities: {0: "Serene Grace", H: "Sheer Force"},
	},
	falinks: {
		inherit: true,
		baseStats: {hp: 85, atk: 110, def: 110, spa: 70, spd: 70, spe: 75},
	},
	abomasnow: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 85, spa: 100, spd: 95, spe: 65},
		abilities: {0: "Snow Warning", 1: "Permafrost", H: "Soundproof"},
	},
	abomasnowmega: {
		inherit: true,
		baseStats: {hp: 90, atk: 140, def: 115, spa: 140, spd: 120, spe: 30},
	},
	carnivine: {
		inherit: true,
		baseStats: {hp: 95, atk: 130, def: 80, spa: 70, spd: 80, spe: 76},
		abilities: {0: "Levitate", 1: "Stench", H: "Strong Jaw"},
	},
	sylveon: {
		inherit: true,
		baseStats: {hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60},
		abilities: {0: "Cute Charm", 1: "Fairy Aura", H: "Pixilate"},
	},
	kingler: {
		inherit: true,
		baseStats: {hp: 75, atk: 130, def: 125, spa: 50, spd: 50, spe: 85},
		abilities: {0: "Hyper Cutter", 1: "Shell Armor", H: "Sheer Force"},
	},
	dewgong: {
		inherit: true,
		baseStats: {hp: 90, atk: 80, def: 100, spa: 80, spd: 105, spe: 70},
		abilities: {0: "Thick Fat", 1: "Hydration", H: "Ice Body"},
	},
	cinccino: {
		inherit: true,
		baseStats: {hp: 75, atk: 105, def: 60, spa: 105, spd: 60, spe: 115},
	},
	kricketune: {
		inherit: true,
		baseStats: {hp: 87, atk: 115, def: 71, spa: 95, spd: 81, spe: 75},
		abilities: {0: "Swarm", 1: "Tinted Lens", H: "Technician"},
	},
	grapploct: {
		inherit: true,
		types: ["Fighting", "Water"],
		baseStats: {hp: 90, atk: 128, def: 110, spa: 50, spd: 90, spe: 42},
		abilities: {0: "Limber", 1: "Poison Touch", H: "Technician"},
	},
};
