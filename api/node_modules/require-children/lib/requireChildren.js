var _ = require('underscore'),
    path = require('path'),
    fs = require('fs');

/**
 * requireChildren
 * `require`s a directory's children that are files into a `children` object,
 * names each key in `children` the filename of the required file without its
 * extension with any spaces removed.
 * Returns children object.
 * Note: requireChildren uses the `destinationModule` parameter to construct a relative 
 * path with which to require the child module.
 *
 * @param <String> directory
 * @param <Object (NodeJS Module)> destinationModule
 *
 * @returns <Object> children
 */
module.exports = function requireChildren(directory, destinationModule) {
  var originModuleDirectoryPath = path.dirname(destinationModule.filename),
      directoryPath = path.resolve(originModuleDirectoryPath, directory),
      directoryContents = fs.readdirSync(directoryPath),
      children = {};

  /**
   * Require directory contents into `children` object
   */
  _.each(directoryContents, function requireChild(directoryChild) {
    var childModulePath = path.join(directoryPath, directoryChild),
        childName = getFileNameWithoutExtension(directoryChild),
        childKey = getFileNameKey(childName);

    /**
     * If child module path is a directory, don't try to require it,
     * and instead place a string '(directory)' in its place in the 
     * `children` object if its key has no value.
     */
    if (fs.statSync(childModulePath).isDirectory()) {
      if (! children[childKey]) {
        children[childKey] = '(directory)';
      }
      return;
    }

    /**
     * If the child module path is a dotfile, don't try to require it.
     */
    if (path.basename(childModulePath)[0] === '.') {
      return
    }

    /**
     * Attempt to require child module into `children` object
     */
    try {
      children[childKey] = require(childModulePath);
    } catch (error) {
      console.error('Error loading child module at path %s. Error:', childModulePath, error);
    }
  });

  return children;
};

function getFileExtension(fileName) {
  var fileExtension = path.extname(fileName);

  return fileExtension;
};

function getFileNameWithoutExtension(fileName) {
  var fileExtension = getFileExtension(fileName),
      fileExtensionExpression = new RegExp(fileExtension, 'gi'),
      fileNameWithoutExtension = fileName.replace(fileExtensionExpression, '');

  return fileNameWithoutExtension;
};

function getFileNameKey(fileName) {
  var spaceExpression = new RegExp(' ', 'gi'),
      fileNameWithoutExtension = getFileNameWithoutExtension(fileName),
      fileNameKey = fileNameWithoutExtension.replace(spaceExpression, '');

  return fileNameKey;
};

