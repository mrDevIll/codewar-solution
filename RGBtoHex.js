function rgb(r, g, b){
  
  let t= x=> (x<=0) ? '00' : (x>=255)? "FF" : (x<16) ? "0" + x.toString(16).toUpperCase() : x.toString(16).toUpperCase();
  
  const check = (r, g, b) => t(r)+t(g)+t(b);
  
  return check(r,g,b)
  

  

}
