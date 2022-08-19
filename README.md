# Car rental API

## Stack
- NodeJS
- ExpressJS
- Typescript
- SOLID principle

## SOLID

### Summary
1. Single Responsiblity Principle
Each class has an unique responsibility. So Category class (Model) for example is responsible for providing a Structure for the table Category in our database.
The CategoriesRepository class has the responsibility to provide all actions in between or API and our database, if its related to the Category Model.
The CategoryService class is responsible for applying all necessary validations and calling the CategoriesRepository afterwards. It provides the "Service" in between receiving the information and
calling the necessary tools for that.

3.Liskov Substitution Principle
if S is a subtype of T, then objects of type T in a program can be replaced by objects of type S without having to change the properties of that program.
This means that if we create a subType for a class, even if we want to use another class afterwards ( for example change databases that have the same properties ) we can just replace that class and implement it with the same subtype.
For example, in this App we have the ICategoriesRepository. This one serve as a subtype, a "contract", showing for us that this repository is going to have this type of methods, is going to need x y arguments and then is going to return to us z result. If we want to create another repository to use instead of CategoriesRepository, we can create a new class and implement it with the same subtype.
With that our application is not going to change at all except for that new class.

5. Dependency Inversion Principle 
Instead of needing to import something to the inside of class or even needing to create an instance to execute the objective that the class was meant to do, we can just provide the class that we need inside of the constructor. With that the class don't need to do anything not related to itself anymore, it will just receive the instance and then use.
This helps a lot with decopling and helps the developer in a long term because if he/she needs to change something, it will only need to change the outside class.