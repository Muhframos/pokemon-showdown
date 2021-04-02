"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } const Scripts = {
	inherit: 'gen7',
	init() {
		for (const id in this.data.Items) {
			if (!this.data.Items[id].megaStone) continue;
			this.modData('Items', id).onTakeItem = false;
		}
	},
	actions: {
		canMegaEvo(pokemon) {
			if (pokemon.species.isMega || pokemon.species.isPrimal) return null;

			const item = pokemon.getItem();
			if (item.megaStone) {
				if (item.megaStone === pokemon.name) return null;
				return item.megaStone;
			} else if (pokemon.baseMoves.includes('dragonascent' )) {
				return 'Rayquaza-Mega';
			} else {
				return null;
			}
		},
		runMegaEvo(pokemon) {
			if (pokemon.species.isMega || pokemon.species.isPrimal) return false;

			const isUltraBurst = !pokemon.canMegaEvo;
			// @ts-ignore
			const species = this.getMixedSpecies(pokemon.m.originalSpecies, pokemon.canMegaEvo || pokemon.canUltraBurst);

			// Pokémon affected by Sky Drop cannot Mega Evolve. Enforce it here for now.
			for (const foeActive of pokemon.foes()) {
				if (_optionalChain([foeActive, 'access', _ => _.volatiles, 'access', _2 => _2['skydrop'], 'optionalAccess', _3 => _3.source]) === pokemon) {
					return false;
				}
			}

			// Do we have a proper sprite for it?
			// @ts-ignore assert non-null pokemon.canMegaEvo
			if (isUltraBurst || this.dex.getSpecies(pokemon.canMegaEvo).baseSpecies === pokemon.m.originalSpecies) {
				pokemon.formeChange(species, pokemon.getItem(), true);
			} else {
				const oSpecies = this.dex.getSpecies(pokemon.m.originalSpecies);
				// @ts-ignore
				const oMegaSpecies = this.dex.getSpecies(species.originalMega);
				pokemon.formeChange(species, pokemon.getItem(), true);
				this.battle.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.battle.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}

			pokemon.canMegaEvo = null;
			if (isUltraBurst) pokemon.canUltraBurst = null;
			return true;
		},
		getMixedSpecies(originalSpecies, megaSpecies) {
			const oSpecies = this.dex.getSpecies(originalSpecies);
			const mSpecies = this.dex.getSpecies(megaSpecies);
			if (oSpecies.baseSpecies === mSpecies.baseSpecies) return mSpecies;
			// @ts-ignore
			const deltas = this.getMegaDeltas(mSpecies);
			// @ts-ignore
			const species = this.doGetMixedSpecies(oSpecies, deltas);
			return species;
		},
		getMegaDeltas(megaSpecies) {
			const baseSpecies = this.dex.getSpecies(megaSpecies.baseSpecies);
			const deltas








 = {
				ability: megaSpecies.abilities['0'],
				baseStats: {},
				weighthg: megaSpecies.weighthg - baseSpecies.weighthg,
				originalMega: megaSpecies.name,
				requiredItem: megaSpecies.requiredItem,
			};
			let stat;
			for (stat in megaSpecies.baseStats) {
				deltas.baseStats[stat] = megaSpecies.baseStats[stat] - baseSpecies.baseStats[stat];
			}
			if (megaSpecies.types.length > baseSpecies.types.length) {
				deltas.type = megaSpecies.types[1];
			} else if (megaSpecies.types.length < baseSpecies.types.length) {
				deltas.type = baseSpecies.types[0];
			} else if (megaSpecies.types[1] !== baseSpecies.types[1]) {
				deltas.type = megaSpecies.types[1];
			}
			if (megaSpecies.isMega) deltas.isMega = true;
			if (megaSpecies.isPrimal) deltas.isPrimal = true;
			return deltas;
		},
		doGetMixedSpecies(speciesOrSpeciesName, deltas) {
			if (!deltas) throw new TypeError("Must specify deltas!");
			const species = this.dex.deepClone(this.dex.getSpecies(speciesOrSpeciesName));
			species.abilities = {'0': deltas.ability};
			if (species.types[0] === deltas.type) {
				species.types = [deltas.type];
			} else if (deltas.type) {
				species.types = [species.types[0], deltas.type];
			}
			const baseStats = species.baseStats;
			for (const statName in baseStats) {
				baseStats[statName] = this.battle.clampIntRange(baseStats[statName] + deltas.baseStats[statName], 1, 255);
			}
			species.weighthg = Math.max(1, species.weighthg + deltas.weighthg);
			species.originalMega = deltas.originalMega;
			species.requiredItem = deltas.requiredItem;
			if (deltas.isMega) species.isMega = true;
			if (deltas.isPrimal) species.isPrimal = true;
			return species;
		},
	},
}; exports.Scripts = Scripts;

 //# sourceMappingURL=sourceMaps/scripts.js.map