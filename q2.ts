// Your challenge is to create a TypeScript helper type that extracts 
// the resolved value from an asynchronous function.
//  For example, if you have a function like const getUser = async () => ({ name: "Alice", age: 30 }),
//  we’re interested in the type of the value that comes out after the function is awaited.
//  In other words, we want to extract the type that the Promise resolves to. To solve this,
//  think about how you can first get the return type of a function type — there’s a built-in utility for that. 
// Then, consider how to unwrap a Promise<T> into just T — there’s a utility for that too.
//  By combining both, you can create a generic helper type that, when given a function type, returns the resolved value of its returned promise.
//  Think about what constraints you might need to put on the input type, and how to apply these two utility types in the right order.

const getUser = async () => ({ name: "Alice", age: 30 });
const getUser2 =  () => ({ name: "Alice", age: 30 });

type TReturnPromiseType<T extends (...args: any) => Promise<any>> = Awaited<ReturnType<T>>
type TUser = TReturnPromiseType<typeof getUser>;
// type TUser = TReturnPromiseType<typeof getUser2>; // Error

