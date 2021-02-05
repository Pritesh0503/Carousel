import InfiniteCarousel from 'react-leaf-carousel'
import Card from './cards'
import Data from './data.json'

function App() {
  return (
    <div className="App">
      <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={false}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={1}
    slidesToShow={4}
    scrollOnDevice={true}
  >
  {Data.carouselData.map((cardData)=><Card data={cardData}/>)}
  </InfiniteCarousel>
    </div>
  );
}

export default App;
