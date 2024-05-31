class DateTime {
  fullDate() {
    return new Date()
      .toLocaleDateString();
  }

  fullTime() {
    return new Date()
      .toLocaleTimeString();
  }
}

const dateTime = new DateTime();

module.exports = dateTime;
