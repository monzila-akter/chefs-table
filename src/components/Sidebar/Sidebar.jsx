import PropTypes from 'prop-types';

const Sidebar = ({recipeQeue, handleRemoveRecipe, preparedRecipe, handleTimeAndCalories, totalTime, totalCalories}) => {
   
    return (
        <div className=" w-[300px] md:w-1/3 border-2 rounded-2xl py-8 mb-10 md:mb-20 h-full">
            <h2 className='text-center text-2xl font-semibold mb-4'>Want to cook: {recipeQeue.length}</h2>
            <p className='border-b-2 w-3/4 text-center mx-auto'></p>
            {/* add cook table */}
            <div className="overflow-x-auto mb-6">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        recipeQeue.map((recipe, idx) => <tr className="hover" key={idx}>
            <th>{idx+1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>
            <td ><button onClick={()=>{handleRemoveRecipe(recipe.recipe_id),
                handleTimeAndCalories(recipe.preparing_time, recipe.calories)
            }} className=' btn rounded-full bg-[#0BE58A] text-black  '>Preparing</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>

{/* currently cooking recipes */}
<h2 className='text-center text-2xl font-semibold mb-4'>Currently Cooking: {preparedRecipe.length}</h2>
            <p className='border-b-2 w-3/4 text-center mx-auto'></p>
            {/* add cook table */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        preparedRecipe.map((recipe, idx) => <tr className="hover" key={idx}>
            <th>{idx+1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>
          </tr>)
      }
      <tr className="hover" >
            <th></th>
            <td></td>
            <td>Total Time = {totalTime} minutes</td>
            <td>Total Calories = {totalCalories} calories</td>
          </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

Sidebar.propTypes = {
    recipeQeue: PropTypes.object.isRequired,
    preparedRecipe: PropTypes.object.isRequired,
    handleRemoveRecipe: PropTypes.func.isRequired
}

export default Sidebar;