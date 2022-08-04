var Title_Animation = {
    _text: null,
    _timeBetweenEachLetters: 300,
    config: function(a) {
        "undefined" !== typeof a.text && (this._text = a.text);
        "undefined" !== typeof a.t_timeBetweenEachLetters && (this._timeBetweenEachLetters = a.timeBetweenEachLetters);
    },
    start: function() {
        let title = Title_Animation._text;
        let i = 0;
        setInterval(() => {
            document.title = title.substring(0, i + 1);
            if (i == 0) {
                direction = 1;
            } else if (i == title.length) {
                direction = -1;
            }
            i += direction;
        }, Title_Animation._timeBetweenEachLetters);
    }
};

setTimeout(() => {
    Title_Animation.start();
}, 1);