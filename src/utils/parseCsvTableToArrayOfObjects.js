const csvToArrayOfObjects = (csv) => {
  const quote = '"';
  const commas = csv.split(',').length - 1;
  const tabs = csv.split('\t').length - 1;
  let separater = '\t';
  if (commas > tabs) {
    separater = /,\s*(?=(?:[^"]|"[^"]*")*$)/;
  }

  const semiColons = csv.split(';').length - 1;
  if (semiColons > commas && semiColons > tabs) {
    separater = /;\s*(?=(?:[^"]|"[^"]*")*$)/;
  }

  const lines = csv.split(/\r?\n(?=(?:[^"]|"[^"]*")*$)/);
  const rows = [];

  for (let i = 0; i < lines.length; i += 1) {
    rows[i] = lines[i].split(separater);
    for (let a = 0; a < rows[i].length; a += 1) {
      if ((rows[i][a].charAt(0) === '"' && rows[i][a].charAt(rows[i][a].length - 1) === '"')
        || (rows[i][a].charAt(0) === '\'' && rows[i][a].charAt(rows[i][a].length - 1) === '\'')) {
        rows[i][a] = rows[i][a].substr(1);
        rows[i][a] = rows[i][a].slice(0, -1);
      }
    }
  }

  if (rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === '') {
    rows.pop();
  }

  let result = '[';

  for (let x = 1; x < rows.length; x += 1) {
    const emptyRow = rows[x].every((item) => item === '');
    if (!emptyRow) {
      result += '{';
      for (let y = 0; y < rows[x].length; y += 1) {
        rows[x][y] = rows[x][y].replaceAll('\\', '\\\\');
        rows[x][y] = rows[x][y].replaceAll('"', '\\"');
        rows[x][y] = rows[x][y].replaceAll('\n', '\\n');
        rows[x][y] = rows[x][y].replaceAll('\r', ' ');
        rows[x][y] = rows[x][y].trim();
        rows[0][y] = rows[0][y].trim();
        if (rows[0][y] !== '') {
          result = `${result}${quote}${rows[0][y]}${quote}: ${quote}${rows[x][y]}${quote},`;
        }
      }
      result = result.slice(0, -1);
      result += '},';
    }
  }
  result = result.slice(0, -1);
  result += ']';

  return JSON.parse(result);
};

export default csvToArrayOfObjects;