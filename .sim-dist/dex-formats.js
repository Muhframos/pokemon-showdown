"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _lib = require('../.lib-dist');
var _dexdata = require('./dex-data');


const DEFAULT_MOD = 'gen8';
const MAIN_FORMATS = `${__dirname}/../.config-dist/formats`;
const CUSTOM_FORMATS = `${__dirname}/../.config-dist/custom-formats`;














/**
 * A RuleTable keeps track of the rules that a format has. The key can be:
 * - '[ruleid]' the ID of a rule in effect
 * - '-[thing]' or '-[category]:[thing]' ban a thing
 * - '+[thing]' or '+[category]:[thing]' allow a thing (override a ban)
 * [category] is one of: item, move, ability, species, basespecies
 *
 * The value is the name of the parent rule (blank for the active format).
 */
 class RuleTable extends Map {
	
	
	
	
	

	constructor() {
		super();
		this.complexBans = [];
		this.complexTeamBans = [];
		this.checkCanLearn = null;
		this.timer = null;
		this.minSourceGen = null;
	}

	isBanned(thing) {
		if (this.has(`+${thing}`)) return false;
		return this.has(`-${thing}`);
	}

	isBannedSpecies(species) {
		if (this.has(`+pokemon:${species.id}`)) return false;
		if (this.has(`-pokemon:${species.id}`)) return true;
		if (this.has(`+basepokemon:${_dexdata.toID.call(void 0, species.baseSpecies)}`)) return false;
		if (this.has(`-basepokemon:${_dexdata.toID.call(void 0, species.baseSpecies)}`)) return true;
		const tier = species.tier === '(PU)' ? 'ZU' : species.tier === '(NU)' ? 'PU' : species.tier;
		if (this.has(`+pokemontag:${_dexdata.toID.call(void 0, tier)}`)) return false;
		if (this.has(`-pokemontag:${_dexdata.toID.call(void 0, tier)}`)) return true;
		const doublesTier = species.doublesTier === '(DUU)' ? 'DNU' : species.doublesTier;
		if (this.has(`+pokemontag:${_dexdata.toID.call(void 0, doublesTier)}`)) return false;
		if (this.has(`-pokemontag:${_dexdata.toID.call(void 0, doublesTier)}`)) return true;
		return this.has(`-pokemontag:allpokemon`);
	}

	isRestricted(thing) {
		if (this.has(`+${thing}`)) return false;
		return this.has(`*${thing}`);
	}

	isRestrictedSpecies(species) {
		if (this.has(`+pokemon:${species.id}`)) return false;
		if (this.has(`*pokemon:${species.id}`)) return true;
		if (this.has(`+basepokemon:${_dexdata.toID.call(void 0, species.baseSpecies)}`)) return false;
		if (this.has(`*basepokemon:${_dexdata.toID.call(void 0, species.baseSpecies)}`)) return true;
		const tier = species.tier === '(PU)' ? 'ZU' : species.tier === '(NU)' ? 'PU' : species.tier;
		if (this.has(`+pokemontag:${_dexdata.toID.call(void 0, tier)}`)) return false;
		if (this.has(`*pokemontag:${_dexdata.toID.call(void 0, tier)}`)) return true;
		const doublesTier = species.doublesTier === '(DUU)' ? 'DNU' : species.doublesTier;
		if (this.has(`+pokemontag:${_dexdata.toID.call(void 0, doublesTier)}`)) return false;
		if (this.has(`*pokemontag:${_dexdata.toID.call(void 0, doublesTier)}`)) return true;
		return this.has(`*pokemontag:allpokemon`);
	}

	check(thing, setHas = null) {
		if (this.has(`+${thing}`)) return '';
		if (setHas) setHas[thing] = true;
		return this.getReason(`-${thing}`);
	}

	getReason(key) {
		const source = this.get(key);
		if (source === undefined) return null;
		if (key === '-nonexistent' || key.startsWith('obtainable')) {
			return 'not obtainable';
		}
		return source ? `banned by ${source}` : `banned`;
	}

	getComplexBanIndex(complexBans, rule) {
		const ruleId = _dexdata.toID.call(void 0, rule);
		let complexBanIndex = -1;
		for (let i = 0; i < complexBans.length; i++) {
			if (_dexdata.toID.call(void 0, complexBans[i][0]) === ruleId) {
				complexBanIndex = i;
				break;
			}
		}
		return complexBanIndex;
	}

	addComplexBan(rule, source, limit, bans) {
		const complexBanIndex = this.getComplexBanIndex(this.complexBans, rule);
		if (complexBanIndex !== -1) {
			if (this.complexBans[complexBanIndex][2] === Infinity) return;
			this.complexBans[complexBanIndex] = [rule, source, limit, bans];
		} else {
			this.complexBans.push([rule, source, limit, bans]);
		}
	}

	addComplexTeamBan(rule, source, limit, bans) {
		const complexBanTeamIndex = this.getComplexBanIndex(this.complexTeamBans, rule);
		if (complexBanTeamIndex !== -1) {
			if (this.complexTeamBans[complexBanTeamIndex][2] === Infinity) return;
			this.complexTeamBans[complexBanTeamIndex] = [rule, source, limit, bans];
		} else {
			this.complexTeamBans.push([rule, source, limit, bans]);
		}
	}
} exports.RuleTable = RuleTable;

 class Format extends _dexdata.BasicEffect  {
	
	/**
	 * Name of the team generator algorithm, if this format uses
	 * random/fixed teams. null if players can bring teams.
	 */
	
	
	
	/**
	 * Whether or not a format will update ladder points if searched
	 * for using the "Battle!" button.
	 * (Challenge and tournament games will never update ladder points.)
	 * (Defaults to `true`.)
	 */
	
	/** Game type. */
	
	/** List of rule names. */
	
	/**
	 * Base list of rule names as specified in "./config/formats.ts".
	 * Used in a custom format to correctly display the altered ruleset.
	 */
	
	/** List of banned effects. */
	
	/** List of effects that aren't completely banned. */
	
	/** List of inherited banned effects to override. */
	
	/** List of ruleset and banlist changes in a custom format. */
	
	/** Table of rule names and banned effects. */
	
	/**
	 * The number of Pokemon players can bring to battle and
	 * the number that can actually be used.
	 */
	
	/** An optional function that runs at the start of a battle. */
	
	/** Pokemon must be obtained from this generation or later. */
	
	/**
	 * Maximum possible level pokemon you can bring. Note that this is
	 * still 100 in VGC, because you can bring level 100 pokemon,
	 * they'll just be set to level 50. Can be above 100 in special
	 * formats.
	 */
	
	/**
	 * Default level of a pokemon without level specified. Mainly
	 * relevant to Custom Game where the default level is still 100
	 * even though higher level pokemon can be brought.
	 */
	
	/**
	 * Forces all pokemon brought in to this level. Certain Game Freak
	 * formats will change level 1 and level 100 pokemon to level 50,
	 * which is what this does.
	 *
	 * You usually want maxForcedLevel instead, which will bring level
	 * 100 pokemon down, but not level 1 pokemon up.
	 */
	
	/**
	 * Forces all pokemon above this level down to this level. This
	 * will allow e.g. level 50 Hydreigon in Gen 5, which is not
	 * normally legal because Hydreigon doesn't evolve until level
	 * 64.
	 */
	
	

	
	
	
	
	
	
	
	
	
	
	
	


	
	
	


	
	


	
	
	


	


	
	



	
	

	constructor(data) {
		super(data);
		data = this;

		this.mod = _lib.Utils.getString(data.mod) || 'gen8';
		this.effectType = _lib.Utils.getString(data.effectType)  || 'Format';
		this.debug = !!data.debug;
		this.rated = (typeof data.rated === 'string' ? data.rated : data.rated !== false);
		this.gameType = data.gameType || 'singles';
		this.ruleset = data.ruleset || [];
		this.baseRuleset = data.baseRuleset || [];
		this.banlist = data.banlist || [];
		this.restricted = data.restricted || [];
		this.unbanlist = data.unbanlist || [];
		this.customRules = data.customRules || null;
		this.ruleTable = null;
		this.teamLength = data.teamLength || undefined;
		this.onBegin = data.onBegin || undefined;
		this.minSourceGen = data.minSourceGen || undefined;
		this.maxLevel = data.maxLevel || 100;
		this.defaultLevel = data.defaultLevel || this.maxLevel;
		this.forcedLevel = data.forcedLevel || undefined;
		this.maxForcedLevel = data.maxForcedLevel || undefined;
		this.noLog = !!data.noLog;
	}
} exports.Format = Format;

/** merges format lists from config/formats and config/custom-formats */
function mergeFormatLists(main, custom) {
	// interface for the builder.
	





	// result that is return and makes the actual list for formats.
	const result = [];

	// used as a intermediary to build the final list.
	const build = [];

	// used to track current section to keep formats under their sections.
	let current = {section: "", formats: []};

	// populates the original sections and formats easily
	// there should be no repeat sections at this point.
	for (const element of main) {
		if (element.section) {
			current = {section: element.section, column: element.column, formats: []};
			build.push(current);
		} else if ((element ).name) {
			current.formats.push((element ));
		}
	}

	// merges the second list the hard way. Accounts for repeats.
	if (custom !== undefined) {
		for (const element of custom) {
			// finds the section and makes it if it doesn't exist.
			if (element.section) {
				current = build.find(e => e.section === element.section);

				// if it's new it makes a new entry.
				if (current === undefined) {
					current = {section: element.section, column: element.column, formats: []};
					build.push(current);
				}
			} else if ((element ).name) { // otherwise, adds the element to its section.
				current.formats.push(element );
			}
		}
	}

	// builds the final result.
	for (const element of build) {
		// adds the section to the list.
		result.push({section: element.section, column: element.column}, ...element.formats);
	}

	return result;
}

 class DexFormats {
	
	__init() {this.rulesetCache = new Map()}
	

	constructor(dex) {;DexFormats.prototype.__init.call(this);
		this.dex = dex;
		this.formatsListCache = null;
	}

	load() {
		if (!this.dex.isBase) throw new Error(`This should only be run on the base mod`);
		this.dex.includeMods();
		if (this.formatsListCache) return this;

		const formatsList = [];

		// Load formats
		let customFormats;
		try {
			customFormats = require(CUSTOM_FORMATS).Formats;
			if (!Array.isArray(customFormats)) {
				throw new TypeError(`Exported property 'Formats' from "./config/custom-formats.ts" must be an array`);
			}
		} catch (e) {
			if (e.code !== 'MODULE_NOT_FOUND' && e.code !== 'ENOENT') {
				throw e;
			}
		}
		let Formats = require(MAIN_FORMATS).Formats;
		if (!Array.isArray(Formats)) {
			throw new TypeError(`Exported property 'Formats' from "./config/formats.ts" must be an array`);
		}
		if (customFormats) Formats = mergeFormatLists(Formats , customFormats);

		let section = '';
		let column = 1;
		for (const [i, format] of Formats.entries()) {
			const id = _dexdata.toID.call(void 0, format.name);
			if (format.section) section = format.section;
			if (format.column) column = format.column;
			if (!format.name && format.section) continue;
			if (!id) {
				throw new RangeError(`Format #${i + 1} must have a name with alphanumeric characters, not '${format.name}'`);
			}
			if (!format.section) format.section = section;
			if (!format.column) format.column = column;
			if (this.rulesetCache.has(id)) throw new Error(`Format #${i + 1} has a duplicate ID: '${id}'`);
			format.effectType = 'Format';
			format.baseRuleset = format.ruleset ? format.ruleset.slice() : [];
			if (format.challengeShow === undefined) format.challengeShow = true;
			if (format.searchShow === undefined) format.searchShow = true;
			if (format.tournamentShow === undefined) format.tournamentShow = true;
			if (format.mod === undefined) format.mod = 'gen8';
			if (!this.dex.dexes[format.mod]) throw new Error(`Format "${format.name}" requires nonexistent mod: '${format.mod}'`);

			const ruleset = new Format(format);
			this.rulesetCache.set(id, ruleset);
			formatsList.push(ruleset);
		}

		this.formatsListCache = formatsList;
		return this;
	}

	/**
	 * Returns a sanitized format ID if valid, or throws if invalid.
	 */
	validate(name) {
		const [formatName, customRulesString] = name.split('@@@', 2);
		const format = this.get(formatName);
		if (!format.exists) throw new Error(`Unrecognized format "${formatName}"`);
		if (!customRulesString) return format.id;
		const ruleTable = this.getRuleTable(format);
		const customRules = customRulesString.split(',').map(rule => {
			rule = rule.replace(/[\r\n|]*/g, '').trim();
			const ruleSpec = this.validateRule(rule);
			if (typeof ruleSpec === 'string' && ruleTable.has(ruleSpec)) return null;
			return rule;
		}).filter(Boolean);
		if (!customRules.length) throw new Error(`The format already has your custom rules`);
		const validatedFormatid = format.id + '@@@' + customRules.join(',');
		const moddedFormat = this.get(validatedFormatid, true);
		this.getRuleTable(moddedFormat);
		return validatedFormatid;
	}

	get(name, isTrusted = false) {
		if (name && typeof name !== 'string') return name;

		name = (name || '').trim();
		let id = _dexdata.toID.call(void 0, name);

		if (!name.includes('@@@')) {
			const ruleset = this.rulesetCache.get(id);
			if (ruleset) return ruleset;
		}

		if (this.dex.data.Aliases.hasOwnProperty(id)) {
			name = this.dex.data.Aliases[id];
			id = _dexdata.toID.call(void 0, name);
		}
		if (this.dex.data.Rulesets.hasOwnProperty(DEFAULT_MOD + id)) {
			id = (DEFAULT_MOD + id) ;
		}
		let supplementaryAttributes = null;
		if (name.includes('@@@')) {
			if (!isTrusted) {
				try {
					name = this.validate(name);
					isTrusted = true;
				} catch (e) {}
			}
			const [newName, customRulesString] = name.split('@@@', 2);
			name = newName.trim();
			id = _dexdata.toID.call(void 0, name);
			if (isTrusted && customRulesString) {
				supplementaryAttributes = {
					customRules: customRulesString.split(','),
					searchShow: false,
				};
			}
		}
		let effect;
		if (this.dex.data.Rulesets.hasOwnProperty(id)) {
			effect = new Format({name, ...this.dex.data.Rulesets[id] , ...supplementaryAttributes});
		} else {
			effect = new Format({id, name, exists: false});
		}
		return effect;
	}

	all() {
		this.load();
		return this.formatsListCache;
	}

	getRuleTable(format, depth = 1, repeals) {
		if (format.ruleTable && !repeals) return format.ruleTable;
		if (depth === 1) {
			const dex = this.dex.mod(format.mod);
			if (dex !== this.dex) {
				return dex.formats.getRuleTable(format, 2, repeals);
			}
		}
		const ruleTable = new RuleTable();

		const ruleset = format.ruleset.slice();
		for (const ban of format.banlist) {
			ruleset.push('-' + ban);
		}
		for (const ban of format.restricted) {
			ruleset.push('*' + ban);
		}
		for (const ban of format.unbanlist) {
			ruleset.push('+' + ban);
		}
		if (format.customRules) {
			ruleset.push(...format.customRules);
		}
		if (format.checkCanLearn) {
			ruleTable.checkCanLearn = [format.checkCanLearn, format.name];
		}
		if (format.timer) {
			ruleTable.timer = [format.timer, format.name];
		}
		if (format.minSourceGen) {
			ruleTable.minSourceGen = [format.minSourceGen, format.name];
		}

		// apply rule repeals before other rules
		// repeals is a ruleid:depth map
		for (const rule of ruleset) {
			if (rule.startsWith('!')) {
				const ruleSpec = this.validateRule(rule, format) ;
				if (!repeals) repeals = new Map();
				repeals.set(ruleSpec.slice(1), depth);
			}
		}

		for (const rule of ruleset) {
			const ruleSpec = this.validateRule(rule, format);

			if (typeof ruleSpec !== 'string') {
				if (ruleSpec[0] === 'complexTeamBan') {
					const complexTeamBan = ruleSpec.slice(1) ;
					ruleTable.addComplexTeamBan(complexTeamBan[0], complexTeamBan[1], complexTeamBan[2], complexTeamBan[3]);
				} else if (ruleSpec[0] === 'complexBan') {
					const complexBan = ruleSpec.slice(1) ;
					ruleTable.addComplexBan(complexBan[0], complexBan[1], complexBan[2], complexBan[3]);
				} else {
					throw new Error(`Unrecognized rule spec ${ruleSpec}`);
				}
				continue;
			}

			if (rule.startsWith('!')) {
				const repealDepth = repeals.get(ruleSpec.slice(1));
				if (repealDepth === undefined) throw new Error(`Multiple "${rule}" rules in ${format.name}`);
				if (repealDepth === depth) {
					throw new Error(`Rule "${rule}" did nothing because "${rule.slice(1)}" is not in effect`);
				}
				if (repealDepth === -depth) repeals.delete(ruleSpec.slice(1));
				continue;
			}

			if ("+*-".includes(ruleSpec.charAt(0))) {
				if (ruleTable.has(ruleSpec)) {
					throw new Error(`Rule "${rule}" was added by "${format.name}" but already exists in "${ruleTable.get(ruleSpec) || format.name}"`);
				}
				for (const prefix of "-*+") ruleTable.delete(prefix + ruleSpec.slice(1));
				ruleTable.set(ruleSpec, '');
				continue;
			}
			const subformat = this.get(ruleSpec);
			if (_optionalChain([repeals, 'optionalAccess', _ => _.has, 'call', _2 => _2(subformat.id)])) {
				repeals.set(subformat.id, -Math.abs(repeals.get(subformat.id)));
				continue;
			}
			if (ruleTable.has(subformat.id)) {
				throw new Error(`Rule "${rule}" was added by "${format.name}" but already exists in "${ruleTable.get(subformat.id) || format.name}"`);
			}
			ruleTable.set(subformat.id, '');
			if (!subformat.exists) continue;
			if (depth > 16) {
				throw new Error(`Excessive ruleTable recursion in ${format.name}: ${ruleSpec} of ${format.ruleset}`);
			}
			const subRuleTable = this.getRuleTable(subformat, depth + 1, repeals);
			for (const [k, v] of subRuleTable) {
				// don't check for "already exists" here; multiple inheritance is allowed
				if (!_optionalChain([repeals, 'optionalAccess', _3 => _3.has, 'call', _4 => _4(k)])) {
					ruleTable.set(k, v || subformat.name);
				}
			}
			for (const [subRule, source, limit, bans] of subRuleTable.complexBans) {
				ruleTable.addComplexBan(subRule, source || subformat.name, limit, bans);
			}
			for (const [subRule, source, limit, bans] of subRuleTable.complexTeamBans) {
				ruleTable.addComplexTeamBan(subRule, source || subformat.name, limit, bans);
			}
			if (subRuleTable.checkCanLearn) {
				if (ruleTable.checkCanLearn) {
					throw new Error(
						`"${format.name}" has conflicting move validation rules from ` +
						`"${ruleTable.checkCanLearn[1]}" and "${subRuleTable.checkCanLearn[1]}"`
					);
				}
				ruleTable.checkCanLearn = subRuleTable.checkCanLearn;
			}
			if (subRuleTable.timer) {
				if (ruleTable.timer) {
					throw new Error(
						`"${format.name}" has conflicting timer validation rules from "${ruleTable.timer[1]}" and "${subRuleTable.timer[1]}"`
					);
				}
				ruleTable.timer = subRuleTable.timer;
			}
			// minSourceGen is automatically ignored if higher than current gen
			// this helps the common situation where Standard has a minSourceGen in the
			// latest gen but not in any past gens
			if (subRuleTable.minSourceGen && subRuleTable.minSourceGen[0] <= this.dex.gen) {
				if (ruleTable.minSourceGen) {
					throw new Error(
						`"${format.name}" has conflicting minSourceGen from "${ruleTable.minSourceGen[1]}" and "${subRuleTable.minSourceGen[1]}"`
					);
				}
				ruleTable.minSourceGen = subRuleTable.minSourceGen;
			}
		}

		if (!repeals) format.ruleTable = ruleTable;
		return ruleTable;
	}

	validateRule(rule, format = null) {
		if (rule !== rule.trim()) throw new Error(`Rule "${rule}" should be trimmed`);
		switch (rule.charAt(0)) {
		case '-':
		case '*':
		case '+':
			if (_optionalChain([format, 'optionalAccess', _5 => _5.team])) throw new Error(`We don't currently support bans in generated teams`);
			if (rule.slice(1).includes('>') || rule.slice(1).includes('+')) {
				let buf = rule.slice(1);
				const gtIndex = buf.lastIndexOf('>');
				let limit = rule.startsWith('+') ? Infinity : 0;
				if (gtIndex >= 0 && /^[0-9]+$/.test(buf.slice(gtIndex + 1).trim())) {
					if (limit === 0) limit = parseInt(buf.slice(gtIndex + 1));
					buf = buf.slice(0, gtIndex);
				}
				let checkTeam = buf.includes('++');
				const banNames = buf.split(checkTeam ? '++' : '+').map(v => v.trim());
				if (banNames.length === 1 && limit > 0) checkTeam = true;
				const innerRule = banNames.join(checkTeam ? ' ++ ' : ' + ');
				const bans = banNames.map(v => this.validateBanRule(v));

				if (checkTeam) {
					return ['complexTeamBan', innerRule, '', limit, bans];
				}
				if (bans.length > 1 || limit > 0) {
					return ['complexBan', innerRule, '', limit, bans];
				}
				throw new Error(`Confusing rule ${rule}`);
			}
			return rule.charAt(0) + this.validateBanRule(rule.slice(1));
		default:
			const id = _dexdata.toID.call(void 0, rule);
			if (!this.dex.data.Rulesets.hasOwnProperty(id)) {
				throw new Error(`Unrecognized rule "${rule}"`);
			}
			if (rule.startsWith('!')) return `!${id}`;
			return id;
		}
	}

	validateBanRule(rule) {
		let id = _dexdata.toID.call(void 0, rule);
		if (id === 'unreleased') return 'unreleased';
		if (id === 'nonexistent') return 'nonexistent';
		const matches = [];
		let matchTypes = ['pokemon', 'move', 'ability', 'item', 'nature', 'pokemontag'];
		for (const matchType of matchTypes) {
			if (rule.startsWith(`${matchType}:`)) {
				matchTypes = [matchType];
				id = id.slice(matchType.length) ;
				break;
			}
		}
		const ruleid = id;
		if (this.dex.data.Aliases.hasOwnProperty(id)) id = _dexdata.toID.call(void 0, this.dex.data.Aliases[id]);
		for (const matchType of matchTypes) {
			let table;
			switch (matchType) {
			case 'pokemon': table = this.dex.data.Pokedex; break;
			case 'move': table = this.dex.data.Moves; break;
			case 'item': table = this.dex.data.Items; break;
			case 'ability': table = this.dex.data.Abilities; break;
			case 'nature': table = this.dex.data.Natures; break;
			case 'pokemontag':
				// valid pokemontags
				const validTags = [
					// singles tiers
					'uber', 'ou', 'uubl', 'uu', 'rubl', 'ru', 'nubl', 'nu', 'publ', 'pu', 'zu', 'nfe', 'lc', 'cap', 'caplc', 'capnfe', 'ag',
					// doubles tiers
					'duber', 'dou', 'dbl', 'duu', 'dnu',
					// custom tags -- nduubl is used for national dex teambuilder formatting
					'mega', 'nduubl',
					// illegal/nonstandard reasons
					'past', 'future', 'unobtainable', 'lgpe', 'custom',
					// all
					'allpokemon', 'allitems', 'allmoves', 'allabilities', 'allnatures',
				];
				if (validTags.includes(ruleid)) matches.push('pokemontag:' + ruleid);
				continue;
			default:
				throw new Error(`Unrecognized match type.`);
			}
			if (table.hasOwnProperty(id)) {
				if (matchType === 'pokemon') {
					const species = table[id] ;
					if (species.otherFormes && ruleid !== species.id + _dexdata.toID.call(void 0, species.baseForme)) {
						matches.push('basepokemon:' + id);
						continue;
					}
				}
				matches.push(matchType + ':' + id);
			} else if (matchType === 'pokemon' && id.endsWith('base')) {
				id = id.slice(0, -4) ;
				if (table.hasOwnProperty(id)) {
					matches.push('pokemon:' + id);
				}
			}
		}
		if (matches.length > 1) {
			throw new Error(`More than one thing matches "${rule}"; please specify one of: ` + matches.join(', '));
		}
		if (matches.length < 1) {
			throw new Error(`Nothing matches "${rule}"`);
		}
		return matches[0];
	}
} exports.DexFormats = DexFormats;

 //# sourceMappingURL=sourceMaps/dex-formats.js.map