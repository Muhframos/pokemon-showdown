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
	slumber: {
		onStart(pokemon) {
			if (pokemon.status === 'slp' || pokemon.hasAbility('comatose')) return false;
			if (pokemon.hasAbility(['insomnia', 'vitalspirit'])) {
				this.add('-fail', pokemon, '[from] ability: ' + pokemon.getAbility().name, '[of] ' + pokemon);
				return null;
			}
		},
		onStart(pokemon) {
			if (!pokemon.setStatus('slp', pokemon)) return false;
			pokemon.statusData.time = 3;
			pokemon.statusData.startTime = 3;
			this.heal(pokemon.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
		},
		name: "Slumber",
		rating: 1,
		num: -6,
	},
	slowstart: {
		onStart(pokemon) {
			pokemon.addVolatile('slowstart');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['slowstart'];
			this.add('-end', pokemon, 'Slow Start', '[silent]');
		},
		condition: {
			duration: 3,
			onStart(target) {
				this.add('-start', target, 'ability: Slow Start');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				return this.chainModify(0.5);
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.5);
			},
			onEnd(target) {
				this.add('-end', target, 'Slow Start');
			},
		},
		name: "Slow Start",
		rating: -1,
		num: 112,
	},
	permafrost: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				{
					this.add('-immune', target, '[from] ability: Permafrost');
				}
				return null;
			}
		},
		name: "Permafrost",
		rating: 2,
		num: -7,
	},
	compoundeyes: {
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			return this.chainModify([0x16CD, 0x1000]);
		},
		name: "Compound Eyes",
		rating: 3,
		num: 14,
	},
};
