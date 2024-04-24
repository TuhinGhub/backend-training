const math = require("./lib/math");
const fs = require("fs");

function main() {
  const addresult = math.add(2, 6);
  const subresult = math.sub(8, 6);
  const mulresult = math.mul(4, 7);
  const divresult = math.div(22, 11);
  const csvData =
    `Operation,Number 1,Number 2,Result\n` +
    `Addition,2,6,${addresult}\n` +
    `Subtraction,8,6,${subresult}\n` +
    `Multiplication,4,7,${mulresult}\n` +
    `Division,22,11,${divresult}\n`;

  fs.writeFile("results.csv", csvData, "utf8", (err) => {
    if (err) {
      console.error("Error writing to CSV file:", err);
      return;
    }
    console.log("CSV file generated: results.csv");
  });
}

main();
