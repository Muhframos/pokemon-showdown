"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const FormatsData = {
	bulbasaur: {
		randomBattleMoves: ["sleeppowder", "bodyslam"],
		essentialMove: "razorleaf",
		exclusiveMoves: ["megadrain", "swordsdance", "swordsdance"],
		tier: "LC",
	},
	ivysaur: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "bodyslam"],
		essentialMove: "razorleaf",
		tier: "NFE",
	},
	venusaur: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "bodyslam", "hyperbeam"],
		essentialMove: "razorleaf",
		tier: "UU",
	},
	charmander: {
		randomBattleMoves: ["bodyslam", "slash"],
		essentialMove: "fireblast",
		exclusiveMoves: ["counter", "seismictoss"],
		comboMoves: ["swordsdance", "bodyslam", "submission", "fireblast"],
		tier: "LC",
	},
	charmeleon: {
		randomBattleMoves: ["bodyslam", "slash"],
		essentialMove: "fireblast",
		exclusiveMoves: ["counter", "swordsdance"],
		comboMoves: ["swordsdance", "bodyslam", "submission", "fireblast"],
		tier: "NFE",
	},
	charizard: {
		randomBattleMoves: ["earthquake", "bodyslam", "slash"],
		essentialMove: "fireblast",
		comboMoves: ["swordsdance", "hyperbeam"],
		tier: "NU",
	},
	squirtle: {
		randomBattleMoves: ["blizzard", "seismictoss", "surf", "hydropump"],
		exclusiveMoves: ["counter", "bodyslam"],
		tier: "LC",
	},
	wartortle: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "hydropump"],
		exclusiveMoves: ["counter", "rest", "seismictoss"],
		tier: "NFE",
	},
	blastoise: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam", "hydropump"],
		exclusiveMoves: ["earthquake", "rest"],
		tier: "NU",
	},
	caterpie: {
		randomBattleMoves: ["stringshot", "tackle"],
		tier: "LC",
	},
	metapod: {
		randomBattleMoves: ["stringshot", "tackle", "harden"],
		tier: "NFE",
	},
	butterfree: {
		randomBattleMoves: ["psychic", "sleeppowder", "stunspore"],
		exclusiveMoves: ["megadrain", "psywave"],
		tier: "NU",
	},
	weedle: {
		randomBattleMoves: ["poisonsting", "stringshot"],
		tier: "LC",
	},
	kakuna: {
		randomBattleMoves: ["poisonsting", "stringshot"],
		tier: "NFE",
	},
	beedrill: {
		randomBattleMoves: ["twineedle", "megadrain", "swordsdance"],
		exclusiveMoves: ["doubleedge", "doubleedge", "hyperbeam"],
		comboMoves: ["twineedle", "hyperbeam", "swordsdance", "agility"],
		tier: "NU",
	},
	pidgey: {
		randomBattleMoves: ["agility", "skyattack", "doubleedge"],
		exclusiveMoves: ["reflect", "sandattack", "mirrormove", "mimic", "toxic", "substitute"],
		tier: "LC",
	},
	pidgeotto: {
		randomBattleMoves: ["agility", "skyattack", "doubleedge"],
		exclusiveMoves: ["reflect", "sandattack", "mirrormove", "mimic", "toxic", "substitute"],
		tier: "NFE",
	},
	pidgeot: {
		randomBattleMoves: ["agility", "hyperbeam", "doubleedge"],
		exclusiveMoves: ["reflect", "sandattack", "mirrormove", "mimic", "toxic", "skyattack", "skyattack", "substitute"],
		tier: "NU",
	},
	rattata: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		essentialMove: "superfang",
		tier: "LC",
	},
	raticate: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "blizzard"],
		essentialMove: "superfang",
		tier: "NU",
	},
	spearow: {
		randomBattleMoves: ["drillpeck", "doubleedge", "agility"],
		exclusiveMoves: ["leer", "toxic", "mirrormove", "mimic", "substitute"],
		tier: "LC",
	},
	fearow: {
		randomBattleMoves: ["drillpeck", "doubleedge", "hyperbeam", "agility"],
		tier: "NU",
	},
	ekans: {
		randomBattleMoves: ["glare", "earthquake", "bodyslam", "rockslide"],
		tier: "LC",
	},
	arbok: {
		randomBattleMoves: ["earthquake", "glare", "hyperbeam"],
		exclusiveMoves: ["bodyslam", "rockslide"],
		tier: "NU",
	},
	pikachu: {
		randomBattleMoves: ["thunderwave", "surf"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["bodyslam", "thunder", "agility", "seismictoss"],
		tier: "LC",
	},
	raichu: {
		randomBattleMoves: ["thunderwave", "surf"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["bodyslam", "thunder", "agility", "seismictoss", "hyperbeam"],
		tier: "NU",
	},
	sandshrew: {
		randomBattleMoves: ["swordsdance", "bodyslam", "rockslide"],
		essentialMove: "earthquake",
		tier: "LC",
	},
	sandslash: {
		randomBattleMoves: ["swordsdance", "bodyslam", "rockslide"],
		essentialMove: "earthquake",
		tier: "NU",
	},
	nidoranf: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["doubleedge", "doublekick"],
		tier: "LC",
	},
	nidorina: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["bubblebeam", "doublekick", "doubleedge"],
		tier: "NFE",
	},
	nidoqueen: {
		randomBattleMoves: ["blizzard", "thunderbolt", "bodyslam"],
		essentialMove: "earthquake",
		tier: "NU",
	},
	nidoranm: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["doubleedge", "doublekick"],
		tier: "LC",
	},
	nidorino: {
		randomBattleMoves: ["bodyslam", "blizzard", "thunderbolt"],
		exclusiveMoves: ["bubblebeam", "doublekick", "doubleedge"],
		tier: "NFE",
	},
	nidoking: {
		randomBattleMoves: ["blizzard", "bodyslam"],
		essentialMove: "earthquake",
		exclusiveMoves: ["thunder", "thunderbolt", "rockslide"],
		tier: "NU",
	},
	clefairy: {
		randomBattleMoves: ["bodyslam", "thunderwave", "thunderbolt"],
		essentialMove: "blizzard",
		exclusiveMoves: ["counter", "sing", "sing", "psychic", "seismictoss"],
		tier: "NFE",
	},
	clefable: {
		randomBattleMoves: ["bodyslam", "thunderwave", "thunderbolt"],
		essentialMove: "blizzard",
		exclusiveMoves: ["counter", "sing", "sing", "psychic", "hyperbeam"],
		tier: "NU",
	},
	vulpix: {
		randomBattleMoves: ["bodyslam", "confuseray", "fireblast"],
		exclusiveMoves: ["flamethrower", "reflect", "substitute"],
		tier: "LC",
	},
	ninetales: {
		randomBattleMoves: ["bodyslam", "confuseray", "fireblast"],
		exclusiveMoves: ["flamethrower", "reflect", "hyperbeam", "substitute"],
		tier: "NU",
	},
	jigglypuff: {
		randomBattleMoves: ["thunderwave", "bodyslam", "seismictoss", "blizzard"],
		exclusiveMoves: ["counter", "sing"],
		tier: "LC",
	},
	wigglytuff: {
		randomBattleMoves: ["thunderwave", "bodyslam", "blizzard"],
		exclusiveMoves: ["counter", "sing", "hyperbeam"],
		tier: "NU",
	},
	zubat: {
		randomBattleMoves: ["toxic", "confuseray", "doubleedge", "megadrain"],
		tier: "LC",
	},
	golbat: {
		randomBattleMoves: ["confuseray", "doubleedge", "hyperbeam", "megadrain"],
		tier: "NU",
	},
	oddish: {
		randomBattleMoves: ["sleeppowder", "doubleedge"],
		essentialMove: "megadrain",
		exclusiveMoves: ["swordsdance", "stunspore", "stunspore"],
		tier: "LC",
	},
	gloom: {
		randomBattleMoves: ["sleeppowder", "doubleedge"],
		essentialMove: "megadrain",
		exclusiveMoves: ["swordsdance", "stunspore", "stunspore"],
		tier: "NFE",
	},
	vileplume: {
		randomBattleMoves: ["sleeppowder", "bodyslam", "stunspore", "swordsdance"],
		essentialMove: "megadrain",
		tier: "NU",
	},
	paras: {
		randomBattleMoves: ["bodyslam", "megadrain"],
		essentialMove: "spore",
		exclusiveMoves: ["stunspore", "stunspore", "swordsdance", "growth", "slash"],
		tier: "LC",
	},
	parasect: {
		randomBattleMoves: ["bodyslam", "megadrain"],
		essentialMove: "spore",
		exclusiveMoves: ["stunspore", "stunspore", "swordsdance", "growth", "slash", "hyperbeam"],
		tier: "NU",
	},
	venonat: {
		randomBattleMoves: ["psychic", "sleeppowder", "stunspore"],
		exclusiveMoves: ["megadrain", "psywave", "doubleedge"],
		tier: "LC",
	},
	venomoth: {
		randomBattleMoves: ["psychic", "sleeppowder", "stunspore"],
		exclusiveMoves: ["megadrain", "megadrain", "doubleedge"],
		tier: "NU",
	},
	diglett: {
		randomBattleMoves: ["slash", "rockslide", "bodyslam"],
		essentialMove: "earthquake",
		tier: "LC",
	},
	dugtrio: {
		randomBattleMoves: ["slash", "rockslide", "bodyslam"],
		essentialMove: "earthquake",
		tier: "UU",
	},
	meowth: {
		randomBattleMoves: ["bubblebeam", "bodyslam"],
		essentialMove: "slash",
		exclusiveMoves: ["thunder", "thunderbolt"],
		tier: "LC",
	},
	persian: {
		randomBattleMoves: ["bubblebeam", "bodyslam"],
		essentialMove: "slash",
		exclusiveMoves: ["thunderbolt", "thunder", "hyperbeam", "hyperbeam"],
		tier: "UU",
	},
	psyduck: {
		randomBattleMoves: ["blizzard", "amnesia"],
		essentialMove: "surf",
		exclusiveMoves: ["bodyslam", "seismictoss", "rest", "hydropump"],
		tier: "LC",
	},
	golduck: {
		randomBattleMoves: ["blizzard", "amnesia"],
		essentialMove: "surf",
		exclusiveMoves: ["bodyslam", "seismictoss", "rest", "hydropump"],
		tier: "NUBL",
	},
	mankey: {
		randomBattleMoves: ["submission", "rockslide", "bodyslam"],
		exclusiveMoves: ["counter", "megakick"],
		tier: "LC",
	},
	primeape: {
		randomBattleMoves: ["submission", "rockslide", "bodyslam"],
		exclusiveMoves: ["counter", "hyperbeam", "hyperbeam"],
		tier: "NU",
	},
	growlithe: {
		randomBattleMoves: ["fireblast", "bodyslam", "flamethrower", "reflect"],
		tier: "LC",
	},
	arcanine: {
		randomBattleMoves: ["fireblast", "bodyslam", "hyperbeam"],
		exclusiveMoves: ["flamethrower", "reflect"],
		tier: "NU",
	},
	poliwag: {
		randomBattleMoves: ["blizzard", "surf"],
		essentialMove: "amnesia",
		exclusiveMoves: ["psychic", "hypnosis", "hypnosis"],
		tier: "LC",
	},
	poliwhirl: {
		randomBattleMoves: ["blizzard", "surf"],
		essentialMove: "amnesia",
		exclusiveMoves: ["psychic", "hypnosis", "hypnosis", "counter"],
		tier: "NFE",
	},
	poliwrath: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["psychic", "hypnosis", "hypnosis"],
		comboMoves: ["amnesia", "blizzard"],
		tier: "NU",
	},
	abra: {
		randomBattleMoves: ["psychic", "thunderwave", "seismictoss"],
		exclusiveMoves: ["reflect", "counter"],
		tier: "LC",
	},
	kadabra: {
		randomBattleMoves: ["psychic", "thunderwave", "recover"],
		exclusiveMoves: ["reflect", "reflect", "counter", "seismictoss", "seismictoss"],
		tier: "UU",
	},
	alakazam: {
		randomBattleMoves: ["psychic", "thunderwave", "recover"],
		exclusiveMoves: ["reflect", "reflect", "counter", "seismictoss", "seismictoss"],
		tier: "OU",
	},
	machop: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission"],
		exclusiveMoves: ["counter", "rockslide", "rockslide"],
		tier: "LC",
	},
	machoke: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission"],
		exclusiveMoves: ["counter", "rockslide", "rockslide"],
		tier: "NFE",
	},
	machamp: {
		randomBattleMoves: ["bodyslam", "earthquake", "submission"],
		exclusiveMoves: ["counter", "rockslide", "rockslide", "hyperbeam"],
		tier: "NU",
	},
	bellsprout: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "doubleedge", "stunspore"],
		essentialMove: "razorleaf",
		tier: "LC",
	},
	weepinbell: {
		randomBattleMoves: ["sleeppowder", "swordsdance", "doubleedge", "stunspore"],
		essentialMove: "razorleaf",
		tier: "NFE",
	},
	victreebel: {
		randomBattleMoves: ["sleeppowder", "bodyslam", "stunspore"],
		essentialMove: "razorleaf",
		comboMoves: ["swordsdance", "hyperbeam"],
		tier: "OU",
	},
	tentacool: {
		randomBattleMoves: ["barrier", "hydropump", "surf"],
		essentialMove: "blizzard",
		exclusiveMoves: ["megadrain", "megadrain"],
		comboMoves: ["surf", "hydropump"],
		tier: "LC",
	},
	tentacruel: {
		randomBattleMoves: ["blizzard", "hydropump", "surf", "hyperbeam"],
		essentialMove: "swordsdance",
		tier: "UU",
	},
	geodude: {
		randomBattleMoves: ["bodyslam", "earthquake", "rockslide", "explosion"],
		tier: "LC",
	},
	graveler: {
		randomBattleMoves: ["bodyslam", "earthquake", "rockslide", "explosion"],
		tier: "NFE",
	},
	golem: {
		randomBattleMoves: ["explosion", "bodyslam", "earthquake", "rockslide"],
		tier: "NU",
	},
	ponyta: {
		randomBattleMoves: ["fireblast", "agility", "bodyslam", "reflect"],
		tier: "LC",
	},
	rapidash: {
		randomBattleMoves: ["fireblast", "agility", "bodyslam", "hyperbeam"],
		tier: "NU",
	},
	slowpoke: {
		randomBattleMoves: ["earthquake", "surf"],
		essentialMove: "thunderwave",
		exclusiveMoves: ["blizzard", "psychic", "rest"],
		comboMoves: ["amnesia", "surf"],
		tier: "LC",
	},
	slowbro: {
		randomBattleMoves: ["amnesia", "surf", "thunderwave"],
		exclusiveMoves: ["rest", "rest", "psychic", "blizzard"],
		tier: "OU",
	},
	magnemite: {
		randomBattleMoves: ["thunderwave", "thunder", "thunderbolt"],
		exclusiveMoves: ["mimic", "doubleedge", "toxic", "substitute"],
		tier: "LC",
	},
	magneton: {
		randomBattleMoves: ["thunderwave", "thunder", "thunderbolt"],
		exclusiveMoves: ["mimic", "doubleedge", "toxic", "hyperbeam", "hyperbeam", "substitute"],
		tier: "NU",
	},
	farfetchd: {
		randomBattleMoves: ["agility", "swordsdance", "bodyslam"],
		essentialMove: "slash",
		tier: "NU",
	},
	doduo: {
		randomBattleMoves: ["drillpeck", "bodyslam", "agility", "doubleedge"],
		tier: "LC",
	},
	dodrio: {
		randomBattleMoves: ["drillpeck", "bodyslam", "agility", "hyperbeam"],
		tier: "UU",
	},
	seel: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam"],
		exclusiveMoves: ["rest", "mimic"],
		tier: "LC",
	},
	dewgong: {
		randomBattleMoves: ["surf", "blizzard", "bodyslam"],
		exclusiveMoves: ["rest", "rest", "mimic", "hyperbeam"],
		tier: "NU",
	},
	grimer: {
		randomBattleMoves: ["sludge", "bodyslam"],
		essentialMove: "explosion",
		exclusiveMoves: ["megadrain", "megadrain", "fireblast", "screech"],
		tier: "LC",
	},
	muk: {
		randomBattleMoves: ["sludge", "bodyslam"],
		essentialMove: "explosion",
		exclusiveMoves: ["megadrain", "megadrain", "fireblast", "hyperbeam"],
		tier: "NU",
	},
	shellder: {
		randomBattleMoves: ["surf", "blizzard", "doubleedge", "explosion"],
		tier: "LC",
	},
	cloyster: {
		randomBattleMoves: ["surf", "blizzard", "explosion"],
		exclusiveMoves: ["hyperbeam", "hyperbeam", "doubleedge"],
		tier: "OU",
	},
	gastly: {
		randomBattleMoves: ["explosion", "megadrain", "nightshade", "psychic"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["hypnosis", "hypnosis", "confuseray"],
		tier: "LC",
	},
	haunter: {
		randomBattleMoves: ["explosion", "megadrain", "nightshade", "psychic"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["hypnosis", "hypnosis", "confuseray"],
		tier: "UU",
	},
	gengar: {
		randomBattleMoves: ["explosion", "megadrain", "nightshade", "psychic"],
		essentialMove: "thunderbolt",
		exclusiveMoves: ["hypnosis", "hypnosis", "confuseray"],
		tier: "OU",
	},
	onix: {
		randomBattleMoves: ["earthquake", "explosion", "rockslide", "bodyslam"],
		tier: "NU",
	},
	drowzee: {
		randomBattleMoves: ["hypnosis", "psychic", "thunderwave"],
		exclusiveMoves: ["seismictoss", "seismictoss", "counter", "reflect", "rest"],
		tier: "LC",
	},
	hypno: {
		randomBattleMoves: ["hypnosis", "psychic", "thunderwave"],
		exclusiveMoves: ["seismictoss", "seismictoss", "counter", "rest", "rest", "reflect"],
		tier: "UU",
	},
	krabby: {
		randomBattleMoves: ["bodyslam", "crabhammer", "swordsdance", "blizzard"],
		tier: "LC",
	},
	kingler: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "swordsdance", "crabhammer"],
		tier: "NU",
	},
	voltorb: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "explosion"],
		exclusiveMoves: ["thunder", "screech", "toxic"],
		tier: "LC",
	},
	electrode: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "explosion"],
		exclusiveMoves: ["thunder", "screech", "toxic", "hyperbeam"],
		tier: "NU",
	},
	exeggcute: {
		randomBattleMoves: ["sleeppowder", "stunspore"],
		essentialMove: "psychic",
		exclusiveMoves: ["explosion", "explosion", "doubleedge"],
		tier: "LC",
	},
	exeggutor: {
		randomBattleMoves: ["psychic", "explosion", "sleeppowder"],
		exclusiveMoves: ["stunspore", "stunspore", "stunspore", "megadrain", "megadrain", "eggbomb", "doubleedge", "hyperbeam"],
		tier: "OU",
	},
	cubone: {
		randomBattleMoves: ["earthquake", "blizzard", "bodyslam", "seismictoss"],
		tier: "LC",
	},
	marowak: {
		randomBattleMoves: ["earthquake", "blizzard", "bodyslam", "seismictoss"],
		tier: "NU",
	},
	hitmonlee: {
		randomBattleMoves: ["bodyslam", "highjumpkick", "seismictoss"],
		exclusiveMoves: ["counter", "counter", "meditate"],
		tier: "NU",
	},
	hitmonchan: {
		randomBattleMoves: ["bodyslam", "submission", "seismictoss"],
		exclusiveMoves: ["counter", "counter", "agility"],
		tier: "NU",
	},
	lickitung: {
		randomBattleMoves: ["swordsdance", "hyperbeam"],
		essentialMove: "bodyslam",
		exclusiveMoves: ["earthquake", "earthquake", "earthquake", "blizzard"],
		tier: "NU",
	},
	koffing: {
		randomBattleMoves: ["sludge", "explosion", "thunderbolt", "fireblast"],
		tier: "LC",
	},
	weezing: {
		randomBattleMoves: ["sludge", "explosion", "thunderbolt", "fireblast"],
		tier: "NU",
	},
	rhyhorn: {
		randomBattleMoves: ["earthquake", "rockslide", "substitute", "bodyslam"],
		tier: "LC",
	},
	rhydon: {
		randomBattleMoves: ["earthquake", "rockslide", "bodyslam"],
		exclusiveMoves: ["substitute", "substitute", "hyperbeam"],
		tier: "OU",
	},
	chansey: {
		randomBattleMoves: ["icebeam", "thunderwave"],
		essentialMove: "softboiled",
		exclusiveMoves: ["counter", "sing", "reflect", "thunderbolt", "thunderbolt", "thunderbolt", "seismictoss"],
		tier: "OU",
	},
	tangela: {
		randomBattleMoves: ["sleeppowder", "bodyslam", "swordsdance"],
		essentialMove: "megadrain",
		comboMoves: ["growth", "stunspore"],
		tier: "UU",
	},
	kangaskhan: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "earthquake"],
		exclusiveMoves: ["surf", "rockslide", "rockslide", "counter"],
		tier: "UU",
	},
	horsea: {
		randomBattleMoves: ["agility", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["doubleedge", "smokescreen", "hydropump"],
		tier: "LC",
	},
	seadra: {
		randomBattleMoves: ["agility", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["doubleedge", "smokescreen", "hyperbeam", "hydropump"],
		tier: "NU",
	},
	goldeen: {
		randomBattleMoves: ["surf", "blizzard", "agility", "doubleedge"],
		tier: "LC",
	},
	seaking: {
		randomBattleMoves: ["surf", "blizzard", "doubleedge"],
		exclusiveMoves: ["hyperbeam", "agility", "agility"],
		tier: "NU",
	},
	staryu: {
		randomBattleMoves: ["blizzard", "thunderbolt", "thunderwave"],
		essentialMove: "recover",
		exclusiveMoves: ["surf", "surf", "hydropump"],
		tier: "LC",
	},
	starmie: {
		randomBattleMoves: ["blizzard", "thunderbolt", "thunderwave"],
		essentialMove: "recover",
		exclusiveMoves: ["surf", "hydropump", "psychic", "surf"],
		tier: "OU",
	},
	mrmime: {
		randomBattleMoves: ["psychic", "thunderwave", "thunderbolt", "seismictoss"],
		tier: "NU",
	},
	scyther: {
		randomBattleMoves: ["slash", "swordsdance", "agility", "hyperbeam"],
		tier: "NU",
	},
	jynx: {
		randomBattleMoves: ["lovelykiss", "blizzard", "psychic"],
		exclusiveMoves: ["mimic", "bodyslam", "seismictoss", "counter", "counter"],
		tier: "OU",
	},
	electabuzz: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "psychic", "seismictoss"],
		tier: "UU",
	},
	magmar: {
		randomBattleMoves: ["confuseray", "fireblast", "bodyslam"],
		exclusiveMoves: ["psychic", "hyperbeam"],
		tier: "NU",
	},
	pinsir: {
		randomBattleMoves: ["swordsdance", "hyperbeam", "bodyslam"],
		exclusiveMoves: ["submission", "submission", "seismictoss"],
		tier: "NU",
	},
	tauros: {
		randomBattleMoves: ["bodyslam", "hyperbeam", "earthquake"],
		exclusiveMoves: ["blizzard", "blizzard", "blizzard", "thunderbolt"],
		tier: "OU",
	},
	magikarp: {
		randomBattleMoves: ["splash", "tackle"],
		tier: "LC",
	},
	gyarados: {
		randomBattleMoves: ["blizzard", "thunderbolt", "bodyslam", "hyperbeam"],
		exclusiveMoves: ["surf", "hydropump"],
		tier: "UU",
	},
	lapras: {
		randomBattleMoves: ["surf", "bodyslam", "sing", "rest", "confuseray"],
		essentialMove: "blizzard",
		exclusiveMoves: ["thunderbolt", "thunderbolt"],
		tier: "OU",
	},
	ditto: {
		randomBattleMoves: ["transform"],
		tier: "NU",
	},
	eevee: {
		randomBattleMoves: ["doubleedge", "reflect", "quickattack"],
		essentialMove: "bodyslam",
		exclusiveMoves: ["mimic", "sandattack", "tailwhip", "bide"],
		tier: "LC",
	},
	vaporeon: {
		randomBattleMoves: ["rest", "blizzard"],
		essentialMove: "surf",
		exclusiveMoves: ["bodyslam", "mimic", "hydropump"],
		tier: "UU",
	},
	jolteon: {
		randomBattleMoves: ["thunderwave", "bodyslam", "thunderbolt"],
		exclusiveMoves: ["pinmissile", "pinmissile", "doublekick", "agility", "agility"],
		tier: "OU",
	},
	flareon: {
		randomBattleMoves: ["fireblast", "bodyslam", "hyperbeam", "quickattack"],
		tier: "NU",
	},
	porygon: {
		randomBattleMoves: ["thunderwave", "blizzard"],
		essentialMove: "recover",
		exclusiveMoves: ["psychic", "thunderbolt", "triattack", "doubleedge"],
		tier: "NU",
	},
	omanyte: {
		randomBattleMoves: ["hydropump", "surf", "bodyslam", "rest"],
		essentialMove: "blizzard",
		tier: "LC",
	},
	omastar: {
		randomBattleMoves: ["hydropump", "surf", "seismictoss", "blizzard"],
		exclusiveMoves: ["bodyslam", "rest"],
		tier: "UU",
	},
	kabuto: {
		randomBattleMoves: ["blizzard", "bodyslam", "surf", "slash"],
		tier: "LC",
	},
	kabutops: {
		randomBattleMoves: ["swordsdance", "surf", "hyperbeam"],
		exclusiveMoves: ["bodyslam", "slash"],
		tier: "NU",
	},
	aerodactyl: {
		randomBattleMoves: ["skyattack", "fireblast", "doubleedge", "hyperbeam"],
		tier: "NU",
	},
	snorlax: {
		randomBattleMoves: ["rest", "thunderbolt", "bodyslam", "selfdestruct"],
		essentialMove: "amnesia",
		exclusiveMoves: ["blizzard", "blizzard"],
		comboMoves: ["earthquake", "hyperbeam", "bodyslam", "selfdestruct"],
		tier: "OU",
	},
	articuno: {
		randomBattleMoves: ["hyperbeam", "agility", "mimic", "reflect", "icebeam"],
		essentialMove: "blizzard",
		comboMoves: ["icebeam", "rest", "reflect"],
		tier: "UU",
	},
	zapdos: {
		randomBattleMoves: ["thunderbolt", "drillpeck", "thunderwave", "agility"],
		tier: "OU",
	},
	moltres: {
		randomBattleMoves: ["agility", "hyperbeam", "fireblast"],
		exclusiveMoves: ["doubleedge", "reflect", "skyattack"],
		tier: "NU",
	},
	dratini: {
		randomBattleMoves: ["hyperbeam", "thunderbolt", "bodyslam", "thunderwave"],
		essentialMove: "blizzard",
		tier: "LC",
	},
	dragonair: {
		randomBattleMoves: ["hyperbeam", "thunderbolt", "bodyslam", "thunderwave"],
		essentialMove: "blizzard",
		tier: "NFE",
	},
	dragonite: {
		randomBattleMoves: ["hyperbeam", "thunderbolt", "bodyslam", "thunderwave"],
		essentialMove: "blizzard",
		tier: "UU",
	},
	mewtwo: {
		randomBattleMoves: ["thunderbolt", "blizzard", "recover"],
		essentialMove: "amnesia",
		exclusiveMoves: ["psychic", "psychic"],
		comboMoves: ["rest", "barrier"],
		tier: "Uber",
	},
	mew: {
		randomBattleMoves: ["thunderwave", "thunderbolt", "blizzard", "earthquake"],
		essentialMove: "psychic",
		exclusiveMoves: ["softboiled", "softboiled", "explosion"],
		comboMoves: ["swordsdance", "earthquake", "hyperbeam"],
		tier: "Uber",
	},
	missingno: {
		isNonstandard: "Unobtainable",
		tier: "Illegal",
	},
}; exports.FormatsData = FormatsData;

 //# sourceMappingURL=sourceMaps/formats-data.js.map