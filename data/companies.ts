import { Company } from "@/app/companies/types/company";
import burger from "@/public/assets/imgs/burger.jpg"
import drinks from "@/public/assets/imgs/kobby-mendez-xBFTjrMIC0c-unsplash.jpg"
// kobby-mendez-xBFTjrMIC0c-unsplash.jpg
export const companies: Company[] = [
    {
        id: 1,
        name: "مطعم البيت",
        slug: "el-bet",
        logo: "/logos/elbet.png",
        theme: "red",
        isOpen: true,
        description: "أكلات بيتية صحية وطازة كل يوم",
        hours: "10 ص - 12 م",
        offers: [
            {
                id: 1,
                title: "خصم 30% على كل الطلبات",
                description: "لفترة محدودة على جميع الوجبات",
                image: "/offers/offer1.jpg",
                discount: 30,
                expiresAt: "2026-03-01",
            },
            {
                id: 2,
                title: "عرض العائلة",
                description: "4 وجبات بسعر 3",
                image: "/offers/offer2.jpg",
                discount: 25,
                expiresAt: "2026-02-20",
            },
        ],
        branches: [
            {
                id: 1001,
                name: "فرع مدينة نصر",
                address: "شارع عباس العقاد - مدينة نصر",
                phone: "01000000001",
                hours: "10 ص - 12 م",
                isOpen: true,
            },
            {
                id: 1002,
                name: "فرع المعادي",
                address: "شارع النصر - المعادي",
                phone: "01000000002",
                hours: "10 ص - 11 م",
                isOpen: false,
            },
        ],

        meals: [
            {
                id: 101,
                name: "كشري",
                price: 25,
                image: burger,
                available: true,
            },
            {
                id: 102,
                name: "محشي",
                price: 40,
                image: burger,
                available: false,
            },
        ],
        categories: []
    },

    {
        id: 2,
        name: "برجر تايم",
        slug: "burger-time",
        logo: "/logos/burger.png",
        theme: "green",
        isOpen: false,
        description: "برجر لحوم طازة وصوصات مخصوص",
        hours: "2 م - 2 ص",
        offers: [
            {
                id: 1,
                title: "خصم 30% على كل الطلبات",
                description: "لفترة محدودة على جميع الوجبات",
                image: "/offers/offer1.jpg",
                discount: 30,
                expiresAt: "2026-03-01",
            },
            {
                id: 2,
                title: "عرض العائلة",
                description: "4 وجبات بسعر 3",
                image: "/offers/offer2.jpg",
                discount: 25,
                expiresAt: "2026-02-20",
            },
        ],
        branches: [
            {
                id: 2001,
                name: "فرع مصر الجديدة",
                address: "شارع الحجاز - مصر الجديدة",
                phone: "01000000003",
                hours: "2 م - 2 ص",
                isOpen: true,
            },
            {
                id: 2002,
                name: "فرع أكتوبر",
                address: "مول العرب - 6 أكتوبر",
                phone: "01000000004",
                hours: "3 م - 1 ص",
                isOpen: false,
            },
        ],

        meals: [
            {
                id: 201,
                name: "تشيز برجر",
                price: 60,
                image: burger,
                available: true,
            },
            {
                id: 202,
                name: "دبل برجر",
                price: 85,
                image: burger,
                available: true,
            },
        ],
        categories: [
            {
                isActive: false,
                id: 1,
                name: "برجر لحم",
                slug: "beef-burgers",
                meals: [
                    {
                        id: 201,
                        name: "تشيز برجر",
                        price: 60,
                        image: burger,
                        stock: 15,
                        available: true,
                    },
                    {
                        id: 202,
                        name: "دبل برجر",
                        price: 85,
                        image: burger,
                        stock: 8,
                        available: true,
                    },
                ],
            },

            {
                isActive: true,
                id: 2,
                name: "وجبات جانبية",
                slug: "sides",
                meals: [
                    {
                        id: 203,
                        name: "بطاطس",
                        price: 20,
                        image: burger,
                        stock: 25,
                        available: true,
                    },
                    {
                        id: 204,
                        name: "حلقات بصل",
                        price: 30,
                        image: burger,
                        stock: 0,
                        available: false,
                    },
                ],
            },

            {
                isActive: true,
                id: 3,
                name: "مشروبات",
                slug: "drinks",
                meals: [
                    {
                        id: 205,
                        name: "كوكاكولا",
                        price: 15,
                        image: drinks,
                        stock: 40,
                        available: false,
                    },
                    {
                        id: 205,
                        name: "كوكاكولا",
                        price: 15,
                        image: drinks,
                        stock: 40,
                        available: true,
                    },
                ],
            },
        ],
    },
];
