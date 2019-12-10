var hash = require('object-hash');
var faker = require('faker');
var colour = require('./ColorGeneratorModule.js');

var data = require('./caco-ingredients.json');



// var originalDataSet = JSON.parse(data)
var originalDataSet = data;
// eslint-disable-next-line
Array.prototype.unique = function() { return [...new Set(this)] }
// eslint-disable-next-line
Array.prototype.average = function() { return this.reduce((p, c) => p + c, 0) / this.length }
// eslint-disable-next-line
String.prototype.capitalize = function() { return this.charAt(0).toUpperCase() + this.slice(1) }
// eslint-disable-next-line
Array.prototype.randomElement = function() { return this[Math.floor(random() * this.length)] }

var random = () => faker.random.number() / 100000

var generateColour = () => ({
    r: Math.floor(random() * Math.floor(255)),
    g: Math.floor(random() * Math.floor(255)),
    b: Math.floor(random() * Math.floor(255)),
    a: +random().toFixed(2)
})







var options = {
    minimumCommonEffects: 2,
    // complexityBooster: 1
    maxComponents: 4,
    ratings: ["very weak",
        "weak",
        "mid-strength",
        "potent",
        "strong",
        "very strong",
        "perfect"
    ]

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
]


var substanceProperties = [
    'Acidic',
    'Basic',
    'Damaged by acid',
    'Damaged by base',
    'Expires quickly',
    'Exothermic',
    'Thick potion',
    'Thin potion',
    'Endothermic',
    'Flamible',
    'Oxadising',
    'Chaotic/mutative',
    'Vulnrable to light or fire',
    'Removes all other positive effects',
    'Magnetic',
    'Exomagic, never stops reacting',
    'Endomagic, stops all weaker effects from working',
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
    "ferment for 1 session",
    "boil",
    "evaporating",
    "freeze",
    "requires the presence of chaos",
    "stir under a full moon",
    'Distil',
    "philosophers stone",

]

var defaults = {
    baseData: originalDataSet,
    effects: effects,
    substanceProperties: substanceProperties,
    productionRequirements: productionRequirements,
    options: options,
}



class Component {
    constructor(name, effects, colour, properties) {
        this.effects = effects.map(e => ({
            ingredientName: name,
            active: false,

            ...e
        }))
        this.name = name
        this.complexity = 1
        this.properties = properties
        this.id = hash(this)
        this.colour = colour
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

    updateComplexity(add) {
        if (add) this.complexity += add
        return this.complexity
    }
}



class PotionMaster {
    constructor(seed = Math.random(), args = defaults) {
        this.seed = seed
        faker.seed(this.seed)
        this.data = args.baseData
        this.options = args.options
        this.data.effects = args.effects
        this.data.components = []
        this.data.substanceProperties = args.substanceProperties
            .map(e => e.capitalize())
        this.data.productionRequirements = args.productionRequirements
            .map(i => i.capitalize())


        return this.makeDataSet()





    }


    components() {
        return this.data.components
    }

    productionEffects() {
        return this.data.productionRequirements
    }

    findComponent(searchQuery) {
        return this.data.components.find(c => c === searchQuery || c.id === searchQuery || c.name === searchQuery)
    }

    registerComponent(componentObject) {
        var dupe = this.findComponent(componentObject.id)
        if (dupe) {
            console.log("duplicate potion")
            return dupe
        }
        var n = this.data.components.push(componentObject)
        return this.data.components[n - 1]
    }




    findCommonEffects(...ingredientObjects) {
        console.log("running findCommonEffects", ingredientObjects.length)


        var complexity = Math.max(...ingredientObjects.map(i => i.updateComplexity()))

        var effectArray = ingredientObjects
            .map(i => i.effectsAdvanced())
            .flat()

        effectArray
            .forEach((s, i, a) => a[i].active = false)

        effectArray
            .forEach((effect, i, array) => array[i].count = array
                .filter(e => e.name === effect.name).length)


        //activate effects
        effectArray
            .filter(e => e.count >= this.options.minimumCommonEffects)
            .filter(e => e.complexity <= complexity)
            .forEach((s, i, a) => a[i].active = true)

        return effectArray
    }

    validateEffects(productionModifiers = [], effectArray) {
        console.log("running validateEffects",
            "productionModifiers",
            productionModifiers.length,
            "effectArray",
            effectArray.length)
        // console.log(effectArray)
        var conditions = {
            hasNoProductionRequirements: (e) => !e.production,
            includesProduction: (e) => productionModifiers
                .map(e => e.toLowerCase())
                .includes(e.production),
            usingPhilosophersStone: (e) => productionModifiers
                .map(e => e.toLowerCase())
                .includes("philosophers stone"),

        }
        // console.log(effectArray)

        console.log("effectArray", effectArray)

        //vlidate prodction
        // remove junk
        //keep high level
        return effectArray
            //filter production mods
            .filter((e, i, a) => Object.keys(conditions).some(b => conditions[b](e)))
            // console.log(t)
            .filter(e => e.active || e.complexity >= 3)
    }

    strengthFinder(percent) {
        // console.log("LMAO", this.options.ratings[Math.round(percent * this.options.ratings.length) - 1], Math.round(percent * this.options.ratings.length) - 1)
        var index = Math.round(percent * this.options.ratings.length) - 1
        if (index < 0) index = 0
        return this.options.ratings[index].capitalize()
    }


    calculateEffectPotency(effectArray) {
        console.log("running calculateEffectPotency", effectArray.length)

        effectArray.forEach((item) => {
            delete item.ingredientName
        })


        var presentEffects = [...new Set(effectArray.map(e => e.name))]
        console.log("presentEffect1s", presentEffects)

        presentEffects = presentEffects.map(effect => {
                var thisEffectCollection = effectArray
                    .filter(e => e.name === effect)
                return Object.assign({}, ...thisEffectCollection, {
                    magnitude: thisEffectCollection
                        .map(e => e.magnitude)
                        //this is voodoo
                        .reduce((a, b) => a + b, 0)
                })
            })
            .map(e => ({ ...e, strength: this.strengthFinder(e.magnitude / e.maxMagnitude) }))

        console.log("presentEffect2s", presentEffects)

        //trim potion to remove excess effects
        // if (presentEffects.length > 4) presentEffects = presentEffects.slice(0, 4)
        return presentEffects
    }

    finalisePotion(presentEffects, customJunkName = "Junk") {
        console.log("running finalisePotion", presentEffects.length)
        var potionName = "Precursor Liquid"
        // var colour = Color("purple")


        var activeEffects = presentEffects.filter(e => e.active).slice(0, 3)
        var inactiveEffects = presentEffects.filter(e => !e.active).slice(0, 3)

        console.log("presentEffects", presentEffects)

        if ((activeEffects.length + inactiveEffects.length) < 1) return new Component(customJunkName,
            [], generateColour(), ["Smells terrible"])


        // console.log(inactiveEffects.length)
        // console.log(activeEffects.length)


        var strongestEffect = activeEffects
            .filter(e => e.active)
            .reduce((prev, current) => (prev.magnitude > current.magnitude) ? prev : current, 0);

        if (strongestEffect) potionName = strongestEffect.name + " Potion"

        if (activeEffects.length > 1) potionName = "Mixed " + potionName

        //find colours
        //awaiting colour mixing function
        var colour = [4, 3, 2, 1]
        // activeEffects
        //     .map(e => e.colour)
        //     .filter(e => e)
        // .reduce((a, b) => Color(a).mix(Color(b)), 0)

        // if (!colour) colour = inactiveEffects
        //     .map(e => e.colour)
        //     .filter(e => e)
        //     .reduce((a, b) => Color(a).mix(Color(b)), 0)




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
        newPotion.updateComplexity(Math.min.apply(Math, presentEffects.map(e => e.complexity)))
        return newPotion

    }

    createPotion(productionModifiers, ingredientNames) {

        var m = ingredientNames.map(i => this.findComponent(i))
        m = this.findCommonEffects(...m)
        m = this.validateEffects(productionModifiers, m)
        m = this.calculateEffectPotency(m)
        m = this.finalisePotion(m)
        return this.registerComponent(m)


    }


    makeDataSet() {
        console.log("makeDataSet")
        var generationMemory = {}
        var conditions = {
            addProductionRequirements: (effect) => {
                if ((effect.complexity > 2) && (effect.complexity < 4)) {
                    effect.production = this.data.productionRequirements.slice(0, 3 + effect.complexity).randomElement()
                }

                if (effect.complexity >= 4) {
                    effect.production = this.data.productionRequirements.slice(2, this.data.productionRequirements.length).randomElement()
                }

                return effect
            },

            addSubstanceProperties: (effect) => {

                if (effect.complexity < 3 && effect.complexity > 1) {
                    effect.substanceProperty = this.data.substanceProperties
                        .slice(0, 5).randomElement()
                }
                if (effect.complexity >= 3) {
                    effect.substanceProperty = this.data.substanceProperties.randomElement()
                }
                return effect
            },

            addColour: (effect) => ({ ...effect, colour: generateColour() })

        }
        //update ingrediants 
        this.data.ingredients
            // .slice(0, 10)
            .map(ingredient => {
                // console.log(ingredient)

                ingredient.effects = ingredient.effects.map((effect, i, a) => {

                    //merge objects
                    effect = {
                        ...effect,
                        ...this.data.effects.find(e => e.originalName === effect.name),

                        //add colours

                    }

                    //apply condions
                    Object.keys(conditions).forEach(c => effect = conditions[c](effect))

                    generationMemory[effect.name] = (generationMemory[effect.name] ? [...generationMemory[effect.name], effect.magnitude] : [effect.magnitude])
                    // console.log(effect)
                    return effect

                })
                return ingredient

            })
            //calculate maximum strength
            .map((ingredient, i, a) => ({ ...ingredient,
                effects: ingredient.effects.map(e => ({ ...e,
                    maxMagnitude: generationMemory[e.name]
                        .sort((a, b) => b - a, 0)
                        .slice(0, this.options.maxComponents)
                        .reduce((a, b) => a + b, 0)

                }))
            }))
            .map(i => this.registerComponent(new Component(i.name, i.effects)))
        delete this.data.ingredients
        console.log("makeDataSet complete", this.data.components.length)
        return this
    }

}



function tests(seed = 1) {
    var pm = new PotionMaster()





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


    var components = [
        pm.createPotion(productionEffects, explosivePotion),
        pm.createPotion(productionEffects, corruptionPotion)
    ]

    console.log(components[0], components[1])

    // console.log(pm.data.components.reverse().slice(0,3))

    var invis = pm.createPotion(productionEffects, components)

    return pm.createPotion(productionEffects, [invis, invis])
}



// export default PotionMaster
module.exports = { PotionMaster: PotionMaster }
//