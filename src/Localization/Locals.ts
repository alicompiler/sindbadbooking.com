import {EnglishLocals} from './EnglishLocals';
import {ArabicLocals} from './ArabicLocals';
import {getCurrentLanguage} from "./Language";

interface ILocals {
    company_name: string;
    person_name: string;
    city: string;
    address: string;
    phone: string;
    register: string;
    airlines: string;
    login: string;
    password: string;
    username: string;
    close: string;
    home: string;
    about_us: string;
    images: string;
    for_booking: string;
    description: string;
    duration: string;
    price: string;
    send: string;
    message: string;
    subject: string;
    email: string;
    name: string;
    partners: string;
    destinations: string;
    contact_us: string;
    services: string;
}


let _locals: ILocals | null = null;

export function clearCachedLocals() {
    _locals = null;
}

export function getLocals() {
    if (_locals) {
        return _locals;
    }
    const lang = getCurrentLanguage();
    if (lang === "ar") {
        _locals = {...ArabicLocals};
    } else {
        _locals = {...EnglishLocals};
    }

    return _locals;
}

export {_locals as Locals}
export type {ILocals}