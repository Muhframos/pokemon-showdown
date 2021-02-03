"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } const Scripts = {
init() {
//new moves
this.modData('Learnsets', 'trevenant').learnset.strengthsap = ['8L1'];
this.modData('Learnsets', 'trevenant').learnset.synthesis = ['8L1'];
this.modData('Learnsets', 'trevenant').learnset.shadowsneak = ['8L1'];
this.modData('Learnsets', 'trevenant').learnset.lightscreen = ['8L1'];

this.modData('Learnsets', 'guzzlord').learnset.trickroom = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.gunkshot = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.suckerpunch = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.bulletpunch = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.swordsdance = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.icefang = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.psychicfangs = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.firefang = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.thunderfang = ['8L1'];
this.modData('Learnsets', 'guzzlord').learnset.poisonfang = ['8L1'];

this.modData('Learnsets', 'centiskorch').learnset.firstimpression = ['8L1'];
this.modData('Learnsets', 'centiskorch').learnset.taunt = ['8L1'];
this.modData('Learnsets', 'centiskorch').learnset.rapidspin = ['8L1'];

this.modData('Learnsets', 'golduck').learnset.nastyplot = ['8L1'];
this.modData('Learnsets', 'golduck').learnset.knockoff = ['8L1'];
this.modData('Learnsets', 'golduck').learnset.taunt = ['8L1'];
this.modData('Learnsets', 'golduck').learnset.nightslash = ['8L1'];
this.modData('Learnsets', 'golduck').learnset.darkpulse = ['8L1'];
this.modData('Learnsets', 'golduck').learnset.shadowclaw = ['8L1'];

this.modData('Learnsets', 'blastoise').learnset.zapcannon = ['8L1'];

this.modData('Learnsets', 'pangoro').learnset.suckerpunch = ['8L1'];
this.modData('Learnsets', 'pangoro').learnset.machpunch = ['8L1'];
this.modData('Learnsets', 'pangoro').learnset.heavyslam = ['8L1'];
this.modData('Learnsets', 'pangoro').learnset.meteormash = ['8L1'];
this.modData('Learnsets', 'pangoro').learnset.dynamicpunch = ['8L1'];

this.modData('Learnsets', 'regigigas').learnset.lastresort = ['8L1'];
this.modData('Learnsets', 'regigigas').learnset.conversion = ['8L1'];
this.modData('Learnsets', 'regigigas').learnset.meteormash = ['8L1'];
this.modData('Learnsets', 'regigigas').learnset.doubleedge = ['8L1'];

this.modData('Learnsets', 'ursaring').learnset.obstruct = ['8L1'];
this.modData('Learnsets', 'ursaring').learnset.zenheadbutt = ['8L1'];
this.modData('Learnsets', 'ursaring').learnset.psychicfangs = ['8L1'];

this.modData('Learnsets', 'beartic').learnset.flipturn = ['8L1'];
this.modData('Learnsets', 'beartic').learnset.earthquake = ['8L1'];

this.modData('Learnsets', 'sandslash').learnset.seedbomb = ['8L1'];
this.modData('Learnsets', 'sandslash').learnset.bulletseed = ['8L1'];
this.modData('Learnsets', 'sandslash').learnset.rockblast = ['8L1'];
this.modData('Learnsets', 'sandslash').learnset.spikecannon = ['8L1'];

this.modData('Learnsets', 'sandslashalola').learnset.spikecannon = ['8L1'];
this.modData('Learnsets', 'sandslashalola').learnset.rockblast = ['8L1'];

this.modData('Learnsets', 'tapubulu').learnset.playrough = ['8L1'];

this.modData('Learnsets', 'regice').learnset.voltswitch = ['8L1'];
this.modData('Learnsets', 'regice').learnset.earthpower = ['8L1'];
this.modData('Learnsets', 'regice').learnset.haze = ['8L1'];

this.modData('Learnsets', 'palossand').learnset.gyroball = ['8L1'];

this.modData('Learnsets', 'bastiodon').learnset.gyroball = ['8L1'];
this.modData('Learnsets', 'bastiodon').learnset.dragontail = ['8L1'];
this.modData('Learnsets', 'bastiodon').learnset.spikes = ['8L1'];
this.modData('Learnsets', 'bastiodon').learnset.dragonrage = ['8L1'];
this.modData('Learnsets', 'bastiodon').learnset.kingsshield = ['8L1'];

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