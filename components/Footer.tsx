import Image from 'next/image'
import instagram from "@/public/assets/images/icon-instagram.svg"
import tiktok from "@/public/assets/images/icon-tiktok.svg"
import bluesky from "@/public/assets/images/icon-bluesky.svg"



function Footer() {
  return (
    <footer className='flex flex-col-reverse md:flex-row justify-between  items-center gap-4 py-10'>
      <div className=''>
        Made with ❤️ and 🥑
      </div>
      <div className='flex space-x-5 '>
        <Image src={instagram} alt='An Instagram Icon' />
        <Image src={bluesky} alt='A blue sky Butterfly' />
        <Image src={tiktok} alt='A Tiktok Icon' />
      </div>

    </footer>
  )
}

export default Footer