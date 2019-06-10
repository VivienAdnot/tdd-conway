const conway = () => {
  const LINE_JUMP = "\n";
  const SPACE_SEPARATOR = " ";
  const EMPTY_STRING = "";

  const draw = (line, depth) => {
    return drawSourceLine(line) + drawSuite(line, depth);
  };

  const drawSourceLine = line => {
    return line + LINE_JUMP;
  };

  const drawSuite = (line, depth) => {
    if (depth === 1) {
      return drawNextLine(line);
    }
    const nextLine = drawNextLine(line);
    return nextLine + LINE_JUMP + drawSuite(nextLine + LINE_JUMP, depth - 1);
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
      accumulateChunk(compressedLine, chunks, nextDistinctNumberIndex) +
        SPACE_SEPARATOR
    );
  };

  const accumulateChunk = (compressedLine, chunks, nextDistinctNumberIndex) =>
    chunks +
    countConsecutiveLineNumbers(
      compressedLine.substring(0, nextDistinctNumberIndex + 1)
    );

  const _indexOfNextDistinctNumber = (compressedLine, index) => {
    if (
      hasOnlyOneNumber(compressedLine) ||
      isNextNumberDistinct(compressedLine)
    ) {
      return index;
    }
    return _indexOfNextDistinctNumber(compressedLine.substring(1), index + 1);
  };

  const hasOnlyOneNumber = compressedLine => {
    return compressedLine.length === 1;
  };

  const isNextNumberDistinct = compressedLine => {
    return compressedLine[0] !== compressedLine[1];
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
