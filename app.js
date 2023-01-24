// let a = () => {
//     return "ABC"
// };

// let b = a();
// console.log(a());

// let abc = () => "ABC"; // ye singl value k lie use hoga
// let c = a => "ABC"; // single perameter


/* ====== Lexical Scoping ====== */ //variables pehle apne scope main check karega then global

// we get Global variable in every Nested layer. 

// let a = "ABC";
// let abc = () => {
//     let a = 123;
//     console.log(a);
// };

// abc();

//Default Perameter

// let abc = (a = "default") => {  /// agr hm perameter main kuch value nhi denge to default value show hogi  value kuch bhi de skte hai.
//     console.log(a);
// };

// abc();

// Methods creates in Class
// Methods Always Something

/* ======= Array Functions ===== */
//Map
// No return value


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.map((e) => {
//     console.log(e);
// });

// let arr2 = [1, 2, 3, 4, 5, 7, 8];

// let arr3 = arr2.map((e) => {
//     console.log(e);
//     return "a";
// });
// console.log(arr3);

// ForEach

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((e) => {
//     e = e + "a";
//     console.log(e);
// });

// console.log(arr);


let arr1 = [
    {
        id: 123,
        name: "ABC",
        category: "a"
    },
    {
        id: 456,
        name: "CDE",
        category: "c"
    },
    {
        id: 789,
        name: "FGH",
        category: "a"
    },
    {
        id: 111,
        name: "IJK",
        category: "c"
    },
    {
        id: 112,
        name: "KJK",
        category: "b"
    },
    {
        id: 113,
        name: "KJh",
        category: "b"
    }


];

// let ids = arr1.map((x) => x.id);
// console.log(ids);

// let ids = arr1.map((x) => ({
//     name: x.name,
//     category: x.category
// }));
// console.log(ids);
// let arr2 = arr1.filter((x) => {
//     if (x.category == "a") { //    if (x.category == "a" || x.category == "c") {
//     return

//     }
// });
// console.log(arr2);


// let arr2 = arr1.filter((x) => {
//     if (x.category == "a") { //    if (x.category == "a" || x.category == "c") {
//         return x;;

//     }
// })
//     .map((x) => x.id);
// console.log(arr2);


let arr2 = arr1.map((x) => {
    if (x.category == "a") { //    if (x.category == "a" || x.category == "c") {
        return x.id;

    }
}).filter(Boolean);
console.log(arr2);


