Page({
    data: {
        animation: true,
        showCloser: true,
        content: '这是一个跑马灯效果，一直移动哦，哈哈哈，移动移动慢慢移动。',
        styles: {
            // backgroundColor: '#eee',
            // closerColor: 'red',
            // contentColor: 'red',
        }
    },
    onTapBar() {
        console.log('tap')
    },
    onClickBtn() {
        this.setData({
            animation: !this.data.animation
        });
    },
})