// let mack = [{name: 'Hunter The Reckoning', points: 10}, {name: 'Stars Without Number', points: 9}, {name: 'Warhammer Fantasy', points: 8}, {name: 'Modern Age', points: 7}, {name: 'Old School Essentials', points: 6}, {name: 'Symbaroum', points: 5}, {name: 'Worlds Without Number', points: 4}, {name: 'Fantasy Age', points: 3}, {name: 'Traveller', points: 2}, {name: 'Death In Space', points: 1}];
// let travis = [{name: 'Modern Age', points: 10}, {name: 'Death In Space', points: 9}, {name: 'Traveller', points: 8}, {name: 'Stars Without Number', points: 7}, {name: 'Worlds Without Number', points: 6}, {name: 'Fantasy Age', points: 5}, {name: 'Hunter The Reckoning', points: 4}, {name: 'Warhammer Fantasy', points: 3}, {name: 'Duster', points: 2}]
// let jon = [{name: 'Hunter The Reckoning', points: 10}, {name: 'Modern Age', points: 9}, {name: 'Mork Borg', points: 8}, {name: 'Death In Space', points: 7}, {name: 'Traveller', points: 6}]
// let ross = [{name: 'Mork Borg', points: 10}, {name: 'Death In Space', points: 9}, {name: 'Modern Age', points: 8}, {name: 'Azag', points: 7}, {name: 'Duster', points: 6}, {name: 'Hunter The Reckoning', points: 5}, {name: 'Old School Essentials', points: 4}, {name: 'Traveller', points: 3}, {name: 'Warhammer Fantasy', points: 2}, {name: 'Mazes', points: 1}]
// let sam = [{name: 'Mork Borg', points: 10}, {name: 'Hunter The Reckoning', points: 9}, {name: 'Modern Age', points: 8}, {name: 'Azag', points: 7}, {name: 'Death In Space', points: 6}, {name: 'Fantasy Age', points: 5}, {name: 'Traveller', points: 4}, {name: 'Warhammer Fantasy', points: 3}, {name: 'Stars Without Number', points: 2}, {name: '13th Age', points: 1}]
// let blake = [{name: 'Modern Age', points: 10}, {name: 'Stars Without Number', points: 9}, {name: 'Traveller', points: 8}, {name: 'Hunter The Reckoning', points: 7}, {name: 'Cy_Borg', points: 6}, {name: 'Death In Space', points: 5}, {name: 'Warhammer Fantasy', points: 4}, {name: 'Fantasy Age', points: 3}, {name: 'Worlds Without Number', points: 2}, {name: 'Mork Borg', points: 1}]

let dataArray = [{name: 'Hunter The Reckoning', points: 10}, {name: 'Stars Without Number', points: 9}];


var holder = {};

dataArray.forEach(function(d) {
  if (holder.hasOwnProperty(d.name)) {
    holder[d.name] = holder[d.name] + d.points;
  } else {
    holder[d.name] = d.points;
  }
});

var obj2 = [];

for (var prop in holder) {
  obj2.push({ name: prop, points: holder[prop] });
}

document.getElementById("greeting").innerHTML = obj2[0].name;

