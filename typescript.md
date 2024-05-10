## TypeScript
Introduction
TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, interfaces, and other features to JavaScript, making it more robust and maintainable.

Basic Types
TypeScript introduces several basic types to help developers define the types of variables and values in their code. These include:

Boolean: Represents a logical value indicating true or false.
Number: Represents numeric values, including integers and floating-point numbers.
String: Represents textual data as a sequence of characters.
Array: Represents a collection of elements of the same type.
Tuple: Represents an array with a fixed number of elements, where each element may have a different type.
Enum: Represents a set of named constants, typically used to define a set of related values.
Any: Represents a dynamic type that can hold any value.
Void: Represents the absence of a type, typically used as the return type of functions that do not return a value.
Null and Undefined: Represent values that are null or undefined, respectively.
Never: Represents the type of values that never occur.
Variables
In TypeScript, variables can be declared using the let keyword. They can also be explicitly typed using type annotations, or their types can be inferred by the TypeScript compiler. Variables can be declared without initialization, in which case their type is automatically set to any.

Type annotations can be used to explicitly specify the type of a variable, while type inference allows the TypeScript compiler to automatically determine the type of a variable based on its initialization value.



# TypeScript: Classes and Interfaces

## Classes

Classes in TypeScript are blueprints for creating objects with properties and methods. They provide a way to encapsulate data and behavior into a single unit, making code more organized and reusable.

### Key Features of Classes:

- **Properties:** Define data members of a class.
- **Methods:** Define functions associated with a class.
- **Constructor:** Special method used for initializing class instances.
- **Access Modifiers:** Control the visibility of properties and methods.
- **Inheritance:** Classes can inherit properties and methods from other classes.
- **Polymorphism:** Classes can have multiple methods with the same name but different implementations.

### Syntax:

`````typescript
class ClassName {
  property1: type;
  property2: type;

  constructor(parameter1: type, parameter2: type) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }

  method1(): returnType {
    // Method implementation
  }

  method2(): returnType {
    // Method implementation
  }
}

## Interfaces

Interfaces in TypeScript define the structure of objects by specifying the properties and methods they should have. They provide a way to enforce contracts for implementing classes or objects.

### Key Features of Interfaces:

- **Properties:** Define names and types of object properties.
- **Methods:** Define names, parameter types, and return types of object methods.
- **Optional Properties:** Properties that may or may not be present in an object.
- **Readonly Properties:** Properties that cannot be modified after object initialization.
- **Extending Interfaces:** Interfaces can inherit properties and methods from other interfaces.

### Syntax:

interface InterfaceName {
  property1: type;
  property2: type;

  method1(): returnType;
  method2(): returnType;
}


````typescript
interface Shape {
  color: string;
  area(): number;
}

class Square implements Shape {
  color: string;
  sideLength: number;

  constructor(color: string, sideLength: number) {
    this.color = color;
    this.sideLength = sideLength;
  }

  area(): number {
    return this.sideLength ** 2;
  }
}

const square = new Square("red", 5);
console.log(square.area()); // Output: 25