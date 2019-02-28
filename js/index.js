var ns = {
        setPosition: function (index) {
            $("#js-wrap-first").css({
                left: "-" + (index * 100) + "%"
            })
            $("#js-wrap-first .cell").eq(index).find("[data-ani-ani]").each(function () {
                var ani = $(this).attr("data-ani-ani");
                $(this).addClass(ani);
            });
        },
        int: 0,
        firstSlide: null,
        firstTimeOut:null,
        setWrapFirst: function () {
            var self = this;
            self.firstTimeOut = setTimeout(function () {
                self.int = 0;
                $("#js-wrap-first").css({
                    left: "0"
                });
                $("#js-wrap-first").find("[data-ani-ani]").each(function () {
                    var ani = $(this).attr("data-ani-ani");
                    $(this).removeClass(ani);
                });

                self.setPosition(0);
                self.int += 1;
                self.firstSlide = setInterval(function () {
                    if (self.int > 2) {
                        self.firstSlide && clearInterval(self.firstSlide);
                        return;
                    };
                    self.setPosition(self.int);
                    self.int += 1;
                }, 2000)
            },1500)
        },
        clearWrapFirst: function () {
            var self = this;
            self.firstSlide && clearInterval(self.firstSlide);
            self.firstTimeOut && clearTimeout(self.firstTimeOut);
            $("#js-wrap-first").css({
                left: "0"
            });
            $("#js-wrap-first").find("[data-ani-ani]").each(function () {
                var ani = $(this).attr("data-ani-ani");
                $(this).removeClass(ani);
            });
        },
	    //生态圈点击
	    shengtaiquan: function () {
	        $(".js-stq-r, .js-stq-l").on("click", function () {

	            $(".swiper-slide-active").find(".homepage_left").addClass("of");

	            $(".swiper-slide-active").find(".homepage_left").addClass("outLeft").removeClass("showLeft");
	            $(".swiper-slide-active").find(".homepage_right").addClass("outRight").removeClass("showRight");
	            var index = $(this).index();
	            var $stq = $(".js-stq").eq(index);
	            setTimeout(function () {
	                $stq.removeClass("hide").addClass("fadeIn").removeClass("fadeOut");
	                $stq.find("[data-ani]").each(function () {
	                    var ani = $(this).attr("data-ani");
	                    $(this).addClass(ani);
	                });

	                setTimeout(function () {
	                    $stq.addClass("fadeOut").removeClass("fadeIn");
	                    setTimeout(function () {
	                        $stq.addClass("hide");
	                        $stq.find("[data-ani]").each(function () {
	                            var ani = $(this).attr("data-ani");
	                            $(this).removeClass(ani);
	                        });
	                        $(".swiper-slide-active").find(".homepage_left").removeClass("of");
	                        $(".swiper-slide-active").find(".homepage_left").addClass("showLeft").removeClass("outLeft");
	                        $(".swiper-slide-active").find(".homepage_right").addClass("showRight").removeClass("outRight");
	                    }, 900)
	                }, 4000);
	            }, 800);

	        });
	    },
	    //办公室点击
	    bgs: function () {
	        $(".js-bgs1").on("click", function () {
                
	            var $this = $(this);
	            $this.addClass("on");
	            setTimeout(function () {
	                
	                $(".swiper-slide-active").find(".homepage_left").addClass("outLeft").removeClass("showLeft");
	                $(".swiper-slide-active").find(".homepage_right").addClass("outRight").removeClass("showRight");
	                var index = $this.index();
	                var $stq = $(".js-bgl-1").eq(index);
	                setTimeout(function () {
	                    $this.removeClass("on");
	                    $stq.removeClass("hide").addClass("fadeIn").removeClass("fadeOut");
	                    $stq.find("[data-ani]").each(function () {
	                        var ani = $this.attr("data-ani");
	                        $this.addClass(ani);
	                    });

	                    setTimeout(function () {
	                        $stq.addClass("fadeOut").removeClass("fadeIn");
	                        setTimeout(function () {
	                            $stq.addClass("hide");
	                            $stq.find("[data-ani]").each(function () {
	                                var ani = $this.attr("data-ani");
	                                $this.removeClass(ani);
	                            });
	                            $(".swiper-slide-active").find(".homepage_left").addClass("showLeft").removeClass("outLeft");
	                            $(".swiper-slide-active").find(".homepage_right").addClass("showRight").removeClass("outRight");
	                        }, 900)
	                    }, 3000);
	                }, 800);

	            }, 700);

	            

	        });
			
	        $(".js-bgs2").on("click", function () {

	            var $this = $(this);
	            $this.addClass("on");
	            setTimeout(function () {

	                $(".swiper-slide-active").find(".homepage_left").addClass("outLeft").removeClass("showLeft");
	                $(".swiper-slide-active").find(".homepage_right").addClass("outRight").removeClass("showRight");
	                var index = $this.index();
	                var $stq = $(".js-bgl-2").eq(index);
	                setTimeout(function () {
	                    $this.removeClass("on");
	                    $stq.removeClass("hide").addClass("fadeIn").removeClass("fadeOut");
	                    $stq.find("[data-ani]").each(function () {
	                        var ani = $this.attr("data-ani");
	                        $this.addClass(ani);
	                    });

	                    setTimeout(function () {
	                        $stq.addClass("fadeOut").removeClass("fadeIn");
	                        setTimeout(function () {
	                            $stq.addClass("hide");
	                            $stq.find("[data-ani]").each(function () {
	                                var ani = $this.attr("data-ani");
	                                $this.removeClass(ani);
	                            });
	                            $(".swiper-slide-active").find(".homepage_left").addClass("showLeft").removeClass("outLeft");
	                            $(".swiper-slide-active").find(".homepage_right").addClass("showRight").removeClass("outRight");
	                        }, 900)
	                    }, 3000);
	                }, 800);

	            }, 700);

			    

	        });
	    },
	    bindSwiper: function () {
	        var self = this;
	        this.mySwiper = new Swiper('.swiper-container', {
	            direction: 'vertical',
	            loop: false,
	            initialSlide: 0,
	            on: {
	                slideChangeTransitionEnd: function () {

	                    var index = this.activeIndex;//切换结束时，告诉我现在是第几个slide
						
						if(index == 3){
							//$(".yun").removeClass("ani-delay05").addClass("ani-delay1");
							$("#js-btn").addClass("ani-delay03");
						}else{
							$(".yun").removeClass("ani-delay507");
						}
						
	                    $(".swiper-slide-active").find("[data-ani]").each(function () {
	                        var ani = $(this).attr("data-ani");
	                        $(this).addClass(ani);
	                    });
	                    $(".swiper-slide-active").siblings().find("[data-ani]").each(function () {
	                        var ani = $(this).attr("data-ani");
	                        $(this).removeClass(ani);
	                    });
						
						$(".swiper-slide-active").siblings().find("[data-ani-lou]").each(function () {
	                        var ani = $(this).attr("data-ani-lou");
	                        $(this).removeClass(ani);
	                    });
						$(".swiper-slide-active").siblings().find("[data-ani-lou2]").each(function () {
	                        var ani = $(this).attr("data-ani-lou2");
	                        $(this).removeClass(ani);
	                    });

	                    if (index == 0) {
	                        self.setWrapFirst();
	                    } else {
	                        self.clearWrapFirst();
	                    }
	                }
	            }
	            // 如果需要分页器
	            //pagination: '.swiper-pagination',

	            // 如果需要前进后退按钮
	            //nextButton: '.swiper-button-next',
	            //prevButton: '.swiper-button-prev',

	            // 如果需要滚动条
	            //scrollbar: '.swiper-scrollbar',
	        });
			$(".swiper-slide-active").find("[data-ani]").each(function () {
				var ani = $(this).attr("data-ani");
				$(this).addClass(ani);
			});
	        this.setWrapFirst()
	    },
		init:function(){
		    this.shengtaiquan();
		    this.bgs();
		    this.bindSwiper();
		}
	}

function audioAutoPlay(id) {

    var audio = document.querySelector(id);

    var play = function () {

        audio.play();

        document.removeEventListener("touchstart", play, false);

    };

    audio.play();

    document.addEventListener("WeixinJSBridgeReady", function () {

        play();

    }, false);

    document.addEventListener('YixinJSBridgeReady', function () {

        play();

    }, false);

    document.addEventListener("touchstart", play, false);

}

window.onload = function () {
    //加载页
    (function (){
        var Music = document.querySelector("#music");
        Music.play();
		audioAutoPlay("Audio");
		setInterval(function(){
			audioAutoPlay("Audio");
		},3000);
    })();
	
	$("#js-wrap-first").css({
		width:$(window).width()*3,
		bottom: $("#js-firstbtm").height()
	});
	$(".cell-first").css({
		width:$(window).width()
	});
	
	$("#loading").fadeOut(function(){
		ns.init();
	});
    
};