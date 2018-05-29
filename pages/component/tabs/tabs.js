Page({
    data: {
        activeIndex: 1,
        option: ['选项1', '选项2', '选项3'],
    },
    onTabChange(event) {
        let activeIndex = event.detail.activeIndex;
        
        console.log(activeIndex)
    }
})