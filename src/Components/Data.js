const Months = [{
        value: '00',
        label: 'Random',
    }, {
        value: '01',
        label: 'January',
    },
    {
        value: '02',
        label: 'Febuary',
    },
    {
        value: '03',
        label: 'March',
    },
    {
        value: '04',
        label: 'April',
    },
    {
        value: '05',
        label: 'May',
    },
    {
        value: '06',
        label: 'June',
    },
    {
        value: '07',
        label: 'July',
    },
    {
        value: '08',
        label: 'August',
    },
    {
        value: '09',
        label: 'September',
    },
    {
        value: '10',
        label: 'October',
    },
    {
        value: '11',
        label: 'Nomvember',
    },
    {
        value: '12',
        label: 'December',
    },
];
const initRandom = "Random"
const currentDate = new Date().getFullYear()
const Years = [{
        value: initRandom,
        label: initRandom,
    }, {
        value: currentDate,
        label: currentDate
    },
    {
        value: currentDate + 1,
        label: currentDate + 1
    },
    {
        value: currentDate + 2,
        label: currentDate + 2
    },
    {
        value: currentDate + 3,
        label: currentDate + 3
    },
    {
        value: currentDate + 4,
        label: currentDate + 4
    },
    {
        value: currentDate + 5,
        label: currentDate + 5
    },
    {
        value: currentDate + 6,
        label: currentDate + 6
    },
    {
        value: currentDate + 7,
        label: currentDate + 7
    },
    {
        value: currentDate + 8,
        label: currentDate + 8
    },
    {
        value: currentDate + 9,
        label: currentDate + 9
    },
    {
        value: currentDate + 10,
        label: currentDate + 10
    }
];

export {
    Months,
    Years,
    currentDate,
    initRandom
}