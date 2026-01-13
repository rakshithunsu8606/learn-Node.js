const url=require("url")

const gDURL='https://nodejs.org/api/os.html#osversion'


// console.log(url.parse(gDURL));


const Hello={
    protocol: 'https:',
    hostname: 'w3school.com',
}

// console.log(url.format(Hello));


console.log(url.resolve('/one/two/three', 'four'));

console.log(url.resolve('/one/two/three', '/four'));

console.log(url.resolve('http://example.com/', '/one'));

console.log(url.resolve('http://example.com/one', '/two'));


    