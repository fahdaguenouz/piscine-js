function RNA(str){
    let dna=""
    for(let i=0;i<str.length;i++){
        switch (str[i]) {
            case "C":
                dna+="G"
                break;
            case "G":
                dna+="C"
                break
            case "T":
                dna+="A"
                break
            case "A":
                dna+="U"
                break
            default:
                break;
        }
    }
    return dna

}

function DNA(str){
    let rna=""
    for(let i=0;i<str.length;i++){
        switch (str[i]) {
            case "C":
                rna+="G"
                break;
            case "G":
                rna+="C"
                break
            case "U":
                rna+="A"
                break
            case "A":
                rna+="T"
                break
            default:
                break;
        }
    }
    return rna

}