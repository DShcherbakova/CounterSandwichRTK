import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import '../index.css';

const Sandwich = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    function handleAddBread() {
        dispatch({ type: 'sandwich/addIngredient', payload: 'bread' });
    }

    function handleAddCheese() {
        dispatch({ type: 'sandwich/addIngredient', payload: 'cheese' });
    }

    function handleAddSalami() {
        dispatch({ type: 'sandwich/addIngredient', payload: 'salami' });
    }

    function handleAddSauce() {
        dispatch({ type: 'sandwich/addIngredient', payload: 'sauce' });
    }

    function handleDeleteIngredient() {
        dispatch({ type: 'sandwich/deleteIngredient' });
    }
    
    return (
        <div className='img-container'>
        <div className="sandwich-container">
            <h1 className="sandwich-title">Choose your sandwich:</h1>
            <p className="sandwich-ingredients">Sandwich: {ingredients}</p>
            <div className="sandwich-buttons">
                <button className="btn" onClick={handleAddBread}>Add bread</button>
                <button className="btn" onClick={handleAddSauce}>Add sauce</button>
                <button className="btn" onClick={handleAddCheese}>Add cheese</button>
                <button className="btn" onClick={handleAddSalami}>Add salami</button>
                <button className="delete-btn" onClick={handleDeleteIngredient}>Delete all ingredients</button>
            </div>
        </div>
        </div>
    );
};

export default Sandwich;
