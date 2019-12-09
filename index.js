var fs = require('fs');
var randomColor = require('randomcolor'); // import the script
var Color = require('color');

var data = fs.readFileSync('caco-ingredients.json').toString();


var originalDataSet = JSON.parse(data)
Array.prototype.unique = function() { return [...new Set(this)] }
Array.prototype.average = function() { return this.reduce((p, c) => p + c, 0) / this.length }


var options = {
    minimumCommonEffects: 2,
    // complexityBooster: 1
    maxComponents: 4,

}




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
        "complexity": 1,
        "originalName": "Fortify Destruction"
    },
    {
        "name": "Berserk for x period",
        "complexity": 1,
        "originalName": "Fortify Restoration"
    },
    {
        "name": "Madness",
        "complexity": 1,
        "originalName": "Fortify Illusion"
    },
    {
        "name": "Obsession for x period",
        "complexity": 1,
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
        "complexity": 1,
        "originalName": "Health"
    },
    {
        "name": "Sadness for x period",
        "complexity": 1,
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
        "complexity": 1,
        "originalName": "Magicka Regeneration"
    },
    {
        "name": "Great Wound",
        "complexity": 3,
        "originalName": "Ravage Health"
    },
    {
        "name": "Corruption",
        "complexity": 1,
        "originalName": "Damage Magicka"
    },
    {
        "name": "Gain Sin",
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
        "complexity": 1,
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
        "complexity": 1,
        "originalName": "Frost Damage"
    },
    {
        "name": "Polymorph living thing to x for y period",
        "complexity": 3,
        "originalName": "Shock Damage"
    },
    {
        "name": "Sleepless rest",
        "complexity": 1,
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
        "complexity": 1,
        "originalName": "Prowling"
    },
    {
        "name": "See real or fake visions of future",
        "complexity": 1,
        "originalName": "Thrill"
    },
    {
        "name": "Cause hunger",
        "complexity": 1,
        "originalName": "Consumption"
    },
    {
        "name": "Nothing",
        "complexity": 1,
        "originalName": "Exploit Weakness"
    },
    {
        "name": "Increase Strength",
        "complexity": 1,
        "originalName": "Fortify One-Handed"
    },
    {
        "name": "Increase Weapon Skill",
        "complexity": 1,
        "originalName": "Fortify Two-Handed"
    },
    {
        "name": "Increase Ballistic Skill",
        "complexity": 1,
        "originalName": "Fortify Marksman"
    },
    {
        "name": "Increase Resilience",
        "complexity": 1,
        "originalName": "Fortify Block"
    },
    {
        "name": "Increase Toughness",
        "complexity": 1,
        "originalName": "Fortify Heavy Armor"
    },
    {
        "name": "Increase Dexterity",
        "complexity": 1,
        "originalName": "Fortify Sneak"
    },
    {
        "name": "Increase Initiative",
        "complexity": 1,
        "originalName": "Fortify Lockpicking"
    },
    {
        "name": "Increase Agility",
        "complexity": 1,
        "originalName": "Fortify Pickpocket"
    },
    {
        "name": "Increase Fellowship",
        "complexity": 1,
        "originalName": "Fortify Speech"
    },
    {
        "name": "Powerful stimulent",
        "complexity": 1,
        "originalName": "Fortify Light Armor"
    },
    {
        "name": "Increase Wounds",
        "complexity": 2,
        "originalName": "Fortify Alteration"
    },
    {
        "name": "Increase Willpower",
        "complexity": 1,
        "originalName": "Fortify Conjuration"
    },
    {
        "name": "Increase crafting",
        "complexity": 2,
        "originalName": "Fortify Smithing"
    },
    {
        "name": "Increase Intelligence",
        "complexity": 1,
        "originalName": "Fortify Enchanting"
    },
    {
        "name": "Increase Movement",
        "complexity": 2,
        "originalName": "Speed"
    },
    {
        "name": "Restore vigor",
        "complexity": 1,
        "originalName": "Stamina"
    },
    {
        "name": "Regeneration",
        "complexity": 2,
        "originalName": "Health Regeneration"
    },
    {
        "name": "Stamina Regeneration",
        "complexity": 1,
        "originalName": "Stamina Regeneration"
    },
    {
        "name": "Wound",
        "complexity": 1,
        "originalName": "Damage Health"
    },
    {
        "name": "Cause infection",
        "complexity": 1,
        "originalName": "Damage Health Regen"
    },
    {
        "name": "Disfigure",
        "complexity": 1,
        "originalName": "Lingering Damage Health"
    },
    {
        "name": "Exhaust",
        "complexity": 1,
        "originalName": "Damage Stamina"
    },
    {
        "name": "Cripple",
        "complexity": 1,
        "originalName": "Damage Stamina Regen"
    },
    {
        "name": "Fatigue",
        "complexity": 1,
        "originalName": "Fatigue"
    },
    {
        "name": "Silence",
        "complexity": 1,
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
        "complexity": 1,
        "originalName": "Cure Disease"
    },
    {
        "name": "Resist Infection",
        "complexity": 1,
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
        "complexity": 1,
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
        "complexity": 1,
        "originalName": "Fear"
    },
    {
        "name": "Frenzy",
        "complexity": 1,
        "originalName": "Frenzy"
    },
    {
        "name": "Waterbreathing",
        "complexity": 1,
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
        "complexity": 1,
        "originalName": "Pathfinding"
    },
    {
        "name": "Ineptitude",
        "complexity": 1,
        "originalName": "Ineptitude"
    },
    {
        "name": "Confuse",
        "complexity": 1,
        "originalName": "Muddle"
    }
].map(i => ({ colour: Color(randomColor({ format: 'rgba' })), ...i }))


var substanceProperties = [
        'Acidic',
        'Basic',
        'Damaged by acid',
        'Damaged by base',
        'Removes effect X',
        'Exothermic',
        'Endothermic',
        'Exomagic, never stops reacting',
        'Endomagic, stops weaker effects from working',
        'Chaotic/mutative',
        'Oxadising',
        'Expires quickly',
        'Thick potion',
        'Thin potion',
        'Magnetic',
        'Flamible',
        'Vulnrable to light or fire'
    ]
    .map(e => e.capitalize())



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
    "ferment for 1 session",
    "boil",
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


function generateDataSet(data, effects, substanceProperties, productionRequirements) {

    var generationMemory = {}

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
                // console.log(newEffect.name, ingredient.effects[i].magnitude)
                if (newEffect.name == "Explosive") console.log(ingredient.effects[i].magnitude)

                if (!generationMemory[newEffect.name]) {
                    generationMemory[effect.name] = [ingredient.effects[i].magnitude]

                } else {
                    generationMemory[newEffect.name].push(ingredient.effects[i].magnitude)
                }

                // console.log(generationMemory[effect.name])

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



            return ingredient

        })
        //calculate maximum strength
        .map((ingredient, i, a) => ({ ...ingredient,
            effects: ingredient.effects.map(e => ({ ...e,
                maxMagnitude: generationMemory[e.name]
                    .sort((a, b) => b - a, 0)
                    .slice(0, options.maxComponents)
                    .reduce((a, b) => a + b, 0)

            }))
        }))
        .map(i => new Component(i.name, i.effects))

    return data
}


effectLookup = (effect) => effects.find(e => e.originalName == effect)

class Component {
    constructor(name, effects, colour, properties) {
        this.effects = effects.map(e => ({
            ingredientName: name,
            active: false,

            ...e
        }))
        this.name = name
        this.complexity = 1
        this.colour = colour
        this.properties = properties
        // this.complexity
    }
    effectsAdvanced() {
        return this.effects
        // .map(e => )
    }
    effectsBasic() {
        return this.effects.map(e => e.name)
        // .map(e => ({ active: false, ...e }))
    }

    complexity(add) {
        if (add) this.complexity += add
        return this.complexity
    }
}




//define dataset
var data = generateDataSet(originalDataSet, effects, substanceProperties, productionRequirements)

function strengthFinder(percent) {
    var ratings = ["very weak",
        "weak",
        "mid-strength",
        "strong",
        "very strong",
        "perfect"
    ]
    console.log("LMAO", ratings[Math.round(percent * ratings.length) - 1], Math.round(percent * ratings.length) - 1)
    var index = Math.round(percent * ratings.length) - 1
    if (index < 0) index = 0
    return ratings[index].capitalize()
}


function effectFinder(effectName) {
    return data.ingredients
        .filter(ingredient => ingredient.effectsBasic().includes(effectName))
        .map(ingredient => ingredient.effectsAdvanced())
        .flat()
        .filter(e => e.ingredientName)
        .filter(e => e.name == effectName)
        .sort((a, b) => b.magnitude - a.magnitude)
        .map(e => e.ingredientName)
}



function ingredientFinder(...ingredientNames) {
    console.log("running ingredientFinder")
    // if (ingredientNames.length > 5) throw "perhaps you should try making a soup"
    return ingredientNames
        .map(ingredient => data.ingredients
            .find(i => i._name == ingredient))
        .filter(i => i)
}


function findCommonEffects(...ingredientObjects) {
    console.log("running findCommonEffects", ingredientObjects.length)

    // console.log(Math.max(...ingredientObjects.map(i => i.complexity())))
    // console.log(ingredientObjects.map(i => i.complexity()))
    var complexity = Math.max(...ingredientObjects.map(i => i.complexity()))

    var effectArray = ingredientObjects
        .map(i => i.effectsAdvanced())
        .flat()

    effectArray
        .forEach((s, i, a) => a[i].active = false)

    // effectArray
    // .forEach((s, i, a) => a[i].active = false)

    effectArray
        .forEach((effect, i, array) => array[i].count = array
            .filter(e => e.name == effect.name).length)


    // console.log("effectArray", effectArray)
    //activate effects
    effectArray
        .filter(e => e.count >= options.minimumCommonEffects)
        .filter(e => e.level <= complexity)
        .forEach((s, i, a) => a[i].active = true)

    return effectArray
    // return Object.assign({}, ...effectArray
    //     .filter(e => e.count >= options.minimumCommonEffects)
    // .map((s, i, a) => ({
    //     [s.name]: [...a
    //         .filter(e => e.name == s.name)
    //         // .map(e => e.ingredientName)
    //     ]
    // })));
}


function validateEffects(productionModifiers = [], effectArray) {
    console.log("running validateEffects",
        "productionModifiers",
        productionModifiers.length,
        "effectArray",
        effectArray.length)
    // console.log(effectArray)
    var conditions = {
        hasNoProductionRequirements: (e) => !e.production,
        includesProduction: (e) => productionModifiers.includes(e.production),
        usingPhilosophersStone: (e) => productionModifiers.includes("philosophers stone"),

    }
    //vlidate prodction
    // remove junk
    //keep high level
    return effectArray
        //filter production mods
        .filter((e, i, a) => Object.keys(conditions).some(b => conditions[b](e)))
        // console.log(t)
        .filter(e => e.active || e.level >= 3)

}


function calculateEffectPotency(effectArray) {
    console.log("running calculateEffectPotency", effectArray.length)
    effectArray.forEach((item) => {
        delete item.ingredientName
    })

    // console.log({ ...effectArray[0], ...effectArray[2], magnitude: effectArray[0].magnitude * effectArray[2].magnitude })

    var presentEffects = [...new Set(effectArray.map(e => e.name))]
    // console.log(presentEffects)

    presentEffects = presentEffects.map(effect => {
            var thisEffectCollection = effectArray
                .filter(e => e.name == effect)
            return Object.assign({}, ...thisEffectCollection, {
                magnitude: thisEffectCollection
                    .map(e => e.magnitude)
                    //this is voodoo
                    .reduce((a, b) => a + b, 0)
            })
        })
        // .map(e => ({ ...e, strength: strengthFinder(e.magnitude / e.maxMagnitude) }))
        .map(e => ({ ...e, strength: strengthFinder(e.magnitude / e.maxMagnitude) }))

    //trim potion to remove excess effects
    // if (presentEffects.length > 4) presentEffects = presentEffects.slice(0, 4)
    return presentEffects

    // console.log(presentEffects)
    // return Object.assign({}, ...effectArray
    //     .filter(e => e.count > 1)
    //     // .filter(e => e.count >= options.minimumCommonEffects)
    //     .map((s, i, a) => ({
    //         [s.name]: ({ ...Object.assign(s) })
    //         // .filter(e => e.name == s.name)
    //         // .map(e => e.ingredientName)

    //     })));

    // map(e => ({ ...e }))
}


function finalisePotion(presentEffects, customJunkName = "Junk") {
    console.log("running finalisePotion", presentEffects.length)
    var potionName = "Precursor Liquid"
    // var colour = Color("purple")


    var activeEffects = presentEffects.filter(e => e.active).slice(0, 3)
    var inactiveEffects = presentEffects.filter(e => !e.active).slice(0, 3)



    if ((activeEffects.length + inactiveEffects.length) < 1) return new Component(customJunkName,
        [], Color(randomColor({
            format: 'rgba',
            seed: customJunkName
        })), ["Smells terrible"])


    // console.log(inactiveEffects.length)
    // console.log(activeEffects.length)


    var strongestEffect = activeEffects
        .filter(e => e.active)
        .reduce((prev, current) => (prev.magnitude > current.magnitude) ? prev : current, 0);

    if (strongestEffect) potionName = strongestEffect.name + " Potion"

    if (activeEffects.length > 1) potionName = "Mixed " + potionName



    //find colours
    var colour = activeEffects
        .map(e => e.colour)
        .filter(e => e)
        .reduce((a, b) => Color(a).mix(Color(b)), 0)

    if (!colour) colour = inactiveEffects
        .map(e => e.colour)
        .filter(e => e)
        .reduce((a, b) => Color(a).mix(Color(b)), 0)



    // console.log("colour", colour)

    var properties = activeEffects.concat(inactiveEffects)
        .map(e => e.substanceProperty)
        .filter(e => e)
        .sort()
        .slice(0, 3)
        .unique()

    var newPotion = new Component(potionName,
        activeEffects.concat(inactiveEffects),
        colour,
        properties

    )
    newPotion.complexity(Math.min.apply(Math, presentEffects.map(e => e.level)))
    return newPotion
}
// ingredientFinder()



function createPotion(productionModifiers, ingredientNames, t) {
    console.log("running createPotion")

    // if (t) {
    //     console.log("potion mixing", ingredientNames)
    //     // console.log( ingredientNames.map(e => e.effectsBasic()))
    // }
    // console.log(productionModifiers)
    if (ingredientNames
        .find(e => typeof e == "string") &&
        ingredientNames
        .find(e => typeof e == "object")) return finalisePotion([], "Unstable junk")


    // console.log()
    // console.log(ingredientNames[]typeof "string")


    if (ingredientNames.every(e => typeof e == "string")) {

        // var rawIngredientNames = ingredientNames.filter(e => typeof e == 'string')
        var m = ingredientFinder(...ingredientNames)
    } else {
        var m = ingredientNames
    }

    // console.log(m)
    m = findCommonEffects(...m)
    // console.log(m)
    m = validateEffects(productionModifiers, m)
    // console.log(m)
    m = calculateEffectPotency(m)
    // console.log(m)
    return finalisePotion(m)
}


// var everything = [
//     // "Beehive Husk",
//     // "Ash Creep Cluster",
//     "Moon Sugar",
//     "Silverside",
//     // "dog food",
//     // "Charred Hawk Beak",
//     "Dyed Hawk Feathers",
//     "Tundra Cotton",
//     "Lavender",
//     "Wheat",
//     "Hagraven Claw",
//     // "Mudcrab Chitin",
//     // "Daedroth Teeth",
// ]


var explosivePotion = [
    "Beehive Husk",
    "Ash Creep Cluster",
]

var corruptionPotion = [
    "Nordic Barnacle",
    "Tinder Polypore Cap"
]



var productionEffects = [
    "Crushing",
    "Disolve in water",
    "philosophers stone"
]

console.log(data.ingredients)

// var components = [
//     createPotion(productionEffects, explosivePotion),
//     createPotion(productionEffects, corruptionPotion)
// ]


// console.log(components[0])
// console.log(ingredientFinder("Beehive Husk"))


// class potionMaster {
//     constructor(baseData, effects, substanceProperties, productionRequirements, options = {}, seed = Math.random(), ) {
//         // console.log(baseData, effects, substanceProperties, productionRequirements)
//         this.data = baseData
//         this.seed = seed
//         this.options = options
//         this.data.effects = effects
//         this.data.substanceProperties = substanceProperties
//         this.data.productionRequirements = productionRequirements
//         return this.makeDataSet()


//     }
//     makeDataSet() {
//         var generationMemory = {}


//         var conditions = {
//             a: (e) => {
//                 if ((effect.complexity >= 2) && (effect.complexity < 4)) {
//                     ingredient.effects[i].production = data.productionRequirements.slice(0, 3 + effect.complexity).randomElement()
//                 }
//             },

//             two: (e) => {
//                 if ((effect.complexity >= 2) && (effect.complexity < 4)) {
//                     ingredient.effects[i].production = data.productionRequirements.slice(0, 3 + effect.complexity).randomElement()
//                 }
//             },

//             three: (e) => {
//                 if (effect.complexity >= 3) {
//                     ingredient.effects[i].substanceProperty = data.substanceProperties.randomElement()
//                 }
//             },

//             four: (e) => {
//                 if (effect.complexity >= 4) {
//                     ingredient.effects[i].productionRequirement = data.productionRequirements.slice(2, data.productionRequirements.length).randomElement()
//                 }
//             },




//         }


//         //update ingrediants 
//         this.data.ingredients = this.data.ingredients
//             // .slice(0, 1)
//             .map(ingredient => {
//                 console.log(ingredient)

//                 ingredient.effects.map((effect, i, a) => {




//                     var newEffect = this.data.effects
//                         .find(e => e.originalName == effect.name)
//                     console.log(newEffect,"newEffectnewEffectnewEffectnewEffectnewEffectnewEffect", effect.name)
//                     ingredient.effects[i].name = newEffect.name

//                     ingredient.effects[i].level = newEffect.complexity
//                     ingredient.effects[i].colour = newEffect.colour
//                     // console.log(newEffect.name, ingredient.effects[i].magnitude)

//                     if (!generationMemory[newEffect.name]) {
//                         generationMemory[effect.name] = [ingredient.effects[i].magnitude]

//                     } else {
//                         generationMemory[newEffect.name].push(ingredient.effects[i].magnitude)
//                     }



//                 })



//                 return ingredient

//             })
//         //calculate maximum strength
//         // .map((ingredient, i, a) => ({ ...ingredient,
//         //     effects: ingredient.effects.map(e => ({ ...e,
//         //         maxMagnitude: generationMemory[e.name]
//         //             .sort((a, b) => b - a, 0)
//         //             .slice(0, options.maxComponents)
//         //             .reduce((a, b) => a + b, 0)

//         //     }))
//         // }))
//         // .map(i => new Component(i.name, i.effects))


//         return this
//     }



// }

// var t1 = new potionMaster(originalDataSet, effects, substanceProperties, productionRequirements)

// console.log(t1)
// console.log(strengthFinder(0.10))

// // console.log(createPotion([], [])._colour)
// console.log(potion1,potion2)



// var invisPotion = createPotion(productionEffects, components, true)
// console.log(createPotion(productionEffects, [invisPotion,invisPotion]))



// console.log(effectFinder("Explosive"))