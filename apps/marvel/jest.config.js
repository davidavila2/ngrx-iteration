module.exports = {
  name: 'marvel',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/marvel/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
