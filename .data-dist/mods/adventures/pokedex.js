"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
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
		abilities: {0: "Aftermath", H: "Intimidate", 1: "Technician"},
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
		abilities: {0: "Slow Start", 1: "Slumber"},	
	},
	articuno: {
		inherit: true,
		baseStats: {hp: 90, atk: 85, def: 100, spa: 125, spd: 95, spe: 85},
		abilities: {0: "Pressure", H: "Snow Warning", 1: "Multiscale"},	
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
		abilities: {0: "Oracle", 1: "Early Bird", H: "Magic Bounce"},	
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
		abilities: {0: "Super Luck", 1: "Technician", H: "Sheer Force"},
	},
	persian: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 60, spa: 85, spd: 85, spe: 115},
		abilities: {0: "Super Luck", 1: "Technician", H: "Tough Claws"},
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
	krookodile: {
		inherit: true,
		baseStats: {hp: 105, atk: 117, def: 80, spa: 65, spd: 70, spe: 92},
		abilities: {0: "Intimidate", 1: "Moxie", H: "Sniper"},
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
		baseStats: {hp: 80, atk: 120, def: 115, spa: 165, spd: 20, spe: 20},
	},
	houndoom: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 50, spa: 110, spd: 100, spe: 95},
		abilities: {0: "Drought", 1: "Flash Fire", H: "Unnerve"},
	},
	houndoommega: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 50, spa: 110, spd: 110, spe: 95},
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
		baseStats: {hp: 120, atk: 125, def: 52, spa: 105, spd: 52, spe: 71},
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
	yanmega: {
		inherit: true,
		baseStats: {hp: 86, atk: 76, def: 86, spa: 116, spd: 66, spe: 95},
	},
	vileplume: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50},
		abilities: {0: "Chlorophyll", 1: "Corrosion" , H: "Effect Spore"},
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
		abilities: {0: "Sheer Force", 1: "Reckless", H: "Super Luck"},
	},
	eldegoss: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 90, spa: 80, spd: 150, spe: 90},
	},
	haxorus: {
		inherit: true,
		types: ["Dragon", "Steel"],
		baseStats: {hp: 86, atk: 147, def: 90, spa: 60, spd: 70, spe: 97},
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
	sceptile: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 65, spa: 80, spd: 85, spe: 120},
		abilities: {0: "Overgrow", 1: "Grassy Surge", H: "Unburden"},
	},
	sceptilemega: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 75, spa: 145, spd: 85, spe: 120},
		abilities: {0: "No Guard"},
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
		abilities: {0: "Levitate"},
	},
	charizardmegay: {
		inherit: true,
		types: ["Fire", "Dragon"],
	},
	lapras: {
		inherit: true,
		abilities: {0: "Water Absorb", 1: "Ice Scales", H: "Hydration"},
	},
	gardevoir: {
		inherit: true,
		abilities: {0: "Synchronize", 1: "Trace", H: "Misty Surge"},
	},
	gallade: {
		inherit: true,
		abilities: {0: "Steadfast", 1: "Psychic Surge", H: "Justified"},
	},
	gallademega: {
		inherit: true,
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
		abilities: {0: "Inner Focus", 1: "Huge Power", H: "Infiltrator"},
	},
	diancie: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Magic Bounce"},
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
	crustle: {
		inherit: true,
		baseStats: {hp: 70, atk: 125, def: 125, spa: 65, spd: 75, spe: 65},
	},
	torterra: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Thick Fat", H: "Chlorophyll"},
	},
	torkoal: {
		inherit: true,
		types: ["Fire", "Rock"],
		baseStats: {hp: 90, atk: 85, def: 140, spa: 105, spd: 80, spe: 20},
	},
	drednaw: {
		inherit: true,
		baseStats: {hp: 90, atk: 155, def: 90, spa: 48, spd: 68, spe: 74},
	},
	carracosta: {
		inherit: true,
		baseStats: {hp: 84, atk: 108, def: 133, spa: 73, spd: 65, spe: 32},
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
	mimikyu: {
		inherit: true,
		baseStats: {hp: 55, atk: 100, def: 80, spa: 50, spd: 105, spe: 96},
	},
	flygon: {
		inherit: true,
		types: ["Bug", "Dragon"],
		abilities: {0: "Levitate", H: "Sand Force"},
	},
	golisopod: {
		inherit: true,
		abilities: {0: "Emergency Exit", 1: "Shell Armor", H: "Water Veil"},
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
		baseStats: {hp: 58, atk: 70, def: 145, spa: 115, spd: 105, spe: 30},
	},
	runerigus: {
		inherit: true,
		baseStats: {hp: 58, atk: 115, def: 105, spa: 70, spd: 145, spe: 30},
	},
	dunsparce: {
		inherit: true,
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
		baseStats: {hp: 90, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
		abilities: {0: "Speed Boost", 1: "Reckless", H: "Flame Body"},
	},
	rapidashgalar: {
		inherit: true,
		types: ["Fairy", "Psychic"],
		baseStats: {hp: 90, atk: 100, def: 70, spa: 80, spd: 80, spe: 105},
		abilities: {0: "Queenly Majesty", 1: "Pastel Veil", H: "Anticipation"},
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
	electivire: {
		inherit: true,
		types: ["Electric", "Fighting"],
		abilities: {0: "Motor Drive", 1: "Analytic", H: "Moxie"},
	},
	magmortar: {
		inherit: true,
		types: ["Fire", "Dark"],
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
		abilities: {0: "Truant", H: "Gluttony"},
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
		abilities: {0: "Reckless"},
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
		baseStats: {hp: 72, atk: 135, def: 95, spa: 68, spd: 102, spe: 65},
		abilities: {0: "Dauntless Shield", 1: "Steadfast", H: "Scrappy"},
	},
	ninjask: {
		inherit: true,
		baseStats: {hp: 61, atk: 110, def: 60, spa: 65, spd: 65, spe: 160},
		abilities: {0: "Moxie", 1: "Aerilate", H: "Speed Boost"},
	},
	lanturn: {
		inherit: true,
		baseStats: {hp: 125, atk: 58, def: 58, spa: 106, spd: 106, spe: 67},
	},
	banettemega: {
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
		baseStats: {hp: 170, atk: 75, def: 65, spa: 90, spd: 65, spe: 60},
		abilities: {0: "Magic Guard", 1: "Thick Fat", H: "Dry Skin"},
	},
	drapion: {
		inherit: true,
		baseStats: {hp: 80, atk: 90, def: 75, spa: 60, spd: 130, spe: 95},
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Intimidate"},
	},
}; exports.Pokedex = Pokedex;

 //# sourceMappingURL=sourceMaps/pokedex.js.map