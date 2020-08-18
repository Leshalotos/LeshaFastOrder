import template from './Lesha-product-list-base.html.twig';

const { Component } = Shopware;

Component.override('Lesha-product-list-base', {
    template,

    computed: {
        productRepository() {
            return this.repositoryFactory.create('product');
        },
    },

    methods: {
        saveProduct() {
            if (this.product) {
                this.productRepository.save(this.product, Shopware.Context.api);
            }
        }
    }

});
