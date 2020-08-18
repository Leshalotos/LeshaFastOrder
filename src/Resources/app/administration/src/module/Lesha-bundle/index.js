import './page/Lesha-bundle-list';
import './page/Lesha-bundle-list-bundle-detail';
import './page/Lesha-bundle-create';
import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

const { Module } = Shopware;

Module.register('Lesha-bundle', {
    type: 'plugin',
    name: 'FastOrder',
    title: 'swag-bundle.general.mainMenuItemGeneral',
    description: 'sw-property.general.descriptionTextModule',
    color: '#ff3d58',
    icon: 'default-shopping-paper-bag-product',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    routes: {
        list: {
            component: 'Lesha-bundle-list',
            path: 'list'
        },
        detail: {
            component: 'Lesha-bundle-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'Lesha.bundle.list'
            }
        },
        create: {
            component: 'Lesha-bundle-create',
            path: 'create',
            meta: {
                parentPath: 'Lesha.bundle.list'
            }
        }
    },

    navigation: [{
        label: 'Lesha-bundle.general.mainMenuItemGeneral',
        color: '#ff3d58',
        path: 'Lesha.bundle.list',
        icon: 'default-shopping-paper-bag-product',
        position: 100
    }]
});
