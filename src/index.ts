import {Sorter} from "./Sorter";
import {NumbersCollection} from "./NumbersCollection";

const numbers = new NumbersCollection([1,7,2,0,6,8,7])
const sorter = new Sorter(numbers);
sorter.sort()
console.log(numbers.data);