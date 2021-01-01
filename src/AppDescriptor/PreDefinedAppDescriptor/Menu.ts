import {AppDescriptorActionType, MenuDescriptor} from '../AppDescriptor';

export const menu: MenuDescriptor = {
    options: [
        {
            action: {type: AppDescriptorActionType.DOM_ID, value: '#register'},
            title: {ar: 'اشترك', en: 'Register'},
        },
        {
            action: {
                type: AppDescriptorActionType.NEW_TAB_LINK, value: {
                    ar: 'http://faqs.sindbadbooking.com/',
                    en: 'http://faqs.sindbadbooking.com/en/'
                }
            },
            title: {ar: 'الاسئلة الشائعة', en: 'FAQ'},
        },
        {
            action: {type: AppDescriptorActionType.CHANGE_LANGUAGE, value: ''},
            title: {ar: "English", en: "عربي"},
        }
    ],
    drawerIcon: '/res/icons/menu.png',
}