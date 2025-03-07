function pronoun(str){

    let result = {};

    const words = str.split(" ");
    const pronounList = ["i", "you", "he", "she", "it", "they", "we"];
 
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (pronounList.includes(word)) {
        if (!result[word]) {
          result[word] = {
            word: [],
            count: 0
          };
        }

        result[word].count++;
        if (words[i + 1] && !pronounList.includes(words[i + 1].toLowerCase())) {
          result[word].word.push(words[i + 1]);
        }
      }
    }
    
    return result;
  }

  console.log(pronoun("You and he should learn it because you need it"));