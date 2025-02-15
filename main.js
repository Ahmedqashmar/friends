let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

// let mood = "create";
// let tmp;
// // get total

// function getTotal() {
//     if (price.value != "") {
//         let result = +price.value + +taxes.value + +ads.value - +discount.value;
//         total.innerHTML = result;
//         total.style.backgroundColor = "green";
//     } else {
//         total.style.backgroundColor = "#a00d02";
//         total.innerHTML = "";
//     }
// }

// // #################################################################################

// // create product
// // save localStorage
// // function createProduct() {
// //     let dataPro;
// //     if (localStorage.product != null) {
// //         dataPro = JSON.parse(localStorage.product);
// //     }
// //     else {
// //         dataPro = [];
// //     }

// //     let newPro = {
// //     title: title.value,
// //     price: price.value,
// //     taxes: taxes.value,
// //     ads: ads.value,
// //     discount: discount.value,
// //     total: total.innerHTML,
// //     count: count.value,
// //     category: category.value,
// //     }
// //     dataPro.push(newPro);
// //     localStorage.setItem('product', JSON.stringify(dataPro));
// //     console.log(dataPro);
// // }
// // ##############
// // create product
// // save localStorage
// let dataPro;
// if (localStorage.product != null) {
//     dataPro = JSON.parse(localStorage.product);
// } else {
//     dataPro = [];
// }
// submit.onclick = function () {
//     let newPro = {
//         title: title.value.toLowerCase(),
//         price: price.value,
//         taxes: taxes.value,
//         ads: ads.value,
//         discount: discount.value,
//         total: total.innerHTML,
//         count: count.value,
//         category: category.value.toLowerCase(),
//     };
//     if (title.value != '' && price.value != '' && category.value != '' && count.value < 100) {
//         if (mood === "create") {
//             if (newPro.count > 1) {
//                 for (let i = 0; i < newPro.count; i++) {
//                     dataPro.push(newPro);
//                 }
//             } else {
//                 dataPro.push(newPro);
//             }
//         } else {
//             dataPro[tmp] = newPro;
//             mood = "create";
//             submit.innerHTML = "Create";
//             count.style.display = "block";
//         }
//         clearData();
//     }
//     // if (mood === "create") {
//     //     if (newPro.count > 1) {
//     //         for (let i = 0; i < newPro.count; i++) {
//     //             dataPro.push(newPro);
//     //         }
//     //     } else {
//     //         dataPro.push(newPro);
//     //     }
//     // } else {
//     //     dataPro[tmp] = newPro;
//     //     mood = "create";
//     //     submit.innerHTML = "Create";
//     //     count.style.display = "block";
//     // }
//     localStorage.setItem("product", JSON.stringify(dataPro));
//     showData();
//     // console.log(dataPro);
// };
// // clear inputs
// function clearData() {
//     title.value = "";
//     price.value = "";
//     taxes.value = "";
//     ads.value = "";
//     discount.value = "";
//     total.innerHTML = "";
//     count.value = "";
//     category.value = "";
// }

// // localStorage.clear();

// // read
// function showData() {
//     getTotal();
//     let table = "";
//     for (let i = 0; i < dataPro.length; i++) {
//         // table = dataPro[i].title;
//         // table = dataPro[i];
//         table += `
//         <tr>
//             <td>${i + 1}</td>
//             <td>${dataPro[i].title}</td>
//             <td>${dataPro[i].price}</td>
//             <td>${dataPro[i].taxes}</td>
//             <td>${dataPro[i].ads}</td>
//             <td>${dataPro[i].discount}</td>
//             <td>${dataPro[i].total}</td>
//             <td>${dataPro[i].category}</td>
//             <td><button id="update" onclick="updateData(${i})">update</button></td>
//             <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
//         </tr>
//         `;
//         // console.log(table);
//     }
//     document.getElementById("tbody").innerHTML = table;
//     let btnDelete = document.getElementById("deleteAll");
//     if (dataPro.length > 0) {
//         btnDelete.innerHTML = `
//         <button onclick="deleteAll()">delete All (${dataPro.length})</button>
//         `;
//     } else {
//         btnDelete.innerHTML = "";
//     }
// }
// showData();

// // delete

// function deleteData(i) {
//     dataPro.splice(i, 1);
//     localStorage.product = JSON.stringify(dataPro);
//     showData();
// }

// // let delete1 = document.getElementById("deleteAll");

// function deleteAll() {
//     localStorage.clear();
//     dataPro.splice(0);
//     showData();
// }

// // update
// function updateData(i) {
//     // console.log(i);
//     title.value = dataPro[i].title;
//     price.value = dataPro[i].price;
//     taxes.value = dataPro[i].taxes;
//     ads.value = dataPro[i].ads;
//     discount.value = dataPro[i].discount;
//     category.value = dataPro[i].category;
//     count.style.display = "none";
//     submit.innerHTML = "update";
//     mood = "update";
//     tmp = i;
//     getTotal();
//     scroll({
//         top: 0,
//         behavior: "smooth",
//     });
//     // total.style.backgroundColor = "red";
// }

// // search
// let searchMood = "title";

// function getSearchMood(id) {
//     // console.log(id);
//     let mySearch = document.getElementById("search");
//     if (id === "searchTitle") {
//         searchMood = "title";
//         // mySearch.placeholder = "search by title";
//     } else {
//         searchMood = "category";
//         // mySearch.placeholder = "search by category";
//     }
//     mySearch.placeholder = "search by " + searchMood;
//     mySearch.focus();
//     mySearch.value = "";
//     showData();
//     // console.log(searchMood);
// }

// function searchData(value) {
//     // console.log(value);
//     let table = "";
//     if (searchMood === "title") {
//         for (let i = 0; i < dataPro.length; i++) {
//             if (dataPro[i].title.includes(value.toLowerCase())) {
//                 // console.log(dataPro[i].title);
//                 table += `
//                     <tr>
//                         <td>${i}</td>
//                         <td>${dataPro[i].title}</td>
//                         <td>${dataPro[i].price}</td>
//                         <td>${dataPro[i].taxes}</td>
//                         <td>${dataPro[i].ads}</td>
//                         <td>${dataPro[i].discount}</td>
//                         <td>${dataPro[i].total}</td>
//                         <td>${dataPro[i].category}</td>
//                         <td><button id="update" onclick="updateData(${i})">update</button></td>
//                         <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
//                     </tr>
//                     `;
//             }
//         }
//     } 
//     else {
//         for (let i = 0; i < dataPro.length; i++) {
//             if (dataPro[i].category.includes(value.toLowerCase())) {
//                 // console.log(dataPro[i].title);
//                 table += `
//                     <tr>
//                         <td>${i}</td>
//                         <td>${dataPro[i].title}</td>
//                         <td>${dataPro[i].price}</td>
//                         <td>${dataPro[i].taxes}</td>
//                         <td>${dataPro[i].ads}</td>
//                         <td>${dataPro[i].discount}</td>
//                         <td>${dataPro[i].total}</td>
//                         <td>${dataPro[i].category}</td>
//                         <td><button id="update" onclick="updateData(${i})">update</button></td>
//                         <td><button id="delete" onclick="deleteData(${i})">delete</button></td>
//                     </tr>
//                     `;
//             }
//         }
//     }
//     document.getElementById("tbody").innerHTML = table;
// }












