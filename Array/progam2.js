//2nd_smallest_largest_using_sorting

{
  var array1 = [];
  for (var i = 0; i <= 9; i++) {
    array1.push(Math.floor(100 + Math.random() * 900));
  }
  console.log(array1);
  var array2 = array1.sort();
  console.log(array1);
  var second_largest = console.log("Second Largest Number:", array1[8]);
  var second_smallest = console.log("Second smallest Number:", array1[1]);
}
