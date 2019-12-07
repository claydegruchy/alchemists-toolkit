console.log("loaded ui")


var ingredientSelectorTemplate = `

haha {{doesWhat}}
`


var template = Handlebars.compile(ingredientSelectorTemplate);

document.getElementById('root').innerHTML = template({ doesWhat: "rocks!" })

console.log(data)

console.log("completed ui")