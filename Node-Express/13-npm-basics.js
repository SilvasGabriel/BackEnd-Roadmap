//npm - global command, comes with node
//npm -- version

//local dependency - use it only is this particular project
//npm i <packagename>

//global dependency - use it in any project
//npm install -g <packagename>
//sudo install -g <packagename> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create.package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const a = require('lodash')

const items  = [1, [2,[3,[4]]]]

const newItems = a.flattenDeep(items)

console.log(newItems)

