// Given an array of ints, write a C# method to total all the values that are even numbers.
using System;
public static int AddEvens(params int[] numbers)
{
    // check if number is even
    int sum = 0;

    // if even, add to sum
    foreach (int num in numbers)
    {
        if (num % 2 == 0){
            sum += num;
        }
    }
    return sum;
}
Console.WriteLine(AddEvens(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
