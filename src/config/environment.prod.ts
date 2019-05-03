import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBLOKXA5at4CiqVJK2QLaO9UbXLk4VhqEY',
    authDomain: 'calcium-circuit-130020.firebaseapp.com',
    databaseURL: 'https://calcium-circuit-130020.firebaseio.com',
    projectId: 'calcium-circuit-130020',
    storageBucket: 'calcium-circuit-130020.appspot.com',
    messagingSenderId: '855866425804',
    appId: '1:855866425804:web:52f75a625d4ad393'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
