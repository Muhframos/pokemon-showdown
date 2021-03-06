"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/*

List of flags and their descriptions:

authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.

*/

 const Moves = {
// Mega Launcher Implementation Start
	zapcannon: {
	inherit: true,
    flags: {bullet: 1, protect: 1, mirror: 1, pulse: 1},	
	},
	flashcannon: {
	inherit: true,
    flags: {protect: 1, mirror: 1, pulse: 1},	
	},
	dynamaxcannon: {
	inherit: true,
    flags: {protect: 1, pulse: 1},	
	},
	fleurcannon: {
	inherit: true,
	flags: {protect: 1, mirror: 1, pulse: 1},
	},
	gmaxcannonade: {
	inherit: true,
	flags: {pulse: 1},
	},
	hydrocannon: {
	inherit: true,
    flags: {recharge: 1, protect: 1, mirror: 1, pulse: 1},	
	},
	spikecannon: {
	inherit: true,
	basePower: 25,
	type: "Ground",
    flags: {recharge: 1, protect: 1, mirror: 1, pulse: 1},	
	},
// Mega Launcher Implementation End

//Move changes
	snore: {
		inherit: true,
		basePower: 120,
	},
	suckerpunch: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1},
	},
		iciclecrash: {
		inherit: true,
		accuracy: 100,
	},
	honeclaws: {
	  inherit: true,
	  boosts: {
	  atk: 1,
      accuracy: 2,	 
	  },
	},
	lifedew: {
		inherit: true,
		heal: [1, 2],	 
	},
	dragonrage: {
		num: 82,
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Physical",
		name: "Dragon Rage",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
		secondary: null,
		target: "normal",
		type: "Dragon",
		maxMove: {basePower: 100},
		contestType: "Tough",
	},
	armthrust: {
		inherit: true,
		basePower: 25,
	},
	furyswipes: {
		inherit: true,
		basePower: 20,
		critRatio: 3,
	},
	diamondstorm: {
		inherit: true,
		accuracy: 100,
	},
	drillrun: {
		inherit: true,
		accuracy: 100,
		critRatio: 3,
	},
	razorshell: {
		inherit: true,
		accuracy: 100,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
	},
	highhorsepower: {
		inherit: true,
		basePower: 90,
		accuracy: 90,
		secondary: {
			chance: 20,
			self: {
				boosts: {
					spe: 1,
				},
			},
		}
	},
	explosion: {
		inherit: true,
		category: "Special",
		critRatio: 5,
	},
	selfdestruct: {
		inherit: true,
		basePower: 250,
		critRatio: 5,
	},
	mistyexplosion: {
		inherit: true,
		basePower: 125,
		critRatio: 5,
		onBasePower(basePower, source) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				this.debug('misty terrain boost');
				return this.chainModify(2);
			}
		}
	},
	triplekick: {
		num: 167,
		accuracy: 90,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		category: "Physical",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 120},
		maxMove: {basePower: 140},
		contestType: "Cool",
	},
	tyrantchomp: {
		num: -1,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Tyrant Chomp",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		secondary: {
				chance: 10,
				volatileStatus: 'flinch',
			},
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	toxicthread: {
		num: 672,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Toxic Thread",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		status: 'tox',
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		boosts: null,
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {spe: 1}},
		contestType: "Tough",
	},
	dizzypunch: {
		inherit: true,
		accuracy: 85,
		basePower: 45,
		category: "Physical",
		name: "Dizzy Punch",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: 2,
		secondaries: [
			{
				chance: 20,
				volatileStatus: 'confusion',
			}, 
			{
				chance: 20,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Fighting",
		zMove: {basePower: 180},
		maxMove: {basePower: 140},
		contestType: "Clever",
	},
	beakblast: {
		inherit: true,
		basePower: 120,
	},
	aurorabeam : {
		inherit: true,
		basePower: 75,
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			}
		}
	},
	technoblast : {
		inherit: true,
		basePower: 150,
	},
	present: {
		inherit: true,
		type: "Flying",
		onModifyMove(move, pokemon, target) {
			const rand = this.random(10);
			if (rand < 2) {
				move.heal = [1, 4];
				move.infiltrates = true;
			} else if (rand < 6) {
				move.basePower = 80;
			} else if (rand < 9) {
				move.basePower = 160;
			} else {
				move.basePower = 240;
			}
		}
	},
	jawlock: {
		inherit: true,
		type: "Rock",
	},
	xscissor: {
		inherit: true,
		critRatio: 3,
	},
	bonemerang: {
		inherit: true,
		basePower: 60,
	},
	shadowbone: {
		inherit: true,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			}
		}
	},
	snipeshot: {
		inherit: true,
		basePower: 100
	},
	paraboliccharge: {
		inherit: true,
		basePower: 75
	},
	revelationdance: {
		inherit: true,
		basePower: 120,
		category: "Special",
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
	},
	focusenergy: {
		inherit: true,
		volatileStatus: 'focusenergy',
		condition: {
			onStart(target, source, effect) {
				if (_optionalChain([effect, 'optionalAccess', _ => _.id]) === 'zpower') {
					this.add('-start', target, 'move: Focus Energy', '[zeffect]');
				} else if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Focus Energy', '[silent]');
				} else {
					this.add('-start', target, 'move: Focus Energy');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + 4;
			},
		},
	},
	psychocut: {
		inherit: true,
		critRatio: 3,
	},
	razorleaf: {
		inherit: true,
		critRatio: 3,
	},
	razorwind: {
		inherit: true,
		critRatio: 3,
	},
	shadowclaw: {
		inherit: true,
		critRatio: 3,
	},
	skyattack: {
		inherit: true,
		critRatio: 3,
	},
	slash: {
		inherit: true,
		critRatio: 3,
	},
	snipeshot: {
		inherit: true,
		critRatio: 3,
	},
	spacialrend: {
		inherit: true,
		critRatio: 3,
	},
	stoneedge: {
		inherit: true,
		critRatio: 3,
	},
	"10000000voltthunderbolt": {
		inherit: true,
		critRatio: 5,
	},
	aeroblast: {
		inherit: true,
		critRatio: 3
	},
	aircutter: {
		inherit: true,
		critRatio: 3,
	},
	attackorder: {
		inherit: true,
		critRatio: 3,
	},
	blazekick: {
		inherit: true,
		critRatio: 3,
	},
	crabhammer: {
		inherit: true,
		critRatio: 3,
	},
	crosschop: {
		inherit: true,
		critRatio: 3,
	},
	crosspoison: {
		inherit: true,
		critRatio: 3,
	},
	karatechop: {
		inherit: true,
		critRatio: 3,
	},
	leafblade: {
		inherit: true,
		critRatio: 3,
	},
	nightslash: {
		inherit: true,
		critRatio: 3,
	},
	poisontail: {
		inherit: true,
		critRatio: 3,
	},
	decorate: {
		inherit: true,
		heal: [1, 4],
		boosts: {
			spd: 1,
			spa: 1,
		},
		target: "adjacentAllyOrSelf",
	},	
	aircutter: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
	},
	airslash: {
		inherit: true,
		accuracy: 100,
	},
	fly: {
		inherit: true,
		accuracy: 100,
	},
	sacredfire: {
		inherit: true,
		accuracy: 100,
	},
	shelltrap: {
		num: 704,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		name: "Shell Trap",
		pp: 8,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTry(source, target) {
			const action = this.queue.willMove(target);
			const move = _optionalChain([action, 'optionalAccess', _2 => _2.choice]) === 'move' ? action.move : null;
			if (!move || (move.category === 'Status' && move.id !== 'mefirst') || target.volatiles['mustrecharge']) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	icehammer: {
		inherit: true,
		self: null,
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			}
		}
	},
	hammerarm: {
		inherit: true,
		self: null,
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			}
		}
	},
	dragonhammer: {
		inherit: true,
		accuracy: 90,
		basePower: 100,
		pp: 10,
		critRatio: 3,
	},
	bulletpunch: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, bullet: 1, punch: 1},
	},
	defog: {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onHit(target, source, move) {
			let success = false;
			this.field.clearTerrain();
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			const removeTarget = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			const removeAll = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
			];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.dex.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			this.field.clearTerrain();
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMove: {boost: {accuracy: 1}},
		contestType: "Cool",
	},
	barrage: {
		num: 140,
		accuracy: 85,
		basePower: 30,
		category: "Physical",
		name: "Barrage",
		isNonstandard: "Past",
		name: "Barrage",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		multihit: [3],
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cute",
	},
	vcreate: {
		num: 557,
		accuracy: 95,
		basePower: 180,
		category: "Special",
		name: "V-Create",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		self: {
			boosts: {
				spe: -1,
				def: -1,
				spd: -1,
			},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMove: {basePower: 220},
		contestType: "Cool",
	},
	doublekick: {
		inherit: true,
		basePower: 45
	},
	chargebeam: {
		num: 451,
		accuracy: 90,
		basePower: 60,
		name: "Charge Beam",
		category: "Special",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
	},
	belch: {
		inherit: true,
		basePower: 140,
		accuracy: 100,
	},
	geargrind: {
		inherit: true,
		basePower: 75,
		accuracy: 100,
	},
	shadowpunch: {
		inherit: true,
		basePower: 75,
	},
	clangingscales: {
		inherit: true,
		category: "Physical",
	},
	clangoroussoulblaze: {
		inherit: true,
		category: "Physical",
	},
	flash: {
		inherit: true,
		desc: "100% chance to lower the target's speed by 1 stage. Hits all foes.",
		shortDesc: "100% chance to lower target's Spe by 1.",
		accuracy: 100,
		basePower: 60,
		category: "Special",
		name: "Flash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Electric",
		contestType: "Clever",
	},
	rockclimb: {
		inherit: true,
		type: "Rock",
		accuracy: 90,
		basePower: 85,
	},
	fly: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
	},
	dive: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
	},
	dig: {
		inherit: true,
		basePower: 100,
		accuracy: 100,
	},
	cut: {
		inherit: true,
		desc: "100% chance to lower the target's defense and special defense by 1 stage.",
		shortDesc: "100% chance to lower target's Def and SpD by 1.",
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Cut",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Tough",
	},
	rocksmash: {
		inherit: true,
		desc: "100% chance to lower the target's defense by 1 stage.",
		shortDesct: "100% chance to lower target's Def by 1.",
		basePower: 65,
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
	},
	strength: {
		inherit: true,
		pp: 10,
		priority: -6,
		forceSwitch: true,
		basePower: 80,
		accuracy: 90,
	},
	circlethrow: {
		inherit: true,
		basePower: 80,
	},
	dragontail: {
		inherit: true,
		basePower: 80,
	},
	mobboss: {
		num: -15,
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target, move) {
			return 5 + Math.floor(move.allies.shift().species.baseStats.atk / 10);
		},
		category: "Physical",
		name: "Mob Boss",
		desc: "Usually goes first. Hits all foes one time for the user and one time for each unfainted Pokemon without a non-volatile status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokemon's base Attack; each hit is considered to come from the user.",
		shortDesct: "Beat Up with +1 priority. Hits all adjacent foes.",
		pp: 10,
		priority: 1,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onModifyMove(move, pokemon) {
			move.allies = pokemon.side.pokemon.filter(ally => ally === pokemon || !ally.fainted && !ally.status);
			move.multihit = move.allies.length;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		contestType: "Clever",
	},
	shatteringsteel: {
		num: -16,
		accuracy: 100,
		basePower: 150,
		name: "Shattering Steel",
		desc: "100% chance to lower the target's Defense by 2 stages.",
		shortDesc: "100% chance to lower target's Def by 2.",
		category: "Physical",
		pp: 1,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 100,
				boosts: {
					def: -2,
				},
		},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
		zMove: {boost: {atk: 2}},
	},
	twineedle: {
		num: 41,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		isNonstandard: "Past",
		name: "Twineedle",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 2,
		secondary: {
			chance: 20,
			status: 'tox',
		},
		target: "normal",
		type: "Bug",
		maxMove: {basePower: 100},
		contestType: "Cool",
	},
}; exports.Moves = Moves

 //# sourceMappingURL=sourceMaps/moves.js.map