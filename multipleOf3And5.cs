public static class Kata
{
  public static int Solution(int value)
  {
    if (value<0){
      return 0;
    }else{
     int tot =0;
      for(int i=1; i < value; i++){
          if((i % 3 == 0) || (i % 5 == 0)){
         tot+=i;
        }
       }
      return tot;
      }
  }
}
