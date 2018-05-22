Page({
    data: {
        searchbarVisible: false,
        confirmConfig: {
            content: '确定要清空内容吗？'
        }
    },
    onClickBtn() {
        this.setData({
            searchbarVisible: true
        });
    },
    onSearch(e) {
        let detail = e.detail;

        console.log(detail);
        this.setData({
            result: detail.text
        });
    }
})