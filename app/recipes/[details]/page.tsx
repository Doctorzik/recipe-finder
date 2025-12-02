import RecipePrepFeatures from "@/components/RecipePrepFeatures"
import recipeList from "@/public/data/data.json"
import Image from "next/image"
import Link from "next/link"
import prepTime from "@/public/assets/images/icon-prep-time.svg"
import cookTime from "@/public/assets/images/icon-cook-time.svg"
import servingTime from "@/public/assets/images/icon-servings.svg"
import { notFound } from "next/navigation"
import { WhyExistPhylosophyContainer } from "@/components/WhyExistPhylosophyContainer"
import MoreReciepeCard from "@/components/MoreReciepeCard"




const RecipesDetails = async ({ params }: {
  params: Promise<{ details: string }>
}

) => {

  const { details } = await params
  const recipe = recipeList.filter((re => re.slug === details))
  if (recipe.length === 0) {
    return notFound()
  }

  const { cookMinutes, image, ingredients, instructions, overview, prepMinutes, title, servings } = recipe[0]
  return (
    <div className="space-y-10" >
      <Link className="text-[18px]  max-w-[333px] tracking-tight leading-[150%]" href={`/recipes`}>Recipes /{details}</Link>
      <div className="grid md:grid-cols-[50%_1fr] gap-6">
        
          <Image className='hidden md:block object-cover rounded-2xl' src={image.large} alt={`${title}`} width={1024} height={1024} />
          <Image className='md:hidden object-cover rounded-2xl ' src={image.small} alt={`${title} `} width={500} height={500} />
        
        <div className="space-y-4">
          <h1 className="text-preset-2">{title}</h1>
          <p>{overview}</p>

          <div className='grid grid-cols-[7rem_1fr] lg:flex gap-4 mt-3 gap-y-1 '>
            <RecipePrepFeatures cookImageSrc={cookTime} cookTime={cookMinutes} prepImageSrc={prepTime} servingImageSrc={servingTime} prepTime={prepMinutes} servings={servings} />
          </div>
          <div>
            <h2 className="text-preset-4">Ingredients</h2>
            {ingredients && ingredients.map(ingredient => (
              <WhyExistPhylosophyContainer key={ingredient} headinText={ingredient} />
            ))}
          </div>
          <div>
            <h2 className="text-preset-4">Instructions</h2>
            {instructions && instructions.map(instruction => (
              <WhyExistPhylosophyContainer key={instruction} headinText={instruction} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-preset-3">More Recipes</h2>
        <MoreReciepeCard />
      </div>
    </div>

  )
}

export default RecipesDetails
