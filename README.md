# Assignment - 1 Typescript


## Question and Answer

### 1. What is the use of the keyof keyword in TypeScript? Provide an example.

- The keyof keyword is used to get all the property names (keys) of a given type. When we use keyof, it gives us a type that is a union of all the keys. This is useful when we want to work with object properties in a safe way. It helps to make sure we are only using valid keys that exist in the object type.

Example:
If we have a type User with name and age, then keyof User will be "name" | "age".

### 2. Explain the difference between any, unknown, and never types in TypeScript.
- any means anything. I can assign any value and do anything with it. TypeScript won’t show any error. It gives full freedom but no safety.

unknown also allows any value to be assigned, but I can’t use it directly. I must check its type first. This is safer than any because it avoids unexpected errors.

never means the value never happens. It is used when a function never returns, like when it always throws an error or runs forever. It tells TypeScript that there will never be a value.
