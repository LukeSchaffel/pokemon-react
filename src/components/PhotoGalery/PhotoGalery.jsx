import { Carousel, CarouselItem } from "react-bootstrap";

const PhotoGalery = ({ pokemon }) => {
  const sprites = pokemon.sprites
  const images = []
  const iterate = (sprites) => {
    Object.keys(sprites).forEach(key => {
      
      if (typeof sprites[key] !== 'object' && sprites[key] !== null) {
        images.push(sprites[key]);
        
      }

      if (typeof sprites[key] === 'object' && sprites[key] !== null) {
        iterate(sprites[key])
      }
    })
  }
  iterate(sprites)

return (
  <>
    <section>
      <Carousel variant='dark'>
        {images.map((image,i) => (
          <CarouselItem key={i}>
          <img className="carousel-image" src={image} alt={image} />
        </CarouselItem>


        ))



        }
        

      </Carousel>

    </section>
  </>
);
}

export default PhotoGalery;