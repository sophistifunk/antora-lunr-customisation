(function () {
    /**
     * For this PoC we're just copy+pasting the code from generator/lib/generate-index.js - it needs 
     * to be a module in future so we can share between ui-template and generate-index
     */

    var pipelineFunction = function (token) {
        const str = token.toString();
        if (str === "k8s" || str === "kube" || str === "kubernetes") {
            return token.update(function () { return "kubernetes" })
        } else {
            return token;
        }
    }

    // Register the pipeline function so the index can be serialised
    lunr.Pipeline.registerFunction(pipelineFunction, 'normaliseJargon');
})();