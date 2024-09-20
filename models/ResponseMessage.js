class ResponseMessage {
  static from(data, status = 200) {
    const now = Date.now();
    return { status, data, requestTime: now };
  }
}

module.exports = ResponseMessage;
