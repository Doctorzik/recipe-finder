import Image from "next/image"




type recipeFeaureT = {
  servingImageSrc: string,
  prepImageSrc: string,
  cookImageSrc: string
  prepTime: number,
  cookTime: number,
  servings: number
}

const RecipePrepFeatures = ({ cookTime, cookImageSrc, prepImageSrc, servingImageSrc, prepTime, servings }: recipeFeaureT) => {
  return (
    <>
      <div className='flex'><span><Image src={servingImageSrc} width={20} height={20} alt="Serving Time Icon" /></span>Servings: {servings}</div>
      <div className='flex'><span><Image src={prepImageSrc} width={20} height={20} alt="Prep Time Icon" /></span>Prep: {prepTime}m</div>
      <div className='flex'><span><Image src={cookImageSrc} width={20} height={20} alt="Cook Time Icon" /></span>Cook: {cookTime}min</div>
    </>
  )
}

export default RecipePrepFeatures
