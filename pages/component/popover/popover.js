let allDirs = 'tl tc tr rt rc rb bl bc br lt lc lb';
let currIndex = -1;

allDirs = allDirs.split(' ');

Page({
    data: {
        visible: false,
        list: ['选项1', '选项2', '选项3']
    },
    onReady(){
        this.initPopover();
    },
    initPopover() {
        let elemSelector = '#menuBtn';
        let pageSelector = '.page';
        
        wx.createSelectorQuery()
            .select(elemSelector)
            .boundingClientRect((res) => {
                this.setData({
                    elemRect: res
                });
            }).exec();

        let getRect = (callback) => {
            wx.createSelectorQuery()
                .select(pageSelector)
                .boundingClientRect((rect) => {
                    if (rect) {
                        callback(rect);
                    } else {
                        setTimeout(() => getRect(callback), 100);
                    }
                }).exec();
        }

        getRect((res) => {
            this.setData({
                pageRect: res
            });
        });
    },
    onSelectPopover(event) {
        let item = event.detail.item;

        console.log(item);
        this.setData({
            result: item.value
        });
    },
    onClickBtn() {
        currIndex++;

        if (currIndex == allDirs.length) currIndex = 0;

        let dir = allDirs[currIndex];

        this.setData({
            dir: dir,
            visible: true
        });
    },
})