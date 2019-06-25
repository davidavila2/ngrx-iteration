module.exports = {
  name: 'wild-card',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/wild-card',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
