define(['m', 'state'],
    function(m, state) {
        const statusComponent = {
            oninit: function(vnode) {
                const data = this.data = {};

                m.request({
                    url: '/api/page/status',
                    deserialize: function(value) {return value}
                })
                .then(function(result) {
                    data.status = result;
                })
            },
            view: function() {
                console.log('what a state', state);
                return m('main', [
                    m('h1', 'status'),
                    m('div', m.trust(this.data.status || ''))
                ])
            }
        };

        return statusComponent;
    }
);
