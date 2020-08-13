function easyHTTP() {
    this.http = new XMLHttpRequest();
  }
  
  // Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);


}