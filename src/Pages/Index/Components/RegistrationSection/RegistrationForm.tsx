import React, {Component} from 'react';
import {Locals} from "../../../../Localization/Locals";

class RegistrationForm extends Component {
    render() {
        return (
            <form className={'flex items-center flex-col bg-white p-8 rounded bg-gray-200'}>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={Locals.company_name}
                       name={'company'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={Locals.person_name}
                       name={'person'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={Locals.city} name={'city'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={Locals.address}
                       name={'address'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={Locals.phone} name={'phone'}/>

                <input className={'form-input p-2 rounded mb-16 w-full'} placeholder={Locals.email} name={'email'}/>

                <button name={'submit'} className={'p-4 w-40 text-center bg-orange-500 hover:bg-orange-700 rounded'}
                        type={'submit'}>
                    {Locals.login}
                </button>

            </form>
        );
    }
}

export default RegistrationForm;