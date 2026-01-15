//1
/* 
returns mountains in the chosen country
chosenCountry {string} - the name of the country to search for
return {list} - list of mountain names in that country
*/
function getMountainsInCountry(chosenCountry){
    var matches = [];

    for(var i = 0; i < country.length; i++){
        if(country[i].toLowerCase().includes(chosenCountry.toLowerCase())){
            matches.push(mountainName[i]);
      
        }
    }

    return matches;
}

console.log(getMountainsInCountry("nepal"));

//2
/*returns mountains in the chosen mountain range
chosenRange {string} - the name of the mountain range to search for
return {list} - list of mountain names in that range
*/

function getMountainsInRange(chosenRange){
    var matches = [];

    for(var i = 0; i < mountainRange.length; i++){
        if(mountainRange[i].toLowerCase().includes(chosenRange.toLowerCase())){
            matches.push(mountainName[i]);
        }
    }

    return matches;
}

console.log(getMountainsInRange("jugal himalaya"));
