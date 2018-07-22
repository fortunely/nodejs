console.log('This is a Buffer demo.');

//const buf =Buffer.from('runoob','ascii');

//console.log(buf.toString('hex'));
//console.log(buf.toString('base64'));
//console.log(buf.toString('ascii'));

// create Buffer class
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10,1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1,2,3]);
const buf5 = Buffer.from('test');
const buf6 = Buffer.from('test','latin1');

// Write into Buffer
var buf = Buffer.alloc(256);
var len = buf.write('www.runoob.com');

console.log('Number of writing byte:'+len);

