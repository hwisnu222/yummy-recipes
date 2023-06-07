import React from "react";
import { Link } from "react-router-dom";

export default function Meal({ meal }) {
  return (
    <Link to={`/detail/${meal.idMeal}`} className="p-3 bg-white">
      <div className="relative mb-4">
        <p className="text-md mb-2 absolute top-0 right-0 py-1 px-4 bg-green-800 rounded-bl-lg text-white">
          {meal.strCategory}
        </p>
        <img src={meal.strMealThumb} alt="thumbnail" className="rounded-lg" />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-green-800 font-bold">{meal.strMeal}</h3>
        {meal?.strTags && (
          <div className="text-sm mt-10">
            <span>Tags:</span>
            <div className="mt-2">
              {meal.strTags.split(",").map((tag, index) => (
                <span
                  key={`tag-${index}`}
                  className="bg-green-800 text-white rounded mr-2 px-2"
                >
                  {tag}
                </span>
              ))}
              <span></span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
