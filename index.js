const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
// const sorter = null;

const sorter = (list, fnSort) => {

  dataSorted = fnSort(list);
  let c = 1;
  let numberedData = [];
  for (x=0; x<dataSorted.length; x++) {
    numberedData.push(x+c + '.' + dataSorted[x]);
  }
  
  return numberedData;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
// const sortAscending = null;

const sortAscending = (a) => {
  return a.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
// const sortDescending = null;

const sortDescending = (b) => {
  return b.sort().reverse();
}

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
