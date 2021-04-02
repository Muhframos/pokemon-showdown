"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Moves = {
	gastroacid: {
		inherit: true,
		condition: {
			// Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.js
			onStart(pokemon) {
				this.add('-endability', pokemon);
				this.singleEvent('End', pokemon.getAbility(), pokemon.abilityData, pokemon, pokemon, 'gastroacid');
				if (pokemon.m.innates) {
					for (const innate of pokemon.m.innates) {
						pokemon.removeVolatile("ability" + innate);
					}
				}
			},
		},
	},
}; exports.Moves = Moves;

 //# sourceMappingURL=sourceMaps/moves.js.map