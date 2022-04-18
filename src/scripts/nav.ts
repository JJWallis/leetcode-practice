const hamburger = document.getElementById(
   'hamburger-toggle'
) as HTMLButtonElement
const navMb = document.querySelector('.nav--pm') as HTMLElement

hamburger.addEventListener('click', () => {
   const status = navMb.getAttribute('data-visible')
   navMb.setAttribute('data-visible', status === 'true' ? 'false' : 'true')
})

// easy to `understand` vs `maintainable` code vs shortest method
// Understand problem (repeat it with diff words) - Asking `clarifying` questions (unclear requirements + edge cases)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach? + `refactor` for readability, extensibility, re-usability, and performance

function countWords(words1: string[], words2: string[]): number {
   const allWords = [...words1, ...words2]
   const wordsToSearch = [...allWords]
   let total = 0

   console.log(allWords)

   allWords.forEach((word) => {
      wordsToSearch.shift()
      if (!wordsToSearch.includes(word)) total += 1
      // includes accepts fromIndex as 2nd param
   })

   // const wordToMatch = words2.join(' ')

   // words1.forEach((word) => {
   //    const regex = new RegExp(word, 'gi')
   //    const deleted = words1.shift()
   //    console.log(regex, deleted)
   //    const match = wordToMatch.match(regex)
   //    // console.log(match && match.length)
   //    if (match && match.length === 1) total + 1
   // })

   return total
}

console.log(
   countWords(
      ['leetcode', 'is', 'amazing', 'as', 'is'],
      ['amazing', 'leetcode', 'is']
   )
)
