import PropTypes from 'prop-types';
import {  FaClock } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";

const Card = ({card, handleAddRecipeToQeue}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = card; 
    return (
        <div className='p-4 md:p-6 border-2 rounded-2xl mx-auto md:mx-0'>
            <img className='rounded-2xl w-full md:h-52 object-cover mb-6' src={recipe_image} alt="" />
            <h3 className='text-xl font-semibold mb-4'>{recipe_name}</h3>
            <p className='text-base text-[#878787] mb-4'>{short_description}</p>
            <p className='border-b-2 mb-6'></p>
            <div>
            <h4 className='text-lg font-medium mb-4'>Ingredients: {ingredients.length}</h4>
            <ul className='list-disc ml-8 text-[#878787] mb-4'>
                {
                    ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>)
                }
            </ul>
            </div>
            <p className='border-b-2 mb-6'></p>
            <div className='flex space-x-4 md:space-x-7 mb-6'>
                <div className='flex items-center gap-x-2'>
                    <p className='text-xl text-[#282828CC]'><FaClock></FaClock></p>
                    <p className='text-base text-[#282828CC]'>{preparing_time} minutes</p>
                    </div>
                <div className='flex items-center gap-x-2'>
                    <p className='text-xl text-[#282828CC]'><FaFireAlt></FaFireAlt></p>
                    <p className='text-base text-[#282828CC]'>{calories} calories</p>
                    </div>
            </div>
            <button onClick={()=>{handleAddRecipeToQeue(card)}} className='btn rounded-full text-xl font-medium text-black bg-[#0BE58A] border-none'>Want to Cook</button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddRecipeToQeue: PropTypes.func.isRequired
}

export default Card;