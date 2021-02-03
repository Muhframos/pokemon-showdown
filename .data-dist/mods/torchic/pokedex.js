"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Pokedex = {
	palossand: {
		inherit: true,
		abilities: {0: "Water Compaction", H: "Sand Veil", 1: "Sand Stream", },
		otherFormes: ["Palossand-Mega"],
		formeOrder: ["Palossand", "Palossand-Mega"],
	},
	palossandmega: {
		num: 770,
		name: "Palossand-Mega",
		baseSpecies: "Palossand",
		forme: "Mega",
		types: ["Ghost", "Rock"],
		baseStats: {hp: 85, atk: 110, def: 155, spa: 100, spd: 120, spe: 10},
		abilities: {0: "Power Compaction"},
		heightm: 3.3,
		weightkg: 120,
		color: "Brown",
		eggGroups: ["Amorphous"],
		requiredItem: "Palossandite",
	},
	milotic: {
		inherit: true,
		otherFormes: ["Milotic-Mega"],
		formeOrder: ["Milotic", "Milotic-Mega"],
	},
	miloticmega: {
		num: 770,
		name: "Milotic-Mega",
		baseSpecies: "Milotic",
		forme: "Mega",
		types: ["Water", "Fairy"],
		baseStats: {hp: 95, atk: 60, def: 79, spa: 150, spd: 175, spe: 81},
		abilities: {0: "Water Absorb"},
		heightm: 3.3,
		weightkg: 120,
		color: "Brown",
		eggGroups: ["Water 1", "Dragon"],
		requiredItem: "Milotite",
	},
	togekiss: {
		inherit: true,
		otherFormes: ["Togekiss-Mega"],
		formeOrder: ["Togekiss", "Togekiss-Mega"],
	},
	togekissmega: {
		num: 770,
		name: "Togekiss-Mega",
		baseSpecies: "Togekiss",
		forme: "Mega",
		types: ["Fairy", "Flying"],
		baseStats: {hp: 85, atk: 65, def: 115, spa: 135, spd: 135, spe: 110},
		abilities: {0: "Pixilate"},
		heightm: 2.0,
		weightkg: 52,
		color: "Brown",
		eggGroups: ["Flying", "Fairy"],
		requiredItem: "Togite",
	},
	butterfree: {
       inherit: true,
		types: ["Bug", "Flying", "Fairy"],
		baseStats: {hp: 60, atk: 45, def: 50, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Compound Eyes", H: "Tinted Lens"},
	},
	haxorus: {
		inherit: true,
		otherFormes: ["Haxorus-Mega"],
		formeOrder: ["Haxorus", "Haxorus-Mega"],
	},
	haxorusmega: {
		num: 612,
		name: "Haxorus-Mega",
		baseSpecies: "Haxorus",
		forme: "Mega",
		types: ["Fairy", "Dragon"],
		baseStats: {hp: 76, atk: 177, def: 115, spa: 60, spd: 95, spe: 117},
		abilities: {0: "Draco Bolt"},
		heightm: 3.5,
		weightkg: 153.3,
		color: "Yellow",
		eggGroups: ["Monster", "Dragon"],
		requiredItem: "Haxorite",
	},
	audino: {
		inherit: true,
		otherFormes: ["Audino-Mega", "Audino-Mega G"],
		formeOrder: ["Audino", "Audino-Mega", "Audino-Mega G"],
	},
	audinomegag: {
		num: 531,
		name: "Haxorus-Mega",
		baseSpecies: "Haxorus",
		forme: "Mega",
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 103, atk: 60, def: 96, spa: 110, spd: 96, spe: 80},
		abilities: {0: "Sidhe's Sacrifice"},
		heightm: 1.0,
		weightkg: 26,
		color: "Pink",
		eggGroups: ["Fairy"],
		requiredItem: "Audinite G",
	},
	corviknight: {
		inherit: true,
		otherFormes: ["Corviknight-Mega"],
		formeOrder: ["Corviknight", "Corviknight-Mega"],
	},
	corviknightmega: {
		num: 823,
		name: "Corviknight-Mega",
		baseSpecies: "Corviknight",
		forme: "Mega",
		types: ["Flying", "Steel"],
		baseStats: {hp: 98, atk: 122, def: 140, spa: 43, spd: 105, spe: 87},
		abilities: {0: "Mirror Armor"},
		heightm: 3.0,
		weightkg: 112,
		color: "Purple",
		eggGroups: ["Flying"],
		requiredItem: "Corviknite",
	},
	electivire: {
		inherit: true,
		otherFormes: ["Electivire-Mega"],
		formeOrder: ["Electivire", "Electivire-Mega"],
	},
	electiviremega: {
		num: 466,
		name: "Electivire-Mega",
		baseSpecies: "Electivire",
		forme: "Mega",
		types: ["Electric"],
		baseStats: {hp: 75, atk: 173, def: 77, spa: 105, spd: 95, spe: 105},
		abilities: {0: "Download"},
		heightm: 2.2,
		weightkg: 166.6,
		color: "Yellow",
		eggGroups: ["Human-Like"],
		requiredItem: "Electivirite",
	},
	scolipede: {
		inherit: true,
		otherFormes: ["Scolipede-Mega"],
		formeOrder: ["Scolipede", "Scolipede-Mega"],
	},
	scolipedemega: {
		num: 545,
		name: "Scolipede-Mega",
		baseSpecies: "Scolipede",
		forme: "Mega",
		types: ["Bug", "Poison"],
		baseStats: {hp: 60, atk: 120, def: 99, spa: 55, spd: 79, spe: 172},
		abilities: {0: "Tinted Lens"},
		heightm: 3.0,
		weightkg: 250,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Scolipedite",
	},
	victini: {
		inherit: true,
		otherFormes: ["Victini-Mega"],
		formeOrder: ["Victini", "Victini-Mega"],
	},
	victinimega: {
		num: 494,
		name: "Victini-Mega",
		baseSpecies: "Victini",
		forme: "Mega",
		types: ["Psychic", "Fire"],
		baseStats: {hp: 60, atk: 120, def: 99, spa: 55, spd: 79, spe: 172},
		abilities: {0: "Energy Overflow"},
		heightm: 0.4,
		weightkg: 4,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		requiredItem: "Victinite",
	},
	bewear: {
		inherit: true,
		otherFormes: ["Bewear-Mega"],
		formeOrder: ["Bewear"],
	},
	bewearmega: {
		num: 760,
		name: "Bewear-Mega",
		baseSpecies: "Bewear",
		forme: "Mega",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 120, atk: 145, def: 95, spa: 55, spd: 50, spe: 40},
		abilities: {0: "Huge Power"},
		heightm: 4.2,
		weightkg: 270,
		color: "Pink",
		eggGroups: ["Field"],
		requiredItem: "Bewearite",
	},
}; exports.Pokedex = Pokedex;

 //# sourceMappingURL=sourceMaps/pokedex.js.map