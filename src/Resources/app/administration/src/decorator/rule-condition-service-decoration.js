import '../core/component/Lesha-cart-contains-bundle';

const { Application } = Shopware;

Application.addServiceProviderDecorator('ruleConditionDataProviderService', (ruleConditionService) => {
    ruleConditionService.addCondition('LeshaBundleContainsBundle', {
        component: 'Lesha-cart-contains-bundle',
        label: 'Lesha-condition.condition.cartContainsBundle.label',
        scopes: ['cart']
    });

    return ruleConditionService;
});
