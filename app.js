import * as PIXI from 'pixi.js'




 


export default class Sketch {
	constructor(options) {
		
	 
 
		
		this.width = window.innerWidth
		this.height = window.innerHeight
		
		this.app = new PIXI.Application({
			backgroundColor: 0x1099bb,
			resolution: 1,
			resizeTo: window
		})

		document.body.appendChild(this.app.view)

		this.app.view.style.width = this.width + 'px'
		this.app.view.style.height = this.height + 'px'

		this.container = new PIXI.Container()

		this.phi = 0.5 * Math.sqrt(5) / 2
		
		this.app.stage.addChild(this.container)
		this.time = 0
		this.add()
		this.addLines()
		this.resize()
		this.setupResize()
		this.render()


	}
	addLines () {
		this.ctx = new PIXI.Graphics
		this.ctx.lineStyle(2, 0xff0000, 1)
		this.ctx.moveTo(0,0)
		this.ctx.lineTo(400, 300)

		let lastRight = this.width
		let lastBottom = this.width / this.phi

		this.ctx.moveTo(0, lastBottom)
		this.ctx.lineTo(lastRight, lastBottom)
		this.ctx.moveTo(lastRight, lastBottom)
		this.ctx.arc(lastRight, lastBottom, this.width)

		this.container.addChild(this.ctx)
	}


	add() {
		this.block = new PIXI.Sprite(PIXI.Texture.WHITE)
		this.block.tint = 0xff0000
		this.block.width = 100
		this.block.height = 100

 
		this.container.addChild(this.block)
 
	}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	resize() {
		this.width =window.innerWidth
		this.height = window.innerWidth
		this.app.view.style.width = this.width + 'px'
		this.app.view.style.height = this.height + 'px'
	}

	render() {
		this.app.ticker.add(delta => {
			this.time +=0.05
		})
	}
 
}
new Sketch({
	dom: document.getElementById('container')
})
 