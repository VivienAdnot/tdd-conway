const conway = () => {
  const LINE_JUMP = "\n";
  const SPACE_SEPARATOR = " ";
  const EMPTY_STRING = "";

  const draw = line => {
    return drawSourceLine(line) + drawNextLine(line);
  };

  const drawSourceLine = line => {
    return line + LINE_JUMP;
  };

  const drawNextLine = line => {
    const compressedLine = _removeLineSpaces(line);
    return drawLineChunks(compressedLine, EMPTY_STRING);
  };

  const drawLineChunks = (compressedLine, chunks) => {
    if (compressedLine.length > 1 && compressedLine[0] !== compressedLine[1]) {
      return drawLineChunks(
        compressedLine.substring(1),
        chunks +
          countConsecutiveLineNumbers(compressedLine.substring(0, 1)) +
          SPACE_SEPARATOR
      );
    }
    return chunks + countConsecutiveLineNumbers(compressedLine);
  };

  const countConsecutiveLineNumbers = compressedLine => {
    return compressedLine.length + SPACE_SEPARATOR + compressedLine[0];
  };

  const _removeLineSpaces = line => {
    return line.replace(/\s/g, EMPTY_STRING);
  };

  return {
    draw,
    _removeLineSpaces
  };
};

module.exports = conway;
