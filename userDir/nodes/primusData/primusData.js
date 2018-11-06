module.exports = function(RED) {
    const primus = RED.settings.functionGlobalContext.primus;

    function Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        primus.on('connection', function (spark) {
            spark.on('data', function (data) {
                node.send({
                    sparkId: spark.id,
                    payload: data
                });
            });
        });

    }
    RED.nodes.registerType("primusData", Node);
}
