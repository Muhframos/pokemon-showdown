/*

Ratings and how they work:

-1: Detrimental
	  An ability that severely harms the user.
	ex. Defeatist, Slow Start

 0: Useless
	  An ability with no overall benefit in a singles battle.
	ex. Color Change, Plus

 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations.
	ex. Light Metal, Suction Cups

 2: Useful
	  An ability that can be generally useful.
	ex. Flame Body, Overcoat

 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Chlorophyll, Sturdy

 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Adaptability, Magic Bounce

 5: Essential
	  The sort of ability that defines metagames.
	ex. Imposter, Shadow Tag

*/


export const Abilities: {[k: string]: ModdedAbilityData} = {
	powercompaction: {
		onDamagingHit(damage, target, source, move) {
			if (!move.damage && !move.damageCallback && target.getMoveHitData(move).typeMod > 0) {
				this.boost({atk: 1, spa: 1});
			}
		},
		name: "Power Compaction",
		rating: 3,
		num: -5,
	},
	dracobolt: {
		onStart(pokemon) {
			this.boost({spe: 1}, pokemon);
		},
		name: "Draco Bolt",
		rating: 4,
		num: -6,
	},
	icearmor: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Ice Armor weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Ice Armor",
		rating: 3.5,
		num: -7,
	},
	sidhessacrifice: {
		onPrepareHit(source, move) {
			source.heal(source.baseMaxhp / 3);
		},
		name: "Sidhe's Sacrifice",
		rating: 4.5,
		num: -8,
	},
	energyoverflow: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spa: 1});
			}
		},
		name: "Energy Overflow",
		rating: 4.5,
		num: -9,
	},
};
