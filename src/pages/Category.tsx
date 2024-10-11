// src/pages/Category.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Category: React.FC = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Fetch category items from MealDB API
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => response.json())
      .then((data) => setItems(data.meals));
  }, [categoryName]);

  return (
    <div>
      <h1>{categoryName}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.idMeal}>
            <a href={`/item/${item.idMeal}`}>{item.strMeal}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
