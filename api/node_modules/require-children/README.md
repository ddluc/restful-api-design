Require Children
================

Easily and safely require a directory as an object whose keys are its children's filenames (without their extensions), 
and whose values are its children as modules.

# Example

To require a directory `resources/` with children `posts.js`, `comments.js`, and `users.js`:

```javascript
var resources = requireChildren('./resources', module);

/**
 * Now all modules contained in ./resources/ are in the object:
 *
 * resources = {
 *   comments: [object Object],
 *   posts: [object Object],
 *   users: [object Object]
 * } 
 */
```

# Installation

`npm install require-children`

# Usage

`requireChildren(directory, destinationModule);`

`requireChildren` always returns a `children` object. The keys of the `children` object are the names of the modules 
that were successfully loaded from `directory` without their extensions or any spaces.

## params
+ <String> `directory`: The directory to require children of.
+ <NodeJS Module> `destinationModule`: The module that is requiring the directory children.

