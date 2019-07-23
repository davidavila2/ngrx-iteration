module.exports = {
  name: 'app-four',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-four/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
