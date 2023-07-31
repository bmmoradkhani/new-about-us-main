export const handleScroll = (
  e: React.UIEvent<HTMLElement, UIEvent>,
  setSliderStep: React.Dispatch<React.SetStateAction<Number>>,
  slidersRef: React.MutableRefObject<any>
) => {
  const scrollLeft = e.currentTarget.scrollLeft;
  const screenWidth = screen.width;
  console.log(screenWidth);

  e.preventDefault();

  console.log(e.currentTarget.scrollLeft);
  slidersRef.current.scrollTo;

  // if(scrollTop>=50 && scrollTop< 100)
  // slidersRef.current.scrollTo(0,0);
  if (screenWidth > 575.98) {
    if (scrollLeft < 250) setSliderStep(1);
    if (scrollLeft >= 250 && scrollLeft < 500) setSliderStep(2);
  }

  if (screenWidth <= 575.98) {
    if (scrollLeft < 200) setSliderStep(1);
    if (scrollLeft >= 500 && scrollLeft < 550) setSliderStep(2);
  }

  // if(scrollTop>= 1000 && scrollTop < 1500)
  // setSliderStep(3);
  // if(scrollTop>= 1500 && scrollTop < 2000)
  // setSliderStep(4);
  // if(scrollTop>= 2000 && scrollTop < 2500)
  // setSliderStep(5);
};
