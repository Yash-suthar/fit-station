const FSConstant = {
    webClientId: '333379338426-gacporssuffsj9lo529vvfmp6ej13g0r.apps.googleusercontent.com',

    Users: 'Users',
    IsLogin: 'IsLogin',
    imageUrl: 'https://api.adorable.io/avatars/50/abott@adorable.png',
    regex: /\s+/g,
    noUser: 'auth/user-not-found',
    wrongPass: 'auth/wrong-password',

    //Drawer Links
    privacyPolicyLink: 'https://google.com',
    fitStationJumpRopeFacebookCommunityLink: 'https://google.com',
    termsOfUseLink: 'https://google.com',
}

export enum FSKeyboardType {
    default = 'default',
    numeric = 'numeric',
    emailAddress = 'email-address',
    phonePad = 'phone-pad'
}

export enum FSAutoCapitalize {
    characters = 'characters',
    words = 'words',
    sentences = 'sentences',
    none = 'none'
}

export enum FSRerurnKeyType {
    next = 'next',
    done = 'done'
}

export const FSHardwareBackPress = 'hardwareBackPress'
export const FSActivityBarTitle = ['This Week', 'This Month', 'This Year', 'All Time']
export const FSNever = 'never';
export const FSAlways = 'always';

export default FSConstant