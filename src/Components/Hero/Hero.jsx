import "./Hero.scss";
import data from "../../../public/products.json";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='hero__main'>
                <div className='row'>
                    <div className='col-lg-4 col-12'>
                        <ul className="allproducts">
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Women's fashion 
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Men's fashion
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Electronics
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Home and elcetronics
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Medicine
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Sports and outdoor
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Baby's and toys
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Groceries and pets
                                </Link>
                            </li>
                            <li className = "allproducts__item">
                                <Link className="allproducts__item--link">
                                    Health
                                </Link>
                            </li>
                        </ul>

                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="ads">
                            <Carousel className="ads-carousel">
                                {
                                    data.products.slice(5,9)?.map((item, index) =>{
                                        return(
                                            <CarouselItem key={`carousel-${index}`}>
                                                <img src={item.thumbnail} alt={item.title}/>
                                                <Link>
                                                    <span>{item.title}</span>
                                                </Link>
                                            </CarouselItem>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero