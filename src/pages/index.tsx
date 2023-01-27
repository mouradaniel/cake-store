import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "../styles/pages/home";

import brigadeiroImg from '../assets/brigadeiro_tradicional_bolo-chocolate_fatia.png';
import churrosImg from '../assets/bolo-de-churros_bolo-branco_fatia.png';
import avelaImg from '../assets/avela_bolo-chocolate_fatia.png';
import redImg from '../assets/red_velvet_brasileiro_bolo-chocolate_fatia.png';
import abacaxiImg from '../assets/abacaxi_c-leite_condensado_bolo-branco_fatia.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={brigadeiroImg} width={230} alt="Bolo Brigadeiro Tradicional" quality={100} />

        <div>
          <h3>Brigadeiro Tradicional</h3>
          <div>
            <span>R$ 70,00</span>
            <span> /kg</span>
          </div>
        </div>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={churrosImg} width={230} alt="Bolo Moça Churros" quality={100} />

        <div>
          <h3>Bolo Moça Churros</h3>
          <div>
            <span>R$ 90,00</span>
            <span> /kg</span>
          </div>
        </div>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={avelaImg} width={230} alt="Bolo Avelã" quality={100} />

        <div>
          <h3>Bolo Avelã</h3>
          <div>
            <span>R$ 90,00</span>
            <span> /kg</span>
          </div>
        </div>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={redImg} width={230} alt="Bolo Red Velvet" quality={100} />

        <div>
          <h3>Bolo Red Velvet</h3>
          <div>
            <span>R$ 80,00</span>
            <span> /kg</span>
          </div>
        </div>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={abacaxiImg} width={230} alt="Bolo Abacaxi" quality={100} />

        <div>
          <h3>Bolo Abacaxi</h3>
          <div>
            <span>R$ 80,00</span>
            <span> /kg</span>
          </div>
        </div>
      </Product>
    </HomeContainer>
  )
}
