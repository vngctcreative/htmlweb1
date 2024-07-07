window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-X0V3T43WTP');

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
  
    
    const dateString = `${date}/${month}/${year}`;
  
    document.getElementById('clock').innerHTML = `Ngày: ${dateString}`;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial update
  updateTime();

  //<![CDATA[
/*
 * Author: ArtStyles (ArtTemplate)
 * Template Name: vCard
 * Version: 1.0.0
*/

$(document).ready(function() {

    'use strict';

    /*-----------------------------------------------------------------
      Detect device mobile
    -------------------------------------------------------------------*/
	
    var isMobile = false; 
    if( /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    }
    else {
        $('html').addClass('no-touch');
        isMobile = false;
    }
	
	//IE, Edge
	var isIE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent);
  

    /*-----------------------------------------------------------------
      Loaded
    -------------------------------------------------------------------*/

    anime({
        targets: 'body',
        opacity: 1,
        delay: 400,
        complete: function(anim) {
            progressBar(); //Init progress bar
        }
    });
    
    $('body, .js-img-load').imagesLoaded({ background: !0 }).always( function( instance ) {
	    preloader(); //Init preloader
    });

    function preloader() {
        var tl = anime.timeline({}); 
        tl
        .add({
            targets: '.preloader',
            duration: 1,
            opacity: 1
        })
        .add({
            targets: '.circle-pulse',
            duration: 300,
            //delay: 500,
            opacity: 1,
            zIndex: '-1',
            easing: 'easeInOutQuart'
        },'+=500')
        .add({
            targets: '.preloader__progress span',
            duration: 500,
            width: '100%',
			easing: 'easeInOutQuart'
        },'-=500')
        .add({
            targets: '.preloader',
            duration: 500,
            opacity: 0,
            zIndex: '-1',
            easing: 'easeInOutQuart'
        });
    };


    /*-----------------------------------------------------------------
      Carousel
    -------------------------------------------------------------------*/	
    
	// Testimonials
	$('.js-carousel-review').each(function() {
		var carousel = new Swiper('.js-carousel-review', {
            slidesPerView: 1,
			spaceBetween: 30,
			speed: 300,
			grabCursor: true,
			watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		        clickable: true
            },
			autoplay: {
                delay: 5000,
            },
			breakpoints: {
                580: {
                    spaceBetween: 20
                }
            }
		});
	});
	
	// Clients
	$('.js-carousel-clients').each(function() {
		var carousel = new Swiper('.js-carousel-clients', {
            slidesPerView: 4,
			spaceBetween: 30,
			//loop: true,
			grabCursor: true,
			watchOverflow: true,
            pagination: {
                el: '.swiper-pagination',
		        clickable: true
            },
			breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },				
                580: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },				
                991: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
		});
	});
	
	
    /*-----------------------------------------------------------------
      Sticky sidebar
    -------------------------------------------------------------------*/

    function activeStickyKit() {
        $('.sticky-column').stick_in_parent({
            parent: '.sticky-parent'
        });

        // bootstrap col position
        $('.sticky-column')
        .on('sticky_kit:bottom', function(e) {
            $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
            $(this).parent().css('position', 'relative');
        });
    };
    activeStickyKit();

    function detachStickyKit() {
        $('.sticky-column').trigger("sticky_kit:detach");
    };

    //  stop sticky kit
    //  based on your window width

    var screen = 1200;

    var windowHeight, windowWidth;
    windowWidth = $(window).width();
    if ((windowWidth < screen)) {
        detachStickyKit();
    } else {
        activeStickyKit();
    }

    // windowSize
    // window resize
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    windowSize();

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    $(window).resize(debounce(function(){
        windowSize();
        $(document.body).trigger("sticky_kit:recalc");
        if (windowWidth < screen) {
            detachStickyKit();
        } else {
            activeStickyKit();
        }
    }, 250));


    /*-----------------------------------------------------------------
      Progress bar
    -------------------------------------------------------------------*/
    
	function progressBar() {
	    $('.progress').each(function() {
		    var ctrl = new ScrollMagic.Controller();
		    new ScrollMagic.Scene({
                triggerElement: '.progress',
	            triggerHook: 'onEnter',
	            duration: 300
            })
            .addTo(ctrl)
		    .on("enter", function (e) {
			    var progressBar = $('.progress-bar');
                progressBar.each(function(indx){
                    $(this).css({'width': $(this).attr('aria-valuenow') + '%', 'z-index': '2'});
                });
		    });
        });
    }
	
	
    /*-----------------------------------------------------------------
      Scroll indicator
    -------------------------------------------------------------------*/
  
    function scrollIndicator() {
        $(window).on('scroll', function() {
            var wintop = $(window).scrollTop(), docheight = 
            $(document).height(), winheight = $(window).height();
 	        var scrolled = (wintop/(docheight-winheight))*100;
  	        $('.scroll-line').css('width', (scrolled + '%'));
        });
    }
	
	scrollIndicator(); //Init
	
	
    /*-----------------------------------------------------------------
      Jarallax
    -------------------------------------------------------------------*/		

    function parallax() {
        $('.js-parallax').jarallax({
			disableParallax: function () {
			  return isIE
			},
            speed: 0.65,
            type: 'scroll'
        });
	};
	
	parallax(); //Init*/
    
	
    /*-----------------------------------------------------------------
      ScrollTo
    -------------------------------------------------------------------*/
	
    function scrollToTop() {
        var $backToTop = $('.back-to-top'),
            $showBackTotop = $(window).height();
			
        $backToTop.hide();


        $(window).scroll( function() {
            var windowScrollTop = $(window).scrollTop();
            if( windowScrollTop > $showBackTotop ) {
                $backToTop.fadeIn('slow');
            } else {
                $backToTop.fadeOut('slow');
            }
        });
        
		$backToTop.on('click', function (e) {
            e.preventDefault();
            $(' body, html ').animate( {scrollTop : 0}, 'slow' );
        });
    }
	
	scrollToTop(); //Init
    
	
    /*-----------------------------------------------------------------
      Autoresize textarea
    -------------------------------------------------------------------*/	

    $('textarea').each(function(){
        autosize(this);
    });


    /*-----------------------------------------------------------------
	  Tabs
    -------------------------------------------------------------------*/	
    
	$('.js-tabs').each(function(){
	    $('.content .tabcontent').hide();
        $('.content .tabcontent:first').show();
        $('.nav__item a').on('click', function () {
            $('.nav__item a').removeClass('active');
            $(this).addClass('active');
            var currentTab = $(this).attr('href');
            $('.content .tabcontent').hide();            
            $(currentTab).show();
            $portfolioMasonry.isotope ({
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                isAnimated: true
            });
			$('.js-scroll').getNiceScroll().resize()
            return false;
        });
	    
		// Mobile close menu
	    var screenMobile = 580;
	
	    windowWidth = $(window).width();
        if ((windowWidth < screenMobile)) {	
			// autoscroll to content
            $(".nav__item a").click(function(e) {
		        e.preventDefault();
		        var offset = -35;
		
                $('html, body').animate({
                    scrollTop: $("#content").offset().top + offset
                }, 0);
            });			
	    } else {
		
	    }
	});
	
	
    /*-----------------------------------------------------------------
      Tooltip
    -------------------------------------------------------------------*/
	
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


    /*-----------------------------------------------------------------
      Switch categories & Filter mobile
    -------------------------------------------------------------------*/	
  
    $('.select').on('click','.placeholder',function(){
      var parent = $(this).closest('.select');
      if ( ! parent.hasClass('is-open')){
          parent.addClass('is-open');
          $('.select.is-open').not(parent).removeClass('is-open');
      }else{
          parent.removeClass('is-open');
      }
    }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	
	    $('.filter__item').removeClass('active');
	    $(this).addClass('active');
	    var selector = $(this).attr('data-filter');
		
	    $('.js-filter-container').isotope({
	        filter: selector
	    });
	    return false;	
    });


    /*-----------------------------------------------------------------
      Masonry
    -------------------------------------------------------------------*/	
	
    // Portfolio grid row
    var $portfolioMasonry = $('.js-grid-row').isotope({
        itemSelector: '.gallery-grid__item',
	    layoutMode: 'fitRows',
        percentPosition: true,
	    transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        fitRows: {
            gutter: '.gutter-sizer'
        },	
        masonry: {
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });
  
    $portfolioMasonry.imagesLoaded().progress( function() {
        $portfolioMasonry.isotope ({
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true,
	        layoutMode: 'fitRows',
            fitRows: {
                gutter: '.gutter-sizer'
            }
	    });
    });	

	// Portfolio grid irregular
	var $portfolioIrregularMasonry = $('.js-grid').isotope({
        itemSelector: '.gallery-grid__item',
        percentPosition: true,
	    transitionDuration: '0.5s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        },
        masonry: {
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
        }
    });
  
    $portfolioIrregularMasonry.imagesLoaded().progress( function() {
        $portfolioIrregularMasonry.isotope ({
	        columnWidth: '.gallery-grid__item',
            gutter: '.gutter-sizer',
            isAnimated: true
	    });
    });
	
	
    /*-----------------------------------------------------------------
      niceScroll
    -------------------------------------------------------------------*/		

    $('textarea').niceScroll({
		horizrailenabled:false
	});


    /*-----------------------------------------------------------------
      emoji add in textarea
    -------------------------------------------------------------------*/
	
    $(function() {
        $('.emoji-wrap img').on('click', function(){
            var emoji = $(this).attr('title');
            $('#commentForm').val($('#commentForm').val()+" "+emoji+" ");
        });
    });


    /*-----------------------------------------------------------------
	  mediumZoom
    -------------------------------------------------------------------*/
  
    mediumZoom('[data-zoom]', {
        margin: 30
    });

	
    /*-----------------------------------------------------------------
      Lazyload
    -------------------------------------------------------------------*/

    lazySizes.init();

	
    /*-----------------------------------------------------------------
      Polyfill object-fit
    -------------------------------------------------------------------*/	
	
    var $someImages = $('img.cover');
    objectFitImages($someImages);
	

	/*-----------------------------------------------------------------
	  PhotoSwipe
	-------------------------------------------------------------------*/

    var initPhotoSwipeFromDOM = function(gallerySelector) {
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for(var i = 0; i < numNodes; i++) {
                figureEl = thumbElements[i]; // <figure> element
					
                if(figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element
                size = linkEl.getAttribute('data-size').split('x');

                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };

                if(figureEl.children.length > 1) {
                    item.title = figureEl.children[1].innerHTML; 
                }

                if(linkEl.children.length > 0) {
                    item.msrc = linkEl.children[0].getAttribute('src');
                } 

                item.el = figureEl;
                items.push(item);
            }
            return items;
        };

        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };

        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if(!clickedListItem) {
                return;
            }

            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) { 
                    continue; 
                }

                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
					
            if(index >= 0) {
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };

        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
                params = {};

            if(hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');  
                if(pair.length < 2) {
                    continue;
                }           
                params[pair[0]] = pair[1];
            }

            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            options = {
                // Buttons/elements
                captionEl: false,
                closeEl: true,
                arrowEl: true,
                fullscreenEl: false,
                shareEl: false,
                counterEl: false,
                zoomEl: false,
                maxSpreadZoom: 1,
			    barsSize: { top: 40, bottom: 40, left: 40, right: 40 },
                closeElClasses: [
                    "item",
                    "caption",
                    "zoom-wrap",
                    "ui",
                    "top-bar",
                    "img"
                ],
                // define gallery index (for URL)
			    galleryUID: 0,
                //galleryUID: galleryElement.getAttribute("data-pswp-uid"),
                getDoubleTapZoom: function(isMouseClick, item) {
                    return item.initialZoomLevel;
                },
                pinchToClose: false,
                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();
                    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                }
            };

            // PhotoSwipe opened from URL
            if(fromURL) {
                if(options.galleryPIDs) {
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            if( isNaN(options.index) ) {
                return;
            }

            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }

            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        var galleryElements = document.querySelectorAll( gallerySelector );
            for(var i = 0, l = galleryElements.length; i < l; i++) {
                galleryElements[i].setAttribute('data-pswp-uid', i+1);
                galleryElements[i].onclick = onThumbnailsClick;
            }

        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.photoswiper');
});
//]]>

//<![CDATA[
/*! Elastic border */
$(".elastic-border").each(function(t){function s(t,i,o){this.x=t,this.ix=t,this.vx=0,this.cx=0,this.y=i,this.iy=i,this.cy=0,this.canvas=o}function h(){var t=$(".elastic-border"),i=t.get(0).getContext("2d");for(a=requestAnimationFrame(h),i.clearRect(0,0,t.width(),t.height()),i.fillStyle=l.leftColor,i.fillRect(0,0,t.width(),t.height()),o=0;o<=l.totalPoints-1;o++)n[o].move();for(i.fillStyle=l.rightColor,i.strokeStyle=l.rightColor,i.lineWidth=1,i.beginPath(),i.moveTo($(window).width()/2,0),o=0;o<=l.totalPoints-1;o++)e=n[o],null!=n[o+1]?(e.cx=(e.x+n[o+1].x)/2-1e-4,e.cy=(e.y+n[o+1].y)/2):(e.cx=e.ix,e.cy=e.iy),i.bezierCurveTo(e.x,e.y,e.cx,e.cy,e.cx,e.cy);if(i.lineTo($(window).width(),$(window).height()),i.lineTo($(window).width(),0),i.closePath(),i.fill(),l.showIndicators){for(i.fillStyle="#2E2F36",i.beginPath(),o=0;o<=l.totalPoints-1;o++)e=n[o],i.rect(e.x-2,e.y-2,4,4);i.fill(),i.fillStyle="#fff",i.beginPath();for(var o=0;o<=l.totalPoints-1;o++){var e=n[o];i.rect(e.cx-1,e.cy-1,2,2)}i.fill()}}var n=[],a=null,l=new function(){this.totalPoints=2,this.viscosity=10,this.mouseDist=100,this.damping=.05,this.showIndicators=!1,this.leftColor="#ffffff",this.rightColor="#2E2F36"},e=0,r=0,i=0,o=0,c=0,f=0;$(document).on("mousemove",function(t){c=e<t.pageX?1:e>t.pageX?-1:0,r<t.pageY?1:r>t.pageY?-1:0,e=t.pageX,r=t.pageY}),function t(){f=e-i,r-o,i=e,o=r,setTimeout(t,50)}(),s.prototype.move=function(){this.vx+=(this.ix-this.x)/l.viscosity;var t=this.ix-e,i=this.y-r,o=this.canvas.data("gap");(0<c&&e>this.x||c<0&&e<this.x)&&Math.sqrt(t*t)<l.mouseDist&&Math.sqrt(i*i)<o&&(this.vx=f/8),this.vx*=1-l.damping,this.x+=this.vx},$(window).on("resize",function(){!function(){var t=$(".elastic-border");t.get(0).getContext("2d"),cancelAnimationFrame(a),$(".elastic-border").get(0).width=$(window).width(),$(".elastic-border").get(0).height=$(window).height(),n=[];for(var i=t.height()/(l.totalPoints-1),o=$(window).width()/2,e=0;e<=l.totalPoints-1;e++)n.push(new s(o,e*i,t));h(),t.data("gap",i)}()}).trigger("resize")});

$(document).ready(function() {

    'use strict';

    /* Slide nav */

    $('.slideNav').each(function(i) {
        var sideNavTl = anime.timeline({autoplay: false});
        anime.set('.slideNav', {
            translateX: '-100%'
        });
        anime.set('.slideNav .slideNav__item', {
            translateX: '-100%'
        });
        anime.set('.slideClose', {
            translateX: '70'
        });
        sideNavTl
        .add({
            targets: '.slideOpen',
            duration: 300,
            translateX: '-300',
            opacity: 0,
            easing: 'easeInOutQuart'
        })
        .add({
            targets: '.overlay-slideNav',
            opacity: {
                value: 1,
                duration: 500,
                delay: 0
            }, 
            zIndex: {
                value: 1010,
                duration: 1,
                delay: 0
            }
        },'-=300')
        .add({
            targets: '.slideNav',
            translateX: 0,
            duration: 500,
            easing: 'easeInOutQuart'
        },'-=500')
        .add({
            targets: '.slideClose',
            translateX: 0,
            opacity: 1,
            rotate: 90,
            easing: 'easeInOutQuart'
        },'-=500')
        .add({
            targets: '.slideNav .slideNav__item',
            duration: 200,
            delay: anime.stagger(60),
            translateX: 0,
            easing: 'easeInOutCirc'
        },'-=1000');

        $('.btnSlideNav').on('click', function(e) {
            e.preventDefault();
            if (sideNavTl.began) {
                sideNavTl.reverse()
                sideNavTl.completed = false;
            }
            if (sideNavTl.paused) {
                sideNavTl.play()
            }
        });
    });

});
//]]>

//<![CDATA[
    var url=window.location.href,uri=window.location.toString(),
    rel=document.querySelector('link[rel="canonical"]').getAttribute('href'),
    fb1=url.substring(0,url.indexOf('?fbclid')),fb2=url.substring(0,url.indexOf('&fbclid')),
    gi1=url.substring(0,url.indexOf('?gidzl')),gi2=url.substring(0,url.indexOf('&gidzl')),
    m1=url.substring(0,url.indexOf('?m=1')),m2=url.substring(0,url.indexOf('&m=1'))
    if((uri.length-fb1.length)>0)window.history.replaceState({},document.title,fb1)
    if((uri.length-fb2.length)>0)window.history.replaceState({},document.title,fb2)
    if((uri.length-gi1.length)>0)window.history.replaceState({},document.title,gi1)
    if((uri.length-gi2.length)>0)window.history.replaceState({},document.title,gi2)
    if((uri.length-m1.length)>0)window.history.replaceState({},document.title,m1)
    if((uri.length-m2.length)>0)window.history.replaceState({},document.title,m2)
        $('.nav__item a').on('click', function () {
            $('.nav__item a').removeClass('active');
            $(this).addClass('active');
		})
$(".nav__item a[href='" + location.pathname + "']:not([href='/'])").addClass("active").each(function() {
	$(".nav__item a[href='" + $(this).attr("href") + "']").addClass("active")
});
    $(function() {
        $("#load-more-link").each(function() {
            var e = $(this).data("load");
            e && $("#load-more-link").show(), $("#load-more-link").on("click", function(t) {
                $("#load-more-link").hide(), $.ajax({
                    url: e,
                    success: function(t) {
                        var n = $(t).find(".Blog .bt-items");
                        n.find(".news-item").addClass("post-animated post-fadeInUp"), $(".Blog .bt-items").append(n.html()), (e = $(t).find("#load-more-link").data("load")) ? $("#load-more-link").show() : ($("#load-more-link").hide(), $("#blog-pager .no-more").addClass("show"))
                    },
                    beforeSend: function() {
                        $("#blog-pager .loading").show()
                    },
                    complete: function() {
                        $("#blog-pager .loading").hide()
                    }
                }), t.preventDefault()
            })
        })
    })
//]]>

    //<![CDATA[
        var url = window.location.href
        , uri = window.location.toString()
        , rel = document.querySelector('link[rel="canonical"]').getAttribute('href')
        , fb1 = url.substring(0, url.indexOf('?fbclid'))
        , fb2 = url.substring(0, url.indexOf('&fbclid'))
        , gi1 = url.substring(0, url.indexOf('?gidzl'))
        , gi2 = url.substring(0, url.indexOf('&gidzl'))
        , m1 = url.substring(0, url.indexOf('?m=1'))
        , m2 = url.substring(0, url.indexOf('&m=1'))
      if ((uri.length - fb1.length) > 0)
          window.history.replaceState({}, document.title, fb1)
      if ((uri.length - fb2.length) > 0)
          window.history.replaceState({}, document.title, fb2)
      if ((uri.length - gi1.length) > 0)
          window.history.replaceState({}, document.title, gi1)
      if ((uri.length - gi2.length) > 0)
          window.history.replaceState({}, document.title, gi2)
      if ((uri.length - m1.length) > 0)
          window.history.replaceState({}, document.title, m1)
      if ((uri.length - m2.length) > 0)
          window.history.replaceState({}, document.title, m2)
      $('.nav__item a').on('click', function() {
          $('.nav__item a').removeClass('active');
          $(this).addClass('active');
      })
      $(".nav__item a[href='" + location.pathname + "']:not([href='/'])").addClass("active").each(function() {
          $(".nav__item a[href='" + $(this).attr("href") + "']").addClass("active")
      });
      $(function() {
          $("#load-more-link").each(function() {
              var e = $(this).data("load");
              e && $("#load-more-link").show(),
              $("#load-more-link").on("click", function(t) {
                  $("#load-more-link").hide(),
                  $.ajax({
                      url: e,
                      success: function(t) {
                          var n = $(t).find(".Blog .bt-items");
                          n.find(".news-item").addClass("post-animated post-fadeInUp"),
                          $(".Blog .bt-items").append(n.html()),
                          (e = $(t).find("#load-more-link").data("load")) ? $("#load-more-link").show() : ($("#load-more-link").hide(),
                          $("#blog-pager .no-more").addClass("show"))
                      },
                      beforeSend: function() {
                          $("#blog-pager .loading").show()
                      },
                      complete: function() {
                          $("#blog-pager .loading").hide()
                      }
                  }),
                  t.preventDefault()
              })
          })
      })
      //]]>