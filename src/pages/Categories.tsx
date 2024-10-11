// src/pages/Categories.tsx

import React, { useEffect, useState } from 'react';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Fetch categories from MealDB API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.categories.map((cat: any) => cat.strCategory)));
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <a href={`/category/${category}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
