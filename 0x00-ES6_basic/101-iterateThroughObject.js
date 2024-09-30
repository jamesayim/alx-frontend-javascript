export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join with ' | '
  return Array.from(reportWithIterator).join(' | ');
}

