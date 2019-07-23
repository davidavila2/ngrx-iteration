module.exports = {
  name: 'app-five',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-five/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
