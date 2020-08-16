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
  this.autoTimeout = autoTimeout
  this.dwellTime = dwellTime
  this.currentIndex = 0;

  this.container = document.getElementsByClassName('carousel-container')[0]

  this.moveWidth = this.container.offsetWidth;
  this.timer = loop ? setInterval(() => {
    this.swipeImage(this.carouselList, LEFT, _this.autoTimeout)
  }, this.autoTimeout + this.dwellTime) : null
  this.startTime = Date.now()

}

Carousel.prototype = {
  init: function () {
    this.initDom();

    // 添加轮播图图片
    let li = '';
    for (let i = 0; i < this.fullImgList.length; i++) {
      li += `<li style="left: ${i * this.moveWidth}px;width: ${this.moveWidth}px" class="list-item"><a href="${this.fullImgList[i].url}"><img src="${this.fullImgList[i].imgPath}" alt="carousel image"></a></li>`;
    }
    // li += `<div style="clear:both;"></div>`
    this.carouselList.innerHTML = li;


    // 添加小圆点
    let dotLi = ''
    for (let i = 0; i < this.imgList.length; i++) {
      if (i === this.currentIndex) {
        dotLi += `<li class="dot-list-item active" data-index=${i}></li>`;
      } else {
        dotLi += `<li class="dot-list-item" data-index=${i}></li>`;
      }
    }
    this.carouselDotList.innerHTML = dotLi

    // 上一张 下一张 小圆点绑定点击事件
    this.addEvent()


  },
  initDom() {
    // 添加图片列表
    this.carouselList = document.createElement('ul')
    this.carouselList.className = 'carousel-img-list'
    this.carouselList.style.width = `${this.moveWidth * (imgList.length + 2)}px`
    this.carouselList.style.left = `-${this.moveWidth}px`
    this.container.appendChild(this.carouselList)

    // 按钮
    // 左右切换按钮
    this.prev = document.createElement('img')
    this.prev.className = 'carousel-prev'
    this.prev.src = './img/carousel/left.png'
    this.container.appendChild(this.prev)

    // 下一张按钮
    this.next = document.createElement('img')
    this.next.className = 'carousel-next'
    this.next.src = './img/carousel/right.png'
    if (this.imgList.length === 1) {
      this.prev.style.display = 'none'
      this.next.style.display = 'none'
    }
    this.container.appendChild(this.next)

    // 圆点按钮列表
    this.carouselDotList = document.createElement('ul')
    this.carouselDotList.className = 'carousel-dot-list'
    this.container.appendChild(this.carouselDotList)

  },
  transform(element, index, animation, autoTimeout, width) {
    console.log(autoTimeout)
    if (width === undefined) {
      width = this.moveWidth
    }
    const move = (index + 1) * width
    if (typeof element !== 'object') return
    element.style.transition = animation ? `left ${autoTimeout}ms` : 'none'
    element.style.left = `-${move}px`
  },
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
  addEvent() {
    let _this = this
    this.next.addEventListener('mouseover', function () {
      clearInterval(_this.timer)
    })
    this.next.addEventListener('mouseout', () => {
      _this.timer = _this.loop ? setInterval(() => {
        _this.swipeImage(_this.carouselList, LEFT, _this.autoTimeout)
      }, _this.autoTimeout + _this.dwellTime) : null
    })
    this.prev.addEventListener('mouseover', function () {
      clearInterval(_this.timer)
    })
    this.prev.addEventListener('mouseout', () => {
      _this.timer = _this.loop ? setInterval(() => {
        _this.swipeImage(_this.carouselList, LEFT)
      }, _this.autoTimeout + _this.dwellTime) : null
    })
    this.prev.addEventListener('click', function () {
      _this.throttle(_this.swipeImage, 300)(_this.carouselList, RIGHT, 300)
      // _this.swipeImage(RIGHT)
    })
    this.next.addEventListener('click', function () {
      _this.throttle(_this.swipeImage, 300)(_this.carouselList, LEFT, 300)
    })
    const dotList = document.getElementsByClassName('dot-list-item')
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
        _this.timer = _this.loop ? setInterval(() => {
          _this.swipeImage(_this.carouselList, LEFT, _this.autoTimeout)
        }, _this.autoTimeout + _this.dwellTime) : null
      })
    }
  },
  updateDotList() {
    const dotList = document.getElementsByClassName('dot-list-item')
    for (let i = 0; i < dotList.length; i++) {
      if (i == this.currentIndex) {
        dotList[i].className = 'dot-list-item active'
      }
      else {
        dotList[i].className = 'dot-list-item'
      }
    }
  },
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