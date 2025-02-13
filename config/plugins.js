module.exports = ({ env }) => ({
   
    'transformer': {
        enabled: true,
        config: {
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
            requestTransforms: {
                wrapBodyWithDataKey: true
            },
            hooks: {
                preResponseTransform: (ctx) => { },
                postResponseTransform: (ctx) => { }
            },
        }
    },
});