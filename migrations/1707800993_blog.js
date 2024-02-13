const Blog = artifacts.require("Blog");

module.exports = function (_deployer) {
  _deployer.deploy(Blog, 'Mohammad');
};
