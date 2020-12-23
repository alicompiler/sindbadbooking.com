import * as React from 'react';
import { Locals } from "./../../../../Localization/Locals";

export class LoginForm extends React.Component {
    render() {
        return (
            <form action={'https://b2b.sindbadbooking.com/index.php/login/post'} method={'POST'}
                className={'flex items-center flex-col bg-white p-8 rounded bg-gray-200'}>

                <input required className={'form-input p-2 rounded mb-4'} style={{ width: 280 }}
                    name={'root'}
                    placeholder={Locals.email} />
                <input required className={'form-input p-2 rounded mb-4'} style={{ width: 280 }}
                    name={'username'}
                    placeholder={Locals.username} />
                <input required className={'form-input p-2 rounded mb-8'} style={{ width: 280 }}
                    name={'password'} type={'password'}
                    placeholder={Locals.password} />

                <input type="submit" hidden value="submit" />

                <button type="submit"
                    className={'p-4 w-40 text-center bg-orange-500 hover:bg-orange-700 rounded'}>
                    {Locals.login}
                </button>

            </form>
        );
    }
}