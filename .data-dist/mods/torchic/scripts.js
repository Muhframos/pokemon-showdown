"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } const Scripts = {
init() {
//new moves
this.modData('Learnsets', 'togekiss').learnset.ultrabeam = ['8L1'];

this.modData('Learnsets', 'milotic').learnset.moonblast = ['8L1'];
this.modData('Learnsets', 'milotic').learnset.calmmind = ['8L1'];

this.modData('Learnsets', 'bewear').learnset.extremespeed = ['8L1'];

this.modData('Learnsets', 'haxorus').learnset.playrough = ['8L1'];
this.modData('Learnsets', 'haxorus').learnset.thunderpunch = ['8L1'];
this.modData('Learnsets', 'haxorus').learnset.firepunch = ['8L1'];
this.modData('Learnsets', 'haxorus').learnset.icepunch = ['8L1'];
this.modData('Learnsets', 'haxorus').learnset.vcreate = ['8L1'];

this.modData('Learnsets', 'victini').learnset.fieryexplosion = ['8L1'];
this.modData('Learnsets', 'victini').learnset.macaronnom = ['8L1'];

this.modData('Learnsets', 'scolipede').learnset.gunkshot = ['8L1'];
this.modData('Learnsets', 'scolipede').learnset.megahorn = ['8L1'];

this.modData('Learnsets', 'electivire').learnset.plasmafists = ['8L1'];

this.modData('Learnsets', 'palossand').learnset.gyroball = ['8L1'];

this.modData('Learnsets', 'corviknight').learnset.beakblast = ['8L1'];

},
	ccanMegaEvo(pokemon) {
		const species = pokemon.baseSpecies;
		const altForme = species.otherFormes && this.dex.getSpecies(species.otherFormes[0]);
		const item = pokemon.getItem();
		// Mega Rayquaza
		if ((this.gen <= 7 || this.ruleTable.has('standardnatdex')) &&
			_optionalChain([altForme, 'optionalAccess', _ => _.isMega]) && _optionalChain([altForme, 'optionalAccess', _2 => _2.requiredMove]) &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove) {
			return altForme.name;
		}
		// changed so that it is based on exact mon instead of dex number
		if (item.megaEvolves === pokemon.species.name && item.megaStone !== species.name) {
			return item.megaStone;
		}
		return null;
	    }
}; exports.Scripts = Scripts;

 //# sourceMappingURL=sourceMaps/scripts.js.map