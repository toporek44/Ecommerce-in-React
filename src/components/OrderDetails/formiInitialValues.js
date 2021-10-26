export const initialFormData = {
    name: {
        value: "",
        required: true,
        fieldType: "text",
    },
    surname: {
        value: "",
        required: true,
        fieldType: "text",
    },

    companyName: {
        value: "",
        required: true,
        fieldType: "textAndNumber",
    },
    company: {
        value: false,
        required: false,
        fieldType: "company",
    },
    country: {
        value: "",
        required: true,
        fieldType: "text",
    },
    nip: {
        value: "",
        required: true,
        fieldType: "nip",
    },
    street: {
        value: "",
        required: true,
        fieldType: "text",
    },
    city: {
        value: "",
        required: true,
        fieldType: "textAndNumbers",
    },
    state: {
        value: "",
        required: true,
        fieldType: "text",
    },
    postcode: {
        value: "",
        required: true,
        fieldType: "textAndNumbers",
    },
    payment: {
        value: "card",
        required: false,
        fieldType: "payment",
    },
    cardNumber: {
        value: "",
        required: true,
        fieldType: "cardNumber",
    },
    cardName: {
        value: "",
        required: true,
        fieldType: "text",
    },
    expireDate: {
        value: "",
        required: true,
        fieldType: "expireDate",
    },
    cvv: {
        value: "",
        required: true,
        fieldType: "cvv",
    },
};