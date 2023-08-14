function getFileContent() {
  const fs = require("fs");
  fs.readFile("data.txt", "utf-8", function (error, data) {
    if (error) throw error;
    console.log(data);
  });
}

function getNumberOfWords() {
  const fs = require("fs");
  let count = 0;
  fs.readFile("data.txt", "utf-8", function (error, data) {
    if (error) throw error;
    for (let i = 0; i < data.length; i++) {
      if (data[i] === " " && data[i - 1] !== " ") {
        count++;
      }
    }
    console.log(`word count: ${count}`);
  });
}

function getFileContentInReverse() {
  const fs = require("fs");
  const rs = require("lodash");
  fs.readFile("data.txt", "utf-8", function (error, data) {
    if (error) throw error;
    const array = rs.split(data, " ");
    const reversedArray = rs.reverse(array);
    console.log(reversedArray.toString());
  });
}

function getFileContentWithoutDuplicates() {
  const fs = require("fs");
  const rs = require("lodash");
  fs.readFile("data.txt", "utf-8", function (error, data) {
    if (error) throw error;
    const array = rs.split(data, " ");
    const notDuplicatedArray = rs.uniq(array);
    console.log(notDuplicatedArray.toString());
  });
}

function getNumberOfWordsInFile() {
  const fs = require("fs");
  const rs = require("lodash");
  fs.readFile("data.txt", "utf-8", function (error, data) {
    if (error) throw error;
    const array = rs.split(data, " ");
    const notDuplicatedArray = rs.uniq(array);
    console.log(notDuplicatedArray.length.toString());
  });
}

function getFileContentInUppercase() {
  const fs = require("fs");
  const rs = require("lodash");
  fs.readFile("data.txt", "utf-8", function (error, data) {
    if (error) throw error;
    const array = rs.split(data, " ");
    const notDuplicatedArray = rs.uniq(array);
    const toUpperCase = rs.upperCase(notDuplicatedArray);
    console.log(toUpperCase);
  });
}

function getWordsWithoutDuplicates() {
  /*This function get number of words without duplicates
      and their length is larger than 5
      */
  const fs = require("fs");
  const rs = require("lodash");
  let myStr = "";
  fs.readFile("data.txt", "utf-8", function (error, data) {
    if (error) throw error;
    const array = rs.split(data, " ");
    const notDuplicatedArray = rs.uniq(array);
    myStr = notDuplicatedArray.filter((char) => char.length > 5);
    console.log(myStr);
  });
}
