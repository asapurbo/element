import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import cardCY from '../../assets/cardCY.png'
import cardCA from '../../assets/cardCA.png'
import cardCB from '../../assets/cardCB.png'
import deCardAC from '../../assets/deCardAC.png'
import Btn from '../Btn'




const Item = () => {
  return (
    <section className='pt-itmT pb-itmB relative'> 
        <Container className="max-w-itmCon">
            <div className='pb-28 text-center'>
                <Heading text="New Collection" as="h3" className="text-black font-frank text-mainHading font-bold" />
            </div>

            <Flex className="justify-between">
                <div className='relative w-96'>
                    <picture>
                        <Image src={cardCY}  alt="cardCY"/>
                    </picture>
                    <Btn btn="Sweater" className="absolute  left-5 bottom-11 z-10 text-black px-itmBtnX py-itmBtnY bg-white rounded-itmBtn font-pop text-2xl font-normal hover:bg-[#000000de] duration-300 hover:text-white"/>
                </div>

                <div className='relative w-96'>
                    <picture>
                        <Image src={cardCA}  alt="cardCA" />
                    </picture>
                    <Btn btn="Jeans" className="absolute  left-9 bottom-11 z-10 text-black px-itmBtnX py-itmBtnY bg-white rounded-itmBtn font-pop text-2xl font-normal hover:bg-[#000000de] duration-300 hover:text-white"/>
                </div>

                <div className='relative w-96 z-10'>
                    <picture>
                        <Image src={cardCB}  alt="cardCB"/>
                    </picture>
                    <Btn btn="Baskets" className="absolute  left-10 bottom-11 z-10 text-black px-itmBtnX py-itmBtnY bg-white rounded-itmBtn font-pop text-2xl font-normal hover:bg-[#000000de] duration-300 hover:text-white"/>
                </div>
              
                <div className='absolute right-0 bottom-0'>
                    <Image src={deCardAC} className="z-0"/>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Item