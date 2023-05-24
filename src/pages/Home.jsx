import React from "react";
import { useNavigate } from "react-router-dom";

import TextInput from "../components/inputs/TextInput";

export default function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState("");

  const onSubmit = () => {
    navigate(`/recipes?s=${search}`);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="grid place-content-center place-items-center h-screen p-10">
      <h3 className="text-5xl mb-4 text-green-800 text-center font-extrabold tracking-wider">
        Yummy Recipes
      </h3>
      <p className="text-center mb-8 text-green-800">
        Introducing Delicious Recipes: Your Ultimate Culinary Companion!
      </p>
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col justify-center items-center"
      >
        <TextInput
          placeholder="Search recipes"
          onChange={onChange}
          className="w-full"
        />
      </form>
    </div>
  );
}
