import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import TextInput from "../components/inputs/TextInput";
import Header from "../components/headers/Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { GET_MEAL_BY_SEARCH } from "../services/meat";
import Meal from "../components/cards/Meal";

const category_food = [
  "Tomato",
  "Egg",
  "Cheese",
  "Butter",
  "Chicken",
  "Cookies",
  "Pudding",
  "Soup",
];

export default function Recipes() {
  const [query, setQuery] = useSearchParams();
  const querySerc = query.get("s");
  const [search, setSearch] = React.useState(querySerc);

  const { data, refetch } = useQuery(["getmeal", search], GET_MEAL_BY_SEARCH, {
    enabled: false,
  });
  const meals = data?.data.meals;

  const searchMeal = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    setQuery({ s: search });
    refetch();
  };

  const searchCategory = (category) => {
    setSearch(category);
    refetch();
  };

  React.useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="bg-gray-50">
      <Header>
        <form onSubmit={submitSearch} className="w-3/4">
          <TextInput
            value={search}
            placeholder="Search recipes"
            onChange={searchMeal}
          />
        </form>
      </Header>
      <div className="px-2 py-6">
        {category_food.map((category, index) => (
          <div
            className="inline-block bg-green-800 text-white py-2 px-4 mr-2 rounded-full cursor-pointer"
            key={`category-${index}`}
            onClick={() => searchCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <ResponsiveMasonry>
        <Masonry gutter={16}>
          {meals?.map((meal, index) => (
            <Meal meal={meal} key={index} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <footer className="p-4 text-center mt-24 text-green-800 text-sm">
        &copy; Copyright Yummy Recipes {new Date().getFullYear()}
      </footer>
    </div>
  );
}
