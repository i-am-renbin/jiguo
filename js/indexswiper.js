var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项

    autoplay: {
        delay: 1000,
        // stopOnLastSlide: false,// 在loop模式下不生效
        disableOnInteraction: false,//当用户操作的时候 是否会继续自动轮播

    },
    // 如果需要分页器
    // pagination: {
    //     el: '.swiper-pagination',
    //     bulletElement: 'li',
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})        