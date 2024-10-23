import { useEffect, useState } from "react";
import Card from "./Card/Card";
import PropTypes from 'prop-types'


const Cards = ({handleAddRecipeToQeue}) => {

const [cards, setCards] = useState([]);

useEffect(()=>{
    fetch('/Chefs.json')
    .then(res => res.json())
    .then(data => setCards(data))
}, [])

    return (
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto lg:mx-0 mb-10 md:mb-20"> 

           {
            cards.map(card => <Card key={card.recipe_id} 
                handleAddRecipeToQeue={handleAddRecipeToQeue}
                card={card}></Card>)
           }

        </div>
    );
};

Cards.propTypes = {
    handleAddToRecipeQeue: PropTypes.func.isRequired
}
export default Cards;