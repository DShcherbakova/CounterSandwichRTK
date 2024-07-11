import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reduxRTK/storeRTK';
import '../index.css';
import { addIngredient, deleteIngredient } from '../reduxRTK/sandwichSlice';

const Sandwich = () => {
    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    function handleAddBread() {
        dispatch(addIngredient('bread'));
    }

    function handleAddCheese() {
        dispatch(addIngredient('cheese'));
    }

    function handleAddSalami() {
        dispatch(addIngredient('salami'));
    }

    function handleAddSauce() {
        dispatch(addIngredient('sauce'));
    }

    function handleDeleteIngredient() {
        dispatch(deleteIngredient());
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
