"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const AbilitiesText = {
	//Adventures abilities
	powercompaction: {
		name: "Power Compaction",
		desc: "This Pokemon's Attack and Special Attack are raised by 1 stage when damaged by a super-effective move.",
		shortDesc: "This Pokemon's Atk and SpA rise when it is damaged by a super-effective move.",
		
		activate: "[POKEMON]'s Power rose!",
	},
	slumber: {
		name: "Slumber",
		shortDesc: "On switch-in, this Pokemon sleeps for 2 turns and restores HP and status.",
	},
	slowstart: {
		name: "Slow Start",
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 3 turns.",

		start: "  [POKEMON] can't get it going!",
		end: "  [POKEMON] finally got its act together!",
	},
	permafrost: {
		name: "Permafrost",
		shortDesc: "This Pokemon is immune to Fire-type moves.",
	},
}; exports.AbilitiesText = AbilitiesText;

 //# sourceMappingURL=sourceMaps/abilities.js.map