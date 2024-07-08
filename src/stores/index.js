import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    products: [
      {
        id: 1,
        title: 'Rent Car',
        image: 'https://placehold.co/400',
        images: [
          { id: 71, url: 'https://placehold.co/400' },
          { id: 72, url: 'https://placehold.co/400' },
          { id: 73, url: 'https://placehold.co/400' },
          { id: 74, url: 'https://placehold.co/400' },
          { id: 75, url: 'https://placehold.co/400' },
          { id: 76, url: 'https://placehold.co/400' }
        ],
        description:
          "Loyihaning asosiy maqsadi – mijozlarga Team Pro kompaniyasining xizmatlari va loyihalari haqida batafsil ma'lumotlarni taqdim etish, mijozlarning fikrlarini o'qish, kompaniya bilan bog'lanish va xizmatlarga buyurtma berish imkoniyatini yaratishdir. Sayt mijozlar uchun qulay va intuitiv interfeysga ega bo'lishi kerak."
      },
      {
        id: 2,
        title: 'Alximik UZ',
        image: 'https://placehold.co/400',
        images: [
          { id: 81, url: 'https://placehold.co/400' },
          { id: 82, url: 'https://placehold.co/400' },
          { id: 83, url: 'https://placehold.co/400' },
          { id: 84, url: 'https://placehold.co/400' },
          { id: 85, url: 'https://placehold.co/400' },
          { id: 86, url: 'https://placehold.co/400' }
        ],
        description:
          "Loyihaning asosiy maqsadi – mijozlarga Team Pro kompaniyasining xizmatlari va loyihalari haqida batafsil ma'lumotlarni taqdim etish, mijozlarning fikrlarini o'qish, kompaniya bilan bog'lanish va xizmatlarga buyurtma berish imkoniyatini yaratishdir. Sayt mijozlar uchun qulay va intuitiv interfeysga ega bo'lishi kerak."
      },
      {
        id: 3,
        title: 'ECO System',
        image: 'https://placehold.co/400',
        images: [
          { id: 91, url: 'https://placehold.co/400' },
          { id: 92, url: 'https://placehold.co/400' },
          { id: 93, url: 'https://placehold.co/400' },
          { id: 94, url: 'https://placehold.co/400' },
          { id: 95, url: 'https://placehold.co/400' },
          { id: 96, url: 'https://placehold.co/400' }
        ],
        description:
          "Loyihaning asosiy maqsadi – mijozlarga Team Pro kompaniyasining xizmatlari va loyihalari haqida batafsil ma'lumotlarni taqdim etish, mijozlarning fikrlarini o'qish, kompaniya bilan bog'lanish va xizmatlarga buyurtma berish imkoniyatini yaratishdir. Sayt mijozlar uchun qulay va intuitiv interfeysga ega bo'lishi kerak."
      },
      {
        id: 4,
        title: 'Dorixona',
        image: 'https://placehold.co/400',
        images: [
          { id: 101, url: 'https://placehold.co/400' },
          { id: 102, url: 'https://placehold.co/400' },
          { id: 103, url: 'https://placehold.co/400' },
          { id: 104, url: 'https://placehold.co/400' },
          { id: 105, url: 'https://placehold.co/400' },
          { id: 106, url: 'https://placehold.co/400' }
        ],
        description:
          "Loyihaning asosiy maqsadi – mijozlarga Team Pro kompaniyasining xizmatlari va loyihalari haqida batafsil ma'lumotlarni taqdim etish, mijozlarning fikrlarini o'qish, kompaniya bilan bog'lanish va xizmatlarga buyurtma berish imkoniyatini yaratishdir. Sayt mijozlar uchun qulay va intuitiv interfeysga ega bo'lishi kerak."
      }
    ],
    comments: [
      {
        id: 1,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'Alximik.uz',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 2,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'Rent Car',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 3,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'ECO-System',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 4,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'Dorixona',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 5,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 6,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 7,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 8,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },

      {
        id: 9,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 10,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 11,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      },
      {
        id: 12,
        user: 'Gulomov Jamshid',
        date: '2024-07-06',
        project: 'V.I.P Burger',
        comment:
          "Ushbu maqola juda foydali va qiziqarli. Yangi boshlovchilar uchun o'rganish jarayonini ancha osonlashtiradi. Mavzuni tushuntirish aniq va oddiy tilda bayon qilingan. Grafiklar va diagrammalar yordamida ma'lumotlar yanada tushunarli bo'lgan. Ajoyib ish, rahmat!"
      }
    ],
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
