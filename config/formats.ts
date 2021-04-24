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
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Eternatus', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			 'Moody', 'Power Construct', 'Baton Pass', 'Eternatus-Eternamax', 'Uber', 'AG',
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
			'Absol', 'Absol-Mega', 'Aggron-Mega', 'Articuno', 'Blastoise', 'Blissey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Cinderace', 'Clefable', 'Corviknight', 'Excadrill', 'Dodrio',
			'Garchomp', 'Gardevoir-Mega', 'Gliscor', 'Greninja', 'Heatran',  'Honchkrow', 'Kartana', 'Kommo-o', 'Landorus-Therian', 'Lopunny-Mega', 'Magnezone',
			'Mawile-Mega', 'Medicham-Mega', 'Ninetales', 'Rillaboom', 'Scizor-Mega', 'Serperior',  'Sirfetchd', 'Swampert-Mega',
			'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Volcarona', 'Xatu', 'Zapdos-Base', 'Uber', 'AG',
			'nduubl', // National Dex UUBL
			'Aerodactyl-Mega', 'Azumarill', 'Diancie-Mega', 'Gallade-Mega', 'Gengar', 'Golduck', 'Gyarados', 'Hawlucha', 'Jynx', 'Drizzle', 'Drought',
			'Latias-Mega', 'Machamp', 'Magcargo', 'Mamoswine', 'Pinsir-Mega', 'Slowbro-Mega', 'Thundurus',
			'Venusaur-Mega', 'Victini', 'Xurkitree','Eternatus-Eternamax',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Aggron', 'Altaria-Mega', 'Audino-Mega', 'Avalugg', 'Banette-Mega', 'Barraskewda', 'Basculin', 'Basculin Blue-Striped', 'Beedrill-Mega', 'Buzzwole', 'Calyrex', 'Camerupt-Mega', 'Celesteela', 'Cherrim', 'Conkeldurr', 'Corsola-Galar', 'Crabominable', 'Cradily', 'Crustle', 'Diancie', 'Dodrio', 'Dragalge', 'Dragonite', 'Drampa', 'Drapion', 'Drednaw', 'Druddigon', 'Eiscue', 'Fearow', 'Ferrothorn', 'Froslass', 'Gardevoir', 'Gastrodon', 'Gengar', 'Gigalith', 'Golduck', 'Golurk', 'Goodra', 'Heliolisk', 'Heracross-Mega', 'Hippowdon', 'Hitmontop', 'Hoopa-Unbound', 'Hydreigon', 'Infernape', 'Kyurem', 'Latias', 'Latios', 'Ledian', 'Magcargo',
			'Mandibuzz', 'Manectric-Mega', 'Mew', 'Mienshao', 'Mimikyu', 'Moltres-Base', 'Moltres-Galar', 'Necrozma', 'Nidoqueen', 'Ninetales-Alola', 'Obstagoon', 'Oricorio', 'Pangoro', 'Pelipper', 'Pidgeot-Mega', 'Pikachu', 'Politoed', 'Poliwrath', 'Porygon2', 'Raichu-Alola', 'Rampardos', 'Regidrago', 'Regieleki', 'Reuniclus', 'Rotom-Wash',
			 'Sableye-Mega', 'Salamence', 'Sceptile-Mega', 'Scizor', 'Sharpedo-Mega', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Slowbro', 'Spiritomb', 'Staraptor', 'Suicune', 'Swalot', 'Swampert', 'Swellow', 'Tangrowth', 'Thievul', 'Thundurus-Therian', 'Torterra', 'Trevenant', 'Typhlosion', 'Tyrantrum', 'Umbreon', 'Ursaring',
			'Urshifu-Rapid-Strike', 'Vikavolt', 'Vileplume', 'Weavile', 'Weezing', 'Weezing-Galar', 'Zapdos-Galar',
		],
	},
	{
		name: "[Gen 8] Adventures DOU",
		mod: 'adventures',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken-Mega', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darmanitan-Galar', 'Deoxys-Attack',
			'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish',  'Eternatus', 'Gengar-Mega', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega', 'Lugia', 'Lunala',
			'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra', 'Palkia', 'Pheromosa',
			'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Tornadus-Therian', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			 'Moody', 'Power Construct', 'Baton Pass', 'Eternatus-Eternamax', 'Uber', 'AG',
		],
	},
	{
		name: "[Gen 8] Adventures DUU",
		mod: 'adventures',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			// National Dex OU
			'Absol', 'Absol-Mega', 'Aggron-Mega', 'Articuno', 'Blastoise', 'Blissey', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Cinderace', 'Clefable', 'Corviknight', 'Excadrill', 'Dodrio',
			'Garchomp', 'Gardevoir-Mega', 'Gliscor', 'Greninja', 'Heatran',  'Honchkrow', 'Kartana', 'Kommo-o', 'Landorus-Therian', 'Lopunny-Mega', 'Magearna', 'Magnezone',
			'Mawile-Mega', 'Medicham-Mega', 'Ninetales', 'Rillaboom', 'Scizor-Mega', 'Serperior',  'Sirfetchd', 'Slowbro-Base', 'Swampert-Mega',
			'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Volcarona', 'Xatu', 'Zapdos-Base', 'Eternatus-Eternamax', 'AG', 'Uber',
			'nduubl', // National Dex UUBL
			'Aerodactyl-Mega', 'Azumarill', 'Diancie-Mega', 'Gallade-Mega', 'Gengar', 'Golduck', 'Gyarados', 'Hawlucha',
			'Jynx', 'Latias-Mega', 'Machamp', 'Magcargo', 'Mamoswine', 'Pinsir-Mega', 'Slowbro-Mega', 'Thundurus',
			'Venusaur-Mega', 'Victini', 'Xurkitree', 'Drizzle', 'Drought',
			// Slowbronite is banned so it doesn't validate on Galarian Slowbro
			'Slowbronite',
		],
		// Used to distinguish UU from below UU in the client
		restricted: [
			'Aggron', 'Altaria-Mega', 'Audino-Mega', 'Avalugg', 'Banette-Mega', 'Barraskewda', 'Basculin', 'Basculin Blue-Striped', 'Beedrill-Mega', 'Buzzwole', 'Calyrex', 'Camerupt-Mega', 'Celesteela', 'Cherrim', 'Conkeldurr', 'Corsola-Galar', 'Crabominable', 'Cradily', 'Crustle', 'Diancie', 'Dodrio', 'Dragalge', 'Dragonite', 'Drampa', 'Drapion', 'Drednaw', 'Druddigon', 'Eiscue', 'Fearow', 'Ferrothorn', 'Froslass', 'Gardevoir', 'Gastrodon', 'Gengar', 'Gigalith', 'Golduck', 'Golurk', 'Goodra', 'Heliolisk', 'Heracross-Mega', 'Hippowdon', 'Hitmontop', 'Hoopa-Unbound', 'Hydreigon', 'Infernape', 'Kyurem', 'Latias', 'Latios', 'Ledian',
			'Mandibuzz', 'Manectric-Mega', 'Mew', 'Mienshao', 'Mimikyu', 'Moltres-Base', 'Moltres-Galar', 'Necrozma', 'Nidoqueen', 'Ninetales-Alola', 'Obstagoon', 'Oricorio', 'Pangoro', 'Pelipper',  'Pidgeot-Mega', 'Pikachu', 'Politoed', 'Poliwrath', 'Porygon2', 'Raichu-Alola', 'Rampardos', 'Regidrago', 'Regieleki', 'Reuniclus', 'Rotom-Wash',
			 'Sableye-Mega', 'Salamence', 'Sceptile-Mega', 'Scizor', 'Sharpedo-Mega', 'Skarmory', 'Slowking', 'Slowking-Galar', 'Slowbro', 'Spiritomb', 'Staraptor', 'Suicune', 'Swalot', 'Swampert', 'Swellow', 'Tangrowth', 'Thievul', 'Thundurus-Therian', 'Torterra', 'Trevenant', 'Typhlosion', 'Tyrantrum', 'Umbreon', 'Ursaring',
			'Urshifu-Rapid-Strike', 'Vikavolt', 'Vileplume', 'Weavile', 'Weezing', 'Weezing-Galar', 'Zapdos-Galar',
		],
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
		banlist: [ 'Eternatus-Eternamax' ],
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
			'Moody', 'Focus Sash', 'Perish Song', 'Eternatus-Eternamax', 'AG',
		],
	},
	{
		name: "[Gen 8] Adventures Free For All",

		mod: 'adventures',
		gameType: 'freeforall',
		challengeShow: false,
		rated: false,
		banlist: ['Eternatus-Eternamax', 'AG',],
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
		banlist: [ 'Eternatus-Eternamax', 'AG',],
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
