function citiesOnly(arr) {
    let res = []
    arr.map((e) => {
        res.push(e.city)
    })
    return res
}
function capitalize(str) {
    let res = ""
    let word = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            word += str[i]
        } else {

            res = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
            word = ""
        }

    }
    if (word) {
        res += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return res
}

function upperCasingStates(arr) {
    let res = []
    arr.map((e) => {
        res.push(capitalize(e))
    })
    return res
}

function fahrenheitToCelsius(arr) {
    let res = []
    let reg = /[^°F|0-9|-]/g
    let regx = /[^°F]/g


    arr.map((e) => {
        let deg = 0
        console.log("before", e);
        let match = e.match(reg)
        console.log("match", match);
        if (match == null) {
            console.log("in", e);
            let mat = e.match(regx)
            console.log("mat", mat.join(""));

            deg = parseInt(mat.join(""))
            res.push((Math.floor((deg - 32) / 1.8)).toString() + "°C")
        } else {
            console.log("else", e);
            res.push(e)
        }
    })
    return res
}

function trimTemp(arr) {
    let res = []
    arr.map((e) => {
        console.log("before", e);

        let r = ""
        for (let i = 0; i < e.temperature.length; i++) {
            if (e.temperature[i] == " ") {
                continue
            } else {
                r += e.temperature[i]
            }
        }
        console.log("after", r);
        e.temperature = r.trim()
        console.log("e",e);

        res.push(e)
    })
    return res
}

function tempForecasts(arr) {
    let res = []
    arr.map((e) => {
        let format = ""
        format = fahrenheitCelsius(e.temperature).toString() + "°Celsius in " + e.city + ", " + capitalize(e.state)
        res.push(format)
    })
    return res
}
function fahrenheitCelsius(prop) {
    let res =""
    let reg = /[^°F|0-9|-]/g
    let regx = /[^°F]/g   
        let deg = 0
        console.log("before", prop);
        let match = prop.match(reg)
        console.log("match", match);
        if (match == null) {
            console.log("in", prop);
            let mat = prop.match(regx)
            console.log("mat", mat.join(""));

            deg = parseInt(mat.join(""))
            res+=((Math.floor((deg - 32) / 1.8)))
            console.log(res);
            
        } else {
            console.log("else", prop);
            res.push(prop)
        }
   
    return res
}
console.log(tempForecasts([
    {
      city: 'Los Angeles',
      state: 'california',
      region: 'West',
      temperature: '101°F',
    },
    {
      city: 'San Francisco',
      state: 'california',
      region: 'West',
      temperature: '84°F',
    },
    { city: 'Miami', state: 'Florida', region: 'South', temperature: '112°F' },
    {
      city: 'New York City',
      state: 'new york',
      region: 'North East',
      temperature: '0°F',
    },
    { city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F' },
    {
      city: 'Boston',
      state: 'massachussetts',
      region: 'North East',
      temperature: '45°F',
    },
    {
      city: 'Jackson',
      state: 'mississippi',
      region: 'South',
      temperature: '70°F',
    },
    { city: 'Utqiagvik', state: 'Alaska', region: 'West', temperature: '-1°F' },
    {
      city: 'Albuquerque',
      state: 'new mexico',
      region: 'West',
      temperature: '95°F',
    },
  ]));


