requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        m: 'mithril'
    }
});

requirejs(['/primus/primus.js', 'm', 'root', 'statusComponent', 'mapArea', 'state'],
    function(Primus, m, root, statusComponent, mapArea, state) {
        const primus = window.primus = Primus.connect();
        primus.on('data', function message(data) {
            console.log('message from the server', data);
            if (data.type === 'update') {
                state[data.target] = {
                    component: data.component,
                    data: data.data
                };
            }
            m.redraw();
        });
        primus.write({
            message: 'roundtrip'
        });

        const App = {
            view: function() {
                return [
                    m(mapArea)
                ];
            }
        }

        m.mount(root, App);
    }
);
