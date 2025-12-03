import Image from "next/image"
import ButtonLink from "./Button"
import patternFork from "@/public/assets/images/pattern-fork.svg"
import patternKnive from "@/public/assets/images/pattern-knife.svg"



const CallToActionSection = () => {
  return (
    <div className="relative flex flex-col gap-10  justify-center pb-10 items-center bg-[#e0e6e3] overflow-hidden">
      <Image src={patternKnive} alt="" className="hidden md:block absolute w-[179px] h-[171px] -top-10 -right-4" />

      <div className="flex flex-col gap-2 pt-14 items-center justify-center text-center">
        <h3 className="text-preset-2 "> Ready to cook smarter?</h3>
        <p className="text-preset-6 ">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
      </div>
      <Image src={patternFork} alt="" className="hidden md:block absolute w-[171px] h-[233px] left-[-50px] -bottom-14  " />
      <ButtonLink linkTo="/recipes" text="Browse recipes" />
    </div>
  )
}

export default CallToActionSection
