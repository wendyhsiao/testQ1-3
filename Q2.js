// 實作 Debounce
function debounce(func, delay) {
  let timer = null;
 
  return () => {
    let context = this;
    let args = arguments;
    
    // 阻止 setTimeout() 
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay)
  }
}

// 印出 scrollY
function handleScroll() {
  console.log(window.scrollY)
}
window.addEventListener('scroll', debounce(handleScroll));