export class Calculator {
  constructor () {

  }

  ageInSeconds(age){
    let secondsInYear = (age * 31536000);
    return secondsInYear;
  }

  diffrenceInSeconds(day1, day2){
    let clock = new Date(day1).getTime();
    let day =  new Date(day2).getTime();
    let secondDiffrence = (clock - day)/1000;
    let diffrenceInSeconds = Math.abs(secondDiffrence);
    return diffrenceInSeconds;
  }

  ageInMercuryYear(age){
    let mercuryAge = (Math.floor(age/0.24));
    return mercuryAge;
  }

  ageInVenusYear(age){
    let venusAge = (Math.floor(age/0.62));
    return venusAge;
  }

  ageInMarsYear(age){
    let marsAge = (Math.floor(age/1.88));
    return marsAge;
  }

  ageInJupiterYear(age){
    let jupiterAge = (Math.floor(age/11.86));
    return jupiterAge;
  }

  lifeExpectancyPlanet(age, stress, smoke, planet) {
    if (stress === "high" && smoke === "yes" && planet === "mercury"){
      const lifeExpect = 60;
      if(age <= lifeExpect) {
        let earthLeft = (lifeExpect - age);
        return (Math.floor(earthLeft/0.24) + " years on " + planet);
      } else {
        return "you are past the estimated, stay healthy!"
      }
     } else if (stress === "low" && smoke === "no" && planet === "mercury"){
      const lifeExpect = 100;
      if (age <= lifeExpect) {
        let earthLeft = (lifeExpect - age);
         return (Math.floor(earthLeft/0.24) + " years on " + planet);
      } else {
         return "you are past the estimated, stay healthy!";
       }

     } else if (stress === "high" && smoke === "yes" && planet === "venus"){
       const lifeExpect = 60;
       if(age <= lifeExpect) {
        let earthLeft = (lifeExpect - age);
         return (Math.floor(earthLeft/0.62) + " years on " + planet);
       } else {
         return "you are past the estimated, stay healthy!";
       }
     } else if (stress === "low" && smoke === "no" && planet === "venus"){
       const lifeExpect = 100;
      if(age <= lifeExpect) {
        let earthLeft = (lifeExpect - age);
        return (Math.floor(earthLeft/0.62) + " years on " + planet);
      } else {
        return "you are past the estimated, stay healthy!";
      }

    } else if (stress === "high" && smoke === "yes" && planet === "mars"){
      const lifeExpect = 60;
      if(age <= lifeExpect) {
        let earthLeft = (lifeExpect - age);
        return (Math.floor(earthLeft/1.88) + " years on " + planet);
      } else {
        return "you are past the eastimated, stay healthy!"
      }
    } else if (stress === "low" && smoke === "no" && planet === "mars"){
      const lifeExpect = 100;
      if(age <= lifeExpect) {
        let earthLeft = (lifeExpect - age);
        return (Math.floor(earthLeft/1.88) + " years on " + planet);
      } else {
        return "you are past the eastimated, stay healthy!"
      }

    } else if (stress === "high" && smoke === "yes" && planet === "jupiter"){
       const lifeExpect = 60;
       if(age <= lifeExpect) {
         let earthLeft = (lifeExpect - age);
         return (Math.floor(earthLeft/11.86) + " years on " + planet);
       } else {
         return "you are past the eastimated, stay healthy!"
       }
  } else if (stress === "low" && smoke === "no" && planet === "jupiter"){
    const lifeExpect = 100;
    if(age <= lifeExpect) {
      let earthLeft = (lifeExpect - age);
      return (Math.floor(earthLeft/11.86) + " years on " + planet);
    } else {
      return "you are past the eastimated, stay healthy!"
    }
  }
}
}
