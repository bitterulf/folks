const seneca = require('seneca')()

seneca.add('command:web,page:status', (msg, reply) => {
    reply(null, {
        template: 'status',
        status: 'OK'
    });
})

module.exports = function(RED) {
    console.log('i see RED', RED.settings.functionGlobalContext.primus);

    function Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {
            seneca.act(msg.payload, function (err, result) {
                if (err) {
                    msg.payload = { error: err.message };
                    return node.send([null, msg]);
                }
                msg.payload = result;
                node.send([msg, null]);
            })
        });
    }
    RED.nodes.registerType("logic", Node);
}
