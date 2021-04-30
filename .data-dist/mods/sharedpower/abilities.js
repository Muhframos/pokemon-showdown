"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } const Abilities = {
	damp: {
		inherit: true,
		onAnyDamage(damage, target, source, effect) {
			if (effect && (effect.id === 'aftermath' || effect.id === 'ability:aftermath')) {
				return false;
			}
		},
	},
	flowerveil: {
		inherit: true,
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Grass') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Flower Veil');
				if (effect.id.endsWith('synchronize') || (effect.effectType === 'Move' && !effect.secondaries)) {
					const effectHolder = this.effectData.target;
					this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
				}
				return null;
			}
		},
	},
	innerfocus: {
		inherit: true,
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate' || effect.id === 'ability:intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Inner Focus', '[of] ' + target);
			}
		},
	},
	mirrorarmor: {
		inherit: true,
		onBoost(boost, target, source, effect) {
			// Don't bounce self stat changes, or boosts that have already bounced
			if (target === source || !boost || effect.id === 'mirrorarmor' || effect.id === 'ability:mirrorarmor') return;
			let b;
			for (b in boost) {
				if (boost[b] < 0) {
					if (target.boosts[b] === -6) continue;
					const negativeBoost = {};
					negativeBoost[b] = boost[b];
					delete boost[b];
					this.add('-ability', target, 'Mirror Armor');
					this.boost(negativeBoost, source, target, null, true);
				}
			}
		},
	},
	neutralizinggas: {
		inherit: true,
		// Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Neutralizing Gas');
			pokemon.abilityData.ending = false;
			// Remove setter's innates before the ability starts
			for (const target of this.getAllActive()) {
				if (target.illusion) {
					this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityData, target, pokemon, 'neutralizinggas');
				}
				if (target.volatiles['slowstart']) {
					delete target.volatiles['slowstart'];
					this.add('-end', target, 'Slow Start', '[silent]');
				}
				if (_optionalChain([target, 'access', _ => _.m, 'access', _2 => _2.abils, 'optionalAccess', _3 => _3.length])) {
					for (const key of target.m.abils) {
						if (this.dex.abilities.get(key.slice(8)).isPermanent) continue;
						target.removeVolatile(key);
					}
				}
			}
		},
		onEnd(source) {
			this.add('-end', source, 'ability: Neutralizing Gas');

			// FIXME this happens before the pokemon switches out, should be the opposite order.
			// Not an easy fix since we cant use a supported event. Would need some kind of special event that
			// gathers events to run after the switch and then runs them when the ability is no longer accessible.
			// (If you're tackling this, do note extreme weathers have the same issue)

			// Mark this pokemon's ability as ending so Pokemon#ignoringAbility skips it
			if (source.abilityData.ending) return;
			source.abilityData.ending = true;
			const sortedActive = this.getAllActive();
			this.speedSort(sortedActive);
			for (const pokemon of sortedActive) {
				if (pokemon !== source) {
					// Will be suppressed by Pokemon#ignoringAbility if needed
					this.singleEvent('Start', pokemon.getAbility(), pokemon.abilityData, pokemon);
				}
				if (_optionalChain([pokemon, 'access', _4 => _4.m, 'access', _5 => _5.abils, 'optionalAccess', _6 => _6.length])) {
					for (const innate of pokemon.m.abils) {
						// permanent abilities
						if (pokemon.volatiles[innate]) continue;
						pokemon.addVolatile(innate, pokemon);
					}
				}
			}
		},
	},
	oblivious: {
		inherit: true,
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate' || effect.id === 'ability:intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Oblivious', '[of] ' + target);
			}
		},
	},
	owntempo: {
		inherit: true,
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate' || effect.id === 'ability:intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Own Tempo', '[of] ' + target);
			}
		},
	},
	rattled: {
		inherit: true,
		onAfterBoost(boost, target, source, effect) {
			if (effect && (effect.id === 'intimidate' || effect.id === 'ability:intimidate')) {
				this.boost({spe: 1});
			}
		},
	},
	scrappy: {
		inherit: true,
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate' || effect.id === 'ability:intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Scrappy', '[of] ' + target);
			}
		},
	},
	trace: {
		inherit: true,
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectData.gaveUp) return;
			const isAbility = pokemon.ability === 'trace';

			const additionalBannedAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
			];
			const possibleTargets = pokemon.adjacentFoes().filter(target => (
				!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
			));
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);
			const ability = target.getAbility();
			this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
			if (isAbility) {
				pokemon.setAbility(ability);
			} else {
				pokemon.removeVolatile('ability:trace');
				pokemon.addVolatile('ability:' + ability.id, pokemon);
			}
		},
	},
}; exports.Abilities = Abilities;

 //# sourceMappingURL=sourceMaps/abilities.js.map