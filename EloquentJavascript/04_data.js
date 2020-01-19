var JOURNAL = require("H:\\JavaScriptWorkspace\\EloquentJavascript\\journal.js")

//Create an array journal and push object entries as below:
var journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);
//console.log(journal[0]);


/****************************************************************************************
* Compute Correlation of the events
* This can be one by creating a count of each event done by the squirrel
* Each number indicates the amount of time a combination has occured in measurements
* Create a phi function and a tableFor function 
* The phi function will calculate the correlation between each event
* The tableFor will create a correlation table for each events in the journal
*/

function tableFor(events, journal){
    let table = [0,0,0,0];
    
    for (let i=0 ; i< journal.length; i++){
        let entry = journal[i], index = 0;
        if(entry.events.includes(events)) index+=1;
        if(entry.squirrel) index+=2;
        table[index]+=1;
    }
    return table;
}
//console.log(tableFor('touched tree',journal));
function phi(table){
    return (table[3]*table[0] - table[2]*table[1])/
        Math.sqrt((table[2]+table[3])*
                 (table[0]+table[1])*
                 (table[1]+table[3])*
                 (table[0]+table[2]));
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}
//console.log(journalEvents(journal));

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

