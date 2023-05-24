import React from "react";
import Header from "../components/headers/Header";
import Paragraph from "../components/Typography/Paragraph";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <h3 className="font-bold text-2xl mb-2 text-green-800">About</h3>
        <Paragraph>
          Welcome to Yummy Recipe! Discover a world of delicious recipes at your
          fingertips. Yummy Recipe is your go-to website for finding a wide
          variety of mouthwatering recipes to satisfy your cravings. Whether
          you're a seasoned chef or a cooking enthusiast, our platform has
          something for everyone.
        </Paragraph>

        <Paragraph>
          At Yummy Recipe, we understand that finding the perfect recipe can
          sometimes be a challenge. That's why we've curated a collection of
          delectable dishes from around the globe, all in one convenient place.
          From classic favorites to innovative creations, our extensive recipe
          database will inspire you to create culinary masterpieces in your own
          kitchen.
        </Paragraph>

        <Paragraph>
          What sets Yummy Recipe apart is our commitment to quality. We source
          our recipes from the trusted API provided by The Meal DB. With their
          vast collection of recipes, we ensure that you have access to accurate
          and reliable information. Every recipe is carefully selected, tested,
          and presented with clear instructions and vibrant images, making it
          easy for you to follow along and achieve exceptional results.
        </Paragraph>
        <Paragraph>
          Whether you're looking for a quick weeknight dinner, a show-stopping
          dessert, or something in between, Yummy Recipe has you covered. Our
          user-friendly interface allows you to search for recipes based on
          specific ingredients, dietary preferences, or cuisine types, ensuring
          that you find exactly what you're looking for.
        </Paragraph>
        <Paragraph>
          Join our vibrant community of food enthusiasts and share your own
          culinary creations. You can rate and review recipes, save your
          favorites for later, and even submit your own recipes to inspire
          others.
        </Paragraph>
        <Paragraph>
          Start your culinary adventure with Yummy Recipe today. Explore, cook,
          and indulge in the flavors of the world. Let Yummy Recipe be your
          guide to creating unforgettable meals that will delight your taste
          buds and impress your loved ones.
        </Paragraph>
        <Paragraph>
          Get ready to embark on a delicious journey. Visit Yummy Recipe now and
          let the cooking begin!
        </Paragraph>
        <Paragraph>Happy cooking,</Paragraph>
        <h3 className="font-bold text-xl mb-2 text-green-800">
          {" "}
          The Yummy Recipe Team
        </h3>
      </div>
    </div>
  );
}
