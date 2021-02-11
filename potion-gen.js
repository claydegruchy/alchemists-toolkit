var hash = require("object-hash");
var faker = require("faker");
var colourMod = require("./ColorGeneratorModule.js");

var og = require("./ingredients.json");
var originalDataSet = 
{
    ingredients: JSON.parse(JSON.stringify(og))
}
var effects = require("./effects.json")

// var originalDataSet = JSON.parse(data)
// eslint-disable-next-line
Array.prototype.unique = function() {
    return [...new Set(this)];
};
// eslint-disable-next-line
Array.prototype.average = function() {
    return this.reduce((p, c) => p + c, 0) / this.length;
};
// eslint-disable-next-line
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
// eslint-disable-next-line
Array.prototype.randomElement = function() {
    return this[Math.floor(random() * this.length)];
};

var random = () => faker.random.number() / 100000;

var generateColour = () => ({
    r: Math.floor(random() * Math.floor(255)),
    g: Math.floor(random() * Math.floor(255)),
    b: Math.floor(random() * Math.floor(255)),
    a: +random().toFixed(2)
});

var mixColour = (a, b) => {
    if (!a || !b) return a || b;
    return {
        r: (a.r + b.r) / 2,
        g: (a.g + b.g) / 2,
        b: (a.b + b.b) / 2,
        a: (a.a + b.a) / 2
    }
};


var logColour = (colour, message = "{}{}{Colour message}{}{}") => console.log(`%c ${message} `, `background: ${colourMod.rgbToHex(colour)}; color: #fff`);

var options = {
    minimumCommonEffects: 2,
    maxProductionEffects: 3,
    maxComponents: 4,
    ratings: [
        "very weak",
        "weak",
        "mid-strength",
        "potent",
        "strong",
        "very strong",
        "perfect"
    ],
    precursorColour: {
        r: 154,
        g: 18,
        b: 179,
        a: 1
    }
};

//full effect list is too big to keep here


var physicalProperties = [
    "Thin potion, floats on water",
    "Thick potion, sinks in water",
    "Gooey, extremely thick jelly",
    "Solid, light and brittle",
    "Solid, hard and chalky",
]

var substanceProperties = [
    // "Acidic",
    // "Basic",
    // "Damaged by acid",
    // "Damaged by base",
    "Expires quickly",
    // "Exothermic",
    "Glows",
    "Iridescent",
    // "Endothermic",
    "Flamible",
    "Oxadising",
    "Chaotic/mutative",
    "Vulnrable to light or fire",
    "Removes all other positive effects",
    "Magnetic",
    "Exomagic, never stops reacting",
    "Endomagic, stops all weaker effects from working"
];

var productionRequirements = [
    "Disolve in water",
    "crunsh",
    "grind",
    "heat",
    "chill",
    "Shake in a silver vessel",
    "stew for 3 nights",
    "disolve in acid",
    "ferment for 1 session",
    "boil",
    "freeze",
    "requires the presence of chaos",
    "stir under a full moon",
    "Distil",
    "philosophers stone"
];

var defaults = {
    baseData: originalDataSet,
    effects: effects,
    substanceProperties: substanceProperties,
    productionRequirements: productionRequirements,
    options: options,
    componentProperties: {
        name: "No potion name",
        effects: [],
        colour: null,
        properties: "No properties",
        type: "basic",
        description: "No description",
        ingredients: []
    }
};

class Component {

    constructor(prop = defaults.componentProperties) {
        //assign defaults
        Object.entries(defaults.componentProperties).map(p => {

            if (!prop[p[0]]) {
                console.log("prop", p[0], "missing")
                console.log(prop)
                prop[p[0]] = defaults.componentProperties[p[0]]
            }
        })

        this.effects = prop.effects.map(e => ({
            ingredientName: prop.name,
            active: false,
            ...e
        }));

        this.description = prop.description
        this.name = prop.name;
        this.complexity = 1;
        this.properties = prop.properties;
        this.type = prop.type;
        this.id = hash(this);
        this.colour = prop.colour;
        this.ingredients = prop.ingredients;

        console.log("this.ingredients", this.ingredients)
        // this.complexity
    }
    effectsAdvanced() {
        return this.effects;
        // .map(e => )
    }
    effectsBasic() {
        return this.effects.map(e => e.name);
        // .map(e => ({ active: false, ...e }))
    }

    updateComplexity(add) {
        if (add) this.complexity += add;
        return this.complexity;
    }
}

class PotionMaster {
    constructor(seed = Math.random(), args = defaults) {
        this.seed = seed;
        this.dataHash = null
        faker.seed(this.seed);
        this.data = args.baseData;
        this.options = args.options;
        this.data.effects = args.effects;
        this.data.components = [];
        this.data.substanceProperties = args.substanceProperties.map(e =>
            e.capitalize()
        );
        this.data.productionRequirements = args.productionRequirements.map(i =>
            i.capitalize()
        );

        return this.makeDataSet();
    }


    memory(input) {

        // eyJkYXRhSGFzaCI6ImYyZmI0NTAxNGU5ZmM0MjQ4NWY2ZmRjNzBhMDU0OTBhMjI4YzRiYzgiLCJzZWVkIjoxLCJwb3Rpb25zIjpbXX0=

        var newDataState = input && JSON.parse(atob(input))

        if (newDataState) {
            console.log("starting data import")
            console.log("dataHash", newDataState.dataHash, "current dataHash", this.dataHash)
            console.log("seed", newDataState.seed, "current seed", this.seed)

            if (newDataState.dataHash != this.dataHash) {
                throw "mismatch in data set, perhaps you used different options/effects/components?"
            }
            if (newDataState.seed != this.seed) {
                throw "you are using a different seed than the export, cannot import"
            }

            newDataState.potions.forEach(p => {
                // registerComponent
                // console.log(p.colour)




                var newPotion = new Component({
                    name: p.name,
                    effects: p.effects,
                    colour: p.colour,
                    properties: p.properties,
                    type: p.type,
                })

                newPotion.image = p.image
                newPotion.complexity = p.complexity
                // console.log(JSON.stringify(newPotion, null, 2))
                // console.log(JSON.stringify(p, null, 2))
                this.registerComponent(newPotion)
            })

            return 'success'
        }


        var dataState = {
            dataHash: this.dataHash,
            seed: this.seed,
            potions: this.data.components
                .filter(c => c.type != 'basic')
                .map(c => ({ ...c, image: null }))
        }

        return btoa(JSON.stringify(dataState))

    }

    components() {
        return this.data.components;
    }

    types() {
        return this.components().reduce((result, current) => {
            if (!result[current.type]) result[current.type] = [];
            result[current.type].push(current);
            return result;
        }, {});
    }

    productionEffects() {
        return this.data.productionRequirements;
    }

    effects() {
        return this.data.effects;
    }

    findComponent(searchQuery) {
        return this.data.components.find(
            c =>
            c === searchQuery ||
            c.id === searchQuery ||
            c.name === searchQuery
        );
    }

    registerComponent(componentObject) {
        var dupe = this.findComponent(componentObject.id);
        if (dupe) {
            // console.log("duplicate potion");
            return dupe;
        }
        var n = this.data.components.push(componentObject);
        return this.data.components[n - 1];
    }

    findCommonEffects(...ingredientObjects) {
        console.log("running findCommonEffects", ingredientObjects.length);

        var complexity = Math.max(
            ...ingredientObjects.map(i => i.updateComplexity())
        );

        console.log("potion complexity", complexity)
        var effectArray = ingredientObjects
            .map(i => i.effectsAdvanced())
            .flat();

        effectArray.forEach((s, i, a) => (a[i].active = false));

        effectArray.forEach(
            (effect, i, array) =>
            (array[i].count = array.filter(
                e => e.name === effect.name
            ).length)
        );
        console.log("effectArray", effectArray)
        //activate effects
        effectArray
            .filter(e => e.count >= this.options.minimumCommonEffects)
            .filter(e => e.complexity <= complexity)
            .forEach((s, i, a) => (a[i].active = true));

        return effectArray;
    }

    validateEffects(productionModifiers = [], effectArray) {

        console.log(
            "running validateEffects",
            "productionModifiers",
            productionModifiers,
            "effectArray",
            effectArray.length
        );
        // console.log(effectArray)
        var conditions = {
            hasNoProductionRequirements: e =>
                !e.production,
            includesProduction: e =>
                productionModifiers
                .map(e => e.toLowerCase())
                .includes(e.production.toLowerCase()),
            usingPhilosophersStone: e =>
                productionModifiers
                .map(e => e.toLowerCase())
                .includes("philosophers stone")
        };
        // console.log(effectArray)

        console.log("effectArray", effectArray.map(ew => [ew.name, ew.production]));

        //vlidate prodction
        // remove junk
        //keep high level
        return effectArray
            //filter production mods
            // .map(e => { console.log("remaing effect", e); return e })
            .filter((e, i, a) =>
                Object.keys(conditions).some(b => conditions[b](e))
            )
            // .map(e => {
            //     console.log("remaing effect", e)
            //     return e
            // })
            // console.log(t)
            .filter(e => e.active || e.complexity >= 3)


    }

    strengthFinder(percent) {
        console.log("percent", percent)
        // console.log("LMAO", this.options.ratings[Math.round(percent * this.options.ratings.length) - 1], Math.round(percent * this.options.ratings.length) - 1)
        var index = Math.round(percent * this.options.ratings.length) - 1;
        if (index < 0) index = 0;
        return this.options.ratings[index].capitalize();
    }

    calculateEffectPotency(effectArray) {
        console.log("running calculateEffectPotency", effectArray.length);

        effectArray.forEach(item => {
            delete item.ingredientName;
        });

        var presentEffects = [...new Set(effectArray.map(e => e.name))];
        presentEffects = presentEffects
            .map(effect => {
                var thisEffectCollection = effectArray.filter(
                    e => e.name === effect
                );

                console.log(effect)
                return Object.assign({}, ...thisEffectCollection, {
                    magnitude: thisEffectCollection
                        .map(e => e.magnitude)
                        //this is voodoo
                        .reduce((a, b) => a + b, 0)
                });
            })
            .map(e => {
                console.log(e.magnitude)
                return e
            })
            .map(e => ({
                ...e,
                strength: this.strengthFinder(e.magnitude / e.maxMagnitude, e)
            }));

        // console.log("presentEffect2s", presentEffects);

        //trim potion to remove excess effects
        // if (presentEffects.length > 4) presentEffects = presentEffects.slice(0, 4)
        return presentEffects;
    }

    finalisePotion(presentEffects, ingredients, customJunkName = "Junk") {
        console.log("running finalisePotion", presentEffects.length);
        var potionName = "Precursor Liquid";
        var colour = this.options.precursorColour;

        var activeEffects = presentEffects.filter(e => e.active).slice(0, 3);
        var inactiveEffects = presentEffects.filter(e => !e.active).slice(0, 3);

        // console.log("presentEffects", presentEffects);

        if (activeEffects.length + inactiveEffects.length < 1)
            return new Component({
                name: customJunkName,
                colour: generateColour(),
                properties: ["Smells terrible"],
                type: "potion",
                description: "Does not look very appealing",
                ingredients: ingredients.map(e => e.name),
            })

        var strongestEffect = activeEffects
            .filter(e => e.active)
            .reduce(
                (prev, current) =>
                prev.magnitude > current.magnitude ? prev : current,
                0
            );

        if (strongestEffect) potionName = strongestEffect.name + " Potion";

        if (activeEffects.length > 1) potionName = "Mixed " + potionName;

        //find colours
        //awaiting colour mixing function

        // console.log(
        //     "fuck",
        //     activeEffects.map(e => e.colour)
        // );



        var colour = activeEffects
            .map(e => e.colour)
            .filter(e => e)
            .reduce(
                (result, current) =>
                colourMod.colorMixerForTwoObjects(result, current),
                // mixColour(result, current),
                0
            );


        if (!colour)
            colour = inactiveEffects
            .map(e => e.colour)
            .filter(e => e)
            .reduce(
                (result, current) =>
                colourMod.colorMixerForTwoObjects(result, current),
                // mixColour(result, current),
                0
            );

        var properties = activeEffects
            .concat(inactiveEffects)
            .map(e => e.substanceProperty)
            .filter(e => e)
            .sort()
            .slice(0, 3)
            .unique();



        var newPotion = new Component({
            name: potionName,
            effects: activeEffects.concat(inactiveEffects),
            colour: colour,
            properties: properties,
            type: "potion",
            ingredients: ingredients.map(e => e.name),
        })

        newPotion.updateComplexity(
            Math.min.apply(
                Math,
                presentEffects.map(e => e.complexity)
            )
        );
        return newPotion;
    }

    createPotion(productionModifiers, ingredientNames) {
        var ingredients = ingredientNames.map(i => this.findComponent(i));
        var m = this.findCommonEffects(...ingredients);
        m = this.validateEffects(productionModifiers, m);
        m = this.calculateEffectPotency(m);
        m = this.finalisePotion(m, ingredients);
        return this.registerComponent(m);
    }

    findIngredientsWithEffect(effect) {
        return this.components().filter(component => component.effects.find(e => e.name === effect))
    }

    makeDataSet() {
        // console.log("makeDataSet");
        var generationMemory = {};
        var conditions = {
            addProductionRequirements: effect => {
                if (effect.complexity > 2 && effect.complexity < 4) {
                    effect.production = this.data.productionRequirements
                        .slice(0, 3 + effect.complexity)
                        .randomElement();
                }

                if (effect.complexity >= 4) {
                    effect.production = this.data.productionRequirements
                        .slice(2, this.data.productionRequirements.length)
                        .randomElement();
                }
                return effect;
            },

            addSubstanceProperties: effect => {
                if (effect.complexity < 3 && effect.complexity > 1) {
                    effect.substanceProperty = this.data.substanceProperties
                        .slice(0, 5)
                        .randomElement();
                }
                if (effect.complexity >= 3) {
                    effect.substanceProperty = this.data.substanceProperties.randomElement();
                }
                return effect;
            },

            addColour: effect => ({ ...effect, colour: generateColour() })
        };
        //update ingrediants
        this.data.ingredients
            // .slice(0, 10)
            .map(ingredient => {
                // console.log(ingredient)
                ingredient.effects = ingredient.effects.map((effect, i, a) => {
                    //merge objects
                    effect = {
                        ...effect,
                        ...this.data.effects.find(
                            e => e.originalName === effect.name
                        )

                        //add colours
                    };

                    //apply condions
                    Object.keys(conditions).forEach(
                        c => (effect = conditions[c](effect))
                    );

                    generationMemory[effect.name] = generationMemory[
                        effect.name
                    ] ? [...generationMemory[effect.name], effect.magnitude] : [effect.magnitude];
                    return effect;
                });

                return ingredient;
            })
            //calculate maximum strength
            .map((ingredient, i, a) => ({
                ...ingredient,
                effects: ingredient.effects.map(e => ({
                    ...e,
                    maxMagnitude: generationMemory[e.name]
                        .sort((a, b) => b - a, 0)
                        .slice(0, this.options.maxComponents)
                        .reduce((a, b) => a + b, 0)
                }))
            }))

            .map(i => this.registerComponent(new Component({
                name: i.name,
                effects: i.effects,
                description: i.description
            })));
        delete this.data.ingredients;
        this.dataHash = hash(this.data)
        // console.log("makeDataSet complete", this.data.components.length);
        return this;
    }
}

function tests(seed = 1) {
    var pm = new PotionMaster(seed);


    var explosivePotion = pm.createPotion(["philosophers stone"], ["Beehive Husk", "Ash Creep Cluster"])
    var corruptionPotion = pm.createPotion(["philosophers stone"], ["Nordic Barnacle", "Tinder Polypore Cap"])
    // var waterwalkingPotion = pm.createPotion(['Chill', ],["Slaughterfish Scales", "Kwama Cuttle", "Bee"])

    var pot = pm.createPotion(["philosophers stone"], [corruptionPotion, explosivePotion])

    console.log(pot)



    // var x = pm.findComponent("Slaughterfish Scales")
    // var x = pm.components()
    // x.map(e => e.effects.length)
    // console.log(x)

    // ### section for figuring out if there are effects that are unrepresented in the list
    // var ef = []

    // pm.data.components
    //     .map(i => {

    //         i.effects.forEach(e => {
    //             // if (!ef[e.name]) ef[e.name] = 0
    //             var dis = ef.find(qe => qe.name == e.name)
    //             if (dis) {
    //                 dis.count += 1
    //             } else {
    //                 ef.push({
    //                     // ...e,
    //                     name: e.name,
    //                     count: 1,
    //                     complexity: e.complexity
    //                     // magnitude: e.magnitude
    //                 })
    //             }
    //             // ef[e.name] += 1
    //         })
    //     })



    // // ### section for calculating just how much of each effect there needs to be for it to be even brewable
    // var we = ef
    // var rw = we
    //     .map(e => ({ ...e, diff: e.complexity * 1.5 - e.count, desiredTotal: e.complexity * 1.5 }))
    //     // .filter(e => e.diff > 3)
    //     .sort((a, b) => parseFloat(a.diff) - parseFloat(b.diff))
    //     // .sort((a, b) => parseFloat(b.diff) - parseFloat(a.diff))
    // var t = 0
    // var update = []

    // rw.forEach(e => {
    //     console.log(e.diff, )
    //     Array.from(new Array(Math.ceil(e.diff)))
    //         .forEach(() => update.push(e.originalName + " - "+ e.name))
    // })

    // console.log(t)
    // console.log(rw)
    // console.log(update)



    // var productionEffects = productionRequirements.filter(e=>!e == "philosophers stone")
    // var components = [
    //     pm.createPotion(productionEffects, explosivePotion),
    //     pm.createPotion(productionEffects, corruptionPotion)
    // ];

    // console.log("components[0]", components[0] )


    //     console.log("components[1]", components[1])

    // // console.log(pm.data.components.reverse().slice(0,3))

    // var invis = pm.createPotion(productionEffects, components);

    // return pm.createPotion(productionEffects, [invis, invis]);
}

// tests()
// console.log(x)


// var effectTemplate = {
//     "name": "Exploit Weakness",
//     "magnitude": 0.1
// }

// effectTemplate = [effectTemplate, effectTemplate, effectTemplate, effectTemplate, ]

// var newIng = [
//     "dirt",
//     "iron",
//     "gold",
//     "silver",
//     "copper",
//     "mercury",
//     "coal",
//     "wood",
// ].map(e => e.charAt(0).toUpperCase() + e.slice(1))

// newIng.forEach(e => {
//     var o = {
//         "name": e,
//         "description": "clay",
//         "effects": effectTemplate
//     }

//     og.ingredients.push(o)
//     // console.log(o)

// })

// require('fs').writeFileSync("caco-ingredients2.json", JSON.stringify(og, null, 2))



// var x = require('fs').readFileSync("mid.json")
// var x = require('fs').readFileSync("rename-ingredients.json")
// x = JSON.parse(x)

// console.log(og.ingredients.length)
// console.log(x.length)





// og.ingredients = og.ingredients.map((ing, i) => {


//         return { ...ing, ...x[i] }
//         // if (i > x.length - 1) {
//         //     x.push({
//         //         "name": og.ingredients[i].name,
//         //         "description": og.ingredients[i].description,
//         //         "originalName": og.ingredients[i].name,

//         //     }, )
//         // } else {
//         //     x[i].originalName = og.ingredients[i].name

//         // }
//         // return ing
//     })
//     // .filter(e => e.name != e.originalName)
// // console.log(og.ingredients)
// x = og.ingredients

// require('fs').writeFileSync("ingredients.json", JSON.stringify(x, null, 2))

// console.log(x.slice(Math.max(x.length - 10, 1))[0])
// og = x.sort(function(a, b) {
//     if (a.name < b.name) { return -1; }
//     if (a.name > b.name) { return 1; }
//     return 0;
// })
// console.log(x)
// require('fs').writeFileSync("rename-ingredients.json", JSON.stringify(x, null, 2))



// var t1 = generateColour();

// var t2 = generateColour()
// console.log("rgbToHexrgbToHexrgbToHexrgbToHex", )

// console.log("MIX1",t1, mixColour(t1,t1))

// console.log("MIX2",t1, colourMod.colorMixerForTwoObjects(t1, t1))

// export default PotionMaster
module.exports = { PotionMaster: PotionMaster, logColour: logColour };
//