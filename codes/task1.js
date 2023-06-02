//Program Cek Kata Palindrom
const palindrome = (teks) => {
  if (typeof teks !== "string") {
    console.log("teks harus bertipe string");
  } else {
    let x = teks.length - 1;
    let result = "";
    while (x >= 0) {
      result += teks[x];
      x--;
    }
    if (teks.toLowerCase() === result.toLowerCase()) {
      console.log(`${teks} : palindrome`)
    } else {
      console.log(`${teks} : not palindrome`)
    }
  }
}

palindrome(6); //output = teks harus bertipe string
palindrome("siang"); //output = siang : not palindrome
palindrome("malam"); //output = malam : palindrome



//Program Membalik Kalimat
const reverse = (word) => {
  if (typeof word === "string") {
    let split = word.split(" ");
    if (split.length < 2) {
      console.log("kalimat minimal terdiri dari 2 kata");
    } else {
      let result = "";
      let x = split.length - 1;
      for (let i = x; i >= 0; i--) {
        result += split[i] + " ";
      }
      console.log(result);
    }
  } else {
    console.log("kata harus bertipe string");
  }
}

reverse("Saya");
reverse("Saya Belajar Javascript");
reverse(true);