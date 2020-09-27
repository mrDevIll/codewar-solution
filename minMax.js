function getMinMax(arr){


  return arr.reduce(function(acc,x)
                      { 
                          if (acc<=1) return [x,x];
                          acc[0] = acc[0]>x ? x :acc[0];  
                          acc[1] = acc[1]<x ? x :acc[1]; 
                          return acc
                       },[] );

};
