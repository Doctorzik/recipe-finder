'use client'


import recipeList from "@/public/data/data.json"
import { motion } from "motion/react"
import { IRecipeCards, ReciepeCard } from "./ReciepeCard";
import { useEffect, useState } from "react";


const start = () => {
  const max = Math.min(3, recipeList.length);
  const randomRecipes: IRecipeCards = []
  const pool = Array.from({ length: recipeList.length }, (_, i) => i);

  for (let min = 0; min < max; min++) {


    const randIndex = Math.floor(Math.random() * pool.length)

    const rand = pool[randIndex];

    randomRecipes.push(recipeList[rand])

    pool.splice(randIndex, 1);
  }
  return randomRecipes
}



function MoreReciepeCard() {
  const [randomRecipes, setRandom] = useState<IRecipeCards>([])

  useEffect(() => {

    const randomRecipes = start()
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRandom(randomRecipes)

  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-3   space-y-3 gap-6  h-full ">
      {randomRecipes.map((recipes, index) => (
        <motion.div key={index}
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 5 }}
        ><ReciepeCard key={index}   {...recipes} /></motion.div>
      ))}
    </div>
  )
}

export default MoreReciepeCard