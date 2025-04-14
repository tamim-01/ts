// Your challenge is to create a helper type
//  that takes an object type and transforms all of its string keys into
// camelCase, while keeping the values and structure the same. For example,
//  if you have a type with keys like "first_name" or "user_id",
//  you should convert them to "firstName" and "userId" respectively. To do this,
// you’ll need to use a mapped type that iterates over the keys of the object.
//  While mapping, check if each key is a string (since non-string keys like numbers or symbols
// shouldn't be transformed). Then apply a separate type utility — assume you already have a CamelCased<T>
// type that takes a string and converts it to camelCase. Your task is to apply that utility to each string key
//  of the object while preserving the original value types. Think carefully about how to remap keys in a mapped
//  type using the as clause and how to conditionally apply transformations.

const weirdObj = {
    first_name: "John",
    last_name: "Doe",
    user_id_number: 123,
    isAdmin: true
}

type TCamelCaseString<T extends string> =   T extends `${infer A}_${infer B}${infer Rest}`
? `${A}${Capitalize<B>}${TCamelCaseString<Rest>}`
: T;
type TCamelCaseObject<T extends object> = {
    [K in keyof T as TCamelCaseString<string & K>]: T[K];
};
type TCamelObj = TCamelCaseObject<typeof weirdObj>;
