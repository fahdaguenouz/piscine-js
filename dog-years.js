
function dogYears(namePla, sec) {
    let res = 0
    const or = 31557600
    switch (namePla) {
        case "earth":
            res = (sec / or)
            break;
        case "mercury":
            res = ((sec / or) / 0.2408467)
            break;
        case "venus":
            res = ((sec / or) / 0.61519726)
            break;
           
        case "mars":
            res = ((sec / or) / 1.8808158)
            break;

        case "jupiter":
            res = ((sec / or) / 11.862615)
            break;

        case "saturn":
            res = ((sec / or) / 29.447498)
            break;

        case "uranus":
            res = ((sec / or) / 84.016846)
            break;

        case "neptune":
            res = ((sec / or) / 164.79132)
            break;

        default:
            res=0
            break;
    }
    return Math.round((res * 7)*100)/100
}
//console.log(dogYears("earth", 1000000000));
