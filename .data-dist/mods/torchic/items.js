"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Items = {
		palossandite: {
		name: "Palossandite",
		spritenum: 626,
		megaStone: "Palossand-Mega",
		megaEvolves: "Palossand",
		itemUser: ["Palossand"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -101,
		gen: 7,
		isNonstandard: "Past",
	},
	milotite: {
		name: "Milotite",
		spritenum: 626,
		megaStone: "Milotic-Mega",
		megaEvolves: "Milotic",
		itemUser: ["Milotic"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -102,
		gen: 3,
		isNonstandard: "Past",
	},
	togite: {
		name: "Togite",
		spritenum: 626,
		megaStone: "Togekiss-Mega",
		megaEvolves: "Togekiss",
		itemUser: ["Togekiss"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -103,
		gen: 4,
		isNonstandard: "Past",
	},
	haxorite: {
		name: "Haxorite",
		spritenum: 626,
		megaStone: "Haxorus-Mega",
		megaEvolves: "Haxorus",
		itemUser: ["Haxorus"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -104,
		gen: 5,
		isNonstandard: "Past",
	},
	mamoswinite: {
		name: "Mamoswinite",
		spritenum: 626,
		megaStone: "Mamoswine-Mega",
		megaEvolves: "Mamoswine",
		itemUser: ["Mamoswine"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -105,
		gen: 7,
		isNonstandard: "Past",
	},
	bewearite: {
		name: "Bewearite",
		spritenum: 626,
		megaStone: "Bewear-Mega",
		megaEvolves: "Bewear",
		itemUser: ["Bewear"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -106,
		gen: 7,
		isNonstandard: "Past",
	},
	electivirite: {
		name: "Electivirite",
		spritenum: 626,
		megaStone: "Electivire-Mega",
		megaEvolves: "Electivire",
		itemUser: ["Electivire"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -107,
		gen: 7,
		isNonstandard: "Past",
	},
	scolipedite: {
		name: "Scolipedite",
		spritenum: 626,
		megaStone: "Scolipede-Mega",
		megaEvolves: "Scolipede",
		itemUser: ["Scolipede"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -108,
		gen: 7,
		isNonstandard: "Past",
	},
	audiniteg: {
		name: "Audinite G",
		spritenum: 626,
		megaStone: "Audino-Mega G",
		megaEvolves: "Audino",
		itemUser: ["Audino"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -109,
		gen: 7,
		isNonstandard: "Past",
	},
	corviknite: {
		name: "Corviknite",
		spritenum: 626,
		megaStone: "Corviknight-Mega",
		megaEvolves: "Corviknight",
		itemUser: ["Corviknight"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -110,
		gen: 8,
		isNonstandard: "Past",
	},
	victinite: {
		name: "Victinite",
		spritenum: 626,
		megaStone: "Victini-Mega",
		megaEvolves: "Victini",
		itemUser: ["Victini"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -111,
		gen: 5,
		isNonstandard: "Past",
	},
}; exports.Items = Items;

 //# sourceMappingURL=sourceMaps/items.js.map