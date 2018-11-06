module.exports = function(RED) {
    const primus = RED.settings.functionGlobalContext.primus;

    function Node(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        primus.on('connection', function (spark) {

            node.send({
                sparkId : spark.id,
                payload: {
                    sparkId : spark.id
                }
            });
        });

    }
    RED.nodes.registerType("primusConnect", Node);
}
