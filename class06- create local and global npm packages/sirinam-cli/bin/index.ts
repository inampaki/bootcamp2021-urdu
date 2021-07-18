#!/usr/bin/env node
import { greeting } from "../lib/greeting";


console.log(process.argv)

let name = process.argv.splice(2)[0]
let message = greeting(name);
console.log(message);