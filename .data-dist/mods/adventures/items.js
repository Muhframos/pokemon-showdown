"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Items = {
		palossandite: {
		name: "Palossandite",
		spritenum: 626,
		megaStone: "Palossand-Mega",
		megaEvolves: "Palossand",
		itemUser: ["Palossand"],
		onTakeItem(item, source) {
			if (item.megaEvolves === source.baseSpecies.baseSpecies) return false;
			return true;
		},
		num: -101,
		gen: 7,
		isNonstandard: "Past",
	},
	zoomlens: {
		name: "Zoom Lens",
		spritenum: 574,
		fling: {
			basePower: 10,
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy, target) {
			if (typeof accuracy === 'number' && !this.queue.willMove(target)) {
				this.debug('Zoom Lens boosting accuracy');
				return this.chainModify([0x2000, 0x1000]);
			}
		},
		num: 276,
		gen: 4,
	},
	widelens: {
		name: "Wide Lens",
		spritenum: 537,
		fling: {
			basePower: 10,
		},
		onSourceModifyAccuracyPriority: -2,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy === 'number') {
				return this.chainModify([0x1800, 0x1000]);
			}
		},
		num: 265,
		gen: 4,
	},
	leek: {
		name: "Leek",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (["farfetchd", "sirfetchd"].includes(this.toID(user.baseSpecies.baseSpecies))) {
				return critRatio + 4;
			}
		},
		itemUser: ["Farfetch\u2019d", "Sirfetch\u2019d"],
		num: 259,
		gen: 8,
	},
	scopelens: {
		name: "Scope Lens",
		spritenum: 429,
		fling: {
			basePower: 30,
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 2;
		},
		num: 232,
		gen: 2,
	},
	stick: {
		name: "Stick",
		fling: {
			basePower: 60,
		},
		spritenum: 475,
		onModifyCritRatio(critRatio, user) {
			if (this.toID(user.baseSpecies.baseSpecies) === 'farfetchd') {
				return critRatio + 4;
			}
		},
		itemUser: ["Farfetch\u2019d"],
		num: 259,
		gen: 2,
		isNonstandard: "Past",
	},
	luckypunch: {
		name: "Lucky Punch",
		spritenum: 261,
		fling: {
			basePower: 40,
		},
		onModifyCritRatio(critRatio, user) {
			if (user.baseSpecies.name === 'Chansey') {
				return critRatio + 4;
			}
		},
		itemUser: ["Chansey"],
		num: 256,
		gen: 2,
		isNonstandard: "Past",
	},
	razorclaw: {
		name: "Razor Claw",
		spritenum: 382,
		fling: {
			basePower: 80,
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 2;
		},
		num: 326,
		gen: 4,
	},
	quickherb: {
		name: "Quick Herb",
		desc: "Removes the recharging time from a move once.",
		shortDesc: "Removes recharge time.",
		spritenum: 358,
		fling: {
			basePower: 10,
		},
		onUpdate(pokemon) {
			if (pokemon.volatiles['mustrecharge']) {
				pokemon.eatItem();
			}
		},
		onEat(pokemon) {
			pokemon.removeVolatile('mustrecharge');
		},
		num: -2
	},
	expertbelt: {
		name: "Expert Belt",
		spritenum: 132,
		fling: {
			basePower: 10,
		},
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([0x1666, 0x1000]);
			}
		},
		num: 268,
		gen: 4,
	},
	adrenalineorb: {
		name: "Adrenaline Orb",
		spritenum: 660,
		fling: {
			basePower: 30,
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate') {
				target.useItem();
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'stickyweb') {
				target.useItem();
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'meanlook') {
				target.useItem();
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'shadowtag') {
				target.useItem();
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'arenatrap') {
				target.useItem();
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'block') {
				target.useItem();
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect.id === 'toxicthread') {
				target.useItem();
			}
		},
		boosts: {
			spe: 1,
		},
		num: 846,
		gen: 7,
	},
}; exports.Items = Items;

 //# sourceMappingURL=sourceMaps/items.js.map