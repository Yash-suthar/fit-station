
const FSValidation = {
    isAmountFormatValid: (text: any) => {
        if (/^(?=.)([+-]?([0-9]*)(\.([0-9]{1,2}))?)$/.test(text) === false) {
            return false;
        } else {
            return true;
        }
    },
    isFieldEmpty: (text: string) => {
        if (text) {
            if (text.length > 0) {
                text.replace(/\s*$/, "");
                if (text == "") {
                    return true;
                }
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    },
    isFieldEmpty2: (text: any) => {
        if (text == "") {
            return true;
        }
        return false;
    },
    isEmailInvalid: (text: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            return true;
        }
        return false;
    },
    isNumber: (text: any) => {
        let reg = /^[0-9]+$/;
        if (reg.test(text) === false) {
            return true;
        }
        return false;
    },
    isNumberInvalid: (text: any) => {
        if (text == '0000000000') {
            return true;
        }
        return false;
      },
    isNumberForBagSize: (text: string) => {
        let reg = /^[1-9]*$/;
        if (reg.test(text) === true) {
            return true;
        }
        return false;
    },
    isTextLengthInvalid: (text: string | any[], length: number) => {
        if (text.length < length) {
            return true;
        }
        return false;
    },
    isTwoTextInputsSame: (text1: string, text2: string) => {
        text1.replace(/\s*$/, "");
        text2.replace(/\s*$/, "");

        if (text1 === text2) {
            return true;
        }
        return false;
    },
    isZipCodeInvalid: (text: string) => {
        let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(text);

        if (!isValidZip) {
            return true;
        }
        return false;
    },
    isEmptyField: (text: { trim: () => { (): any; new(): any; length: number; }; }) => {
        if (text.trim().length > 0) {
            return true;
        } else {
            return false
        }
    },
    isPasswordInvalid: (text: string) => {
        let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
        if (reg.test(text) === false) {
            return true;
        }
        return false;
    },

    isNameInvalid: (text: string) => {
        let reg = /^([a-zA-Z ]){2,40}$/;
        if (reg.test(text) === false) {
            return true;
        }
        return false;
    },

    isFloatNumber: (text: string) => {
        let reg = /^-?\d*(\.\d+)?$/;
        if (reg.test(text) === false) {
            return true;
        }
        return false;
    },

    isAgeInvalid: (text: string) => {
        let age = parseInt(text)
        if(age < 18) {
            return true;
        }
        return false;
    },

    isHeightInvalid: (text: string) => {
        let height = parseInt(text)
        if(height > 170) {
            return true;
        }
        return false;
    },

    isSelectionNull: (text: any) => {
        if (text == null) {
            return true;
        }
        return false;
    },

};

export default FSValidation;
