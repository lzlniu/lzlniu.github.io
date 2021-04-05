function getRandomInt(max:number) {
  return Math.floor(Math.random()*max);
}; //get random int value, max set to 255 for color randomized

export const getRandomColorSeries = () => {
  const initial_red = getRandomInt(255);const initial_green = getRandomInt(255);const initial_blue = getRandomInt(255);
  const middle_red = getRandomInt(255);const middle_green = getRandomInt(255);const middle_blue = getRandomInt(255);
  const final_red = getRandomInt(255);const final_green = getRandomInt(255);const final_blue = getRandomInt(255);
  const initial_color = `rgb(${initial_red}, ${initial_green}, ${initial_blue})`;
  const middle_color = `rgb(${middle_red}, ${middle_green}, ${middle_blue})`;
  const final_color = `rgb(${final_red}, ${final_green}, ${final_blue})`;
  const red_step = Math.abs(middle_red-initial_red)/4; //In this case, 3 gradient color for the initial and middle
  const green_step = Math.abs(middle_green-initial_green)/4;
  const blue_step = Math.abs(middle_blue-initial_blue)/4;
  const red_step2 = Math.abs(middle_red-final_red)/4; // 3 gradient color for the middle and final
  const green_step2 = Math.abs(middle_green-final_green)/4;
  const blue_step2 = Math.abs(middle_blue-final_blue)/4;
  const color1 = `rgb(${initial_red+red_step}, ${initial_green+green_step}, ${initial_blue+blue_step})`;
  const color2 = `rgb(${initial_red+2*red_step}, ${initial_green+2*green_step}, ${initial_blue+2*blue_step})`;
  const color3 = `rgb(${initial_red+3*red_step}, ${initial_green+3*green_step}, ${initial_blue+3*blue_step})`;
  const color4 = `rgb(${middle_red+red_step2}, ${middle_green+green_step2}, ${middle_blue+blue_step2})`;
  const color5 = `rgb(${middle_red+2*red_step2}, ${middle_green+2*green_step2}, ${middle_blue+2*blue_step2})`;
  const color6 = `rgb(${middle_red+3*red_step2}, ${middle_green+3*green_step2}, ${middle_blue+3*blue_step2})`;
  const degree = getRandomInt(360);
  //return red_step
  return ({ background: `linear-gradient(${degree}deg, ${initial_color}, ${color4}, ${color5}, ${color6}, ${middle_color}, ${color1}, ${color2}, ${color3},${final_color})`});
}; //input a initial start/end color, return a random color series
