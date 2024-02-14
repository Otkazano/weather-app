'use client'

import React from 'react'

export default function MainAnimation () {
  React.useEffect(() => {
    var canvas = document.querySelector('#scene'),
      ctx = canvas.getContext('2d', { willReadFrequently: true }),
      particles = [],
      amount = 0,
      mouse = { x: 0, y: 0 },
      radius = 0.8

    const colors = ['#F8F4FF', '#F8F8FF', '#FFF5EE', '#F5FFFA', '#F5F5F5']

    const ww = (canvas.width = 1200)
    const wh = (canvas.height = 600)

    function Particle (x, y) {
      this.x = ww / 2
      this.y = wh / 2
      this.dest = {
        x: x,
        y: y
      }
      this.r = 1.5
      this.vx = (Math.random() - 0.5) * 10
      this.vy = (Math.random() - 0.5) * 10
      this.accX = 0
      this.accY = 0
      this.friction = Math.random() * 0.05 + 0.94

      this.color = colors[Math.floor(Math.random() * 6)]
    }

    Particle.prototype.render = function () {
      this.accX = (this.dest.x - this.x) / 1000
      this.accY = (this.dest.y - this.y) / 1000
      this.vx += this.accX
      this.vy += this.accY
      this.vx *= this.friction
      this.vy *= this.friction

      this.x += this.vx
      this.y += this.vy

      ctx.fillStyle = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
      ctx.fill()

      var a = this.x - mouse.x
      var b = this.y - mouse.y

      var distance = Math.sqrt(a * a + b * b)
      if (distance < radius * 80) {
        this.accX = (this.x - mouse.x) / 120
        this.accY = (this.y - mouse.y) / 120
        this.vx += this.accX
        this.vy += this.accY
      }
    }

    function onMouseMove (e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    function onTouchMove (e) {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    }

    function onTouchEnd (e) {
      mouse.x = -9999
      mouse.y = -9999
    }

    function initScene () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.font = 'bold ' + ww / 9 + 'px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('The Weather', ww / 2, wh / 2)

      var data = ctx.getImageData(0, 0, ww, wh).data
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'screen'

      particles = []
      for (var i = 0; i < ww; i += Math.round(ww / 300)) {
        for (var j = 0; j < wh; j += Math.round(ww / 300)) {
          if (data[(i + j * ww) * 4 + 3] > 150) {
            particles.push(new Particle(i, j))
          }
        }
      }
      amount = particles.length
    }

    function render (a) {
      requestAnimationFrame(render)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (var i = 0; i < amount; i++) {
        particles[i].render()
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
    initScene()
    requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <>
      <canvas id='scene' className='fixed bg-transparent'></canvas>
    </>
  )
}
