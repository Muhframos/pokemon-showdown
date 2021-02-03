export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	palossand: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 125, spa: 105, spd: 85, spe: 35},
		abilities: {0: "Water Compaction", H: "Sand Veil", 1: "Sand Stream", },
		otherFormes: ["Palossand-Mega"],
		formeOrder: ["Palossand", "Palossand-Mega"],
	},
	palossandmega: {
		num: 770,
		name: "Palossand-Mega",
		baseSpecies: "Palossand",
		forme: "Mega",
		types: ["Ghost", "Ground"],
		baseStats: {hp: 95, atk: 120, def: 155, spa: 110, spd: 120, spe: 20},
		abilities: {0: "Power Compaction"},
		heightm: 3.3,
		weightkg: 120,
		color: "Brown",
		eggGroups: ["Amorphous"],
		requiredItem: "Palossandite",
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
	golduck: {
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 80, atk: 95, def: 80, spa: 95, spd: 80, spe: 105},
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
};
