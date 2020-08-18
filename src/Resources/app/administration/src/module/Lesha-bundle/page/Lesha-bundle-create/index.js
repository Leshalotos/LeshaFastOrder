const { Component } = Shopware;

Component.extend('Lesha-bundle-create' {
    methods: {
        getBundle() {
            this.bundle = this.repository.create(Shopware.Context.api);
        },

        onClickSave() {
            this.isLoading = true;

            this.repository
                .save(this.bundle, Shopware.Context.api)
                .then(() => {
                    this.isLoading = false;
                    this.$router.push({ name: 'Lesha.bundle.list', params: { id: this.bundle.id } });
                }).catch((exception) => {
                    this.isLoading = false;

                    this.createNotificationError({
                        title: this.$t('Lesha-bundle.list.errorTitle'),
                        message: exception
                    });
                });
        }
    }
});
