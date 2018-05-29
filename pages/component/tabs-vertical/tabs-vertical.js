Page({
    data: {
        option: ['简介', '设计目标', '定制开发', '菜单4'],
    },
    onPageScroll(event){
        this.setData({
            tabScrollTop: event.scrollTop
        });
    },
    onTabChange(event) {
        let detail = event.detail;

        if ('scrollTop' in detail){
            wx.pageScrollTo({
                scrollTop: detail.scrollTop,
                duration: 0
            });
        }
        
        console.log(detail);
    }
})