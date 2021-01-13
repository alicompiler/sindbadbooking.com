import React, {Component} from 'react';
import {SectionTitle} from "../../../../Components/SectionTitle/SectionTitle";
import {getLocals} from "../../../../Localization/Locals";
import RegistrationForm from "./RegistrationForm";

class RegistrationSection extends Component {
    render() {
        return (
            <section className={'bg-gray-700 p-4 md:p-8 lg:p-16 xl:p-24'}>
                <div id={"register"} className={"mx-auto container"}>
                    <SectionTitle title={getLocals().register}/>
                    <RegistrationForm/>
                </div>
            </section>
        );
    }
}

export default RegistrationSection;