let con = document.querySelector('.con')

let intervalObj = {} // 定时对象
let moveInterval = 4 // 间隔
let moveTime = window.innerWidth / 5 * moveInterval // 移动的时间

/**
 * [slowlyMove 容器 .con 慢慢移动]
 */
function slowlyMove () {
  intervalObj = setInterval(() => {
    con.scrollLeft += 1 // 最小整数
  }, moveInterval)

  setTimeout(() => {
    clearInterval(intervalObj)
  }, moveTime)
}

function add () {
  let conUl = document.querySelector('.con ul')

  // 创建新增节点，并添加
  let li = document.createElement('li')
  li.className = 'active'
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
  setInterval(() => {
    add()
  }, 3 * 1000)
}
