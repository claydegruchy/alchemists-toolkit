var fs = require('fs');

var data = fs.readFileSync('caco-ingredients.json').toString();


var data = JSON.parse(data)




// var t = [
//     ['Fortify Destruction', 'Explosive'],
//     ['Fortify Restoration', 'berserk for x period'],
//     ['Fortify Illusion', 'madness'],
//     ['Fortify Unarmed', 'obsession for x period'],
//     ['Fortify Barter', 'charm target x for y period'],
//     ['Fortify Shouts', 'teleport/move location to x'],
//     ['Health', ''],
//     ['Magicka', 'sadness for x period'],
//     ['Health Fortification', 'multiply duration of other effects of potion'],
//     ['Stamina Fortification', 'multiply magnitude of other effects of potion'],
//     ['Magicka Fortification', 'flip other effects of potion'],
//     ['Magicka Regeneration', ''],
//     ['Ravage Health', 'Great Wound'],
//     ['Damage Magicka', 'chance to gain corruption'],
//     ['Damage Magicka Regen', 'chance to gain sin'],
//     ['Lingering Damage Undead', 'damage chaos and demons'],
//     ['Drain Strength', 'reduce mass'],
//     ['Drain Intelligence', 'grow'],
//     ['Resist Magic', 'increased magic resistance'],
//     ['Resist Fire', 'increased heat resistance'],
//     ['Resist Frost', 'increased cold resistance'],
//     ['Resist Shock', 'increased chaos resistance'],
//     ['Magic Aversion', 'transmute to x perminantly'],
//     ['Fire Aversion', 'gain mass'],
//     ['Frost Aversion', 'shrink'],
//     ['Shock Aversion', 'increase critical casting chance'],
//     ['Fire Damage', 'polymorph inanimate substance to x for y period'],
//     ['Frost Damage', 'shrink'],
//     ['Shock Damage', 'polymorph living thing to x for y period'],
//     ['Poison Aversion', ''],
//     ['Light', 'move the caster x mins back in time'],
//     ['Etherialize', 'gain luck'],
//     ['Detect Life Potion - Exterior', 'see visions of location x (scry)'],
//     ['Blood', 'make inanimate living'],
//     ["Hunter's Boon", 'increase time speed'],
//     ["Hircine's Sight", 'increase aging speed'],
//     ['Prowling', 'increase stealth'],
//     ['Thrill', 'see real or fake visions of future'],
//     ['Consumption', 'cause hunger'],
//     ['Exploit Weakness', ''],
//     ['Fortify One-Handed', "Increase Strength"],
//     ['Fortify Two-Handed', "Increase Weapon Skill"],
//     ['Fortify Marksman', "Increase Ballistic Skill"],
//     ['Fortify Block', "Increase Resilience"],
//     ['Fortify Heavy Armor', "Increase Toughness"],
//     ['Fortify Sneak', "Increase Dexterity"],
//     ['Fortify Lockpicking', "Increase Initiative"],
//     ['Fortify Pickpocket', "Increase Agility"],
//     ['Fortify Speech', "Increase Fellowship"],
//     ['Fortify Light Armor', "Increase Dexterity"],
//     ['Fortify Destruction', "magical effect"],
//     ['Fortify Alteration', "Increase Wounds"],
//     ['Fortify Restoration', "magical effect"],
//     ['Fortify Conjuration', "Increase Willpower"],
//     ['Fortify Illusion', "magical effect"],
//     ['Fortify Smithing', "Increase crafting"],
//     ['Fortify Enchanting', "Increase Intelligence"],
//     ['Fortify Unarmed', "magical effect"],
//     ['Fortify Barter', "magical effect"],
//     ['Fortify Shouts', "magical effect"],
//     ['Speed', "Increase Movement"],
//     ['Health', "magical effect"],
//     ['Stamina', "Restore vigor"],
//     ['Magicka', "magical effect"],
//     ['Health Fortification', "magical effect"],
//     ['Stamina Fortification', "magical effect"],
//     ['Magicka Fortification', "magical effect"],
//     ['Health Regeneration', "Regeneration"],
//     ['Stamina Regeneration', "Stamina Regeneration"],
//     ['Magicka Regeneration', "magical effect"],
//     ['Damage Health', "Cause wound"],
//     ['Damage Health Regen', "Cause infection"],
//     ['Lingering Damage Health', "Disfigure"],
//     ['Ravage Health', "magical effect"],
//     ['Damage Stamina', "Exhaust"],
//     ['Damage Stamina Regen', "Cripple"],
//     ['Fatigue', "Fatigue"],
//     ['Damage Magicka', "magical effect"],
//     ['Damage Magicka Regen', "magical effect"],
//     ['Silence', "Silence"],
//     ['Damage Undead', "Damage Undead"],
//     ['Lingering Damage Undead', "magical effect"],
//     ['Drain Strength', "magical effect"],
//     ['Drain Intelligence', "magical effect"],
//     ['Resist Magic', "magical effect"],
//     ['Resist Fire', "magical effect"],
//     ['Resist Frost', "magical effect"],
//     ['Resist Shock', "magical effect"],
//     ['Shield', "Shield"],
//     ['Magic Aversion', "magical effect"],
//     ['Fire Aversion', "magical effect"],
//     ['Frost Aversion', "magical effect"],
//     ['Shock Aversion', "magical effect"],
//     ['Fire Damage', "magical effect"],
//     ['Frost Damage', "magical effect"],
//     ['Shock Damage', "magical effect"],
//     ['Cure Disease', "Cure Disease"],
//     ['Resist Disease', "Resist Disease"],
//     ['Cure Poison', "Cure Poison"],
//     ['Resist Poison', "Resist Poison"],
//     ['Poison Aversion', "magical effect"],
//     ['Paralysis', "Paralysis"],
//     ['Resist Paralysis', "Resist Paralysis"],
//     ['Slow', "Slow"],
//     ['Feather', "Feather"],
//     ['Invisibility', "Invisibility"],
//     ['Light', "magical effect"],
//     ['Night Eye', "Night Eye"],
//     ['Etherialize', "magical effect"],
//     ['Detect Life', "Detect Life"],
//     ['Detect Life Potion - Exterior', "magical effect"],
//     ['Fear', "Fear"],
//     ['Frenzy', "Frenzy"],
//     ['Waterbreathing', "Waterbreathing"],
//     ['Waterwalking', "Waterwalking"],
//     ['Blood', "magical effect"],
//     ['Protect Soul', "Protect Soul"],
//     ['Discerning', "Discerning"],
//     ['Pathfinding', "Pathfinding"],
//     ["Hunter's Boon", "magical effect"],
//     ["Hircine's Sight", "magical effect"],
//     ['Prowling', "magical effect"],
//     ['Thrill', "magical effect"],
//     ['Consumption', "magical effect"],
//     ['Exploit Weakness', "magical effect"],
//     ['Ineptitude', "Ineptitude"],
//     ['Muddle', "Confuse"],

// ]

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}


var effects = {
    "Fortify Destruction": "Explosive",
    "Fortify Restoration": "berserk for x period",
    "Fortify Illusion": "madness",
    "Fortify Unarmed": "obsession for x period",
    "Fortify Barter": "charm target x for y period",
    "Fortify Shouts": "teleport/move location to x",
    "Health": "Nothing",
    "Magicka": "sadness for x period",
    "Health Fortification": "multiply duration of other effects of potion",
    "Stamina Fortification": "multiply magnitude of other effects of potion",
    "Magicka Fortification": "flip other effects of potion",
    "Magicka Regeneration": "Nothing",
    "Ravage Health": "Great Wound",
    "Damage Magicka": "chance to gain corruption",
    "Damage Magicka Regen": "chance to gain sin",
    "Lingering Damage Undead": "damage chaos and demons",
    "Drain Strength": "reduce mass",
    "Drain Intelligence": "grow",
    "Resist Magic": "increased magic resistance",
    "Resist Fire": "increased heat resistance",
    "Resist Frost": "increased cold resistance",
    "Resist Shock": "increased chaos resistance",
    "Magic Aversion": "transmute to x perminantly",
    "Fire Aversion": "gain mass",
    "Frost Aversion": "shrink",
    "Shock Aversion": "increase critical casting chance",
    "Fire Damage": "polymorph inanimate substance to x for y period",
    "Frost Damage": "shrink",
    "Shock Damage": "polymorph living thing to x for y period",
    "Poison Aversion": "Nothing",
    "Light": "move the caster x mins back in time",
    "Etherialize": "gain luck",
    "Detect Life Potion - Exterior": "see visions of location x (scry)",
    "Blood": "make inanimate living",
    "Hunter's Boon": "increase time speed",
    "Hircine's Sight": "increase aging speed",
    "Prowling": "increase stealth",
    "Thrill": "see real or fake visions of future",
    "Consumption": "cause hunger",
    "Exploit Weakness": "magical effect",
    "Fortify One-Handed": "Increase Strength",
    "Fortify Two-Handed": "Increase Weapon Skill",
    "Fortify Marksman": "Increase Ballistic Skill",
    "Fortify Block": "Increase Resilience",
    "Fortify Heavy Armor": "Increase Toughness",
    "Fortify Sneak": "Increase Dexterity",
    "Fortify Lockpicking": "Increase Initiative",
    "Fortify Pickpocket": "Increase Agility",
    "Fortify Speech": "Increase Fellowship",
    "Fortify Light Armor": "Increase Dexterity",
    "Fortify Alteration": "Increase Wounds",
    "Fortify Conjuration": "Increase Willpower",
    "Fortify Smithing": "Increase crafting",
    "Fortify Enchanting": "Increase Intelligence",
    "Speed": "Increase Movement",
    "Stamina": "Restore vigor",
    "Health Regeneration": "Regeneration",
    "Stamina Regeneration": "Stamina Regeneration",
    "Damage Health": "Cause wound",
    "Damage Health Regen": "Cause infection",
    "Lingering Damage Health": "Disfigure",
    "Damage Stamina": "Exhaust",
    "Damage Stamina Regen": "Cripple",
    "Fatigue": "Fatigue",
    "Silence": "Silence",
    "Damage Undead": "Damage Undead",
    "Shield": "Shield",
    "Cure Disease": "Resist Disease",
    "Resist Disease": "Resist Infection",
    "Cure Poison": "Resist Stat changes",
    "Resist Poison": "Resist Poison",
    "Paralysis": "Paralysis",
    "Resist Paralysis": "Resist Paralysis",
    "Slow": "Slow",
    "Feather": "Feather",
    "Invisibility": "Invisibility",
    "Night Eye": "Night Eye",
    "Detect Life": "Detect Life",
    "Fear": "Fear",
    "Frenzy": "Frenzy",
    "Waterbreathing": "Waterbreathing",
    "Waterwalking": "Waterwalking",
    "Protect Soul": "Protect Soul",
    "Discerning": "Chaotic effect",
    "Pathfinding": "Vomiting",
    "Ineptitude": "Ineptitude",
    "Muddle": "Confuse"
}


/*
todo
add colours, odours and identification effects
  phonic, loud
  photonic, bright


process
replace shit effects
shuffle strong effects high in the effect tree
assign random requirements to 3rd  efffect
add random advanced requirements to 4th effect
add random 5th effects if needed with very advanced requirements


effect ideas
3 immunity to x
1 hatred for x period
1 love for x period
1 sadness for x period
2 see real or fake visions of future
3 see visions of location x (scry)
4 teleport/move location to x
3 charm target x for y period
3 damage chaos and demons
3 increase aging speed
3 increase time speed
4 move the caster x mins back in time
3 flip other effects of potion
3 multiply magnitude of other effects of potion
2 multiply duration of other effects of potion
3 polymorph living thing to x for y period
3 polymorph inanimate substance to x for y period
2 shink
2 grow
2 reduce mass
2 gain mass
4 transmute to x perminantly
4 gain luck


meta effects:
acid
base
damaged by acid
damaged by base
remove effect X
exothermic
endothermic
exomagic, never stops reacting
endomagic, stops other effects from working
chaotic/mutative
oxadising/rust making
expires quickly
thicken potion
thin potion
ferromagnetic liquid
flamible
vulnrable to light or fire

production effects:
crunshing
grinding
heating 
chilling
evaporating
mixing
stew for time
disolve in water
disolve in oil
disolve in acid
melt
freeze
requires the presence of chaos

extra ingrediants
warpstone
starstone
water
sand/dirt



*/


// console.log()

for (y in effects) {

  effects[y] = effects[y].capitalize()
    // if (y == effects[y]) {
    //     console.log([effects[y], y])
    // }
}

console.log(effects)



//