import { describe, it, expect, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import React from "react";

import Detail from "../src/pages/Detail";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { API_BASE } from "../src/config/api";

const client = new QueryClient();

describe("Detail page", () => {
  it("Render detail and fetch data", async () => {
    const mockData = {
      meals: [
        {
          idMeal: "52955",
          strMeal: "Egg Drop Soup",
          strDrinkAlternate: null,
          strCategory: "Vegetarian",
          strArea: "Chinese",
          strInstructions:
            "In a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, white pepper, sesame seed oil.\r\nWhen the chicken broth is boiling add the vegetables to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds\r\nServe the soup in a bowl and add the green onions on top.",
          strMealThumb:
            "https://www.themealdb.com/images/media/meals/1529446137.jpg",
          strTags: "Soup,Baking,Calorific",
          strYoutube: "https://www.youtube.com/watch?v=9XpzHm9QpZg",
          strIngredient1: "Chicken Stock",
          strIngredient2: "Salt",
          strIngredient3: "Sugar",
          strIngredient4: "Pepper",
          strIngredient5: "Sesame Seed Oil",
          strIngredient6: "Peas",
          strIngredient7: "Mushrooms",
          strIngredient8: "Cornstarch",
          strIngredient9: "Water",
          strIngredient10: "Spring Onions",
          strIngredient11: "",
          strIngredient12: "",
          strIngredient13: "",
          strIngredient14: "",
          strIngredient15: "",
          strIngredient16: "",
          strIngredient17: "",
          strIngredient18: "",
          strIngredient19: "",
          strIngredient20: "",
          strMeasure1: "3 cups ",
          strMeasure2: "1/4 tsp",
          strMeasure3: "1/4 tsp",
          strMeasure4: "pinch",
          strMeasure5: "1 tsp ",
          strMeasure6: "1/3 cup",
          strMeasure7: "1/3 cup",
          strMeasure8: "1 tbs",
          strMeasure9: "2 tbs",
          strMeasure10: "1/4 cup",
          strMeasure11: "",
          strMeasure12: "",
          strMeasure13: "",
          strMeasure14: "",
          strMeasure15: "",
          strMeasure16: "",
          strMeasure17: "",
          strMeasure18: "",
          strMeasure19: "",
          strMeasure20: "",
          strSource: "https://sueandgambo.com/pages/egg-drop-soup",
          strImageSource: null,
          strCreativeCommonsConfirmed: null,
          dateModified: null,
        },
      ],
    };

    vi.spyOn(API_BASE, "get").mockImplementation(() => {
      return Promise.resolve({ data: mockData });
    });

    await act(async () => {
      render(
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <Detail />
          </BrowserRouter>
        </QueryClientProvider>
      );
    });

    // getData().then((data) => {
    //   console.log(data);
    // });

    const title = screen.getAllByText(/Egg Drop Soup/i);

    expect(title[0]).toBeInTheDocument();

    API_BASE.get.mockRestore();
  });
});
