export {};

let name: any = 'Ham';

// let length = name.length as number;
let length = (name as string).length;
// 以下は推奨されていない（asが良い）。Reactで用いるjsxの記法に類似しているため。
// let length = (<string>name).length;

// length = 'foo';
