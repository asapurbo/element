import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import cardOU from '../../assets/cardOU.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import cardYY from '../../assets/cardYY.png'
import cardHH from '../../assets/cardHH.png'




const Project = () => {
  return (
    <section className='pt-pjcT pb-pjtB'>
        <Container className="max-w-pjcCon relative">
            <Flex className="gap-x-pjtG">
                <div className='w-pjcIW relative z-10'>
                  <div className='absolute top-pDST right-pDSR'>
                    <Image src={cardHH} />
                  </div>
                  <picture>
                     <Image src={cardOU} alt="cardOU"/>
                  </picture>
                </div>

                <div className='w-pjcTW relative pt-pjtCdY'>
                    <Heading text="Best Fashion Since 2010" as="h3" className="text-black font-frank text-mainHading font-bold" />

                    <Paragraph className="text-black font-pop text-2xl font-semibold pt-16" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra." />

                    <div className='absolute py-pjtCdY pl-pjtCdL pr-pjtCdR bg-recColor top-[614px] right-cdR rounded-itmBtn z-0'>
                        <Flex>
                          <div className='mr-txtPR'>
                            <Heading text="2023" as="h3" className="text-black font-pop text-mainHading font-bold   relative after:content-[''] after:absolute after:bg-black after:h-36 after:w-[1px] after:right-txtPA after:top-5" />

                            <Heading text="Founded" as="h4" className="text-black font-pop text-counterText font-medium pt-7"/>
                          </div>

                          <div className='ml-tPMT mr-11'>
                            <Heading text="9000+" as="h3" className="text-black font-pop text-mainHading font-bold   relative after:content-[''] after:absolute after:bg-black after:h-36 after:w-[1px] after:right-txtPA after:top-5"/>

                            <Heading text="Product Sold" as="h4" className="text-black font-pop text-counterText font-medium pt-7"/>
                          </div>

                          <div className='ml-10 '>
                            <Heading text="8500+" as="h3" className="text-black font-pop text-mainHading font-bold"/>

                            <Heading text="Best Reviews" as="h4" className="text-black font-pop text-counterText font-medium pt-7"/>
                          </div>
                        </Flex>
                    </div>
                </div>
            </Flex>

            <div className='absolute bottom-pDB left-pDL'>
               <Image src={cardYY} alt="cardYY"/>
            </div>

        </Container>
    </section>
  )
}

export default Project