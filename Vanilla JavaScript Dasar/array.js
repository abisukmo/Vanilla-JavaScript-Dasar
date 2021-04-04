const namaMantan = ["komang", "made","ketut"];

// namaMantan.forEach(function (item, index, array) {
//     console.log(item, index, array);
// })

namaMantan.push ("dewi");
    
const namaMantanLama = namaMantan.slice();

namaMantanLama.pop();

// console.log("Nama mantan: ", namaMantan);
// console.log("Nama mantan lama: ", namaMantanLama);

// for (let index = 0; index < namaMantan.length; index++) {
//     const element = namaMantan[index];
//     console.log(element);
// }

// let index = 0
// while (index < namaMantan.length) {
//     const element = namaMantan[index];
//     console.log(element);
//     index++
// }

// console.log(
//     namaMantan.reduce(function (acc, mantan, ke) {
//         acc[mantan] = `Mantan ke ${ke + 1}`;    
        
//         return acc;

//     }, {})
// );

console.log(
    namaMantan
    .filter( function(mantan, ke){
        return mantan == "made";
    })
    .map( function(mantan, ke) {
        return `${mantan} adalah mantan ke  ${ke+1}`
    })
);