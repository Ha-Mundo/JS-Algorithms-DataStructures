/////////////////// Recursion Coding Exercise 15: reverse ////////////////////

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

reverse("happy");
/* 
reverse('happy) 

reverse('appy') + 'h' = 'yppah'
reverse('ppy') + 'a' = 'yppa'
reverse('py') + 'p' = 'ypp'
reverse('y') + 'p' = 'yp'
reverse('y') = 'y'

*/

// Visual solution --> https://www.youtube.com/watch?v=ExjpYfCB3bM
