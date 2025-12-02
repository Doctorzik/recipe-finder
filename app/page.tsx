'use client'
import ButtonLink from "@/components/Button";
import Image from "next/image";
import heroImagelarge from "@/public/assets/images/image-home-hero-large.webp"
import carrotIcon from "@/public/assets/images/icon-whole-food-recipes.svg"
import minifussIcon from "@/public/assets/images/icon-minimum-fuss.svg"
import searchIcon from "@/public/assets/images/icon-search-in-seconds.svg"
import cookingRealLifeImage from "@/public/assets/images/image-home-real-life-large.webp"
import cookingRealLifeImageSmall from "@/public/assets/images/image-home-real-life-small.webp"
import { motion } from "motion/react"
import FeatureCard from "@/components/FeatureCard";
import CallToActionSection from "@/components/CallToActionSection";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-10">
        <div className="hero-text flex flex-col lg:items-center  lg:max-w-lg mx-auto gap-8">
          <div className="relative">
            <h1 className="text-preset-1"> Healthy meals, zero fuss</h1>
            <hr className=" absolute top-7 w-[150px] h-[23px]  md:h-[29px] bg-orange-500 rounded-sm opacity-40">
            </hr>
          </div>
          <p className="text-preset-6 lg:text-center">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>

          <ButtonLink linkTo="" text="Start exploring" />

        </div>

        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 5, }}
          className="picture">
          <Image src={heroImagelarge} alt="Hero Image" className="rounded-lg" />
        </motion.div>
      </div >
      <div className="flex flex-col space-y-8">

        <h2 className="lg:text-center sm:text-[30px] text-preset-2 ">What you&apos;ll get</h2>

        <div className="flex flex-col lg:flex-row gap-6  justify-center">

          <FeatureCard alt="A Carrot for whole meal" headerText="Whole-food recipes" paragrahText="Each dish uses everyday, unprocessed ingredients." src={carrotIcon} />
          <FeatureCard alt="A minifuss Image Icon" headerText="Minimum fuss" paragrahText="All recipes are designed to make eating healthy quick and easy." src={minifussIcon} />
          <FeatureCard alt="" headerText="Search in seconds" paragrahText="Filter by name or ingredient and jump straight to the recipe you need." src={searchIcon} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex gap-5 flex-col m-auto">
          <h2 className="text-preset-2">Built for real life</h2>

          <p className="text-preset-6 relative">Cooking shouldn&apos;t be complicated. These recipes come in under
            <span> 30 minutes </span>
            <span className="hidden md:block absolute top-0.5 md:right-45 lg:right-43 lg:top-3 w-20   h-5 bg-orange-500 rounded-sm opacity-40"></span>
            of active time, fit busy schedules, and taste good
            enough to repeat.
          </p>


          <p className="text-preset-6">
            Whether you&apos;re new to the kitchen or just need fresh ideas,
            we&apos;ve got you covered.
          </p>
        </div>
        <div>

          <Image src={cookingRealLifeImage} alt="" className="rounded-lg hidden lg:block" />
          <Image src={cookingRealLifeImageSmall} alt="" className="rounded-lg lg:hidden" />

        </div>

      </div>
      <div>
        <CallToActionSection />


      </div>
    </>
  );
}
