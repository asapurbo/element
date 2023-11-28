import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Btn from "../Btn";
import Image from "../Image";
import cardIA from "../../assets/cardIA.png";
import cardIB from '../../assets/cardIB.png'
import starX from "../../assets/starX.png";



const About = () => {
  return (
    <section className="pt-9 pb-abtB bg-SellerColor">
      <Container className="max-w-abtCon">
        <Flex className="justify-between">
          <div className="w-abtItmF">
            <Heading text="Best Seller Product" as="h3" className="text-white font-frank text-mainHading font-bold" />

            <Paragraph className="text-white font-frank text-2xl font-bold pt-11 pb-10"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."
            />

            <Btn btn="Learn MORE"
              className="py-abtBtnY px-abtBtnX text-white font-pop text-2xl font-semibold rounded-roundedX bg-black"
            />
          </div>


          <div className="w-cardW bg-white rounded-cardT">
            <div>
              <picture>
                <Image src={cardIA} alt="cardIA" />
              </picture>
            </div>
            <div className="pl-6 pt-4">
              <div>
                <picture>
                  <Image src={starX} alt="starX" />
                </picture>
              </div>
              <div>
                <Heading text="Sweater Shirt" as="h3" className="text-black font-pop text-praText font-semibold pt-3 pb-1" />
                <Flex>
                  <Heading text="$45.99" as="h3" className="text-prixColor font-pop text-2xl font-normal" />
                  <Heading text="$35.99" as="h3" className="text-black font-pop text-2xl font-normal pl-8" />
                </Flex>
              </div>
            </div>
          </div>


          <div className="w-cardW bg-white rounded-cardT">
            <div>
              <picture>
                <Image src={cardIB} alt="cardIB" className="w-full" />
              </picture>
            </div>
            <div className="pl-6 pt-4">
              <div>
                <picture>
                  <Image src={starX} alt="starX" />
                </picture>
              </div>
              <div>
                <Heading text="Pants fashion" as="h3" className="text-black font-pop text-praText font-semibold pt-3 pb-1" />
                <Flex>
                  <Heading text="$55" as="h3" className="text-prixColor font-pop text-2xl font-normal" />
                  <Heading text="$44.99" as="h3" className="text-black font-pop text-2xl font-normal pl-8" />
                </Flex>
              </div>
            </div>
          </div>

        </Flex>
      </Container>
    </section>
  );
};

export default About;
