module.exports = {
  name: 'app-ten',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-ten/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
