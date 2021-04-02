"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
var _randomteams = require('../../random-teams');

 class RandomLetsGoTeams extends _randomteams.default {
	constructor(format, prng) {
		super(format, prng);
		this.moveEnforcementCheckers = {
			Dark: (movePool, hasMove, hasAbility, hasType, counter) => !counter.Dark,
			Dragon: (movePool, hasMove, hasAbility, hasType, counter) => !counter.Dragon,
			Electric: (movePool, hasMove, hasAbility, hasType, counter) => !counter.Electric,
			Fighting: (movePool, hasMove, hasAbility, hasType, counter) => (
				!counter.Fighting && (counter.setupType || !counter.Status)
			),
			Fire: (movePool, hasMove, hasAbility, hasType, counter) => !counter.Fire,
			Ghost: (movePool, hasMove, hasAbility, hasType, counter) => !hasType['Dark'] && !counter.Ghost,
			Ground: (movePool, hasMove, hasAbility, hasType, counter) => !counter.Ground,
			Ice: (movePool, hasMove, hasAbility, hasType, counter) => !counter.Ice,
			Water: (movePool, hasMove, hasAbility, hasType, counter) => !counter.Water || !counter.stab,
		};
	}
	shouldCullMove(
		move,
		hasMove,
		hasType,
		counter,
		teamDetails,
	) {
		switch (move.id) {
		// Set up once and only if we have the moves for it
		case 'bulkup': case 'swordsdance':
			return {
				cull: (
					counter.setupType !== 'Physical' ||
					counter.physicalsetup > 1 ||
					counter.Physical + counter.physicalpool < 2
				),
				isSetup: true,
			};
		case 'calmmind': case 'nastyplot': case 'quiverdance':
			return {
				cull: (
					counter.setupType !== 'Special' ||
					counter.specialstup > 1 ||
					counter.Special + counter.specialpool < 2
				),
				isSetup: true,
			};
		case 'growth': case 'shellsmash':
			return {
				cull: counter.setupType !== 'Mixed' || (counter.damagingMoves.length + counter.physicalpool + counter.specialpool) < 2,
				isSetup: true,
			};
		case 'agility':
			return {
				cull: counter.damagingMoves.length < 2 && !counter.setupType,
				isSetup: !counter.setupType,
			};

		// Bad after setup
		case 'dragontail':
			return {cull: counter.setupType || !!counter.speedsetup || ['encore', 'roar', 'whirlwind'].some(m => hasMove[m])};
		case 'fakeout': case 'uturn': case 'teleport':
			return {cull: counter.setupType || !!counter.speedsetup || hasMove['substitute']};
		case 'haze': case 'leechseed': case 'roar': case 'whirlwind':
			return {cull: counter.setupType || !!counter.speedsetup || hasMove['dragontail']};
		case 'protect':
			return {cull: counter.setupType || ['rest', 'lightscreen', 'reflect'].some(m => hasMove[m])};
		case 'seismictoss':
			return {cull: counter.damagingMoves.length > 1 || counter.setupType};
		case 'stealthrock':
			return {cull: counter.setupType || !!counter.speedsetup || teamDetails.stealthRock};

		// Bit redundant to have both
		case 'leechlife': case 'substitute':
			return {cull: hasMove['uturn']};
		case 'dragonpulse':
			return {cull: hasMove['dragontail'] || hasMove['outrage']};
		case 'thunderbolt':
			return {cull: hasMove['thunder']};
		case 'flareblitz': case 'flamethrower':
			return {cull: hasMove['fireblast'] || hasMove['firepunch']};
		case 'megadrain':
			return {cull: hasMove['petaldance'] || hasMove['powerwhip']};
		case 'bonemerang':
			return {cull: hasMove['earthquake']};
		case 'icebeam':
			return {cull: hasMove['blizzard']};
		case 'rockslide':
			return {cull: hasMove['stoneedge']};
		case 'hydropump': case 'willowisp':
			return {cull: hasMove['scald']};
		case 'surf':
			return {cull: hasMove['hydropump'] || hasMove['scald']};
		}

		// Increased/decreased priority moves are unneeded with moves that boost only speed
		if (move.priority !== 0 && !!counter.speedsetup) return {cull: true};

		// This move doesn't satisfy our setup requirements:
		if (
			(move.category === 'Physical' && counter.setupType === 'Special') ||
			(move.category === 'Special' && counter.setupType === 'Physical')
		) {
			// Reject STABs last in case the setup type changes later on
			if (!hasType[move.type] || counter.stab > 1 || counter[move.category] < 2) return {cull: true};
		}

		return {cull: false};
	}
	randomSet(species, teamDetails = {}) {
		species = this.dex.getSpecies(species);
		let forme = species.name;

		if (typeof species.battleOnly === 'string') {
			// Only change the forme. The species has custom moves, and may have different typing and requirements.
			forme = species.battleOnly;
		}

		const movePool = (species.randomBattleMoves || Object.keys(this.dex.data.Learnsets[species.id].learnset)).slice();
		const moves = [];
		const hasType = {};
		hasType[species.types[0]] = true;
		if (species.types[1]) {
			hasType[species.types[1]] = true;
		}

		let hasMove = {};
		let counter;

		do {
			// Keep track of all moves we have:
			hasMove = {};
			for (const setMoveid of moves) {
				hasMove[setMoveid] = true;
			}

			// Choose next 4 moves from learnset/viable moves and add them to moves list:
			while (moves.length < 4 && movePool.length) {
				const moveid = this.sampleNoReplace(movePool);
				hasMove[moveid] = true;
				moves.push(moveid);
			}

			counter = this.queryMoves(moves, hasType, {}, movePool);

			// Iterate through the moves again, this time to cull them:
			for (const [i, setMoveid] of moves.entries()) {
				const move = this.dex.getMove(setMoveid);

				let {cull, isSetup} = this.shouldCullMove(move, hasMove, hasType, counter, teamDetails);

				if (
					!isSetup &&
					counter.setupType && counter.setupType !== 'Mixed' &&
					move.category !== counter.setupType &&
					counter[counter.setupType] < 2 && (
						// Mono-attacking with setup and RestTalk is allowed
						// Reject Status moves only if there is nothing else to reject
						move.category !== 'Status' ||
						counter[counter.setupType] + counter.Status > 3 && counter.physicalsetup + counter.specialsetup < 2
					)
				) {
					cull = true;
				}

				const moveIsRejectable = !move.damage && (move.category !== 'Status' || !move.flags.heal) && (
					move.category === 'Status' ||
					!hasType[move.type] ||
					move.selfSwitch ||
					move.basePower && move.basePower < 40 && !move.multihit
				);

				// Pokemon should have moves that benefit their Type, as well as moves required by its forme
				if (moveIsRejectable && !cull && !isSetup && counter.physicalsetup + counter.specialsetup < 2 && (
					!counter.setupType || counter.setupType === 'Mixed' ||
					(move.category !== counter.setupType && move.category !== 'Status') ||
					counter[counter.setupType] + counter.Status > 3
				)) {
					if (
						(counter.damagingMoves.length === 0 || !counter.stab) &&
						(counter.physicalpool || counter.specialpool)
					) {
						cull = true;
					} else {
						for (const type of Object.keys(hasType)) {
							if (_optionalChain([this, 'access', _ => _.moveEnforcementCheckers, 'access', _2 => _2[type], 'optionalCall', _3 => _3(movePool, hasMove, {}, hasType, counter, species, teamDetails)])) cull = true;
						}
					}
				}

				// Remove rejected moves from the move list
				if (cull && movePool.length) {
					moves.splice(i, 1);
					break;
				}
			}
		} while (moves.length < 4 && movePool.length);

		const ivs = {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31};
		// Minimize confusion damage
		if (!counter.Physical && !hasMove['transform']) ivs.atk = 0;

		return {
			name: species.baseSpecies,
			species: forme,
			level: 100,
			gender: species.gender,
			happiness: 70,
			shiny: this.randomChance(1, 1024),
			item: (species.requiredItem || ''),
			ability: 'No Ability',
			evs: {hp: 20, atk: 20, def: 20, spa: 20, spd: 20, spe: 20},
			moves,
			ivs,
		};
	}

	randomTeam() {
		const pokemon = [];

		const pokemonPool = [];
		for (const id in this.dex.data.FormatsData) {
			const species = this.dex.getSpecies(id);
			if (
				species.num < 1 ||
				(species.num > 151 && ![808, 809].includes(species.num)) ||
				species.gen > 7 ||
				species.nfe ||
				!_optionalChain([species, 'access', _4 => _4.randomBattleMoves, 'optionalAccess', _5 => _5.length])
			) {
				continue;
			}
			pokemonPool.push(id);
		}

		const typeCount = {};
		const typeComboCount = {};
		const baseFormes = {};
		const teamDetails = {};

		while (pokemonPool.length && pokemon.length < 6) {
			const species = this.dex.getSpecies(this.sampleNoReplace(pokemonPool));
			if (!species.exists) continue;

			// Limit to one of each species (Species Clause)
			if (baseFormes[species.baseSpecies]) continue;

			const types = species.types;

			// Once we have 2 Pokémon of a given type we reject more Pokémon of that type 80% of the time
			let skip = false;
			for (const type of species.types) {
				if (typeCount[type] > 1 && this.randomChance(4, 5)) {
					skip = true;
					break;
				}
			}
			if (skip) continue;

			// Limit 1 of any type combination
			const typeCombo = types.slice().sort().join();
			if (typeComboCount[typeCombo] >= 1) continue;

			// Okay, the set passes, add it to our team
			const set = this.randomSet(species, teamDetails);
			pokemon.push(set);

			// Now that our Pokemon has passed all checks, we can increment our counters
			baseFormes[species.baseSpecies] = 1;

			// Increment type counters
			for (const type of types) {
				if (type in typeCount) {
					typeCount[type]++;
				} else {
					typeCount[type] = 1;
				}
			}

			if (typeCombo in typeComboCount) {
				typeComboCount[typeCombo]++;
			} else {
				typeComboCount[typeCombo] = 1;
			}

			// Team details
			if (set.moves.includes('stealthrock')) teamDetails.stealthRock = 1;
			if (set.moves.includes('rapidspin')) teamDetails.rapidSpin = 1;
		}
		return pokemon;
	}
} exports.RandomLetsGoTeams = RandomLetsGoTeams;

exports. default = RandomLetsGoTeams;

 //# sourceMappingURL=sourceMaps/random-teams.js.map