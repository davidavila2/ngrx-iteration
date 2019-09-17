module.exports = {
  name: 'apex-legends',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/apex-legends/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
