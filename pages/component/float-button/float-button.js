Page({
    data: {
        btnVisible: true,
    },
    onTapBtn(e) {
        let detail = e.detail;

        console.log(detail);
        this.setData({
            result: detail.open
        });
    }
})