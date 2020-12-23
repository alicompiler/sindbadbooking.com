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
            'me@tareekofuk.com',
            'dv@tareekofuk.com'
        ],
        addresses: [
            {ar: 'العراق - بغداد - المنصور', en: 'Iraq - Baghdad - Almansoor'},
            {ar: 'العراق - النجف - شارع الروان', en: 'Iraq - Najaf - Alrawan'},
            {
                ar: 'Türkiye-İstanbul-Şişli-Harbiye Mısırlı Plaza No:51/2',
                en: 'Türkiye-İstanbul-Şişli-Harbiye Mısırlı Plaza No:51/2'
            },
        ],
        phones: [
            {ar: '6034 (العراق)', en: '6034 (Iraq)'},
            {ar: '+9647817777214 (النجف)', en: '+9647814115368 (Baghdad)'},
            {ar: '+9647814115368 (بغداد)', en: '+9647817777214 (Najaf)'},
            {ar: '+905364347663 (اسطنبول)', en: '+905364347663 (Istanbul)'},
        ]
    },
}