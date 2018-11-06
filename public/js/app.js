requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        m: 'mithril'
    }
});

requirejs(['/primus/primus.js', 'm', 'root', 'statusComponent'],
    function(Primus, m, root, statusComponent) {
        const primus = Primus.connect();
        primus.on('data', function message(data) {
            console.log('message from the server', data);
        });
        m.mount(root, statusComponent);
    }
);
