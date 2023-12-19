// Javascriptda masalalar ishlash.
// 3ta sondan kattasini topuvchi funksiya yozish.
function kattaSon(num1, num2, num3) {
  let number = Math.max(num1, num2, num3);
  return number;
}
console.log(kattaSon(26, 25, 15));

// 2. Raqamlar bilan berilgan ixtiyoriy 2 xonali sonni so'zlar bilan ifodalab beruvchi funksiya:

//3. 1 dan n gacha nechta toq son borligini aniqlovchi funksiya:
function countOddNumbers(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

// 4. Ixtiyoriy sonning bo'luvchilar sonini topuvchi funksiya yozing


// 5 . Agar berilgan son 3 ga hamda 5 ga karrali bolsa uning kvadratini aks holda kubini qaytaruvchi fuksiya yozing.


//6 . Ixtiyoriy 2 ta sondan raqamlari ko'paytmasi eng katta boladigani topib beruvchi funksiya yozing


// 7 . Ixtiyoriy sonning tub yoki tub emasligini aniqlovchi funksiya yozing
