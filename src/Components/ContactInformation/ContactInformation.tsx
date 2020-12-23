import React, {Component} from 'react';
import {AddressComponent} from "./AddressComponent";
import {PhoneComponent} from "./PhoneComponent";
import {EmailComponent} from "./EmailComponent";
import {ContactInfo} from "../../AppDescriptor/AppDescriptor";

interface Props {
    contactInfo: ContactInfo;
}

class ContactInformation extends Component<Props> {
    render() {
        const {contactInfo} = this.props;
        return (
            <div className={'grid gap-4 md:grid-cols-3 p-8 text-center'}>
                <AddressComponent addresses={contactInfo.addresses}/>
                <PhoneComponent phones={contactInfo.phones}/>
                <EmailComponent emails={contactInfo.emails}/>
            </div>
        );
    }
}

export default ContactInformation;