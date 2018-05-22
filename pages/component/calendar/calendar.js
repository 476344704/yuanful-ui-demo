Page({
    data: {
        calendarVisible: false
    },
    onLoad() {

    },
    onClickBtn() {
        this.setData({
            calendarVisible: true
        });
    },
    onChangeDate(e) {
        let detail = e.detail;

        console.log(detail);
        this.setData({
            result: detail.currentDate
        });
    }
});