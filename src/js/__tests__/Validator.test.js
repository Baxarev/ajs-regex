import { Validator } from '../Validator'

describe('Validator', () => {
  test('Правильное имя пользователя', () => {
    expect(Validator.validateUsername('user123Jon')).toBe(true);
    expect(Validator.validateUsername('John-42Doe')).toBe(true);
    expect(Validator.validateUsername('my_username')).toBe(true);
  });

  test('Имя пользователя содержит недопустимые символы', () => {
    expect(Validator.validateUsername('user@name')).toBe(false);
    expect(Validator.validateUsername('user*name')).toBe(false);
    expect(Validator.validateUsername('user name')).toBe(false);
  });

  test('Имя пользователя содержит подряд более трёх цифр', () => {
    expect(Validator.validateUsername('user1234')).toBe(false);
    expect(Validator.validateUsername('user_12345')).toBe(false);
  });

  test('Имя пользователя начинается или заканчивается цифрами, подчёркиванием или тире', () => {
    expect(Validator.validateUsername('123user')).toBe(false);
    expect(Validator.validateUsername('user-')).toBe(false);
    expect(Validator.validateUsername('_username_')).toBe(false);
  });
});