---
title: Introduction to C
tags: clang,tutorial
url: introduction_to_c
baseUrl: 
date: 2019-03-02
---

 [Wiki article](https://en.wikipedia.org/wiki/C_%28programming_language%29) to CLANG.

There are many things to learn in C language. Some of those are very crucial to learn and easy to forget, some of them are rarely used in small projects but must-be-learned. I must keep references to good resources on specific topics here to find them quickly:

- to refresh my knowledge on [Preprocessors](https://www.techonthenet.com/c_language/directives/index.php), 
- to learn about the [pointers](https://www.tutorialspoint.com/cprogramming/c_pointers.htm)



And below are things important enough to mention in my blog.

#####A hello world example
 <<< code(`// gcc taskx.c -o bin/taskx && bin/taskx
#include <stdio.h>

int main() {
  printf("Hello, World!\\n");
  return 0;
}
`) >>> 

#C - Strings

There are two ways to initialize a C String:

You can  create a list that ends with a **null**  character,
 <<< code(`char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};`) >>>
or initialize a list with a string and C compiler will automatically include the **nul**  character there:
 <<< code(`char greeting[] = "Hello";`) >>> 

Strings are therefore iterables and can be accessed and modified with with a loop. However, once a list is created in C, its capacity cannot be modified. `Instead`, some special string operations must be used:
 <<< code(`#include <stdio.h>
#include <string.h>

int main () {

   char str1[12] = "Hello";
   char str2[12] = "World";
   char str3[12];
   int  len ;

   /* copy str1 into str3 */
   strcpy(str3, str1);
   printf("strcpy( str3, str1) :  %s\\n", str3 );

   /* concatenates str1 and str2 */
   strcat( str1, str2);
   printf("strcat( str1, str2):   %s\\n", str1 );

   /* total lenghth of str1 after concatenation */
   len = strlen(str1);
   printf("strlen(str1) :  %d\\n", len );

   return 0;
}`) >>> 

#Pointers

The first gotcha about pointers is that they could be used to create a deep copy of variables. This is useful when you pass a variable to a function as a argument and you don't want the original variable to be changed or you do want it to be changed. Example:

 <<< code(`#include <stdio.h>

int main () {

   int  var = 20;   /* actual variable declaration */
   int  *ip;        /* pointer variable declaration */

   ip = &var;  /* store address of var in pointer variable*/

   printf("Address of var variable: %x\\n", &var  );

   /* address stored in pointer variable */
   printf("Address stored in ip variable: %x\\n", ip );

   /* access the value using the pointer */
   printf("Value of *ip variable: %d\\n", *ip );

   *ip = 30;
   printf("Value of var variable: %d\\n", var  );

   return 0;
}
`) >>> 

The last printf will give the value of `var` as a 30, even though `var` was not directly manipulated.
