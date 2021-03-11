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
		name: "Power Compaction",
		desc: "Boosts Attack and Special Attack by one stage when hit by a super-effective move.",
		shortDesc: "Boosts Atk and SpA when hit super-effectively.",
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
		name: "Slumber",
		desc: "On switch-in, restore HP to full and cure status, then sleep for 2 turns.",
		shortDesc: "Uses Rest on switch-in.",
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
		name: "Slow Start",
		shortDesc: "Halves Attack and Speed for 3 turns on switch-in.",
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
		name: "Permafrost",
		desc: "Grants immunity to Fire-type moves.",
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
	pastelveil: {
		name: "Pastel Veil",
		desc: "Grants immunity to Poison-type moves.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Poison') {
				{
					this.add('-immune', target, '[from] ability: Pastel Veil');
				}
				return null;
			}
		},
		name: "Pastel Veil",
		rating: 2,
		num: 257,
	},
	compoundeyes: {
		name: "Compound Eyes",
		desc: "Boosts accuracy of moves by 1.5x.",
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
	magician: {
		name: "Magician",
		desc: "Summons Magic Room on switch-in. Lasts for 5 turns.",
		shortDesc: "Magic Room on switch-in.",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Magician');
			this.field.addPseudoWeather('magicroom');
		},
		name: "Magician",
		rating: 4,
		num: 170,
	},
	gravitysurge: {
		name: "Gravity Surge",
		desc: "Summons Gravity on switch-in. Lasts for 5 turns.",
		shortDesc: "Gravity on switch-in.",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Gravity Surge');
			this.field.addPseudoWeather('gravity');
		},
		name: "Gravity Surge",
		rating: 4,
		num: -10,
	},
	superluck: {
		name: "Super Luck",
		desc: "Boosts the user's critical hit ratio by 2 stages.",
		onModifyCritRatio(critRatio) {
			return critRatio + 2;
		},
		name: "Super Luck",
		rating: 1.5,
		num: 105,
	},
	oracle: {
		name: "Oracle",
		desc: "Upon switchin, the user uses Future Sight on the opposing side.",
		shortDesc: "Future Sight for opposing side on switchin.",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Oracle');
			let success = false;
			for (const target of pokemon.side.foe.active) {
				if (target.side.addSlotCondition(target, 'futuremove')) {
					Object.assign(target.side.slotConditions[target.position]['futuremove'], {
						duration: 3,
						move: 'futuresight',
						source: pokemon,
						moveData: {
							id: 'futuresight',
							name: "Future Sight",
							accuracy: 100,
							basePower: 120,
							category: "Special",
							priority: 0,
							flags: {},
							effectType: 'Move',
							isFutureMove: true,
							type: 'Psychic',
						},
					});
					success = true;
				}
			}

			if (success) {
				this.add('-anim', pokemon, 'Future Sight');
				this.add('-start', pokemon, 'Future Sight');
			}
		},
	},
	rating: 2,
	num: -8,
	portend: {
		name: "Portend",
		desc: "2 turns after switchin, the user uses Earthquake on the opposing side.",
		shortDesc: "2 turns delayed Earthquake on switchin.",
		onStart(pokemon) {
			this.add('-activate', pokemon, 'ability: Portend');
			let success = false;
			for (const target of pokemon.side.foe.active) {
				if (target.side.addSlotCondition(target, 'futuremove')) {
					Object.assign(target.side.slotConditions[target.position]['futuremove'], {
						duration: 3,
						move: 'portend',
						source: pokemon,
						moveData: {
							id: 'portend',
							name: "Portend",
							accuracy: 100,
							basePower: 100,
							category: "Physical",
							priority: 0,
							flags: {},
							effectType: 'Move',
							isFutureMove: true,
							type: 'Ground',
						},
					});
					success = true;
				}
			}

			if (success) {
				this.add('-anim', pokemon, 'Doom Desire');
			}
		},
	},
	rating: 2,
	num: -8,
	sandforce: {
		name: "Sand Force",
		desc: "Ground, Steel and Rock moves have 1.3x Power. Grants Immunity to Sandstorm damage.",
		shortDesc: "Powers up Ground, Steel, Rock moves. Sandstorm immunity.",
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel') {
					this.debug('Sand Force boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		name: "Sand Force",
		rating: 4,
		num: 159,
	},
	wonderguard: {
		name: "Wonder Guard",
		desc: "This Pokemon can only be damaged by supereffective moves and indirect damage. Alert if opponent has super-effective moves",
		shortDesc: "Can only be damaged by supereffective and indirect damage, alerts if opponent has super-effective move.",
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Wonder Guard');
				}
				return null;
			}
		},
		onStart(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.getMove(moveSlot.move);
					if (move.category === 'Status') continue;
					const moveType = move.id === 'hiddenpower' ? target.hpType : move.type;
					if (
						this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 ||
						move.ohko
					) {
						this.add('-ability', pokemon, 'Wonder Guard');
						return;
					}
				}
			}
		},
		name: "Wonder Guard",
		rating: 5,
		num: 25,
	},
	whitesmoke: {
		name: "White Smoke",
		desc: "This pokemon's stat stages cannot be dropped.",
		onBoost(boost, target, source, effect) {
			let showMsg = false;
			let i: BoostName;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: White Smoke", "[of] " + target);
			}
		},
		name: "White Smoke",
		rating: 2,
		num: 73,
	},
	clearbody: {
		name: "Clear Body",
		desc: "This pokemon's stat stages cannot be dropped.",
		onBoost(boost, target, source, effect) {
			let showMsg = false;
			let i: BoostName;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
			}
		},
		name: "Clear Body",
		rating: 2,
		num: 29,
	},
	aftermath: {
		name: "Aftermath",
		desc: "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon.",
		shortDesc: "If this is knocked out with a move, deals damage equal to HP lost to attacker.",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				this.damage(target.getUndynamaxedHP(damage), source, target);
			}
		},
		rating: 2.5,
		num: 106,
	},
	blaze: {
		name: "Blaze",
		desc: "This pokemon's Fire-type moves are boosted by 25%, but 100% under 25% HP.",
		shortdesc: "User gets boosted Fire-type moves, even more on low HP.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Blaze boost');
				return this.chainModify(1.25);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Blaze boost');
				return this.chainModify(1.25);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Blaze boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Blaze boost');
				return this.chainModify(2);
			}
		},
		name: "Blaze",
		rating: 2,
		num: 66,
	},
	torrent: {
		name: "Torrent",
		desc: "This pokemon's Water-type moves are boosted by 25%, but 100% under 25% HP.",
		shortdesc: "User gets boosted Water-type moves, even more on low HP.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Torrent boost');
				return this.chainModify(1.25);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Torrent boost');
				return this.chainModify(1.25);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Torrent boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Torrent boost');
				return this.chainModify(2);
			}
		},
		name: "Torrent",
		rating: 2,
		num: 66,
	},
	overgrow: {
		name: "Overgrow",
		desc: "This pokemon's Grass-type moves are boosted by 25%, but 100% under 25% HP.",
		shortdesc: "User gets boosted Grass-type moves, even more on low HP.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Overgrow boost');
				return this.chainModify(1.25);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Overgrow boost');
				return this.chainModify(1.25);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Overgrow boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Overgrow boost');
				return this.chainModify(2);
			}
		},
		name: "Overgrow",
		rating: 2,
		num: 66,
	},
	swarm: {
		name: "Swarm",
		desc: "This pokemon's Bug-type moves are boosted by 25%, but 100% under 25% HP.",
		shortdesc: "User gets boosted Bug-type moves, even more on low HP.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Swarm boost');
				return this.chainModify(1.25);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 1) {
				this.debug('Swarm boost');
				return this.chainModify(1.25);
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Swarm boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 4) {
				this.debug('Swarm boost');
				return this.chainModify(2);
			}
		},
		name: "Swarm",
		rating: 2,
		num: 66,
	},
	wonderskin: {
		name: "Wonder Skin",
		desc: "This ability has a different effect for depending status condition the user has (Check Docs).",
		shortdesc: "Different effect depending on status condition.",
		onModifyAtkPriority: 7,
		onModifyAtk(atk, pokemon) {
			if (pokemon.status === 'brn') {
				return this.chainModify(3);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.status === 'par') {
				return this.chainModify(1.5);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.baseMaxhp / 8);
				return false;
			}
		},
		onFlinch(pokemon) {
			this.boost({spe: 1});
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Wonder Skin');
				pokemon.cureStatus();
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target?.volatiles['confusion']) {
				this.debug('Wonder Skin - decreasing accuracy');
				return this.chainModify(0.5);
			}
		},
		name: "Wonder Skin",
		rating: 2,
		num: 147,
	},
	lightningrod: {
		name: "Lightning Rod",
		desc: "This Pokemon is immune to Electric-type moves and raises its SpA and Atk by 1 stage when hit by an Electric-type move.",
		shortdesc: "Raises SpA and Atk by 1 when hit by an Electric move. Immune to Electric.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectData.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Lightning Rod');
				}
				return this.effectData.target;
			}
		},
		name: "Lightning Rod",
		rating: 3,
		num: 31,
	},
	sniper: {
		name: "Sniper",
		desc: "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.25.",
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.25);
			}
		},
		name: "Sniper",
		rating: 2,
		num: 97,
	},
	catalyst: {
		name: "Catalyst",
		desc: "This Pokemon's Special Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
		shortDesc: "This Pokemon's SpA is raised if it attacks and KOes another Pokemon.",
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source);
			}
		},
		name: "Catalyst",
		rating: 3,
		num: -9,
	},
	stench: {
		name: "Stench",
		desc: "This Pokemon's attacks without a chance to flinch have a 30% chance to flinch.",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				this.debug('Adding Stench flinch');
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 30,
					volatileStatus: 'flinch',
				});
			}
		},
		name: "Stench",
		rating: 0.5,
		num: 1,
	},
	levitate: {
		inherit: true,
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Levitate');
		},
	},
	iceface: {
		desc: "If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Hail.",
		onStart(pokemon) {
			if (this.field.isWeather('hail') && pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectData.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' &&
				target.species.id === 'eiscue' && !target.transformed
			) {
				this.add('-activate', target, 'ability: Ice Face');
				this.effectData.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;
			if (target.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates)) return;
			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;
			if (target.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates)) return;
			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (pokemon.species.id === 'eiscue' && this.effectData.busted) {
				pokemon.formeChange('Eiscue-Noice', this.effect, true);
			}
		},
		onAnyWeatherStart() {
			const pokemon = this.effectData.target;
			if (!pokemon.hp) return;
			if (this.field.isWeather('hail') && pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectData.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		isPermanent: true,
		name: "Ice Face",
		rating: 3,
		num: 248,
	},
	corrosion: {
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Poison'] = true;
			}
		},
		name: "Corrosion",
		desc: "This Pokemon's moves ignore Poison immunity.",
		rating: 3,
		num: 212,
	},
	shellarmor: {
				onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Veil');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Water Veil');
			}
			return false;
		},
		onCriticalHit: false,
		name: "Shell Armor",
		rating: 2,
		num: 75,
	},
	battlearmor: {
				onModifySecondaries(secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		onCriticalHit: false,
		name: "Battle Armor",
		rating: 2,
		num: 75,
	},
	truant: {
		desc: "Every other turn, this Pokemon loafs around and cannot use attacking moves on that turn.",
		shortDesc: "Every other turn, can only use status.",
		onStart(pokemon) {
			pokemon.removeVolatile('truant');
			if (pokemon.activeTurns && (pokemon.moveThisTurnResult !== undefined || !this.queue.willMove(pokemon))) {
				pokemon.addVolatile('truant');
			}
		},
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
			if (pokemon.removeVolatile('truant')) {
				this.add('cant', pokemon, 'ability: Truant');
				return false;
			}
			pokemon.addVolatile('truant');
		},
		condition: {
			duration: 3,
			onStart(target) {
				if (target.activeTurns && !this.queue.willMove(target)) {
					this.effectData.duration++;
				}
				this.add('-start', target, 'ability: Truant');
			},
			onResidualOrder: 12,
			onEnd(target) {
				this.add('-end', target, 'ability: Truant');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					const move = this.dex.getMove(moveSlot.id);
					if (move.category === 'Status' && move.id !== 'mefirst') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && !move.isMax && move.category === 'Physical' && move.category === 'Special') {
					this.add('cant', attacker, 'ability: Truant', move);
					return false;
				}
			},
		},
		name: "Truant",
		rating: -1,
		num: 54,
	},
	runaway: {
		inherit: true,
		onTrapPokemonPriority: -10,
		onTrapPokemon(pokemon) {
			pokemon.trapped = pokemon.maybeTrapped = false;
		},
	rating: 1,
	},
	poisonpoint: {
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('tox', target);
				}
			}
		},
		name: "Poison Point",
		rating: 1.5,
		num: 38,
	},
	poisontouch: {
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove(move) {
			if (!move || !move.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'tox',
				ability: this.dex.getAbility('poisontouch'),
			});
		},
		name: "Poison Touch",
		rating: 2,
		num: 143,
	},
	oblivious: {
		inherit: true,
		//hazard immunity coded in moves.ts
		desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate and Hazards.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Immune to Intimidate and Hazards.",
	},
	pickpocket: {
		name: "Pickpocket",
		rating: 1,
		num: 124,
		desc: "The user switches items with the target after using a contact move.",
		shortDesc: "Trick on contact with the target after contact attack.",
		onTryImmunity(target) {
			return !target.hasAbility('stickyhold');
		},
		onAfterMoveSecondarySelf(target, source, move) {
		if (move.flags['contact']) {
			const yourItem = target.takeItem(source);
			const myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if (
				(myItem && !this.singleEvent('TakeItem', myItem, source.itemData, target, source, move, myItem)) ||
				(yourItem && !this.singleEvent('TakeItem', yourItem, target.itemData, source, target, move, yourItem))
			) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'ability: Pickpocket', '[of] ' + source);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] ability: Pickpocket');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] ability: Pickpocket');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] ability: Pickpocket');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] ability: Pickpocket');
			}
			}
		}
	},
};
