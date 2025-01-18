import * as Turbo from "@hotwired/turbo"
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import { Application } from "@hotwired/stimulus"
import MenuController from "./controllers/menu_controller"
import ViewImagesController from "./controllers/view_images_controller"
import NavtreeController from "./controllers/navtree_controller"
import ThemeController from "./controllers/theme_controller"
import AOS from 'aos'
import Dropdown from 'stimulus-dropdown'
import Flickity from 'flickity'
import { jarallax, jarallaxVideo } from "jarallax";

//tailpro 
// import customizer from "./customizer.js"
// import jarallax from "./plugins/jarallax/dist/jarallax.min.js"
// import lightgallery from "./plugins/lightgallery.js/dist/js/lightgallery.min.js"
// import lgthumbnail from "./plugins/lightgallery.js/demo/js/lg-thumbnail.min.js"
// import lgvideo from "./plugins/lightgallery.js/demo/js/lg-video.js"
// import flickity from "./plugins/flickity/dist/flickity.pkgd.min.js"
// import typed from "./plugins/typed.js/dist/typed.umd.js"
// import lazyload from "./plugins/vanilla-lazyload/dist/lazyload.min.js"
// import hcsticky from "./plugins/hc-sticky/dist/hc-sticky.js"
// import wow from "./plugins/wow.js/dist/wow.min.js"
import theme from "./theme.js"

//init 
window.Alpine = Alpine
Alpine.plugin(collapse)
Alpine.start()

const application = Application.start()
window.Stimulus = application
application.register('menu', MenuController)
application.register('view_images', ViewImagesController)
application.register('navtree', NavtreeController)
application.register('theme', ThemeController)
application.register('dropdown', Dropdown)

//tailpro
// application.register('customizer', customizer)
application.register('jarallax', jarallax)
application.register('jarallaxVideo', jarallaxVideo)
// application.register('lightgallery', lightgallery)
// application.register('lgthumbnail', lgthumbnail)
// application.register('lgvideo', lgvideo)
application.register('flickity', Flickity)
// application.register('typed', typed)
// application.register('lazyload', lazyload)
// application.register('hcsticky', hcsticky)
// application.register('wow', wow)
application.register('theme', theme)



//xiaohui: 下面的方法实现 AOS 能够在每个页面加载时候都生效
Turbo.start()

AOS_options = { duration: 1200, disableMutationObserver: true }

document.addEventListener('DOMContentLoaded', () => {
    AOS.init(AOS_options)
    AOS_options.easing = document.querySelector('body').getAttribute('data-aos-easing')
    AOS_options.duration = document.querySelector('body').getAttribute('data-aos-duration')
    AOS_options.delay = document.querySelector('body').getAttribute('data-aos-delay')
})

document.addEventListener("turbo:load", () => {
    document.querySelector('body').setAttribute('data-aos-easing', AOS_options.easing);
    document.querySelector('body').setAttribute('data-aos-duration', AOS_options.duration);
    document.querySelector('body').setAttribute('data-aos-delay', AOS_options.delay);
    AOS.refreshHard()
})

//加载 Other Action 
document.addEventListener("turbo:load", () => {
    
})


// custom tailpro themes

