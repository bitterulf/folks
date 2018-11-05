requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        m: 'mithril'
    }
});

requirejs(['/primus/primus.js', 'm', 'root', 'statusComponent'],
    function(Primus, m, root, statusComponent) {
        const primus = Primus.connect();
        m.mount(root, statusComponent);
    }
);
