export const validationMessages = {
    invalid: "Provided value is invalid!",
    empty: "Provided value can't be empty!",
    number: "Provided value can't be a number!",
    letter: "Provided value can't be a letter!",
    nip: {
        rule: {
            minLength: "Nip must be at least 10 character long.",
        }
    },
    expireDate: {
            invalidMonth: "Provided month is invalid!",
            invalidYear: "Provided year is invalid!",
    }
}