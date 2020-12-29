import * as React from "react";
import {getCurrentLanguage} from "../../Localization/Language";
import {AppMetadataDescriptor, ContactInfo} from "../../AppDescriptor/AppDescriptor";
import ContactInformation from "../ContactInformation/ContactInformation";
import SocialMediaBarContainer from "../SocialMediaBar/SocialMediaBarContainer";

interface Props {
    metadata: AppMetadataDescriptor;
    contactInfo: ContactInfo;
}

export class Footer extends React.Component<Props> {

    render(): any {
        const {metadata, contactInfo} = this.props;
        const lang = getCurrentLanguage();
        return <footer className={'p-24 bg-gray-800 text-white'}>
            <div className={'container mx-auto'}>
                <ContactInformation contactInfo={contactInfo}/>
            </div>
            <SocialMediaBarContainer/>
            <h3 className={'text-xl text-center mt-8'}>{metadata.copyrightText[lang]}</h3>
        </footer>
    }
}