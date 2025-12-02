'use client'


import Image from 'next/image'
import ButtonLink from './Button'

import prepTime from "@/public/assets/images/icon-prep-time.svg"
import cookTime from "@/public/assets/images/icon-cook-time.svg"
import servingTime from "@/public/assets/images/icon-servings.svg"
import RecipePrepFeatures from './RecipePrepFeatures'


interface IrecipeCard {
  id: number,
  title: string,
  slug?: string,
  image: {
    large: string
    small: string
  }
  overview: string,
  servings: number,
  prepMinutes: number,
  cookMinutes: number,
  ingredients?: string[],
  instructions?: string[],

}

export type IRecipeCards = IrecipeCard[]

export interface RecipeGridProps {
  recipes: IRecipeCards;
  search?: string
}
const RecipeCards = ({ recipes, search }: RecipeGridProps) => {





  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3   space-y-3 gap-6  h-full '>
      {recipes && recipes.length > 0 ? recipes.map((meal) => (
        <div key={meal.id}>
          <ReciepeCard {...meal} />

        </div>
      )) :

        <div>
          No Recipe Found for {search}</div>}
    </div>
  )
}


  export const ReciepeCard = ({ cookMinutes, image, overview, prepMinutes, servings, title, slug }: IrecipeCard) => {
  return (
    <div className='rounded-2xl  shadow-2xs flex flex-col p-2 gap-2 h-full'>
      <div className='recipeItem  flex  flex-col '>
        <div className='recipeImage w-full '>
          <Image className='hidden md:block object-cover rounded-2xl' src={image.large} alt="Recipe Image" width={1024} height={1024} />
          <Image className='md:hidden object-cover rounded-2xl ' src={image.small} alt="Recipe Image" width={500} height={500} />
        </div>
        <div className='recipe-content flex flex-col mt-3'>
          <div className='text-sm mt-1'>
            <h3 className='text-preset-5'>{title}</h3>
            <p className='text-preset-9'>{overview}</p>
          </div>
          <div className='grid grid-cols-[7rem_1fr] mt-3 gap-y-1 '>
            <RecipePrepFeatures cookImageSrc={cookTime} cookTime={cookMinutes} prepImageSrc={prepTime} servingImageSrc={servingTime} prepTime={prepMinutes} servings={servings} />
          </div>
        </div>
      </div>
      <div className='mt-auto '>
        <ButtonLink linkTo={`/recipes/${slug}`} text='View Recipe' />
      </div>
    </div>
  )
}




export default RecipeCards