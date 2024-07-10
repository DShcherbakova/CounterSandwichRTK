type Ingredient = 'bread' | 'cheese' | 'salami' | 'sauce';

type Action =
| { type: 'sandwich/addIngredient', payload: Ingredient }
| { type: 'sandwich/deleteIngredient' }

export default Action;