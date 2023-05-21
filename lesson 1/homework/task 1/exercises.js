// begin1
// let a = +prompt("A tomonni kiriting");
// let b = +prompt("B tomonni kiriting");

// S = a * b;
// P = 2 * (a + b);

// window.alert("To'rtburchakning yuzasi" + "=" + S);
// window.alert("To'rtburchakning perimetri" + "=" + P);

// begin2
// let d = +prompt("Diametrini kiriting");
// L = Math.PI * d;

// window.alert(L);

// begin3;
// let a = +prompt("A tomonni kiriting");
// V = a ** 3;
// S = 6 * a ** 2;
// window.alert("Hajmi = " + V);
// window.alert("To'la sirti = " + S);

// begin4
// let a = +prompt("A tomonni kiriting");
// let b = +prompt("B tomonni kiriting");
// let c = +prompt("C tomonni kiriting");
// V = a * b * c;
// S = 2 * (a * b + a * c + b * c);
// window.alert("Hajmi = " + V);
// window.alert("To'la sirti = " + S);

// begin5
// let a = +prompt("A sonni kiriting");
// let b = +prompt("B sonni kiriting");
// M = (a + b) / 2;
// window.alert("Ikki sonning o'rta arifmetigi = " + M);

// begin6
// let a = +prompt("A tomonni kiriting");
// let b = +prompt("B tomonni kiriting");
// c = (a ** 2 + b ** 2) ** (1 / 2);
// P = a + b + c;
// window.alert("Gipotenuzasi = " + c);
// window.alert("Perimetri = " + P);

// begin7
// let R1 = +prompt("R1 ni kiriting");
// let R2 = +prompt("R2 ni kiriting");
// if (R1 > R2) {
//   S1 = Math.PI * R1;
//   S2 = Math.PI * R2;
//   S = Math.PI * (R1 - R2);
//   window.alert("1-aylana yuzasi = " + S1);
//   window.alert("2-aylana yuzasi = " + S1);
//   window.alert("Aylanalar yuzasi = " + S);
// } else {
//   window.alert("wrong values");
// }

// begin8
// let L = +prompt("Aylana uzunligini kiriting");
// R = L / (2 * Math.PI);
// S = Math.PI * R ** 2;
// window.alert("Aylananing radiusi = " + R);
// window.alert("Aylananing yuzasi = " + S);

// begin9
// let x1 = +prompt("X1 nuqtani kiriting");
// let x2 = +prompt("X2 nuqtani kiriting");
// let y1 = +prompt("Y1 nuqtani kiriting");
// let y2 = +prompt("Y2 nuqtani kiriting");
// L = ((x1 ** 2 - x2 ** 2) ** 2 + (y1 ** 2 - y2 ** 2) ** 2) ** (1 / 2);
// window.alert("Ikki nuqta orasidagi masofa = " + L);

// begin10
// let a = +prompt("A sonni kiriting");
// b = a;
// c = b;
// a = c;
// window.alert("a = " + a);
// window.alert("b = " + b);
// window.alert("c = " + c);

// begin11
// let x = +prompt("x o'zgaruvchini kiriting");
// y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;
// window.alert("y funksiya qiymati = " + y);

// begin12
// let a = +prompt("A sonni kiriting");
// a3 = a ** 3;
// a6 = a ** 6;
// a9 = a ** 9;
// a15 = a ** 15;
// window.alert("A^3 = " + a3);
// window.alert("A^6 = " + a6);
// window.alert("A^9 = " + a9);
// window.alert("A^15 = " + a15);

// begin13
// let Tf = +prompt("Temperatura (Tf farengeyt) kiriting");
// Tc = (Tf - 32) * (5 / 9);
// window.alert("Gradus selsiy = " + Tc);

// begin14
// let x = +prompt("Necha kilo shokolad = ");
// let a = +prompt("Narxi qancha = ");
// let y = +prompt("Necha kilo konfet = ");
// let b = +prompt("Narxi qancha = ");
// choco = a / x;
// candy = b / y;
// let diff;
// if (choco > candy) {
//   diff = choco - candy;
//   window.alert("Shokoladning konfetdan qanchalik qimmatligi = " + diff);
// } else if (candy > choco) {
//   diff = candy - choco;
//   window.alert("Konfetning shokoladdan qanchalik qimmatligi = " + diff);
// } else if ((candy = choco)) {
//   window.alert("Narxi teng");
// }

// begin15
// let x = +prompt("Necha kilo olma = ");
// let a = +prompt("Kilosi necha so'm = ");
// let y = +prompt("Necha kilo olma = ");
// let b = +prompt("Kilosi necha so'm = ");
// olma1 = a * x;
// olma2 = y * b;
// overall = olma1 + olma2;
// window.alert("Umumiy sarflangan a pul = " + overall + " so'm");

/*--Integer--*/

// integer1
// let abc = +prompt("Uch xonali son kiriting = ");
// c = abc % 10;
// b = ((abc % 100) - c) / 10;
// window.alert("Oxirgi raqami = " + c);
// window.alert("O'nlar xonasidagi raqami = " + b);

// integer2
// let abc = +prompt("Uch xonali son kiriting = ");
// c = abc % 10;
// b = ((abc % 100) - c) / 10;
// a = (abc - (abc % 100)) / 100;
// sum = a + b + c;
// window.alert("Sonning raqamlari yig'indisi = " + sum);

// integer3
// let abc = +prompt("Uch xonali son kiriting = ");
// c = abc % 10;
// b = ((abc % 100) - c) / 10;
// a = (abc - (abc % 100)) / 100;
// n1 = c * 100;
// n2 = b * 10;
// reverse = n1 + n2 + a;
// window.alert("Sonning teskari tartibdagi holati = " + reverse);

// integer4
// let abc = +prompt("Uch xonali son kiriting = ");
// c = abc % 10;
// b = ((abc % 100) - c) / 10;
// a = (abc - (abc % 100)) / 100;
// n1 = b * 100;
// n2 = a * 10;
// reverse = n1 + n2 + c;
// window.alert("Alishtirilgan tartibdagi holati = " + reverse);

// integer5
// let abc = +prompt("Uch xonali son kiriting = ");
// c = abc % 10;
// b = ((abc % 100) - c) / 10;
// a = (abc - (abc % 100)) / 100;
// n1 = c * 10;
// n2 = a * 100;
// reverse = n1 + n2 + b;
// window.alert("Alishtirilgan tartibdagi holati = " + reverse);

// integer6
// let num = +prompt("Son kiriting = ");
// if (num > 999) {
//   fourth = parseInt((num % 10000) / 1000);
//   window.alert(fourth);
// } else {
//   window.alert("999 dan katta son kiriting !!!!!!");
// }

// integer7
// let s = +prompt("Necha sekund vaqt o'tdi = ");
// m = parseInt(s / 60);
// if (m > 1) {
//   window.alert(m + " minut vaqt o'tdi");
// } else {
//   window.alert("hali minut vaqt o'tmadi");
// }

// integer8
// let s = +prompt("Necha sekund vaqt o'tdi = ");
// h = parseInt(s / 3600);
// if (h > 1) {
//   window.alert(h + " soat vaqt o'tdi");
// } else {
//   window.alert("hali soat vaqt o'tmadi");
// }

// integer9
// let s = +prompt("Necha sekund vaqt o'tdi = ");
// m = parseInt(s / 60);
// if (m > 0) {
//   window.alert(m + " minut");
//   s = s % 60;
//   window.alert(s + " sekund vaqt o'tdi");
// } else if ((m = 0)) {
//   window.alert(s + "sekund vaqt o'tdi");
// } else {
//   s = s % 60;
//   window.alert(s + " sekund vaqt o'tdi");
// }

// integer10
// let s = +prompt("Necha sekund vaqt o'tdi = ");
// h = parseInt(s / 3600);
// if (h > 0) {
//   window.alert(h + " soat");
//   s = s % 3600;
//   window.alert(s + " sekund vaqt o'tdi");
// } else if ((h = 0)) {
//   window.alert(s + "sekund vaqt o'tdi");
// } else {
//   s = s % 3600;
//   window.alert(s + " sekund vaqt o'tdi");
// }
