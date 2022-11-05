const Diff = require("diff");

export const RED = "rgb(255,0,0)";
export const GREEN = "rgb(0,200,0)";
export const GRAY = "rgb(0,0,0, 0.5)";

export const calculateDiff = (one, other) => {
  const diff = Diff.diffChars(one, other);
  const colorized = diff.map((part) => {
    // green for additions, red for deletions
    const color = part.added ? GREEN : part.removed ? RED : GRAY;
    part.color = color;
    return part;
  });

  const added = colorized.filter((parts) => {
    return parts.color === GREEN || parts.color === GRAY;
  });

  const removed = colorized.filter((parts) => {
    return parts.color === RED || parts.color === GRAY;
  });

  return {
    colorized,
    added,
    removed,
  };
};
