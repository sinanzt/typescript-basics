import { EmailValidator } from './exp-module';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(result);