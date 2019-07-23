module.exports = {
  name: 'application-three',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/application-three/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
