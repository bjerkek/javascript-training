const terms = document.querySelector('.terms-and-conditions')
//const watch = document.querySelector('.watch')
const button = document.querySelector('.accept')

const ob = new IntersectionObserver((payload) => {
  if(payload[0].intersectionRatio === 1) {
    button.disabled = false
    ob.unobserve(terms.lastElementChild)  // stop observing
  }
},{
  root: terms,
  threshold: 1
})

ob.observe(terms.lastElementChild)