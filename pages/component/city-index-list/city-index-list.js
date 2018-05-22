Page({
    data: {
        cityVisible: false,
        cityStyles: {
            // letterColor: '#fff'
        }
    },
    onLoad() {

    },
    onClickBtn() {
        this.setData({
            cityVisible: true
        });
    },
    onSelectCity(e) {
        let detail = e.detail;

        console.log(detail);
        this.setData({
            result: detail.name
        });
    }
});