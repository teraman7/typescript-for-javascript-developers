export {};

//型に対する別名（String型の別名）
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Ham',
    age: 43
}

type Profile = {
    name: string,
    age: number
}

const example2: Profile = {
    name: 'Ham',
    age: 43
}

type Profile2 = typeof example1;
