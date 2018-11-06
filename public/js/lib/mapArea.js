define(['m', 'state', 'mapComponent', 'window'],
    function(m, state, mapComponent, window) {
        const mapArea = {
            view: function() {
                if (state.map && state.map.data) {
                    if (state.map.component === 'map') {
                        return m('main', [
                            m(mapComponent, { data: state.map.data })
                        ])
                    }
                }

                return m('main', [
                    m('h1', 'map inactive'),
                    m('button', {
                        onclick: function() {
                            window.primus.write({ type: 'action', name: 'foo'});
                        }
                    }, 'load')
                ])
            }
        };

        return mapArea;
    }
);
