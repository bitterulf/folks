requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        m: 'mithril'
    }
});

requirejs(['m', 'root', 'statusComponent'],
    function(m, root, statusComponent) {
        m.mount(root, statusComponent);
    }
);
