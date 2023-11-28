import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import List from "../List"
import cardX from "../../assets/cardX.png"
import Btn from "../Btn"



const navbar = () => {
  return (
    <nav className="pt-16 bg-primaryColor">
        <Container className="max-w-navCon">
           <Flex>
              <div className="w-2/12 pt-3">
                <picture>
                  <Image src={cardX}/>
                </picture>
              </div>
              <div className="w-7/12">
               <ul>
                 <Flex className="py-3 justify-end">
                    <List href="https://www.facebook.com/profile.php?id=100087946532730" text="Men" target="_blank" className="text-black font-pop text-2xl font-semibold mr-8"/>
                    <List href="#" text="Woman" target="_blank"  className="text-black font-pop text-2xl font-semibold ml-7 mr-8" />
                    <List href="#" text="Kids"target="_blank"   className="text-black font-pop text-2xl font-semibold ml-7 mr-8"/>
                    <List href="#" text="Collection" target="_blank"  className="text-black font-pop text-2xl font-semibold ml-7 mr-8"/>
                    <List href="#" text="Trends" target="_blank"  className="text-black font-pop text-2xl font-semibold ml-7"/>
                 </Flex>
               </ul>
              </div>
              <div className="w-3/12 text-right">
                <Btn btn="Login" className="border border-solid border-btnBdrClr rounded-roundedX shadow-btnShd px-4 py-3 text-btnTxtClr font-pop text-2xl font-semibold hover:bg-secondary duration-300" />


                <Btn btn="Sign up" className="border border-solid border-btnBdrClr rounded-roundedX shadow-btnShd px-4 py-3 text-btnTxtClr font-pop text-2xl font-semibold hover:bg-secondary duration-300 ml-3" />
              </div>
           </Flex>
        </Container>
    </nav>
  )
}


export default navbar