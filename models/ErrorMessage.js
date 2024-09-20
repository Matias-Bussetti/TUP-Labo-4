class ErrorMessage {
  static from(error, status = 500) {
    const now = Date.now();
    return { status, data: error, requestTime: now, message: "error" };
  }
}

module.exports = ErrorMessage;
