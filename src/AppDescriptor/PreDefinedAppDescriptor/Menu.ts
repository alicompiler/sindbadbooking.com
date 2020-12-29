import {AppDescriptorActionType, MenuDescriptor} from '../AppDescriptor';

export const menu: MenuDescriptor = {
    options: [
        {
            action: {type: AppDescriptorActionType.DOM_ID, value: '#register'},
            title: {ar: 'اشترك', en: 'Register'},
        },
        {
            action: {type: AppDescriptorActionType.CHANGE_LANGUAGE, value: ''},
            title: {ar: "English", en: "عربي"},
        }
    ],
    drawerIcon: '/res/icons/menu.png',
}