export const Items: {[k: string]: ModdedItemData} = {
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
				return this.chainModify([0x1500, 0x1000]);
			}
		},
		num: 265,
		gen: 4,
	},
};
