const LEFT = true
const RIGHT = false

/*
  obj:
  imgArr 图片数组
  aniTime 动画执行时间
  intervalTime 图片停留时间
  autoplay 是否自动播放
*/
function Carousel({ imgList, dwellTime = 1000, autoTimeout = 1000, loop = true }) {
  this.imgList = Array.isArray(imgList) ? imgList : []
  this.fullImgList = [this.imgList[this.imgList.length - 1], ...this.imgList, this.imgList[0]]
  this.autoTimeout = autoTimeout  // 自动切换动画时间
  this.dwellTime = dwellTime // 图片驻留显示时间
  this.currentIndex = 0;

  this.container = document.getElementsByClassName('carousel_container')[0]

  this.moveWidth = this.container.offsetWidth; // 单次步长
  // 定时器
  this.timer = loop ? setInterval(() => {
    this.swipeImage(this.carouselList, LEFT, autoTimeout,)
  }, this.autoTimeout + this.dwellTime) : null
  this.startTime = Date.now()

  this.loop = loop  // 是否自动循环

}

Carousel.prototype = {
  // 初始化 添加图片，圆点按钮样式，绑定事件
  init: function () {
    this.initDom();

    // 添加轮播图图片
    let li = '';
    for (let i = 0; i < this.fullImgList.length; i++) {
      li += `<li style="left: ${i * this.moveWidth}px;width: ${this.moveWidth}px" class="carousel_img-list_item"><a href="${this.fullImgList[i].url}"><img src="${this.fullImgList[i].imgPath}" alt="carousel image"></a></li>`;
    }
    // li += `<div style="clear:both;"></div>`
    this.carouselList.innerHTML = li;


    // 添加小圆点
    let dotLi = ''
    for (let i = 0; i < this.imgList.length; i++) {
      if (i === this.currentIndex) {
        dotLi += `<li class="carousel_dot-list_item active" data-index=${i}></li>`;
      } else {
        dotLi += `<li class="carousel_dot-list_item" data-index=${i}></li>`;
      }
    }
    this.carouselDotList.innerHTML = dotLi

    // 上一张 下一张 小圆点绑定点击事件
    this.addEvent()
  },
  // 初始化dom 给容器中添加图片数组，上一张下一张按钮和圆点按钮数组
  initDom() {
    // 添加图片列表
    this.carouselList = document.createElement('ul')
    this.carouselList.className = 'carousel_img-list'
    this.carouselList.style.width = `${this.moveWidth * (imgList.length + 2)}px`
    this.carouselList.style.left = `-${this.moveWidth}px`
    this.container.appendChild(this.carouselList)

    // 按钮
    // 左右切换按钮
    this.prev = document.createElement('img')
    this.prev.className = 'carousel_prev-btn'
    this.prev.src = './img/carousel/left.png'
    this.container.appendChild(this.prev)

    // 下一张按钮
    this.next = document.createElement('img')
    this.next.className = 'carousel_next-btn'
    this.next.src = './img/carousel/right.png'
    if (this.imgList.length === 1) {
      this.prev.style.display = 'none'
      this.next.style.display = 'none'
    }
    this.container.appendChild(this.next)

    // 圆点按钮列表
    this.carouselDotList = document.createElement('ul')
    this.carouselDotList.className = 'carousel_dot-list'
    this.container.appendChild(this.carouselDotList)

  },
  // 设置 自动循环的 timer
  setTimer() {
    this.timer = this.loop ? setInterval(() => {
      this.swipeImage(this.carouselList, LEFT, this.autoTimeout,)
    }, this.autoTimeout + this.dwellTime) : null
  },
  // 核心方法之一 通过传入相关参数移动指定元素（本例中是图片列表）
  transform(element, index, animation, autoTimeout, width) {
    if (width === undefined) {
      width = this.moveWidth
    }
    const move = (index + 1) * width
    if (typeof element !== 'object') return
    element.style.transition = animation ? `left ${autoTimeout}ms` : 'none'
    element.style.left = `-${move}px`
  },
  // 和新方法之二 指定方向，及队头队尾情况判定
  swipeImage(element, direction, autoTimeout = 1000, animation = true, width) {
    console.log(autoTimeout);
    let _this = this
    if (direction === LEFT) {
      _this.currentIndex++
      _this.transform(element, _this.currentIndex, animation, autoTimeout, width)
      if (_this.currentIndex === _this.imgList.length) {
        _this.currentIndex = 0
        setTimeout(() => {
          _this.transform(element, _this.currentIndex, false)
        }, autoTimeout)
      }
    }
    else {
      _this.currentIndex--
      _this.transform(element, _this.currentIndex, animation, autoTimeout, width)
      if (_this.currentIndex === -1) {
        _this.currentIndex = _this.imgList.length - 1
        setTimeout(() => {
          _this.transform(element, _this.currentIndex, false, autoTimeout, width)
        }, autoTimeout)
      }
    }
    _this.updateDotList()
  },
  // 给元素绑定对应时间
  addEvent() {
    let _this = this
    this.next.addEventListener('mouseover', function () {
      clearInterval(_this.timer)
    })
    this.next.addEventListener('mouseout', () => {
      _this.setTimer()
    })
    this.prev.addEventListener('mouseover', function () {
      clearInterval(_this.timer)
    })
    this.prev.addEventListener('mouseout', () => {
      _this.setTimer()
    })
    this.prev.addEventListener('click', function () {
      _this.throttle(_this.swipeImage, 300)(_this.carouselList, RIGHT, 300)
      // _this.swipeImage(RIGHT)
    })
    this.next.addEventListener('click', function () {
      _this.throttle(_this.swipeImage, 300)(_this.carouselList, LEFT, 300)
    })
    const dotList = document.getElementsByClassName('carousel_dot-list_item')
    for (let i = 0; i < dotList.length; i++) {
      dotList[i].addEventListener('click', () => {
        console.log(dotList[i].getAttribute('data-index'));
        _this.currentIndex = Number.parseInt(dotList[i].getAttribute('data-index'))
        _this.transform(_this.carouselList, _this.currentIndex, true, _this.autoTimeout)
        _this.updateDotList()
      })
      dotList[i].addEventListener('mouseover', function () {
        clearInterval(_this.timer)
      })
      dotList[i].addEventListener('mouseout', () => {
        _this.setTimer()
      })
    }
  },
  // 用于更新圆点按钮样式
  updateDotList() {
    const dotList = document.getElementsByClassName('carousel_dot-list_item')
    for (let i = 0; i < dotList.length; i++) {
      if (i == this.currentIndex) {
        dotList[i].className = 'carousel_dot-list_item active'
      }
      else {
        dotList[i].className = 'carousel_dot-list_item'
      }
    }
  },
  // 节流函数 —— 时间戳版
  throttle(callback, delay) {
    const _this = this
    let current = Date.now()
    return function () {
      const args = arguments
      if (current - _this.startTime >= delay) {
        callback.apply(_this, args)
        _this.startTime = Date.now()
        console.log(123);
      }
    }
  }
}