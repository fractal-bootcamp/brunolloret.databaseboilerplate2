import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProjectsDeployment from "./projects"

const CarouselPage = () => {
    const deployCarousel = ProjectsDeployment.map(
            item => {

                return (
                    <Carousel>
    
                    {item}
                    </Carousel>
                
            
                
            )
            }
            )

  return (
    <>
    {deployCarousel}
   </>
  );
};
export default CarouselPage