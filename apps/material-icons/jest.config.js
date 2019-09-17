module.exports = {
  name: 'material-icons',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/material-icons/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
