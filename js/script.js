const ingredients_i = ["Pâtes", "Oeuf", "Sel", "Poivre", "Lardon", "Oignon", "Parmesan"]

console.log("Il y a "+ ingredients_i.length + " ingrédients dans la recette")

let ingredientsString1 = "Il faut: "
ingredients_i.forEach(ingredient => {
    ingredientsString1 += `${ingredient} `
});
ingredientsString1 += "pour faire une carbonara."
console.log(ingredientsString1)

let ingredientsString2 = "Ingrédients de la carbonara:\n"
for (let i=0; i<ingredients_i.length; i++){
    ingredientsString2 += `${i+1}. ${ingredients_i[i]}\n`
}
console.log(ingredientsString2)

let alph_ingredients = ingredients_i
alph_ingredients.sort((a,b) => a.localeCompare(b))
console.log(alph_ingredients)