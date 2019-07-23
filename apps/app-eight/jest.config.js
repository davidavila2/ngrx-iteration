module.exports = {
  name: 'app-eight',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-eight/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
