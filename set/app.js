


//  Find if there are any duplicates

// areThereDuplicates Solution(Multiple Pointers)

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}



//  Find if there are any duplicates

// areThereDuplicates One Liner Solution


function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}