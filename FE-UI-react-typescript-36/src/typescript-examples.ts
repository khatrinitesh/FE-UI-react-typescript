// ============================================
// COMPREHENSIVE TYPESCRIPT LEARNING GUIDE
// ============================================

// ============================================
// 1. WHAT IS TYPESCRIPT?
// ============================================
// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
// It adds static typing, interfaces, generics, and other features for better
// code quality, maintainability, and catching errors at compile time.

// ============================================
// 2. WHAT ARE TYPES?
// ============================================
// Types define what kind of values a variable can hold. They help catch errors
// before runtime and provide better IDE support and documentation.

// ============================================
// 3. TYPESCRIPT CONFIG (tsconfig.json)
// ============================================
// Key settings in tsconfig.json:
// - "target": "ES2020" - JavaScript version to compile to
// - "module": "ESNext" - Module system (ESNext, CommonJS, AMD, etc.)
// - "lib": ["ES2020", "DOM"] - Available APIs
// - "strict": true - Enable all strict type checking options
// - "rootDir": "./src" - Root directory of source files
// - "outDir": "./dist" - Output directory for compiled files
// - "declaration": true - Generate .d.ts files
// - "sourceMap": true - Generate source maps for debugging

// ============================================
// 4. BASIC TYPES
// ============================================

// Primitive Types
const stringType: string = "Hello TypeScript";
const numberType: number = 42;
const booleanType: boolean = true;
const nullType: null = null;
const undefinedType: undefined = undefined;
const symbolType: symbol = Symbol("unique");
const bigintType: bigint = 100n;

// Arrays
const numberArray: number[] = [1, 2, 3];
const stringArray: Array<string> = ["a", "b", "c"];
const mixedArray: (string | number)[] = [1, "two", 3];
const tupleArray: [string, number, boolean] = ["test", 42, true];

// Any (avoid using - defeats purpose of TypeScript)
let anyType: any = "can be anything";
anyType = 42;
anyType = true;

// Unknown (safer than any)
let unknownType: unknown = "something";
// unknownType.toUpperCase(); // ERROR - must check type first
if (typeof unknownType === "string") {
  unknownType.toUpperCase(); // OK
}

// Void (function returns nothing)
function voidFunc(): void {
  console.log("This function returns nothing");
}

// Never (function never returns - infinite loop or throws)
function neverFunc(): never {
  throw new Error("This function never returns");
}

// Object
const objectType: object = { name: "John", age: 30 };
const strictObject: { name: string; age: number } = { name: "Jane", age: 25 };

// ============================================
// 5. TYPE INFERENCE
// ============================================
// TypeScript can infer types without explicit annotations

const inferredString = "hello"; // inferred as string
const inferredNumber = 100; // inferred as number
const inferredBoolean = false; // inferred as boolean
const inferredArray = [1, 2, 3]; // inferred as number[]
const inferredObject = { name: "John", age: 30 }; // inferred as { name: string; age: number }

// Inference from return types
function add(a: number, b: number) {
  return a + b; // return type inferred as number
}

// ============================================
// 6. FUNCTIONS IN TYPESCRIPT
// ============================================

// Basic function with types
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Function with multiple parameters
function add2(x: number, y: number): number {
  return x + y;
}

// Optional parameters
function greeting(name: string, greeting?: string): string {
  return `${greeting || "Hi"}, ${name}!`;
}

// Default parameters
function multiply(a: number, b: number = 2): number {
  return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Arrow functions
const divide = (a: number, b: number): number => a / b;

// Function overloads
function describe(x: string): string;
function describe(x: number): string;
function describe(x: string | number): string {
  if (typeof x === "string") {
    return `String: ${x}`;
  }
  return `Number: ${x}`;
}

// Callback functions
function executeCallback(callback: (value: number) => void): void {
  callback(42);
}

// ============================================
// 7. INTERFACES IN TYPESCRIPT
// ============================================

interface User {
  name: string;
  age: number;
  email?: string; // optional property
  readonly id: number; // readonly property
}

const user: User = {
  id: 1,
  name: "John Doe",
  age: 30,
  email: "john@example.com",
};

// Interface inheritance
interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 2,
  name: "Jane Admin",
  age: 28,
  permissions: ["read", "write", "delete"],
};

// Interface for functions
interface Greet {
  (name: string): string;
}

const greetFunc: Greet = (name: string) => `Hello, ${name}!`;

// Interface for objects with dynamic properties
interface Config {
  [key: string]: string | number;
}

const config: Config = {
  host: "localhost",
  port: 3000,
  debug: 1,
};

// ============================================
// 8. TYPE ALIASES
// ============================================

type ID = string | number;
type Status = "active" | "inactive" | "pending";
type Callback = (data: unknown) => void;

type Person = {
  name: string;
  age: number;
  email?: string;
};

const person: Person = {
  name: "Alice",
  age: 25,
};

// Using type aliases
const userId: ID = "user-123";
const userStatus: Status = "active";

// ============================================
// 9. TYPE vs INTERFACE DIFFERENCES
// ============================================

// Key differences:
// 1. Extension - Interface uses 'extends', Type uses '&'
// 2. Declaration merging - Interfaces can be merged, types cannot
// 3. Primitives - Types can use primitives, interfaces cannot
// 4. Performance - Interfaces are generally faster
// 5. Computed properties - Types support computed properties, interfaces don't

// Interface example
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Type example
type AnimalType = {
  name: string;
};

type DogType = AnimalType & {
  breed: string;
};

// Declaration merging (only with interfaces)
interface Window {
  myCustomProperty: string;
}

// ============================================
// 10. UNIONS AND INTERSECTIONS
// ============================================

// Union types (either one or the other)
type NumberOrString = number | string;
type AdminOrUser = Admin | User;

function processValue(value: number | string): void {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value.toUpperCase());
  }
}

// Intersection types (both/all)
type Combined = User & { role: string };

const combinedUser: Combined = {
  id: 3,
  name: "Bob",
  age: 35,
  role: "manager",
};

// Discriminated unions
type Response =
  | { status: "success"; data: unknown }
  | { status: "error"; error: Error }
  | { status: "loading" };

function handleResponse(response: Response): void {
  if (response.status === "success") {
    console.log(response.data);
  } else if (response.status === "error") {
    console.log(response.error.message);
  } else {
    console.log("Loading...");
  }
}

// ============================================
// 11. LITERAL TYPES
// ============================================

// String literals
type Direction = "north" | "south" | "east" | "west";
const heading: Direction = "north";

// Number literals
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
const roll: Dice = 4;

// Boolean literals
type IsActive = true;
const active: IsActive = true;

// Combining literals
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type StatusCode = 200 | 201 | 400 | 404 | 500;

// ============================================
// 12. TYPE ASSERTIONS vs TYPE GUARDS
// ============================================

// Type Assertions (telling TypeScript "trust me, I know the type")
const value: unknown = "hello";
const assertedString: string = value as string;
const alternateAssertion = <string>value; // older syntax

// Type Guards (runtime checks that help TypeScript narrow types)

// typeof guard
function processInput(input: string | number): void {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else {
    console.log(input.toFixed(2));
  }
}

// instanceof guard
class Dog2 {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog2 | Cat): void {
  if (animal instanceof Dog2) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// User-defined type guards
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "name" in obj &&
    "age" in obj &&
    typeof (obj as User).name === "string" &&
    typeof (obj as User).age === "number"
  );
}

// in operator
function checkProperty(obj: unknown): void {
  if ("name" in obj) {
    console.log("Has name property");
  }
}

// ============================================
// 13. CLASSES IN TYPESCRIPT
// ============================================

// Basic class with properties and methods
class Animal2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getInfo(): string {
    return `${this.name} is ${this.age} years old`;
  }
}

// Access modifiers
class Vehicle {
  public brand: string; // accessible everywhere
  protected model: string; // accessible in class and subclasses
  private serialNumber: string; // accessible only in this class
  readonly year: number; // can't be changed after initialization

  constructor(
    brand: string,
    model: string,
    serialNumber: string,
    year: number,
  ) {
    this.brand = brand;
    this.model = model;
    this.serialNumber = serialNumber;
    this.year = year;
  }

  public getDetails(): string {
    return `${this.brand} ${this.model}`;
  }

  protected getSerialNumber(): string {
    return this.serialNumber;
  }

  private validateSerial(): boolean {
    return this.serialNumber.length > 0;
  }
}

// Inheritance
class Car extends Vehicle {
  numberOfDoors: number;

  constructor(
    brand: string,
    model: string,
    serial: string,
    year: number,
    doors: number,
  ) {
    super(brand, model, serial, year);
    this.numberOfDoors = doors;
  }

  getCarInfo(): string {
    return `${this.getDetails()} with ${this.numberOfDoors} doors`;
  }
}

// Abstract class
abstract class Shape {
  abstract calculateArea(): number;

  printArea(): void {
    console.log(`Area: ${this.calculateArea()}`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Static members
class MathUtils {
  static PI = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * this.PI * radius;
  }
}

// Getters and Setters
class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}

// ============================================
// 14. GENERICS IN TYPESCRIPT
// ============================================

// Basic generic function
function identity<T>(arg: T): T {
  return arg;
}

const idString = identity<string>("hello");
const idNumber = identity<number>(42);
const idArray = identity<number[]>([1, 2, 3]);

// Generic with constraints
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

// Multiple type parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "John" }, { age: 30 });

// Generic classes
class Box<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  remove(): T | undefined {
    return this.items.pop();
  }

  getItems(): T[] {
    return this.items;
  }
}

const stringBox = new Box<string>();
stringBox.add("hello");
stringBox.add("world");

const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);

// Generic types
type ApiResponse<T> = {
  status: number;
  data: T;
};

const userResponse: ApiResponse<User> = {
  status: 200,
  data: user,
};

// Generic with default type
type Result<T = string> = {
  success: boolean;
  message: T;
};

const stringResult: Result = { success: true, message: "All good" };
const numberResult: Result<number> = { success: true, message: 200 };

// ============================================
// 15. UTILITY TYPES
// ============================================

// ============================================
// 15a. Partial - Makes all properties optional
// ============================================
type PartialUser = Partial<User>;

const partialUser: PartialUser = {
  name: "John",
  // age is optional now
};

// ============================================
// 15b. Required - Makes all properties required
// ============================================
type RequiredUser = Required<User>;

const requiredUser: RequiredUser = {
  id: 1,
  name: "John",
  age: 30,
  email: "john@test.com", // now required
};

// ============================================
// 15c. Readonly - Makes all properties readonly
// ============================================
type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "John",
  age: 30,
};
// readonlyUser.name = "Jane"; // ERROR - property is readonly

// ============================================
// 15d. Pick - Selects specific properties
// ============================================
type UserPreview = Pick<User, "name" | "age">;

const preview: UserPreview = {
  name: "John",
  age: 30,
};

// ============================================
// 15e. Omit - Excludes specific properties
// ============================================
type UserWithoutEmail = Omit<User, "email">;

const userNoEmail: UserWithoutEmail = {
  id: 1,
  name: "Jane",
  age: 25,
};

// ============================================
// 15f. Record - Creates object with specific keys
// ============================================
type Permissions = Record<"read" | "write" | "delete", boolean>;

const permissions: Permissions = {
  read: true,
  write: true,
  delete: false,
};

// ============================================
// 15g. ReturnType - Extracts return type of function
// ============================================
type AddReturnType = ReturnType<typeof add2>;
const result: AddReturnType = 10;

// ============================================
// 15h. Exclude - Excludes types from union
// ============================================
type NonString = Exclude<string | number | boolean, string>;
// NonString is now: number | boolean

// ============================================
// 15i. Extract - Extracts types from union
// ============================================
type OnlyString = Extract<string | number | boolean, string>;
// OnlyString is now: string

// ============================================
// 15j. Parameters - Extracts parameter types
// ============================================
type AddParams = Parameters<typeof add2>;
// AddParams is now: [number, number]

// ============================================
// 16. ENUMS
// ============================================

// Numeric enum (default)
enum Direction2 {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}

const direction: Direction2 = Direction2.Up;

// String enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const myColor: Color = Color.Red;

// Heterogeneous enum
enum Mixed {
  No = 0,
  Yes = "YES",
}

// Enum with computed values
enum FileSize {
  Small = 1 * 1024,
  Medium = 2 * 1024,
  Large = 4 * 1024,
}

// Reverse mapping (numeric enums only)
const directionName = Direction2[0]; // "Up"

// Constant enums (inlined at compile time)
const enum Status2 {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
}

const status: Status2 = Status2.Active;

// ============================================
// 17. PROMISES IN TYPESCRIPT
// ============================================

// Basic Promise
const promise1: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise1.then((value) => {
  console.log(value);
});

// Promise with reject
const promise2: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed!"));
  }, 1000);
});

promise2
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

// Async/await
async function fetchData(): Promise<string> {
  try {
    const response = await promise1;
    return response;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

// Promise.all
function promise1Func(): Promise<string> {
  return Promise.resolve("Result 1");
}

function promise2Func(): Promise<number> {
  return Promise.resolve(42);
}

function promise3Func(): Promise<boolean> {
  return Promise.resolve(true);
}

const allPromises: Promise<[string, number, boolean]> = Promise.all([
  promise1Func(),
  promise2Func(),
  promise3Func(),
]);

allPromises.then(([str, num, bool]) => {
  console.log(str, num, bool);
});

// Promise.race
const raceResult: Promise<string | number> = Promise.race([
  promise1Func(),
  promise2Func(),
]);

// Promise.allSettled
const settledResults = Promise.allSettled([
  promise1Func(),
  promise2Func(),
  promise3Func(),
]);

settledResults.then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Fulfilled:", result.value);
    } else {
      console.log("Rejected:", result.reason);
    }
  });
});

// Async function that returns Promise
async function getUserData(id: number): Promise<User> {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        name: "John Doe",
        age: 30,
      });
    }, 1000);
  });
}

// Using async/await with error handling
async function processUser(id: number): Promise<void> {
  try {
    const user = await getUserData(id);
    console.log("User:", user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

// Promise chaining
function chain(): Promise<string> {
  return getUserData(1)
    .then((user) => {
      return `User name: ${user.name}`;
    })
    .catch((error) => {
      return `Error: ${error}`;
    });
}

// Generic Promise type for API responses
type ApiCall<T> = Promise<{ status: number; data: T }>;

const getUsersCall: ApiCall<User[]> = Promise.resolve({
  status: 200,
  data: [user, admin],
});

// ============================================
// SUMMARY OF KEY CONCEPTS
// ============================================
/*
1. TypeScript adds static typing to JavaScript
2. Basic types: string, number, boolean, array, tuple, null, undefined, etc.
3. Type inference allows omitting type annotations
4. Functions need parameter and return type annotations
5. Interfaces define object shapes and can be extended
6. Type aliases define types for any value including unions
7. Unions combine types, intersections merge types
8. Literal types narrow values to specific literals
9. Type guards narrow types at runtime
10. Classes support inheritance, access modifiers, and abstract classes
11. Generics provide reusable components with any type
12. Utility types help transform existing types
13. Enums define a set of named constants
14. Promises handle async operations with full type safety
*/

export {
  greet,
  add2,
  divide,
  sum,
  multiply,
  greeting,
  executeCallback,
  describe,
  processValue,
  handleResponse,
  processInput,
  makeSound,
  isUser,
  checkProperty,
  identity,
  getLength,
  merge,
  Box,
  Chain,
  getUserData,
  processUser,
  chain,
  Direction2,
  Color,
  Status2,
  Mixed,
  FileSize,
};

// Export types
export type {
  NumberOrString,
  AdminOrUser,
  Combined,
  Response,
  Direction,
  Dice,
  HttpMethod,
  StatusCode,
  ID,
  Status,
  Callback,
  Person,
  AnimalType,
  DogType,
  PartialUser,
  RequiredUser,
  ReadonlyUser,
  UserPreview,
  UserWithoutEmail,
  Permissions,
  AddReturnType,
  NonString,
  OnlyString,
  AddParams,
  ApiCall,
  Greet,
  Config,
  Result,
};
