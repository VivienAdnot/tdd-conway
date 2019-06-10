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
    if (compressedLine.length === 0) return chunks.trim();

    const nextDistinctNumberIndex = _indexOfNextDistinctNumber(
      compressedLine,
      0
    );

    return drawLineChunks(
      compressedLine.substring(nextDistinctNumberIndex + 1),
      chunks +
        countConsecutiveLineNumbers(
          compressedLine.substring(0, nextDistinctNumberIndex + 1)
        ) +
        SPACE_SEPARATOR
    );
  };

  const _indexOfNextDistinctNumber = (compressedLine, index) => {
    if (
      compressedLine.length === 1 ||
      compressedLine[0] !== compressedLine[1]
    ) {
      return index;
    }
    return _indexOfNextDistinctNumber(compressedLine.substring(1), index + 1);
  };

  const countConsecutiveLineNumbers = compressedLine => {
    return compressedLine.length + SPACE_SEPARATOR + compressedLine[0];
  };

  const _removeLineSpaces = line => {
    return line.replace(/\s/g, EMPTY_STRING);
  };

  return {
    draw,
    _indexOfNextDistinctNumber,
    _removeLineSpaces
  };
};

module.exports = conway;
