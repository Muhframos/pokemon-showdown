/*

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

export const Moves: {[moveid: string]: MoveData} = {
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
	spikecannon: {
	 inherit: true,
	 basePower: 25,
	 type: "Ground",
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
		maxMove: {basePower: 75},
		contestType: "Tough",
	},
};
