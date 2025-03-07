function pronoun(str){

    let result = {};

    let  words = str.split(/\s+/);
    words
    const pronoun = ["i", "you", "he", "she", "it", "they", "we"];
 
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase().replace(/[,.!?;:]/g,"");
      if (pronoun.includes(word)) {
        if (!result[word]) {
          result[word] = {
            word: [],
            count: 0
          };
        }

        result[word].count++;
        if(words[i+1]){

          if (!pronoun.includes(words[i+1].toLowerCase())) {
            result[word].word.push(words[i+1].replace(/[,.!?;:]/g,""));
          }
        }
      }
    }
    
    return result;
  }

  console.log(pronoun("I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go"));