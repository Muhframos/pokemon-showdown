export const Scripts: ModdedBattleScriptsData = {
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
			altForme?.isMega && altForme?.requiredMove &&
			pokemon.baseMoves.includes(this.toID(altForme.requiredMove)) && !item.zMove) {
			return altForme.name;
		}
		// changed so that it is based on exact mon instead of dex number
		if (item.megaEvolves === pokemon.species.name && item.megaStone !== species.name) {
			return item.megaStone;
		}
		return null;
	    }
};
