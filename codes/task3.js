const divideAndSort = (num) => {
  const status = num.toString().split('').includes('0');
  let split = num.toString().split('0');
  let result = "";

  switch (typeof num) {
    case 'number':
      if (num < Number.MAX_SAFE_INTEGER) {
        if (!status) {
          console.log(`deret angka (${num}) tidak dapat diurutkan karena tidak terdapat angka 0`);
        } else {
          split.map((e) => {
            let x = e.split('').sort().join('');
            result += x;
          });
          console.log(`Output : ${parseInt(result)}`);
        }
        break;
      }
    case 'bigint':
      if (!status) {
        console.log(`deret angka (${num}) tidak dapat diurutkan karena tidak terdapat angka 0`);
      } else {
        split.map((e) => {
          let x = e.split('').sort().join('');
          result = + x;
        });
        console.log(`Output : ${BigInt(result)}`);
      }
      break;
    default:
      console.log('deret angka harus bertipe Number atau BigInt');
  }
};

divideAndSort(5956560159466056); //output = Output : 55566914566956