export class Validator {
  static validateUsername(username) {
    return /^[a-zA-Z0-9_-]+$/.test(username) && !/\d{4,}/.test(username) && !/^\d|^_|^-|_$|-$|\d$/.test(username);
  }
}