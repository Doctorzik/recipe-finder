import Image from "next/image"

interface IfeatureCard {
  paragrahText: string,
  src: string,
  headerText: string
  alt: string
}

const FeatureCard = ({ paragrahText, alt, src, headerText }: IfeatureCard) => {
  return (
    <div className="w-full space-y-5">
      <Image src={src} alt={alt} className="w-10 h-10 bg-[#FFFFFF]" />
      <h3 className="text-[28px] font-semibold  leading-[120%] tracking-[-1px] whitespace-nowrap  text-neutral-900">{headerText}</h3>
      <p className="text-[18px] leading-[150%] tracking-[-0.4px]   text-neutral-800">{paragrahText}</p>
    </div>
  )
}

export default FeatureCard
