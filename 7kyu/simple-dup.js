/** In this Kata, you will remove the left-most duplicates from a array/list of integers and return the result.
  Examples:
    -- Remove the 3's at indices 0 and 3
    -- followed by removing a 4 at index 1
    solve [3, 4, 4, 3, 6, 3] -- => [4, 6, 3]
 */

const solve = arr => [... new Set([...arr].reverse())].reverse()