/*
* DOM Particles
*
* @Author: Stijn Van Minnebruggen
* @Date:   2018-02-07 12:41:33
* @Last Modified by:   Stijn Van Minnebruggen
* @Last Modified time: 2018-02-09 16:04:37
*/

(function(w, undefined) {

	"use strict";

	var Particles = function(el, settings) {

		var defaults = { min: 10, max: 50, particles: [{ content: '&bull;', minWidth: 10, maxWidth: 30 }], autoPlay: true };

		this.el = typeof el === 'string' ? document.querySelector(el) : el;
		if(!this.el) { return; }

		this.settings = Object.assign(defaults, settings);
		this.particles = [];

		this.windowSettings();
		this.generateHtml();

		if(this.settings.autoPlay) { this.activate(); }

	};

	Particles.prototype.windowSettings = function() {

		this.window = {
			width: w.innerWidth,
			height: w.innerHeight
		};

		w.addEventListener('resize', function() {

			this.window.width = w.innerWidth;
			this.window.height = w.innerHeight;

		}.bind(this), false);

	};

	Particles.prototype.generateHtml = function() {

		var num = this.settings.min + (Math.ceil(Math.random() * (this.settings.max - this.settings.min)));
		for(var i=0; i<=num; i++) { this.createOne(); }

	};

	Particles.prototype.createOne = function() {

		var me = this,
			random = Math.floor(Math.random() * this.settings.particles.length),
			particle = this.settings.particles[random], p;

		particle.killed = function() { (me.createOne()).fly(); };

		p = new Particle(this.el, particle);
		this.particles.push(p);

		return p;

	};

	Particles.prototype.activate = function() {

		this.particles.forEach(function(particle) { particle.fly(); });

	};

	var Particle = function(wrapper, settings) {

		var defaults = { content: '&bull;', minWidth: 10, maxWidth: 30, minSpeed: 10, maxSpeed: 5, killed: function(){}};

		this.wrapper = typeof wrapper === 'string' ? document.querySelector(wrapper) : wrapper;
		if(!this.wrapper) { return; }

		this.settings = Object.assign(defaults, settings);
		this.settings.size = this.settings.minWidth + Math.floor(Math.random() * (this.settings.maxWidth - this.settings.minWidth));
		this.settings.class = this.settings.className || 'particle';

		this.create();

		return {
			el: this.el,
			settings: this.settings,
			fly: this.fly.bind(this)
		};

	};

	Particle.prototype.create = function() {

		this.x = Math.floor((Math.random() * w.innerWidth));
		this.y = Math.floor((Math.random() * w.innerHeight));
		this.r = Math.floor(-45 + (Math.random() * 90));

		this.el = document.createElement(this.settings.htmlElement || 'div');
		this.el.classList.add(this.settings.class);
		this.el.innerHTML = this.settings.content;
		this.el.style.transition = 'transform 1s, opacity 1s';
		this.el.style.transitionTimingFunction = 'linear';
		this.el.style.width = this.settings.size + 'px';
		this.el.style.transitionDuration = '0s';
		this.el.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px) rotate(' + this.r + 'deg)';
		this.el.style.opacity = 0;

		this.wrapper.appendChild(this.el);

	};

	Particle.prototype.fly = function() {

		this.x = this.x + Math.floor((-200 + (Math.random() * 400)));
		this.y = this.y - (w.innerHeight / (8 - Math.floor(Math.random() * 2)));
		this.r = Math.floor(-45 + (Math.random() * 90));
		this.speed = this.settings.maxSpeed + Math.floor(Math.random() * (this.settings.minSpeed - this.settings.maxSpeed));
		this.el.style.transitionDuration = this.speed + 's';

		setTimeout(function() {

			this.el.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px) rotate(' + this.r + 'deg)';
			this.el.style.opacity = 1;

			if(this.y < -50 || this.x < -50 || this.x > 50 + w.innerWidth) {
				this.timer = setTimeout(this.kill.bind(this), this.speed * 1000);
			} else {
				this.timer = setTimeout(this.fly.bind(this), this.speed * 1000);
			}

		}.bind(this), 100);

	};

	Particle.prototype.kill = function() {

		clearTimeout(this.timer || 1);
		this.el.parentNode.removeChild(this.el);
		this.settings.killed();

	};

	w.addEventListener('load', function() { w.Particles = Particles; });

}(window));
