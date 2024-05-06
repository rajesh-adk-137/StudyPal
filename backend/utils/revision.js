// revision.js
let revision = [];

module.exports = {
    setRevision: (revisionGuide) => {
        revision = revisionGuide; 
    },
    getRevision: () => revision
};
