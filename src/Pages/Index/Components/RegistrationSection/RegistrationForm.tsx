import React, {Component} from 'react';
import {getLocals} from "../../../../Localization/Locals";

class RegistrationForm extends Component {
    private button: HTMLButtonElement | null = null;

    render() {

        return (
            <form id={"register-form"} action={"https://sindbadbooking.com/register.php"} method={"post"}
                  onSubmit={this.onSubmit}
                  className={'flex items-center flex-col bg-white p-8 rounded bg-gray-200 text-black'}>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={getLocals().company_name}
                       required
                       name={'name'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={getLocals().person_name}
                       required
                       name={'person'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} required placeholder={getLocals().city}
                       name={'country'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} required placeholder={getLocals().city}
                       name={'city'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} placeholder={getLocals().address} required
                       name={'address'}/>

                <input className={'form-input p-2 rounded mb-8 w-full'} required placeholder={getLocals().phone}
                       name={'phone'}/>

                <input className={'form-input p-2 rounded mb-16 w-full'} required placeholder={getLocals().email}
                       name={'email'}/>

                <button ref={ref => this.button = ref} name={'submit'}
                        className={'p-4 w-40 text-center bg-indigo-500 hover:bg-indigo-700 rounded text-white'}
                        type={'submit'}>
                    {getLocals().register}
                </button>

            </form>
        );
    }

    private onSubmit = (e: any) => {
        const data = new FormData(document.getElementById("register-form") as any)
        e.preventDefault();
        this.button!.disabled = false;
        fetch("https://sindbadbooking.com/register.php", {
            body: data,
            method: "post"
        }).then(() => {
            this.button!.disabled = false;
        }).catch(() => {
            this.button!.disabled = false;
        })
    }
}

export default RegistrationForm;