"use client"
import RecipeCards from "@/components/ReciepeCard"
import Image from "next/image"
import searchIcon from "@/public/assets/images/icon-search.svg"
import recipeList from "@/public/data/data.json"
import {useState } from 'react'
import FilterRadios, { Category, Show } from "@/components/RadioButtonContainer"

const COOKOPTIONS: { label: string; value: Category }[] = [
  { label: "0 Minute", value: 0 },
  { label: "5 Minutes", value: 5 },
  { label: "10 Minutes", value: 10 },
  { label: "15 Minutes", value: 15 },
  { label: "20 Minutes", value: 20 },
  { label: "Clear", value: "" }
];

const PREPOPTIONS: { label: string; value: Category }[] = [
  { label: "0 Minute", value: 0 },
  { label: "5 Minutes", value: 5 },
  { label: "10 Minutes", value: 10 },
  { label: "Clear", value: "" }
];

const RecipesPage = () => {


  const [search, setSearch] = useState<string>("")

  const [prepCategory, setPrepCategory] = useState<Category>("");

  const [cookCategory, setCookCategory] = useState<Category>("");

  const [cookShow, setCookShow] = useState<Show>("close");
  const [prepshow, setPrepShow] = useState<Show>("close");

  const filteredRecipes = recipeList.filter((r) => {

    const matchesSearch =
      search.trim() === "" ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.ingredients.some((ing) =>
        ing.toLowerCase().includes(search.toLowerCase())
      );

  
    const matchesPrep =
      !prepCategory || r.prepMinutes <= Number(prepCategory);

    
    const matchesCook =
      !cookCategory || r.cookMinutes <= Number(cookCategory);

    return matchesSearch && matchesPrep && matchesCook;
  });

  return (
    <div className="page flex flex-col gap-6">
      <div className="heading flex flex-col md:justify-center md:items-center gap-10 mt-10">
        <h3 className="text-preset-2 text-[30px]"> Explore our simple, healthy recipes</h3>
        <p className="text-preset-6 md:text-center"> Discover eight quick, whole-food dishes that fit real-life
          schedules and taste amazing. Use the search bar to find a
          recipe by name or ingredient, or simply scroll the list and
          let something delicious catch your eye.</p>
      </div>
      <div className="main flex flex-col gap-6">
        <div className="filter-bar flex   flex-col md:flex-row relative gap-6 ">
          <div className="flex flex-row  gap-6 relative">
            <FilterRadios
              value={prepCategory}
              onChange={setPrepCategory}
              show={prepshow}
              onShow={setPrepShow}
              className="right-0"
              text="Max Prep Time"
              name="prep"
              options={PREPOPTIONS}
            />

            <FilterRadios
              value={cookCategory}
              onChange={setCookCategory}
              show={cookShow}
              onShow={setCookShow}
              className=""
              text="Max Cook Time"
              name="cook"
              options={COOKOPTIONS}
            />

          </div>

          <div className="search-bar  flex md:ml-auto">
            <label htmlFor="search-btn">
              <Image src={searchIcon} width={20} height={20} alt="Chevron" />
            </label>
            <input onChange={(e) => {
              setSearch(e.target.value)
              

            }} id="search-btn" placeholder="Search by name or ingredient..." className="w-full" />
          </div>
        </div>

        <RecipeCards recipes={filteredRecipes} search={search} />

      </div>
    </div >
  )
}

export default RecipesPage
