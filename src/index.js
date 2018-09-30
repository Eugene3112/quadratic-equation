module.exports = function solveEquation(equation) {
  
  let data = equation.split(' ');
  let a = +data[0];
  let b = +data[4];
  if(data[3] === '-') b *= -1;
  let c = +data[8];
  if(data[7] === '-') c *= -1;
  let absC = Math.abs(c);
  let product = c / a;
  for (let i = 1; i <= Math.sqrt(absC); i++)
  {
    if(c % i !== 0) continue;
    if(product % i !== 0) continue;
    let j = product / i;
    if (j + i === -b / a) {
      if(i < product / i) return [i, product / i];
      return [product / i, i];
      
    }
    let k = -product / i;
    if (k -i === -b /a ) {
      if( -i < -product / i) return [-i , -product / i ];
      return [-product / i, -i];
    }
  }

}
