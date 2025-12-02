import AboutArrow from "./AboutArrow"

interface IWhyExist {
  headinText: string,
  paragrapghText?: string


}
export const WhyExistPhylosophyContainer = ({ headinText, paragrapghText }: IWhyExist) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <AboutArrow />
        <h3 className="text-preset-4">{headinText}</h3>
      </div>
      {paragrapghText &&


        <div className="text-content grid grid-cols-[40px_1fr] gap-2">
          <div></div>
          <p className="text-preset-6">{paragrapghText}</p>
        </div>
      }
    </>
  )
}
