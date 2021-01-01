import {indexPage} from './PreDefinedAppDescriptor/IndexPage';
import {socialMedia} from './PreDefinedAppDescriptor/SocialMedia';
import {metadata} from './PreDefinedAppDescriptor/Metadata';
import {menu} from './PreDefinedAppDescriptor/Menu';
import {AppDescriptor} from "./AppDescriptor";
import {AppDescriptorRepository} from "./AppDescriptorRepository";

export class FakeAppDescriptorRepository implements AppDescriptorRepository {

    fetch(): Promise<AppDescriptor> {
        return new Promise((resolve) => {
            resolve(appDescriptor);
        });
    }

}

const appDescriptor: AppDescriptor = {
    pages: {
        index: indexPage,
    },
    socialMedia: socialMedia,
    meta: metadata,
    menu: menu,
    contactInfo: {
        emails: [
            'info@sindbadbooking.com',
        ],
        addresses: [
            {ar: 'العراق - بغداد - المنصور', en: 'Iraq - Baghdad - Almansoor'},
            {ar: 'العراق - النجف - شارع الروان', en: 'Iraq - Najaf - Alrawan'},
        ],
        phones: [
            {ar: '+9647728600400', en: '+9647728600400'},
        ]
    },
}