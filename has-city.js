function hasCity(country,cities){
    return function(citie){
        for(let i=0;i<cities.length;i++){
            if(cities[i]===citie){
                return `${citie} is a city from ${country}`
            }
            
        }
        return `${citie} is not a city from ${country}`
        
    }
}

// const isFrench = hasCity('France', [
//     'Bordeaux',
//     'Paris',
//     'Lille',
//     'Lyon',
//     'Marseille',
//     'Saint-Étienne',
//   ])
//   console.log(isFrench('Lyos'));
  
