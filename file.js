const fileInput = document.getElementById("csv");
const output = document.getElementById("output");
const readFile = () => {
  const reader = new FileReader();
  reader.onload = () => {
    const data = reader.result;
    const titles = data.slice(0, data.indexOf("\n")).split(";");
    const titleValues = data.slice(data.indexOf("\n") + 1).split("\n");
    console.log("ti", titleValues);
    const answer = titleValues.map((value) => {
      const values = value.split(";");
      const mapping = titles.reduce((obj, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});

      return mapping;
    });
    output.innerHTML = JSON.stringify(answer);
  };
  reader.readAsBinaryString(fileInput.files[0]);
};

fileInput.addEventListener("change", readFile);
