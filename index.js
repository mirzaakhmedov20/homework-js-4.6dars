// Javascriptda masalalar ishlash.
// 3ta sondan kattasini topuvchi funksiya yozish.
// function kattaSon(num1, num2, num3) {
//   let number = Math.max(num1, num2, num3);
//   return number;
// }
// console.log(kattaSon(26, 25, 15));

// 2. Raqamlar bilan berilgan ixtiyoriy 2 xonali sonni so'zlar bilan ifodalab beruvchi funksiya:
// function sozBn(son) {
//   let birliklar = [
//     "",
//     "bir",
//     "ikki",
//     "uch",
//     "to'rt",
//     "besh",
//     "olti",
//     "yetti",
//     "sakkiz",
//     "to'qqiz",
//   ];
//   let onliklar = [
//     "",
//     "o'n",
//     "yigirma",
//     "o'ttiz",
//     "qirq",
//     "ellik",
//     "oltmish",
//     "yetmish",
//     "sakson",
//     "to'qson",
//   ];

//   let birlik = son % 10;
//   let onlik = Math.floor(son / 10);

//   let soz = "";

//   switch (onlik) {
//     case 0:
//       soz += "";
//       break;
//     case 1:
//       soz += "o'n ";
//       break;
//     default:
//       soz += onliklar[onlik] + " ";
//   }

//   soz += birliklar[birlik];

//   return soz;
// }
// console.log(sozBn(10));

//3. 1 dan n gacha nechta toq son borligini aniqlovchi funksiya:
// function countOddNumbers(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }

// 4. Ixtiyoriy sonning bo'luvchilar sonini topuvchi funksiya yozing
// function boluvchiSoni(number) {
//   let count = 0;
//   for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//       count++;
//     }
//   }
//   return count;
// }
// let result = 20;
// console.log(boluvchiSoni(result));
