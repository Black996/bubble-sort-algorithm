import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";

const numbers = new NumbersCollection([1,7,2,0])
const  sorter = new Sorter(numbers);
sorter.sort()
console.log(sorter.collection.data);