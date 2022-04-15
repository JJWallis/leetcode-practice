const hamburger = document.getElementById(
   'hamburger-toggle'
) as HTMLButtonElement
const navMb = document.querySelector('.nav--pm') as HTMLElement

hamburger.addEventListener('click', () => {
   const status = navMb.getAttribute('data-visible')
   navMb.setAttribute('data-visible', status === 'true' ? 'false' : 'true')
   console.log(status)
})

// easy to `understand` vs `maintainable` code vs shortest method
// Understand problem (repeat it with diff words) - Asking `clarifying` questions (unclear requirements + edge cases)
// devise a plan - take lager issue + break down into smaller
// execute plan - from outline of plan via comments
// what do I currently know
// review solution - better approach? + `refactor` for readability, extensibility, re-usability, and performance

function kWeakestRows(mat: number[][], k: number): number[] {
   const totals = []

   for (let i = 0; i < mat.length; i++) {
      const curr = mat[i]
      const currTotal = curr.reduce((acc, num) => acc + num, 0)
      totals.push(currTotal)
   }

   console.log(totals)

   return []
}

console.log(
   kWeakestRows(
      [
         [1, 1, 0, 0, 0],
         [1, 1, 1, 1, 0],
         [1, 0, 0, 0, 0],
         [1, 1, 0, 0, 0],
         [1, 1, 1, 1, 1],
      ],
      3
   )
)
