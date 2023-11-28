import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Btn from '../Btn'
import Image from "../Image"
import cardY from "../../assets/cardY.png"
import deCard from "../../assets/deCard.png"


const Banner = () => {
  return (
    <section className='pt-bnrT pb-bnrB bg-primaryColor rounded-bnrB'>
        <Container className="max-w-bnrCon">
            <Flex className="justify-between">
                <div className='w-bnrTW'>
                    <Heading text="Find The Best Fashion Style For You" as="h1" className="text-black font-pop text-mainHading font-semibold"/>

                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." className="text-black font-pop text-praText font-normal pt-txtBnrT pb-txtbtnB pr-4"/>

                    <Btn btn="SHOP NOW" className="py-6 px-btnBnr bg-black rounded-roundedX text-white font-pop text-2xl font-semibold" />
                </div>
                <div className='relative'>
                  <picture>
                    <Image src={cardY} alt={cardY}/>
                  </picture>
                  <div className='absolute top-[410px] left-[-110px]'>
                    <picture>
                        <Image src={deCard} alt="deCard"/>
                    </picture>
                  </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner