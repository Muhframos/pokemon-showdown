// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	{
		section: "National Dex",
	},
	{
		name: "[Gen 8] Adventures OU",
		mod: 'adventures',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Uber', 'AG', 'OUBL', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Adventures UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660920/">National Dex UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672486/">National Dex UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672482/">National Dex UU Viability Rankings</a>`,
		],

		mod: 'adventures',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			// National Dex OU
			 'OU', 'AG', 'Uber', 'OUBL', 'Drought', 'Drizzle', 'Arena Trap', 'Shadow Tag', 'Baton Pass',
			'UUBL', // National Dex UUBL
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
	},
	{
		name: "[Gen 8] Adventures DOU",
		mod: 'adventures',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Uber', 'AG', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Adventures DUU",
		mod: 'adventures',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			// National Dex OU
			 'OU', 'AG', 'Uber', 'Drought', 'Drizzle', 'Arena Trap', 'Shadow Tag', 'Baton Pass',
			'UUBL', // National Dex UUBL
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
		// Used to distinguish UU from below UU in the client
	},
	{
		name: "[Gen 8] Adventures Ubers",
		mod: 'adventures',
		ruleset: ['Standard NatDex', 'Dynamax Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Sleep Clause Mod',],
		banlist: ['AG', 'Baton Pass',],
	},
	{
		name: "[Gen 8] Adventures AG",
		mod: 'adventures',
		banlist: ['Greninja-Ash', 'Eiscue-Noice',],
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] Adventures 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		mod: 'adventures',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Reshiram', 'Sableye', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Moody', 'Focus Sash', 'Perish Song', 'Eternatus-Eternamax', 'AG', 'Uber',
		],
	},
	{
		name: "[Gen 8] Adventures Free For All",

		mod: 'adventures',
		gameType: 'freeforall',
		challengeShow: false,
		rated: false,
		banlist: ['Eternatus-Eternamax', 'AG', 'Greninja-Ash', 'Eiscue-Noice',],
		ruleset: [ 'Species Clause', 'Dynamax Clause', 'Obtainable Good', '+Unobtainable', 'HP Percentage Mod', 'Sleep Clause Mod', '+Past', 'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod',],
	},
	{
		name: "[Gen 8] Adventures Multi Battle",

		mod: 'adventures',
		challengeShow: false,
		gameType: 'multi',
		teamLength: {
			battle: 3,
	},
		banlist: [ 'Eternatus-Eternamax', 'AG', 'Greninja-Ash', 'Eiscue-Noice',],
		ruleset: ['Species Clause', 'Dynamax Clause', 'Obtainable Good', '+Unobtainable', 'HP Percentage Mod', 'Sleep Clause Mod', '+Past', 'Nickname Clause', 'Endless Battle Clause', 'Cancel Mod',],
	},
	{
		name: "[Gen 8] Adventures Custom Game",
		mod: 'adventures',
		rated: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Adventures FFA Custom Game",

		mod: 'adventures',
		gameType: 'freeforall',
		rated: false,
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	//Axis League
	{
		section: "Axis League Dex",
	},
	{
		name: "[Gen 8] Axis League Custom Game",

		mod: 'torchic',
		searchShow: false,
		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Axis League AG",
		mod: 'torchic',
		ruleset: ['Standard NatDex', 'Dynamax Clause'],
	},
	{
		name: "[Gen 8] Axis League Elite 4 (Ubers)",
		mod: 'torchic',
		ruleset: ['Standard NatDex', 'Dynamax Clause',],
		banlist: [ 'AG', 'Baton Pass'],
	},
	{
		name: "[Gen 8] Axis League Gyms (OU)",
		mod: 'torchic',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
];
