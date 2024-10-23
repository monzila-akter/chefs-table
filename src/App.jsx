import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {
const [recipeQeue, setRecipeQeue] = useState([]);
const [preparedRecipe, setPreparedRecipe] = useState([]);
const [totalTime, setTotalTime] = useState(0);
const[totalCalories, setTotalCalories] = useState(0);

const handleTimeAndCalories = (time, calorie) => {
  setTotalTime(totalTime + time);
  setTotalCalories(totalCalories + calorie);
}

const handleRemoveRecipe = (id) => {
   const deletedRecipe = recipeQeue.find(recipe => recipe.recipe_id === id)
    
   const updatedQeue = recipeQeue.filter(recipe => recipe.recipe_id !== id)
    
   setRecipeQeue(updatedQeue);
   setPreparedRecipe([...preparedRecipe, deletedRecipe])
  }

const handleAddRecipeToQeue = (recipe) => {
  const isExist = recipeQeue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)

  if(!isExist){
    setRecipeQeue([...recipeQeue, recipe])
  }
  else{
    alert('Recipe is already exist');
  }
}


  return (
    <div className="container mx-auto px-5 md:px-0">
      {/* header */}
    <Header></Header>
      {/* banner */}
   <Banner></Banner>
      {/* our receiepes */}
      <Recipes></Recipes>
      {/* receipe cards and sidebar */}
      <section className="flex flex-col md:flex-row justify-between container mx-auto space-x-6">
        <Cards handleAddRecipeToQeue={handleAddRecipeToQeue}></Cards>
        <Sidebar
        handleRemoveRecipe={handleRemoveRecipe}
        preparedRecipe={preparedRecipe}
        handleTimeAndCalories={handleTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
        recipeQeue={recipeQeue}></Sidebar>
      </section>
    </div>
  );
};

export default App;