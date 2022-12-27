let duration = 'duration-1000';
let transition = 'transition-all';
let opacityStart = 'opacity-0';
let opacityEnd = 'opacity-100';
let ease = 'ease-in-out';

const heroDelayHelper = {
  // sidebar
  0: `delay-[0ms]`,

  // hello there
  1: `delay-[200ms]`,

  // Name
  2: `delay-[400ms]`,

  // Svg
  3: `delay-[500ms]`,

  // Descript 1
  4: `delay-[700ms]`,
  // Descript 2
  5: `delay-[800ms]`,
  // Descript 3
  6: `delay-[900ms]`,

  // button1
  7: `delay-[1100ms]`,
  // button2
  8: `delay-[1200ms]`,
  // button3
  9: `delay-[1300ms]`,

  // Other
  10: `delay-[2000ms]`,
  11: `delay-[2200ms]`,
};

export const slideRightAnimation = (condition, delayPosition) => {
  let delay = heroDelayHelper[delayPosition];

  return condition
    ? `${opacityStart} ${transition} ${delay} ${duration} -translate-x-10 ${ease}`
    : `${opacityEnd} ${transition} ${delay} ${duration} translate-x-0 ${ease}`;
};

export const opacityAnimation = (condition, delayPosition) => {
  let delay = heroDelayHelper[delayPosition];

  return condition
    ? `${delay} ${duration} ${opacityStart} ${ease} ${transition}`
    : `${delay} ${duration} ${opacityEnd} ${ease} ${transition}`;
};

export const slideDownAnimation = (condition, delayPosition) => {
  let delay = heroDelayHelper[delayPosition];

  return condition
    ? `${opacityStart} ${transition} ${delay} ${duration} -translate-y-10 ${ease}`
    : `${opacityEnd} ${transition} ${delay} ${duration} translate-y-0 ${ease}`;
};
