import * as React from 'react';
import {getLocals} from "../../../../Localization/Locals";

export class LoginForm extends React.Component {
    render() {
        return (
            <form action={'https://b2b.sindbadbooking.com/index.php/login/post'} method={'POST'}
                  className={'flex items-center flex-col bg-white p-8 rounded bg-gray-200 text-black'}>

                <input required className={'form-input p-2 rounded mb-4'} style={{width: 280}}
                       name={'root'}
                       placeholder={getLocals().email}/>
                <input required className={'form-input p-2 rounded mb-4'} style={{width: 280}}
                       name={'username'}
                       placeholder={getLocals().username}/>
                <input required className={'form-input p-2 rounded mb-8'} style={{width: 280}}
                       name={'password'} type={'password'}
                       placeholder={getLocals().password}/>

                <input type="submit" hidden value="submit"/>

                <button type="submit"
                        className={'p-4 w-40 text-center bg-indigo-500 hover:bg-indigo-700 text-white rounded'}>
                    {getLocals().login}
                </button>

            </form>
        );
    }
}
