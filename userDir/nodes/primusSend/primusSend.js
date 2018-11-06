module.exports = function(RED) {
    const primus = RED.settings.functionGlobalContext.primus;

    function Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        node.on('input', function(msg) {
            if (msg.sparkId) {
                primus.forEach(function (spark, id, connections) {
                    if (id !== msg.sparkId) return;

                    spark.write(msg.payload);
                });
            }
        });

    }
    RED.nodes.registerType("primusSend", Node);
}
