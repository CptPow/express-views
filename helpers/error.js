module.exports = class CustomError extends Error {
  constructor(status, message, name = "custom error") {
    super(message);
    this.status = status;
    this.name = name;

    this.handle();
  }
  handle() {
    switch (this.status) {
      case 400:
        this.err400(); break;

      case 401:
        this.err401(); break;

      case 403:
        this.err403(); break;

      case 500:
        this.err500(); break;

      case 501:
        this.err501(); break;

      default:
        this.defaultError(); break;
    }
  }
  defaultError(){
    this.status = 404;
    this.message = this.message || "Page not found.";
  }
err400() {this.message = this.message || "Errore 400"};
err401() {this.message = this.message || "Errore 401"};
err403() {this.message = this.message || "Errore 403"};
err500() {this.message = this.message || "Errore 500"};
err501() {this.message = this.message || "Errore 501"};
};
