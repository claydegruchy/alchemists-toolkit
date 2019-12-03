var fs = require('fs');
var randomColor = require('randomcolor'); // import the script
var Color = require('color');

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


var effects = [{
        "name": "Explosive",
        "complexity": 0,
        "originalName": "Fortify Destruction"
    },
    {
        "name": "Berserk for x period",
        "complexity": 0,
        "originalName": "Fortify Restoration"
    },
    {
        "name": "Madness",
        "complexity": 0,
        "originalName": "Fortify Illusion"
    },
    {
        "name": "Obsession for x period",
        "complexity": 0,
        "originalName": "Fortify Unarmed"
    },
    {
        "name": "Charm target x for y period",
        "complexity": 2,
        "originalName": "Fortify Barter"
    },
    {
        "name": "Teleport/move location to x",
        "complexity": 4,
        "originalName": "Fortify Shouts"
    },
    {
        "name": "Queasiness",
        "complexity": 0,
        "originalName": "Health"
    },
    {
        "name": "Sadness for x period",
        "complexity": 0,
        "originalName": "Magicka"
    },
    {
        "name": "Multiply duration of other effects of potion",
        "complexity": 3,
        "originalName": "Health Fortification"
    },
    {
        "name": "Multiply magnitude of other effects of potion",
        "complexity": 3,
        "originalName": "Stamina Fortification"
    },
    {
        "name": "Flip other effects of potion",
        "complexity": 3,
        "originalName": "Magicka Fortification"
    },
    {
        "name": "Diarrhea",
        "complexity": 0,
        "originalName": "Magicka Regeneration"
    },
    {
        "name": "Great Wound",
        "complexity": 3,
        "originalName": "Ravage Health"
    },
    {
        "name": "Chance to gain corruption",
        "complexity": 0,
        "originalName": "Damage Magicka"
    },
    {
        "name": "Chance to gain sin",
        "complexity": 3,
        "originalName": "Damage Magicka Regen"
    },
    {
        "name": "Damage chaos and demons",
        "complexity": 3,
        "originalName": "Lingering Damage Undead"
    },
    {
        "name": "Reduce mass",
        "complexity": 2,
        "originalName": "Drain Strength"
    },
    {
        "name": "Grow",
        "complexity": 0,
        "originalName": "Drain Intelligence"
    },
    {
        "name": "Increased magic resistance",
        "complexity": 2,
        "originalName": "Resist Magic"
    },
    {
        "name": "Increased heat resistance",
        "complexity": 2,
        "originalName": "Resist Fire"
    },
    {
        "name": "Increased cold resistance",
        "complexity": 2,
        "originalName": "Resist Frost"
    },
    {
        "name": "Increased chaos resistance",
        "complexity": 2,
        "originalName": "Resist Shock"
    },
    {
        "name": "Transmute to x perminantly",
        "complexity": 4,
        "originalName": "Magic Aversion"
    },
    {
        "name": "Gain mass",
        "complexity": 2,
        "originalName": "Fire Aversion"
    },
    {
        "name": "Shrink",
        "complexity": 3,
        "originalName": "Frost Aversion"
    },
    {
        "name": "Increase critical casting chance",
        "complexity": 3,
        "originalName": "Shock Aversion"
    },
    {
        "name": "Polymorph inanimate substance to x for y period",
        "complexity": 3,
        "originalName": "Fire Damage"
    },
    {
        "name": "Filling",
        "complexity": 0,
        "originalName": "Frost Damage"
    },
    {
        "name": "Polymorph living thing to x for y period",
        "complexity": 3,
        "originalName": "Shock Damage"
    },
    {
        "name": "Prevents sleep",
        "complexity": 0,
        "originalName": "Poison Aversion"
    },
    {
        "name": "Move the caster x mins back in time",
        "complexity": 4,
        "originalName": "Light"
    },
    {
        "name": "Gain luck",
        "complexity": 4,
        "originalName": "Etherialize"
    },
    {
        "name": "See visions of location x (scry)",
        "complexity": 3,
        "originalName": "Detect Life Potion - Exterior"
    },
    {
        "name": "Make inanimate living",
        "complexity": 4,
        "originalName": "Blood"
    },
    {
        "name": "Increase time speed",
        "complexity": 3,
        "originalName": "Hunter's Boon"
    },
    {
        "name": "Increase aging speed",
        "complexity": 4,
        "originalName": "Hircine's Sight"
    },
    {
        "name": "Increase stealth",
        "complexity": 0,
        "originalName": "Prowling"
    },
    {
        "name": "See real or fake visions of future",
        "complexity": 0,
        "originalName": "Thrill"
    },
    {
        "name": "Cause hunger",
        "complexity": 0,
        "originalName": "Consumption"
    },
    {
        "name": "Nothing",
        "complexity": 0,
        "originalName": "Exploit Weakness"
    },
    {
        "name": "Increase Strength",
        "complexity": 0,
        "originalName": "Fortify One-Handed"
    },
    {
        "name": "Increase Weapon Skill",
        "complexity": 0,
        "originalName": "Fortify Two-Handed"
    },
    {
        "name": "Increase Ballistic Skill",
        "complexity": 0,
        "originalName": "Fortify Marksman"
    },
    {
        "name": "Increase Resilience",
        "complexity": 0,
        "originalName": "Fortify Block"
    },
    {
        "name": "Increase Toughness",
        "complexity": 0,
        "originalName": "Fortify Heavy Armor"
    },
    {
        "name": "Increase Dexterity",
        "complexity": 0,
        "originalName": "Fortify Sneak"
    },
    {
        "name": "Increase Initiative",
        "complexity": 0,
        "originalName": "Fortify Lockpicking"
    },
    {
        "name": "Increase Agility",
        "complexity": 0,
        "originalName": "Fortify Pickpocket"
    },
    {
        "name": "Increase Fellowship",
        "complexity": 0,
        "originalName": "Fortify Speech"
    },
    {
        "name": "Increase Dexterity",
        "complexity": 0,
        "originalName": "Fortify Light Armor"
    },
    {
        "name": "Increase Wounds",
        "complexity": 2,
        "originalName": "Fortify Alteration"
    },
    {
        "name": "Increase Willpower",
        "complexity": 0,
        "originalName": "Fortify Conjuration"
    },
    {
        "name": "Increase crafting",
        "complexity": 2,
        "originalName": "Fortify Smithing"
    },
    {
        "name": "Increase Intelligence",
        "complexity": 0,
        "originalName": "Fortify Enchanting"
    },
    {
        "name": "Increase Movement",
        "complexity": 2,
        "originalName": "Speed"
    },
    {
        "name": "Restore vigor",
        "complexity": 0,
        "originalName": "Stamina"
    },
    {
        "name": "Regeneration",
        "complexity": 2,
        "originalName": "Health Regeneration"
    },
    {
        "name": "Stamina Regeneration",
        "complexity": 0,
        "originalName": "Stamina Regeneration"
    },
    {
        "name": "Cause wound",
        "complexity": 0,
        "originalName": "Damage Health"
    },
    {
        "name": "Cause infection",
        "complexity": 0,
        "originalName": "Damage Health Regen"
    },
    {
        "name": "Disfigure",
        "complexity": 0,
        "originalName": "Lingering Damage Health"
    },
    {
        "name": "Exhaust",
        "complexity": 0,
        "originalName": "Damage Stamina"
    },
    {
        "name": "Cripple",
        "complexity": 0,
        "originalName": "Damage Stamina Regen"
    },
    {
        "name": "Fatigue",
        "complexity": 0,
        "originalName": "Fatigue"
    },
    {
        "name": "Silence",
        "complexity": 0,
        "originalName": "Silence"
    },
    {
        "name": "Damage Undead",
        "complexity": 2,
        "originalName": "Damage Undead"
    },
    {
        "name": "Grant fate token",
        "complexity": 4,
        "originalName": "Shield"
    },
    {
        "name": "Resist Disease",
        "complexity": 0,
        "originalName": "Cure Disease"
    },
    {
        "name": "Resist Infection",
        "complexity": 0,
        "originalName": "Resist Disease"
    },
    {
        "name": "Resist Stat changes",
        "complexity": 2,
        "originalName": "Cure Poison"
    },
    {
        "name": "Resist Poison",
        "complexity": 2,
        "originalName": "Resist Poison"
    },
    {
        "name": "Paralysis",
        "complexity": 2,
        "originalName": "Paralysis"
    },
    {
        "name": "Resist Paralysis",
        "complexity": 3,
        "originalName": "Resist Paralysis"
    },
    {
        "name": "Slow",
        "complexity": 0,
        "originalName": "Slow"
    },
    {
        "name": "Feather",
        "complexity": 3,
        "originalName": "Feather"
    },
    {
        "name": "Invisibility",
        "complexity": 4,
        "originalName": "Invisibility"
    },
    {
        "name": "Night Eye",
        "complexity": 3,
        "originalName": "Night Eye"
    },
    {
        "name": "Detect Life",
        "complexity": 2,
        "originalName": "Detect Life"
    },
    {
        "name": "Fear",
        "complexity": 0,
        "originalName": "Fear"
    },
    {
        "name": "Frenzy",
        "complexity": 0,
        "originalName": "Frenzy"
    },
    {
        "name": "Waterbreathing",
        "complexity": 0,
        "originalName": "Waterbreathing"
    },
    {
        "name": "Waterwalking",
        "complexity": 3,
        "originalName": "Waterwalking"
    },
    {
        "name": "Protect Soul",
        "complexity": 3,
        "originalName": "Protect Soul"
    },
    {
        "name": "Chaotic effect",
        "complexity": 4,
        "originalName": "Discerning"
    },
    {
        "name": "Vomiting",
        "complexity": 0,
        "originalName": "Pathfinding"
    },
    {
        "name": "Ineptitude",
        "complexity": 0,
        "originalName": "Ineptitude"
    },
    {
        "name": "Confuse",
        "complexity": 0,
        "originalName": "Muddle"
    }
].map(i => ({ colour: Color(randomColor({ format: 'rgba' })), ...i }))


var substanceProperties = [
    "acidic",
    "basic",
    "damaged by acid",
    "damaged by base",
    "removes effect X",
    "exothermic",
    "endothermic",
    "exomagic, never stops reacting",
    "endomagic, stops weaker effects from working",
    "chaotic/mutative",
    "oxadising/rust making",
    "expires quickly",
    "thickens potion",
    "thins potion",
    "ferromagnetic liquid",
    "flamible",
    "vulnrable to light or fire",
]



var productionRequirements = [
    "Disolve in water",
    "crunsh",
    "grind",
    "heat",
    "chill",
    "Shake in a silver vessel",
    "stew for 3 nights",
    "disolve in oil",
    "disolve in acid",
    "ferment for 3 weeks",
    "melt",
    "evaporating",
    "freeze",
    "requires the presence of chaos",
    "stir under a full moon",
    'Distil',

].map(i => i.capitalize())


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


// fs.writeFileSync('caco-asd.json',"ok")

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}


effectLookup = (effect) => effects.find(e => e.originalName == effect)



class Ingredient {
    constructor(name, effects) {
        this._effects = effects.map(e => ({ ingredientName: name, active: false, ...e }))
        this._name = name
    }
    effectsAdvanced() {
        return this._effects
        // .map(e => )
    }
    effectsBasic() {
        return this._effects.map(e => e.name)
        // .map(e => ({ active: false, ...e }))
    }
}


data.effects = effects
data.substanceProperties = substanceProperties
data.productionRequirements = productionRequirements

data.ingredients = data.ingredients
    // .slice(0, 10)
    .map(ingredient => {

        ingredient.effects.forEach((effect, i) => {
            var newEffect = effectLookup(effect.name)
            ingredient.effects[i].name = newEffect.name

            ingredient.effects[i].level = newEffect.complexity
            ingredient.effects[i].colour = newEffect.colour

            if ((newEffect.complexity >= 2) && (newEffect.complexity < 4)) {
                ingredient.effects[i].production = data.productionRequirements.slice(0, 3 + newEffect.complexity).randomElement()

            }
            if (newEffect.complexity >= 3) {
                ingredient.effects[i].substanceProperty = data.substanceProperties.randomElement()
            }

            if (newEffect.complexity >= 4) {
                ingredient.effects[i].productionRequirement = data.productionRequirements.slice(2, data.productionRequirements.length).randomElement()
            }
        })
        // console.log(ingredient)

        return ingredient

    })
    .map(i => new Ingredient(i.name, i.effects))


ingredientFinder = (ingredient) => data.ingredients.find(i => i._name == ingredient)


function findCommonEffects(...ingredientNames) {

    var ingredients = ingredientNames
        .map(ingredient => ingredientFinder(ingredient))
        .filter(i => i)

    var effectArray = ingredients.map(i => i.effectsAdvanced()).flat()

    effectArray.forEach((effect, i, array) => array[i].count = array.filter(e => e.name == effect.name).length)

    return Object.assign({}, ...effectArray
        .filter(e => e.count > 1)
        .map((s, i, a) => ({
            [s.name]: [...a
                .filter(e => e.name == s.name)
                // .map(e => e.ingredientName)
            ]
        })));
}

var m = findCommonEffects(false,
    "Moon Sugar",
    "Silverside",
    // "dog food",
    "Charred Hawk Beak",
    "Dyed Hawk Feathers",
    "Tundra Cotton",
    "Lavender",
    "Wheat",
    "Hagraven Claw",
    "Mudcrab Chitin",


)
// console.log()
// var t =Object.keys(m).map(e=>)
// console.log(t)


/*
run with input of potion method, production requirements, "is this already a potion"
add all compoents
run conditions
  check duplicates
  check conditions on duplicates
*/







// var m = [
//     ["Sadness for x period", "Increased cold resistance", "Diarrhea", "Gain mass"],
//     ["Cripple", "Increased cold resistance", "Restore vigor", "Great Wound"],
//     ["Vomiting", "Resist Stat changes", "Chance to gain corruption", "Stamina Regeneration"],
//     ["Madness", "Increase Willpower", "See real or fake visions of future", "Resist Stat changes"]
// ].reduce((a, b) => a.filter(c => b.includes(c)));


// console.log(data.ingredients.length)

// console.log(data)
// var c1 = Color(randomColor({ format: 'rgba' }))
// var c2 = Color(randomColor({ format: 'rgba' }))


// console.log(c1.mix(c2))

//