Page({
    data: {
        option: [
            '标题1',
            '标题22',
            '标题333',
        ]
    },
    onChange(e) {
        let detail = e.detail;

        console.log(detail);
    }
});