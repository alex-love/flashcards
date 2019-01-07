
var axios = require('axios');

    


var fs = require('fs');
var path = require('path');
let filePath = '/Users/alex/dev/notecard/flashcards/words.txt'
var array = fs.readFileSync(filePath).toString().split('\n');
console.log(array);


    //need to loop through array which is an array of lines of texts
    //every line starts with a word and then a ',', and then the definition
    function runIt(index)  {
        let wordDef = array[index].split(',');
        let word = wordDef[0];
        let definition = wordDef[1];
    console.log(`Adding ${word} with definition:${definition}`)
    
    axios.post("/api/putData", {
        id: index,
        word: word,
        definition: definition
    })
    .catch((err) =>{
        console.log(err)
    })
    .then(() => {
        index++;
        if (index < array.length){
            runIt(index);
        }
    });
    console.log("entry added with ")
}
runIt(0);
