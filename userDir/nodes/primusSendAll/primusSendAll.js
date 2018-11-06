module.exports = function(RED) {
    const primus = RED.settings.functionGlobalContext.primus;

    function Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {
            primus.forEach(function (spark, id, connections) {
                spark.write(msg.payload);
            });
        });

    }
    RED.nodes.registerType("primusSendAll", Node);
}
