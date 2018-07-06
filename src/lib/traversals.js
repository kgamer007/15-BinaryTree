'use strict';

const preOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;

  callback(rootNode.value);
  preOrderTraversal(rootNode.left, callback);
  preOrderTraversal(rootNode.right, callback);
  return undefined;
}

const postOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;

  postOrderTraversal(rootNode.left, callback);
  postOrderTraversal(rootNode.right, callback);
  callback(rootNode.value);
}

const inOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;

  inOrderTraversal(rootNode.left, callback);
  inOrderTraversal(rootNode.right, callback);
  callback(rootNode.value);
}

export { preOrderTraversal, inOrderTraversal, postOrderTraversal };
