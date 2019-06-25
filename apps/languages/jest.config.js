module.exports = {
  name: 'languages',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/languages/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
