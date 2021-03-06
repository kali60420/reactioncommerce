module.exports = {
  integrations: {
    reactioncommerce: {
      location: '@kali604/reactioncommerce-api',
      configuration: {
        api: {
          uri: 'https://api.giftingwild.ml/graphql',
          authHost: 'https://hydra.giftingwild.ml',
          projectKey: 'vsf-ct-dev',
          clientId: 'RT4iJGDbDzZe4b2E6RyeNe9s',
          clientSecret: '5eBt3yfZJWw1j7V6kXjfKXpuFP-YQXpg',
          scopes: [
            'manage_products:vsf-ct-dev',
            'create_anonymous_token:vsf-ct-dev',
            'manage_my_profile:vsf-ct-dev',
            'manage_customer_groups:vsf-ct-dev',
            'view_categories:vsf-ct-dev',
            'introspect_oauth_tokens:vsf-ct-dev',
            'manage_my_payments:vsf-ct-dev',
            'manage_my_orders:vsf-ct-dev',
            'manage_my_shopping_lists:vsf-ct-dev',
            'view_published_products:vsf-ct-dev'
          ]
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};

