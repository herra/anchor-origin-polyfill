if (!('origin' in HTMLAnchorElement.prototype)) {
  Object.defineProperty(HTMLAnchorElement.prototype, 'origin', {
    get: function () {
      return this.protocol + '//' + this.hostname + (this.port ? ':' + this.port : '')
    }
  });
}