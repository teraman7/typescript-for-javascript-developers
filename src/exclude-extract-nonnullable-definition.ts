export {};

type MyExclude = 
    | (string extends string | number ? never : string) /* 評価：never */
    | (number extends string | number ? never : number) /* 評価：never */
    | (DebugType extends string | number ? never : DebugType); /* 評価：DebugType */
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
