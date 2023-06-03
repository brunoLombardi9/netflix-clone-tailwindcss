function slideRight(sliderRef) {
  const slider = sliderRef.current;
  slider.scrollLeft = slider.scrollLeft + 500;
}

function slideLeft(sliderRef) {
  const slider = sliderRef.current;
  slider.scrollLeft = slider.scrollLeft - 500;
}

const sliderHandler = {
  slideRight,
  slideLeft,
};

export default sliderHandler;