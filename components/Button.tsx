import Link from 'next/link';
import React from 'react'


export interface Ibutton {
  text: string;
  linkTo: string

}

function ButtonLink({ text, linkTo }: Ibutton

) {
  return (
    <div className={'text-preset-5 py-3 px-6 bg-[#163A34] text-[#FFFFFF] rounded-xl  m-auto text-center'}>
      <Link href={linkTo}>{text}</Link>
    </div>
  )
}

export default ButtonLink