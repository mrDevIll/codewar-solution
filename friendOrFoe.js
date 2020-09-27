 function accum(s) {
    let symbol = "-", acc = "", max = s.length;
    
    for (let i = 0; i < max; i++){
           acc+= s[i].toUpperCase() + (s[i].repeat(i)).toLowerCase()
           if (i != (max -1))acc+=symbol;
    }
    return acc
    
    }
