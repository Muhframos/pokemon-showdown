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
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			 'Moody', 'Power Construct', 'Baton Pass', 
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
		ruleset: ['National Dex'],
		banlist: [
			// National Dex OU
			'Blissey', 'Chansey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Cinderace', 'Clefable', 'Corviknight', 'Excadrill', 'Ferrothorn',
			'Garchomp', 'Gliscor', 'Greninja', 'Heatran', 'Kartana', 'Kommo-o', 'Landorus-Therian', 'Lopunny-Mega', 'Magearna', 'Magnezone',
			'Mawile-Mega', 'Medicham-Mega', 'Pelipper', 'Rillaboom', 'Scizor-Mega', 'Serperior', 'Slowbro-Base', 'Swampert-Mega', 'Tangrowth',
			'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Volcarona', 'Zapdos-Base',
			'nduubl', // National Dex UUBL
			'Aerodactyl-Mega', 'Azumarill', 'Blacephalon', 'Diancie-Mega', 'Gallade-Mega', 'Gardevoir-Mega', 'Gengar', 'Gyarados', 'Hawlucha',
			'Heracross-Mega', 'Hydreigon', 'Kyurem', 'Latias', 'Latias-Mega', 'Latios', 'Manaphy', 'Pinsir-Mega', 'Slowbro-Mega', 'Thundurus',
			'Venusaur-Mega', 'Victini', 'Xurkitree', 'Drizzle', 'Drought',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Absol-Mega', 'Aegislash', 'Aggron-Mega', 'Altaria-Mega', 'Amoonguss', 'Beedrill-Mega', 'Bisharp', 'Breloom', 'Buzzwole', 'Celesteela',
			'Chesnaught', 'Crobat', 'Donphan', 'Dragonite', 'Hippowdon', 'Honchkrow', 'Hoopa-Unbound', 'Infernape', 'Jirachi', 'Keldeo', 'Krookodile',
			'Mamoswine', 'Mandibuzz', 'Manectric-Mega', 'Melmetal', 'Mew', 'Mienshao', 'Moltres-Base', 'Nihilego', 'Porygon2', 'Regieleki', 'Ribombee',
			'Rotom-Heat', 'Rotom-Wash', 'Sableye-Mega', 'Scizor', 'Shuckle', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Staraptor', 'Swampert', 'Umbreon',
			'Urshifu-Rapid-Strike', 'Weavile', 'Zapdos-Galar',
		],
	},
	{
		name: "[Gen 8] Adventures DOU",
		mod: 'adventures',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			 'Moody', 'Power Construct', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Adventures DUU",
		mod: 'adventures',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			// National Dex OU
			'Blissey', 'Chansey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Cinderace', 'Clefable', 'Corviknight', 'Excadrill', 'Ferrothorn',
			'Garchomp', 'Gliscor', 'Greninja', 'Heatran', 'Kartana', 'Kommo-o', 'Landorus-Therian', 'Lopunny-Mega', 'Magearna', 'Magnezone',
			'Mawile-Mega', 'Medicham-Mega', 'Pelipper', 'Rillaboom', 'Scizor-Mega', 'Serperior', 'Slowbro-Base', 'Swampert-Mega', 'Tangrowth',
			'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Volcarona', 'Zapdos-Base',
			'nduubl', // National Dex UUBL
			'Aerodactyl-Mega', 'Azumarill', 'Blacephalon', 'Diancie-Mega', 'Gallade-Mega', 'Gardevoir-Mega', 'Gengar', 'Gyarados', 'Hawlucha',
			'Heracross-Mega', 'Hydreigon', 'Kyurem', 'Latias', 'Latias-Mega', 'Latios', 'Manaphy', 'Pinsir-Mega', 'Slowbro-Mega', 'Thundurus',
			'Venusaur-Mega', 'Victini', 'Xurkitree', 'Drizzle', 'Drought',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Absol-Mega', 'Aegislash', 'Aggron-Mega', 'Altaria-Mega', 'Amoonguss', 'Beedrill-Mega', 'Bisharp', 'Breloom', 'Buzzwole', 'Celesteela',
			'Chesnaught', 'Crobat', 'Donphan', 'Dragonite', 'Hippowdon', 'Honchkrow', 'Hoopa-Unbound', 'Infernape', 'Jirachi', 'Keldeo', 'Krookodile',
			'Mamoswine', 'Mandibuzz', 'Manectric-Mega', 'Melmetal', 'Mew', 'Mienshao', 'Moltres-Base', 'Nihilego', 'Porygon2', 'Regieleki', 'Ribombee',
			'Rotom-Heat', 'Rotom-Wash', 'Sableye-Mega', 'Scizor', 'Shuckle', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Staraptor', 'Swampert', 'Umbreon',
			'Urshifu-Rapid-Strike', 'Weavile', 'Zapdos-Galar',
		],
	},
	{
		name: "[Gen 8] Adventures AG",
		mod: 'adventures',
		ruleset: ['Standard NatDex'],
	},
	{
		name: "[Gen 8] Adventures 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656364/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3664157/">1v1 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657779/">1v1 Viability Rankings</a>`,
		],

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
			'Moody', 'Focus Sash', 'Perish Song',
		],
	},
	{
		name: "[Gen 8] Adventures Custom Game",

		mod: 'adventures',
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
		ruleset: ['Standard NatDex', 'Dynamax Clause'],
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
