import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    prices: [
      {
        id: 1,
        value: 'seo',
        title: 'Seo Optimization',
        dates: [
          {
            id: 22,
            title: 'Seo Optimization Standart',
            val: 'seo-standart',
            price: 2000,
            description: 'Basic SEO optimization to improve search engine visibility.'
          },
          {
            id: 23,
            title: 'Seo Optimization Medium',
            val: 'seo-medium',
            price: 4000,
            description: 'Intermediate SEO services with additional features.'
          },
          {
            id: 24,
            title: 'Seo Optimization Pro',
            val: 'seo-pro',
            price: 6000,
            description: 'Comprehensive SEO optimization for maximum search engine ranking.'
          }
        ]
      },
      {
        id: 2,
        value: 'site',
        title: 'Web Site',
        dates: [
          {
            id: 25,
            title: 'Web Site Basic',
            val: 'site-basic',
            price: 3000,
            description: 'Basic web site development with essential features.'
          },
          {
            id: 26,
            title: 'Web Site Advanced',
            val: 'site-advanced',
            price: 5000,
            description: 'Advanced web site with custom features and design.'
          },
          {
            id: 27,
            title: 'Web Site Pro',
            val: 'site-pro',
            price: 7000,
            description: 'Professional web site with extensive features and premium design.'
          }
        ]
      },
      {
        id: 3,
        value: 'crm',
        title: 'CRM System',
        dates: [
          {
            id: 28,
            title: 'CRM System Basic',
            val: 'crm-basic',
            price: 4000,
            description: 'Basic CRM system for managing customer relationships.'
          },
          {
            id: 29,
            title: 'CRM System Advanced',
            val: 'crm-advanced',
            price: 6000,
            description: 'Advanced CRM system with additional features.'
          },
          {
            id: 30,
            title: 'CRM System Pro',
            val: 'crm-pro',
            price: 8000,
            description: 'Professional CRM system with comprehensive features.'
          }
        ]
      },
      {
        id: 4,
        value: 'mark',
        title: 'Online Market',
        dates: [
          {
            id: 31,
            title: 'Online Store Basic',
            val: 'mark-basic',
            price: 5000,
            description: 'Basic online store setup with essential e-commerce features.'
          },
          {
            id: 32,
            title: 'Online Store Advanced',
            val: 'mark-advanced',
            price: 7000,
            description: 'Advanced online store with custom features and design.'
          },
          {
            id: 33,
            title: 'Online Store Pro',
            val: 'mark-pro',
            price: 9000,
            description:
              'Professional online store with extensive e-commerce features and premium design.'
          }
        ]
      }
    ]
  }),
  getters: {
    filteredPrices(filter) {
      const selectedCategory = this.prices.find((category) => category.value === filter)
      return selectedCategory ? selectedCategory.dates : []
    }
  }
})
