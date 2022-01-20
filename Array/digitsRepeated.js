// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array

{
  maxcount = 100;
  count = 1;
  let arr = new Array();
  console.log("The repeted twice in range 1-100:");
  i = 0;
  while (count <= maxcount) {
    if (count % 11 == 0) {
      console.log(count);
      arr[i] = count;
      i = i + 1;
    }
    count = count + 1;
  }
}
