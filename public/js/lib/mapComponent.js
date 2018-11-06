define(['m', 'state'],
    function(m, state) {
        const mapComponent = {
            view: function(vnode) {

                return m('main', [
                    m('h1', 'map'),
                    m('div', String(vnode.attrs.data.length))
                ])
            }
        };

        return mapComponent;
    }
);
