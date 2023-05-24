import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Header from "../components/headers/Header";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GET_MEAL_BY_SEARCH, GET_MEAL_DETAIL } from "../services/meat";

import Meal from "../components/cards/Meal";
import Paragraph from "../components/Typography/Paragraph";

export default function Detail() {
  const { id } = useParams();
  console.log(id);

  const { data } = useQuery(["detail", id], GET_MEAL_DETAIL);
  const meal = data?.data.meals[0];
  const { data: dataRec } = useQuery(["getmeal", ""], GET_MEAL_BY_SEARCH);
  const meals = dataRec?.data.meals;

  const instructionMeal = () => {
    return meal?.strInstructions.replaceAll(
      /\n/g,
      "<br/> <p style='margin-bottom:0.5em'></p>"
    );
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h3 className="font-bold text-2xl mb-2 text-green-800">
          {meal?.strMeal}
        </h3>
        <img
          src={meal?.strMealThumb}
          alt="thumbnail-detail"
          className="my-10 mx-auto block h-1/6 object-cover rounded-md hover:scale-110 duration-300"
        />
        <table className="mb-4 text-green-800 w-full md:w-1/2">
          <thead className="bg-green-800 text-white p-2">
            <tr>
              <th className="text-left p-2">Ingredients</th>
              <th className="text-left p-2">Measure</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }).map(
              (item, index) =>
                meal?.[`strIngredient${index + 1}`] && (
                  <tr key={`ing-{item}`}>
                    <td className="w-1/4 py-1 px-2">
                      {meal?.[`strIngredient${index + 1}`]}
                    </td>
                    <td className="w-1/4 py-1 px-2">
                      {meal?.[`strMeasure${index + 1}`]}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
        <Paragraph
          dangerouslySetInnerHTML={{ __html: instructionMeal() }}
        ></Paragraph>
        <h3 className="my-10 font-bold text-2xl text-green-800">
          Recomendations
        </h3>
        <ResponsiveMasonry>
          <Masonry gutter={16}>
            {meals?.slice(0, 6).map((meal, index) => (
              <Meal meal={meal} key={index} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
