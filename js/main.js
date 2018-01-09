$(document).ready(function(){

	//#region Scrolleffects

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#intro',
		triggerHook: 0,
		duration: '30%'
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// pin again
	var pinIntroScene2 = new ScrollMagic.Scene({
		triggerElement: '#project01',
		triggerHook: 0.4
	})
	.setPin('#intro', {pushFollowers: false})
	.addTo(controller);

	// parallax scene

	var parallaxTl = new TimelineMax();
	parallaxTl
		.from('.content-wrapper', 0.3, {autoAlpha: 0, ease:Power0.easeNone}, 0.3)
		.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0)
		;

	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '#project02',
		triggerHook: 1,
		duration: '100%'
	})
	.setTween(parallaxTl)
	.addTo(controller);

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#content',
		duration: '90%',
		triggerHook: 0.7
	})
	.setClassToggle('#project04', 'fade-in') // add class to project01
	/*.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		colorStart: '#75C695',
		colorEnd: 'pink'
	}) // this requires a plugin*/
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01',
		duration: '90%',
		triggerHook: 0.0
	})
	.setClassToggle('#project01', 'fade-in') // add class to project01
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.container',
		duration: '90%',
		triggerHook: 0.4
	})
	.setClassToggle('#project05', 'fade-in') // add class to project01
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#chartContainer3',
		duration: '70%',
		triggerHook: 6
	})
	.setClassToggle('#project02', 'fade-in') // add class to project01
	.addTo(controller);

	var ourScene = new ScrollMagic.Scene({
		triggerElement: 'main',
		duration: '70%',
		triggerHook: 0.0
	})
	.setClassToggle('#project03', 'fade-in') // add class to project01
	.addTo(controller);


	// loop through each .project element
	/*$('.project').each(function(){

		// build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this.children[0],
			triggerHook: 0.4,
			duration: '70%'
		})
		.setClassToggle(this, 'fade-in') // add class to project01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			colorStart: '#75C695',
			colorEnd: 'pink'
		}) // this requires a plugin 
		.addTo(controller);

	});*/

//#endregion
});


















