import {validationMessages} from "./validationMessages"

const errors = {}

export const validateForm = (values, inputName, inputValue, fieldType, required) => {
    const {
        company,
        payment,
    } = values;

    const isCardPayment = payment.value === 'card'

    const handleEmptyValue = (value, name) => {
        if (!value.trim() && required) {
            errors[name] = validationMessages.empty
            return false
        } else {
            delete errors[name]
            return true
        }
    }

    const handleStringValue = (value, name) => {
        handleEmptyValue(value, name) ?
            (/[^a-zA-Z -]/.test(value)) ?
                errors[name] = validationMessages.number
                : delete errors[name] : null
    }


    const handleNumberValue = (value, name) => {
        handleEmptyValue(value, name) ?
            (!/^[0-9]/.test(value)) ?
                errors[name] = validationMessages.letter
                : delete errors[name] : null
    }

    const handleNipValidate = (value) => {
        if (!company.value) return; // if company is unchecked do not validate nip
        if (!/^[0-9]/.test(value)) return false // if value is not a number stop fc
        if (value.length !== 10) return false
        const weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
        let sum = 0;
        const controlNumber = parseInt(value.substring(9, 10), 10);
        const weightCount = weight.length;
        for (let i = 0; i < weightCount; i += 1) {
            sum += parseInt(value.substr(i, 1), 10) * weight[i];
        }
        return sum % 11 === controlNumber;
    };




    function validateCreditCardNumber(number) {
        const regex = /^(:5[1-5][0-9]{14})|(4[0-9]{12}(:[0-9]{3}))$/;  // regex is validating visa and mastercard
        const cardNum = number.split(' ').join(''); // deleting spaces from number
        if (parseInt(cardNum, 10) <= 0 || cardNum.length < 16 || !isCardPayment || regex.test(cardNum)) {
            return false;
        }
        const carray = [];
        for (let i = 0; i < cardNum.length; i += 1) {
            carray[carray.length] = cardNum.charCodeAt(i) - 48;
        }
        carray.reverse();
        let sum = 0;
        for (let i = 0; i < carray.length; i += 1) {
            let tmp = carray[i];
            if (i % 2 !== 0) {
                tmp *= 2;
                if (tmp > 9) {
                    tmp -= 9;
                }
            }
            sum += tmp;
        }
        return sum % 10 === 0;
    }

    const handleExpireDate = (value) => {
        if (value.length !== 5 && isCardPayment) {
            errors.expireDate = validationMessages.invalid
            return
        } else delete errors.expireDate

        const date = new Date(Date.now());
        const yearUnity = Number(date.getFullYear().toString().slice(2, 4));
        const month = date.getMonth() + 1;
        const expirationDateYear = Number(value.slice(3, 5));
        const expirationDateMonth = Number(value.slice(0, 2));

        (expirationDateMonth < month && expirationDateYear <= yearUnity) ?
            errors.expireDate = validationMessages.expireDate.invalidMonth
            : (expirationDateYear < yearUnity) ?
            errors.expireDate = validationMessages.expireDate.invalidYear
            :
            delete errors.expireDate
    }




    switch (fieldType) {
        case 'textAndNumbers':
            handleEmptyValue(inputValue, inputName)
            break;
        case 'text':
            handleStringValue(inputValue, inputName)
            break;
        case 'number':
            handleNumberValue(inputValue, inputName)
            break;
        case 'nip':
            handleNipValidate(inputValue) ?
                delete errors.nip
                :
                errors.nip = validationMessages.invalid
            break;
        case 'cardNumber':
            validateCreditCardNumber(inputValue) ?
                delete errors.cardNumber
                :
                errors.cardNumber = validationMessages.invalid
            break;
        case 'expireDate':
            handleExpireDate(inputValue)
            break;
        case 'cvv':
            if (inputValue.length !== 3 && isCardPayment) {
                errors[inputName] = validationMessages.invalid
                break
            }
            handleNumberValue(inputValue, inputName)
            break;
        default:
    }
    return errors
};

