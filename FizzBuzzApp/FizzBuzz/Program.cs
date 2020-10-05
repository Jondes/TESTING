using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FizzBuzz
{
    class Program
    {   //Print numbers from 1 to 100
        static void Main(string[] args)
        { 
            for (int i = 1; i <= 100; i++)
            {
                string result = "";
            //Divisible by 3 print Fizz
              if(i % 3 == 0) result = "Fizz";
            //Divisible by 5 print Buzz
              if(i % 5 == 0) result = result + "Buzz";
             //Divisible by 3 and 5 print FizzBuzz
              if(i % 3 == 0 || i % 5 == 0) Console.WriteLine("FizzBuzz");

            //Print the number as it is if not divisible by 3 or 5
            if(result.Length== 0) result = i.ToString();

            Console.WriteLine(result);
            }
           
        }
    } 
    
}

