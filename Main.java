public class Main{
   public static void main(String[] args){
      int inputNumber = 7;
      int triangularNumber = 0;
      for(int i = 1 ; i<=inputNumber ; i++){
         triangularNumber = triangularNumber + i;
      }
      System.out.println(triangularNumber+" треугольное число из "+inputNumber);
   }
}
