module.exports = {
  name: 'yugioh',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/yugioh/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
