export {};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    Novenmer,
    December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    // YELLOW = '#FFFF00',
    BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({green});

enum COLORS {
    YELLOW = '#FFFF00',
    GRAY = '#808080'
}

COLORS.YELLOW;
let gray = COLORS.GRAY;
console.log({gray});
