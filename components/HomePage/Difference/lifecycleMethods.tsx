import React, { useEffect } from "react";

export const useEffectDifference = (
  setSliderStep: React.Dispatch<React.SetStateAction<Number>>,
  containerTopOffset: React.RefObject<HTMLInputElement>
) => {
  const elementTopOffset = containerTopOffset.current?.offsetTop || 0;
  useEffect(() => {
    const changeSliderStep = () => {
      if (window.scrollY <= elementTopOffset + 300) setSliderStep(1);
      if (
        window.scrollY > elementTopOffset + 300 &&
        window.scrollY <= elementTopOffset + 600
      )
        setSliderStep(2);
      if (
        window.scrollY > elementTopOffset + 600 &&
        window.scrollY <= elementTopOffset + 1500
      )
        setSliderStep(3);
    };
    window.addEventListener("scroll", changeSliderStep);
  });
};
