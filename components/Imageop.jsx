import React from 'react'
import Image from 'next/image'

const Imagetest = () => {
  return (
    <Image
                src='/assets/images/circled.png'
                width={20}
                height={10}
                alt="Just an icon"
              />
  )
}

export default Imagetest