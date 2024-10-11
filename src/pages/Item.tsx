// src/pages/Item.tsx

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserContext.tsx';

const Item: React.FC = () => {
  const { itemId } = useParams();
  const userContext = useContext(UserContext);  // Access UserContext

  const [item, setItem] = useState<any>(null);

  // Handle cases where userContext is undefined
  if (!userContext) {
    throw new Error('UserContext must be used within a UserProvider');
  }

  const { addToFavorites } = userContext;

  useEffect(() => {
    // Fetch item details by ID from MealDB API
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`)
      .then((response) => response.json())
      .then((data) => setItem(data.meals[0]));
  }, [itemId]);

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.strMeal}</h1>
      <p>{item.strInstructions}</p>
      <img src={item.strMealThumb} alt={item.strMeal} />
      <button onClick={() => addToFavorites(item.strMeal)}>Add to Favorites</button>
    </div>
  );
};

export default Item;
