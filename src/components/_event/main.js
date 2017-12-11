
    // 全局自定义事件监听
    var _event = {

        // 监听
        add: function (type, cb) {
            var _this = this;

            _this._fns[type] = cb;
        },

        // 移除监听
        remove: function (type) {
            _this._fns[type] = null;
        },

        // 触发
        trigger: function (type, args) {
            var _this = this;

            if (_this._fns[type]) _this._fns[type].apply(null, args);
            else console.error(type, 'is not defined');
        },

        // 事件对象
        _fns: {

        }
    };

    // window._event = _event;

    export default _event;
