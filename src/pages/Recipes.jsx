import React from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

import TextInput from "../components/inputs/TextInput";
import Header from "../components/headers/Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { GET_MEAL_BY_SEARCH } from "../services/meat";
import Meal from "../components/cards/Meal";

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
      <ResponsiveMasonry>
        <Masonry gutter={16}>
          {meals?.map((meal, index) => (
            <Meal meal={meal} key={index} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
