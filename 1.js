public class Main{
   //main method
   public static void main(String[] args){

      //declared and initialized an integer variable
      int inputNumber = 7;

      //declared an integer variable and initialize with value 0
      int triangularNumber = 0;

      //using loop we will find the sum of consecutive numbers from 1 to that number
      for(int i = 1 ; i<=inputNumber ; i++){
         triangularNumber = triangularNumber + i;
      }
      System.out.println(triangularNumber+" is the triangular number for "+inputNumber);
   }
}
