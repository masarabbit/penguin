function init() {

  const decodeRef = { a: ' h 1', b: ' h 2', e: ' h 3', g: ' h 4', j: ' h 5', A: ' v 1', B: ' v 2', E: ' v 3', G: ' v 4', J: ' v 5', n: 'h -1', u: ' h -2', k: ' h -3', x: ' h -4', i: ' h -5', N: ' v -1', U: ' v -2', K: ' v -3', X: ' v -4', I: ' v -5', w: ' v ', W: ' h ', D: '<path d="M', o: '<path fill="pink" d="M', F: '<path fill="#fff" d="M', '/': '/>', d: '<path d="M', f: '<path fill="#fff" d="M'}
  const decode = arr => arr.split('').map(c=> !decodeRef[c] ? c : decodeRef[c]).join('')

  const penguinSvg = {
    up: `d 22 11eAbBaBaEaBaAaAaAbAaExGnBuAaBnAkKnNnAuBxUaNuNnInAuAuKaNaNaNaNaNaIaUaUaNbN"/D 68 12jAaAaBaEaBbAbAaAbBiw6nExUnAxAaBkKuNnInAuAuKaUaNbNaUaIaUaNaN"/D 167 12eAbAaBaJaAaBbAaAaAaBW-6AnEnGkUaNuNuNuAaBxUaNuUnKiUaNbNbNaNaUaKaUaNbN"/D 115 13W6AaAaBaGaAbAbAeAaBnAxNnJnAnAkNnAkAaBnAuNnUaNkUnXnAxKaNbNaNaXaXaNaN"/D 215 13gAbBaGaEaAbAaAaGkNnEnBuGkXkNnAxNnNnKnAuAuKaNaNaNaNaNaNaKaKaNaNbN"/`,
    dUp: `d 22 12eAbAaAaAaJaBbAaAaBaEaBiAnAnAnEkUnNxBuUkUnKkKaNaNaNaNaUaXaKaNbN"/D 69 12jAaAaEaBaBaAaAaAbAaAaExNnGnAnExNxAaBuAuKxUaKnNxUaNaNaUbUaXaKaUbN"/D 116 12jAaAeBnAaBaAaAbAbAbAaAaAnAxNuAaJnAnBuAuNiEkKkw-6nAxUaUbUbNaIaXaNaN"/D 167 13jAaAaAaw7aAaAaAaAaAaAaEiNuBnBuAaBxUnNnNuAkNuUnXaNiUaNeNaNaNaNaUaUaNaNaN"/D 216 13W6AaAaAaw8nAbAaBaAaGkNkAnBnEkUuNuNiNkw-6aUxUaNeNeNaNaNaUaNaNaN"/`,
    side: `d 23 11eAeAaBaBeBnAkBaAaAbAaAaBaEkNnNnNnKnUnNnNnNkAuBnBnBnBnBnEnNnNnUnKaKaNaNaUaUaXaNaNbN"/D 69 12jAbAaAjBnAuAnEaAaAbAbAaEkNkUnKnNuNuAuAuBnAnw7aAaAbEkNnKuNnUaUnAxKaNaUbUaIaKaNbN"/D 117 12W6AaAaAaAeAaBxEbAaAeAaBiNuNnUnUW-6AnAnBnw6aBaAaAaBkUiNnUbNaKnAxKaNaNbNaUaw-6aNaNaN"/D 168 12gAbAaBaAaAeBxAnBaAbAaBaEkNnUnKnNnNnNxAnAnAnAnAnBnGnKnAxKaNaNaNaNaNaNaNaXaNaUbN"/D 216 12gAbAaBbAbBkAnEaAbAaAaAaBxNuXnUnNiAnAnAnAnAnAnGaAuNuUaNaNnAxUaNaNbNaNaNaNaNaKaUaNaN"/F 24 16aBnU"/F 71 16aBnU"/F 119 16aBnU"/F 168 16aBnU"/F 216 16aBnU"/F 24 20eAaAaAaBaEaGnAnAkAW-6NkUnNaUaUaUaUaUbN"/F 73 21bAbAaEaBaBnAnAuAuAuAkNnNnw-7aNaUbNbN"/F 118 21W6BaBaAaGnBuAuAiNnUnw-6aUaNaN"/F 168 21gAaAaAaEaGnBnAW-7NiIaUaNaNaNaNaN"/F 216 21jAaBaw7nAnAnAkNiNnNnXaNaNaNaNaNaN"/D 126 31bBxNbN"/D 76 32gBxU"/D 211 32aAnN"/D 163 33gBxU"/D 212 33eAkN"/D 19 34bAeBiK"/D 27 34gBnAkK"/D 170 34gGuNnNnU"/D 218 34eAaBkNnU"/`,
    dDown: `d 23 12eAbAaAaGaGaAaAaAaAaEkNnUnKnUnNnAnNnNxAnAnAnGnBnAnEnNxUaUaUaNaNaNaUaXaUaNaNbN"/D 168 12eAbAaAaBaw6aAaBaAaAaBxNnKnKnNnNnAnNnNiAnAnBnBnBnGnNnUkKaNaNbNaNaNaUaUaUaNaNbN"/D 215 12jAbBaw7aBbBbBaBxNnKnKnNuNnNxAnAnAnAnBnGnGuNnKaKaNuAxNnNaNaNbNbNbNaNaUaUaNaNaN"/D 68 13W6AaAaAaBaEaAaAaAeAaBiNnNnUnNnNnAuNxAnAnJnBnAnAW-6KaNaNaNaNaNaNaIaKaNaN"/D 115 13jAbAaAnBaUaAaBaBeAeAaBW-6UnNnNnNuAkNnAuAnBnGnEnAuAkXaNaUaNaNaNnIaKaNbN"/F 21 16aBnU"/F 122 16aBnU"/F 215 16aBnU"/F 75 17aBnU"/F 167 17aAnN"/F 68 18aBnU"/F 114 18aBnU"/F 173 18aAnN"/F 22 20gAaAaNaAaBaEaBaAnBnAnAkAnAxNuAnNuUnKaNaUaXaNaNaN"/F 118 20aAeNbAaAaAaBaJnBuAnAnAuAxNkNnw-6aXaUaNbN"/F 165 20jAaAaNaAaAaEaw6nAnAkAiNiUnXaUaUaUaNaN"/F 215 20gAaAbAaEaw6nAnAn3XaXaUaNaNaNaN"/F 69 21gAbNaAaAaBaAaJnAuAnBuAxNnAnNuUnKaUaIaNaN"/D 77 32aAaBkUaN"/D 125 32eEkNnNaN"/D 160 32aAnN"/D 16 33aAnN"/D 27 34eAaBxK"/D 163 34eAaBkNnU"/D 171 34eAaBkNnU"/D 211 34gBxU"/D 219 34bAbBnAkX"/D 20 35bAaBnAuX"/D 69 35aAbBuAuKaN"/D 116 35aAbAaAnAkX"/`,
    down: `d 22 11eAbBaBaEaBaAaAaAbAaEiUnUnUnNnNuAnAnNnNuAnBnBnBnAnAuAuXaNaNaNaNaNaXaUaUaNbN"/D 68 12jAaAaBaEaAaAaAbAaAbBiNnUnUnNuNnAnBuUuAnAnBnEnAnAuAuKaUaNaNaNaNaIaUaNaN"/D 167 12eAbAaBaJaAaBaAbAaAaBiNnNnKnKuNnAnAnNnNuAuBnBnBuAkNnNaNaNbNaNaNaUaKaUaNbN"/D 115 13W6AaAaBaEaBbAbAbAaAaAnAxNuNnUnNnNnNkBnNnNnAuBnBnBnAxKaNaNaNaNaXaKaNaN"/D 215 13gAbBaGaEaAbAaAaGxNnNnKnUnNnNnAnAnNnNuAnAnBnBnAnAxUaUaNbNaNaKaKaNaNbN"/F 19 16aBnU"/F 26 16aBnU"/F 73 16aBnU"/F 165 16aBnU"/F 67 17aBnU"/F 120 17aAnN"/F 171 17aBnU"/F 213 17aBnU"/F 114 18aAnN"/F 219 18aBnU"/F 73 19aAbAaBaBaw6nAnAkAW-7NnNnUnKaKaUaNaNbBbUaN"/F 20 20bAaAaNaNbAaAaBaBaBaEnAnAnAnAW-7NuNnNnNnXaUaUaUaN"/F 165 20bAaAaNaNaAbEaEaw6nAxNkNxNnNnIaUaUbN"/F 116 21aAaAaUeAaAaAaBaw6nAxAW-6NnNnNnIaUaUbN"/F 213 21bAaAaNaNaAaAaBaEaJnAW-6NkNkNnXaUaUaNaN"/D 77 32aExUeN"/D 163 32bAaBxUaN"/D 211 32bAaAxNaN"/D 122 33eAkN"/D 19 34bAaBxUaN"/D 28 34aAaBnAkKbN"/D 67 34bAaBkK"/D 116 34bAaBnAuNnUaN"/D 171 34bEkUaN"/D 218 34bAaEkX"/`,
  }

  // TODO need to adjust penguin within the wrapper
  // TODO change turning direction (clockwise, anti clockwise)

  const indicator = document.querySelector('.indicator')
  const body = document.querySelector('.wrapper')
  const animationFrames = {
    walk: [0, 1, 2, 1, 3, 4],
    stop: [0],
  }
  const cellSize = 96
  const directions = {
    up: 0,
    dUp: 1,
    side: 2,
    dDown: 3,
    down: 4,
  }
  const sprites = {
    up: 'up',
    upright: 'dUp',
    right: 'side',
    downright: 'dDown',
    down: 'down',
    downleft: 'dDown',
    left: 'side',
    upleft: 'dUp',
  }
  const turnDirections = Object.keys(sprites)
  const frameSpeed = 100
  const control = {
    x: null,
    y: null,
    angle: 360,
  }

  const directionConversions = {
    360: 'up',
    45: 'upright',
    90: 'right',
    135: 'downright',
    180: 'down',
    225: 'downleft',
    270: 'left',
    315: 'upleft',
  }

  const setPos = (target, x, y) =>{
    target.style.left = `${x}px`
    target.style.top = `${y}px`
  }

  const setMargin = (target, x, y) =>{
    target.style.marginLeft = `${x}px`
    target.style.marginTop = `${y}px`
    target.style.zIndex = y + 100
  }

  const reverseDirectionConversions = () =>{
    const obj = {}
    Object.keys(directionConversions).forEach( k =>{
      obj[directionConversions[k]] = k
    })
    return obj
  }

  const animatePenguin = penguin =>{
    const { frame:i, animation, frameSpeed} = penguinData
    const penguinSprite = penguin.childNodes[1].childNodes[1]
    penguinSprite.style.marginLeft = `-${animationFrames[animation][i] * cellSize}px`
    penguinSprite.style.marginTop = `-${cellSize * directions[sprites[penguinData.direction]]}px`
    penguinData.frame = i === animationFrames[animation].length - 1 ? 0 : i + 1
    penguinData.frameTimer = setTimeout(()=> animatePenguin(penguin), frameSpeed)
  }

  const randomDirection = () =>{
    return turnDirections[Math.floor(Math.random() * turnDirections.length)]
  }

  
  const penguinData = { 
    penguin: null,
    animation: 'walk',
    frame: 0, 
    direction: randomDirection(),
    frameTimer: null,
    moveTimer: null,
    turnIndex: Math.floor(Math.random() * 7),
    frameSpeed,
    moveSpeed: 150,
    stop: true,
    prev: [0, 0], 
    step: 'left',
    pos: {
      x: 0,
      y: 0,
    }
  }
  

  const radToDeg = rad => Math.round(rad * (180 / Math.PI))

  const nearestN = (n, denom) =>{
    return n === 0 ? 0 : (n - 1) + Math.abs(((n - 1) % denom) - denom)
  }


  const overlap = (a, b) =>{
    const buffer = 20
    return Math.abs(a - b) < buffer
  }

  const clickedAngle = () =>{
    const angle = radToDeg(Math.atan2(penguinData.pos.y - control.y, penguinData.pos.x - control.x)) - 90
    const adjustedAngle = angle < 0 ? angle + 360 : angle
    return nearestN(adjustedAngle, 45)
  }

  const changeAnimation = animation => {
    penguinData.frame = 0
    penguinData.animation = animation
  }

  const stopPenguin = penguin =>{
    changeAnimation('stop')
    const { offsetTop, offsetLeft } = penguin.style
    setMargin(penguin, offsetLeft, offsetTop)
    penguinData.stop = true
  }

  const startPenguin = penguin =>{
    animatePenguin(penguin)
    penguinData.stop = false
  }

  const penguinMarginLeft = penguin => +penguin.style.marginLeft.replace('px', '')
  const penguinMarginTop = penguin => +penguin.style.marginTop.replace('px', '')
  const randomP = max => Math.ceil(Math.random() * max)

  const checkBoundaryAndUpdatePenguinPos = (x, y, penguin, penguinData) =>{
    const lowerLimit = -40 // arbitrary buffer set to prevent penduin leaving window
    const upperLimit = 40

    if (x > lowerLimit && x < (body.clientWidth - upperLimit)){
      penguin.style.marginLeft = `${x}px`
      penguinData.prev[0] = x
    } 
    if (y > lowerLimit && y < (body.clientHeight - upperLimit)){
      penguin.style.marginTop = `${y}px`
      penguin.style.zIndex = y
      penguinData.prev[1] = y
    }
  }



  const createMark = (penguin, angle) => {
    const { height, left, top } = penguin.getBoundingClientRect()
    const mark = document.createElement('div')
    penguinData.step = penguinData.step === 'left' ? 'right' : 'left'
    mark.className = `foot_print ${penguinData.step}`
    mark.style.transform = `rotate(${angle}deg)`
    penguinData.pos.x = left + 5
    penguinData.pos.y = top + (height - 20)
    setPos(mark, penguinData.pos.x, penguinData.pos.y)
    body.append(mark)
    setTimeout(()=> body.removeChild(mark), 10000)
  }
  

  const moveAbout = penguin =>{
    if (penguinData.hit) return //TODO this might become redundant
    // console.log(penguin.childNodes[1].childNodes[3].childNodes)

  

    const penguinDir = +reverseDirectionConversions()[penguinData.direction]
    const angle = clickedAngle()
    // if (angle === 0) console.log('zero') //TODO this is here for testing

    const turnValue = penguinDir === angle
      ? 0 
      : penguinDir < angle
        ? 1
        : -1
    
    penguinData.turnIndex += turnValue
    indicator.innerHTML = `penguinDir: ${penguinDir} angle:${angle} turnValue: ${turnValue}`

    if (penguinData.turnIndex < 0) penguinData.turnIndex = 7
    if (penguinData.turnIndex > 7) penguinData.turnIndex = 0
    penguinData.direction = turnDirections[penguinData.turnIndex]
    const { direction: dir } = penguinData
    penguin.childNodes[1].className = `penguin_inner_wrapper facing_${dir}`

    createMark(penguin.childNodes[1].childNodes[3].childNodes[1], penguinDir)
    
    let x = penguinMarginLeft(penguin)
    let y = penguinMarginTop(penguin)
    
    const distance = 10
    if (dir !== 'up' && dir !== 'down') x += (dir.includes('left')) ? -distance : distance
    if (dir !== 'left' && dir !== 'right') y += (dir.includes('up')) ? -distance : distance

    if (
      x === penguinData.prev[0] && y === penguinData.prev[1] || 
      overlap(control.x, penguinData.pos.x) && overlap(control.y, penguinData.pos.y)
    ){
      console.log('stop')
      stopPenguin(penguin)
    } 
    
    checkBoundaryAndUpdatePenguinPos(x, y, penguin, penguinData)
    if (!penguinData.stop) penguinData.moveTimer = setTimeout(()=> {
      moveAbout(penguin)
    }, penguinData.moveSpeed)
    
  }
  

  const mapPenguinAssets = () =>{
    return Object.keys(directions).map(dir =>{
      return  `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="20%" viewBox="0 0 240 48">${decode(penguinSvg[dir])}</svg>`
    }).join('')
  }

  const mapHitCorners = () =>{
    return ['upleft', 'upright', 'downleft', 'downright'].map(dir =>{
      return  `<div class="hit_corner" data-pos="${dir}" ></div>`
    }).join('')
  }

  const createPenguin = (x, y) =>{
    const penguin = document.createElement('div')
    penguin.className = 'penguin_wrapper'
    penguin.innerHTML = `
    <div class="penguin_inner_wrapper">
      <div class="penguin_sprite">
        ${mapPenguinAssets()}
      </div>
      <div class="hit_wrapper">
        <div class="hit_area">
          ${mapHitCorners()}
        </div>
      </div>
    </div>
    `
    setMargin(penguin, x, y)
    body.append(penguin)
    const { width, height, left, top } = penguin.getBoundingClientRect()

    Object.assign(penguinData, {
      penguin: penguin,
      prev: [penguin.style.marginLeft, penguin.style.marginTop], 
      pos: {
        x: left + (width / 2),
        y: top + (height / 2),
      }
    })
    
    startPenguin(penguin)
    stopPenguin(penguin)
  }

  
  // Create penguin
  createPenguin(randomP(body.clientWidth - 100), randomP(body.clientWidth - 100))


  window.addEventListener('click', e =>{
    // console.log(penguins)
    control.x = e.pageX 
    control.y = e.pageY
    if (penguinData.stop){
      changeAnimation('walk')
      penguinData.stop = false
      moveAbout(penguinData.penguin, penguinData)
    }
    
  })

}

window.addEventListener('DOMContentLoaded', init)



