const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
    constructor({ minLength = 8, containNumbers = true } = {}) {
        this.containNumbers = containNumbers;
        this.minLength = minLength;
    }

    validate(string) {
        const result = {};
        if (string.length < this.minLength) {
            result.minLength = 'too small';
        } 
        if (this.containNumbers === true) {
            if (!hasNumber(string)) {
                result.containNumbers = 'should contain at least one number'
            }
        }
        return result;
    }
}

const validator = new PasswordValidator()

// console.log(validator)

console.log(validator.validate('fhjueh'))

// console.log(hasNumber('fhjueh'))