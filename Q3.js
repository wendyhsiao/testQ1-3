// Stack 實作
function Stack() {
  let items = []
  this.push = function (el) {
    return items.push(el)
  }
  this.pop = function() {
    return items.pop()
  }
  this.size = function() {
    return items.length
  }
 }
let stack = new Stack()