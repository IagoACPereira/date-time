class DateTime {
  #date;

  constructor() {
    this.#date = new Date();
  }

  fullDate() {
    return this.#date
      .toISOString()
      .split('T')[0];
  }

  fullTime() {
    return this.#date
      .toISOString()
      .split('T')[1]
      .split('.')[0];
  }
}

const dateTime = new DateTime();

module.exports = dateTime;

