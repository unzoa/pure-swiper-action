let direction = 'vertical'

let con = document.querySelector('.con')
let intervalObj = {} // 定时对象
let moveInterval = 4 // 间隔
let moveItemCount = 5
let moveTime = (direction === 'vertical' ? con.offsetHeight : window.innerWidth) / moveItemCount * moveInterval // 移动的时间

let autoplayTimer = {}
/**
 * [slowlyMove 容器 .con 慢慢移动]
 */
function slowlyMove () {
  intervalObj = setInterval(() => {
    direction === 'vertical'
      ? con.scrollTop += 1 // 向上移动
      : con.scrollLeft += 1 // 向左移动
  }, moveInterval)

  setTimeout(() => {
    clearInterval(intervalObj)
  }, moveTime)
}

function add () {
  let conUl = document.querySelector('.con ul')

  // 创建新增节点，并添加
  let li = document.createElement('li')
  li.className = 'slide-item active ' + direction
  li.style['animation-duration'] = '1s' // moveTime / 1000 + 's'
  li.style.background = '#3399f3'
  conUl.appendChild(li)

  slowlyMove()

  // 删除第一个li节点
  setTimeout(() => {
    let lis = document.querySelectorAll('.con ul li')
    lis[0].remove()
  }, moveTime)
}

function action () {
  autoplayTimer = setInterval(() => {
    add()
  }, 3 * 1000)
}

function directChange (value) {
  clearInterval(autoplayTimer)
  direction = value
  let items = document.getElementsByClassName('slide-item')
  for (let item of items) {
    item.className = 'slide-item ' + value
  }
}
