import CallToActionSection from "@/components/CallToActionSection"
import Image from "next/image"
import ourMissionImageSmall from "@/public/assets/images/image-about-our-mission-small.webp"
import ourMissionImageLarge from "@/public/assets/images/image-about-our-mission-large.webp"
import BeyondPlateImageLarge from "@/public/assets/images/image-about-beyond-the-plate-large.webp"
import BeyondPlateImageSmall from "@/public/assets/images/image-about-beyond-the-plate-small.webp"


import { WhyExistPhylosophyContainer } from "@/components/WhyExistPhylosophyContainer"

export default function AboutPage() {
  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="our-mission">
        <div>
          {/* <div className="relative  ">
            <div className='block absolute bg-orange-500 opacity-[0.5] w-21 bottom-0 h-5'></div>
          </div> */}
          <h2><span className="bg-orange-500">
            Our mission
          </span>
          </h2>

          <p className="text-preset-2 line-clamp-3"> Help more people cook nourishing meals, more often.</p>
          <div className="grid grid-rows-2 gap-4">
            <p className="text-preset-6"> Healthy Recipe Finder was created to prove that healthy
              eating can be convenient, affordable, and genuinely delicious. </p>
            <p className="text-preset-6"> We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.</p>
          </div>
        </div>
        <Image src={ourMissionImageSmall} loading="lazy" alt="Our Mission Image" className="lg:hidden" />
        <Image src={ourMissionImageLarge} loading="lazy" alt="Our Mission Image" className="hidden lg:block" />
      </div>
      <div className="flex  flex-col lg:grid grid-cols-[300px_1fr] gap-6">
        <h2 className="text-preset-2 lg:text-center"> Why we exist</h2>
        <div className="flex flex-col">
          <WhyExistPhylosophyContainer headinText="Cut through the noise."
            paragrapghText="The internet is bursting with recipes, yet most busy cooks 
  still default to take-away or packaged foods. We curate a 
  tight collection of fool-proof dishes so you can skip the 
  scrolling and start cooking." />

          <WhyExistPhylosophyContainer headinText="Empower home kitchens." paragrapghText=" When you control what goes into your meals, you control how 
  you feel. Every recipe is built around unrefined ingredients 
  and ready in about half an hour of active prep."/>

          <WhyExistPhylosophyContainer headinText=" Make healthy look good." paragrapghText="High-resolution imagery shows you exactly what success looks 
  like—because we eat with our eyes first, and confidence matters."/>
        </div>
        <div>
        </div>
      </div>
      <div className="flex  flex-col lg:grid grid-cols-[300px_1fr] gap-6">
        <h2 className="text-preset-2">Our food philosophy</h2>
        <div>
          <WhyExistPhylosophyContainer headinText="Whole ingredients first." paragrapghText="Fresh produce, grains, legumes, herbs, and quality fats form the 
  backbone of every recipe."/>
          <WhyExistPhylosophyContainer headinText=" Flavor without compromise." paragrapghText=" Spices, citrus, and natural sweetness replace excess salt, sugar, 
  and additives."/>
          <WhyExistPhylosophyContainer headinText=" Respect for time." paragrapghText="Weeknight meals should slot into real schedules; weekend cooking 
  can be leisurely but never wasteful." />
          <WhyExistPhylosophyContainer headinText="Sustainable choices." paragrapghText="  Short ingredient lists cut down on food waste and carbon footprint, 
  while plant-forward dishes keep things planet-friendly." />
        </div>
      </div>
      <div className="beyond-the-plate flex flex-col md:flex-row gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-preset-2">Beyond the plate</h2>
          <div className="flex flex-col">
            <p> We believe food is a catalyst for community and well-being.
              By sharing approachable recipes, we hope to:</p>
            <ul className="pl-8  list-disc tracking-tighter text-left leading-5">
              <li>Encourage family dinners and social cooking.</li>
              <li>Reduce reliance on single-use packaging and delivery waste.</li>
              <li>Spark curiosity about seasonal produce and local agriculture.</li>
            </ul>
          </div>
        </div>
        <div>
          <Image src={BeyondPlateImageSmall} alt="Beyond Plate Image" className="lg:hidden" />
          <Image src={BeyondPlateImageLarge} alt="Beyond Plate Image" className="hidden lg:block" />
        </div>
      </div>
      hehre
      <CallToActionSection />
    </div>
  )
}

