import { MenuItem } from '../models/menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'uil-home-alt',
        badge: {
            variant: 'success',
            text: '3',
        },
        children: [{
            label: 'Analytics',
            link: '/dashboard/analytics'
        },
        {
            label: 'Ecommerce',
            link: '/'
        }]
    },
    {
        label: 'Apps',
        isTitle: true
    },
    {
        label: 'Calendar',
        icon: 'uil-calender',
        link: '/apps/calendar'
    },
    {
        label: 'Chat',
        icon: 'uil-comments-alt',
        link: '/apps/chat'
    },
    {
        label: 'Ecommerce',
        icon: 'uil-store',
        children: [{
            label: 'Products',
            link: '/apps/ecommerce/products'
        },
        {
            label: 'Product Details',
            link: '/apps/ecommerce/product-details'
        },
        {
            label: 'Orders',
            link: '/apps/ecommerce/orders'
        },
        {
            label: 'Order Details',
            link: '/apps/ecommerce/order-details'
        },
        {
            label: 'Customers',
            link: '/apps/ecommerce/customers'
        },
        {
            label: 'Shopping Cart',
            link: '/apps/ecommerce/shopping-cart'
        },
        {
            label: 'Checkout',
            link: '/apps/ecommerce/checkout'
        },
        {
            label: 'Sellers',
            link: '/apps/ecommerce/sellers'
        }]
    },
    {
        label: 'Email',
        icon: 'uil-envelope',
        children: [{
            label: 'Inbox',
            link: '/apps/email/inbox'
        },
        {
            label: 'Read Email',
            link: '/apps/email/read'
        },
        {
            label: 'Compose',
            link: '/apps/email/compose'
        }]
    },
    {
        label: 'Projects',
        icon: 'uil-briefcase',
        children: [{
            label: 'List',
            link: '/apps/projects'
        },
        {
            label: 'Details',
            link: '/apps/projects/detail'
        },
        {
            label: 'Gantt',
            link: '/apps/projects/gantt',
            badge: {
                variant: 'light-lighten badge-pill font-10',
                text: 'New',
            },
        },
        {
            label: 'Create Project',
            link: '/apps/projects/new',
            badge: {
                variant: 'success-lighten badge-pill font-10',
                text: 'New',
            },
        }]
    },
    {
        label: 'Social Feed',
        icon: 'uil-rss',
        link: '/apps/social'
    },
    {
        label: 'Tasks',
        icon: 'uil-clipboard-alt',
        children: [{
            label: 'List',
            link: '/apps/task/list'
        },
        {
            label: 'Kanban',
            link: '/apps/task/board'
        }]
    },
    {
        label: 'Custom',
        isTitle: true
    },
    {
        label: 'Pages',
        icon: 'uil-copy-alt',
        children: [{
            label: 'Starter Page',
            link: '/starter',
        },
        {
            label: 'Profile',
            link: '/account/profile',
        },
        {
            label: 'Invoice',
            link: '/other/invoice',
        },
        {
            label: 'FAQ',
            link: '/other/faq',
        },
        {
            label: 'Pricing',
            link: '/other/pricing',
        },
        {
            label: 'Error',
            children: [
                {
                    label: 'Page not found',
                    link: '/error/page-not-found'
                },
                {
                    label: 'Server Error',
                    link: '/error/page-server-error',
                },
            ]
        },
        {
            label: 'Timeline',
            link: '/other/timeline',
        }]
    },
    {
        label: 'Components',
        isTitle: true
    },
    {
        label: 'UI Elements',
        icon: 'uil-package',
        children: [
            {
                label: 'Base UI',
                children: [
                    {
                        label: 'Accordions',
                        link: '/uikit/accordions'
                    },
                    {
                        label: 'Alerts',
                        link: '/uikit/alerts'
                    },
                    {
                        label: 'Avatars',
                        link: '/uikit/avatars'
                    },
                    {
                        label: 'Badges',
                        link: '/uikit/badges'
                    },
                    {
                        label: 'Buttons',
                        link: '/uikit/buttons'
                    },
                    {
                        label: 'Cards',
                        link: '/uikit/cards'
                    },
                    {
                        label: 'Carousel',
                        link: '/uikit/carousel'
                    },
                    {
                        label: 'Dropdowns',
                        link: '/uikit/dropdowns'
                    },
                    {
                        label: 'Embed Video',
                        link: '/uikit/embed'
                    },
                    {
                        label: 'Grid',
                        link: '/uikit/grid'
                    },
                    {
                        label: 'List Group',
                        link: '/uikit/listgroup'
                    },
                    {
                        label: 'Media',
                        link: '/uikit/media'
                    },
                    {
                        label: 'Modals',
                        link: '/uikit/modals'
                    },
                    {
                        label: 'Notifications - Toasts',
                        link: '/uikit/notifications'
                    },
                    {
                        label: 'Pagination',
                        link: '/uikit/pagination'
                    },
                    {
                        label: 'Popovers',
                        link: '/uikit/popovers'
                    },
                    {
                        label: 'Progress',
                        link: '/uikit/progress'
                    },
                    {
                        label: 'Ribbons',
                        link: '/uikit/ribbons'
                    },
                    {
                        label: 'Spinners',
                        link: '/uikit/spinners'
                    },
                    {
                        label: 'Tabs',
                        link: '/uikit/tabs'
                    },
                    {
                        label: 'Tooltips',
                        link: '/uikit/tooltips'
                    },
                    {
                        label: 'Typography',
                        link: '/uikit/typography'
                    }
                ]
            },
            {
                label: 'Extended UI',
                children: [
                    {
                        label: 'Drag n Drop',
                        link: '/advanced-ui/drag-drop'
                    },
                    {
                        label: 'Range Sliders',
                        link: '/advanced-ui/sliders'
                    },
                    {
                        label: 'Ratings',
                        link: '/advanced-ui/ratings'
                    }
                ]
            },
            {
                label: 'Widgets',
                link: '/widgets'
            },
            {
                label: 'Icons',
                children: [
                    {
                        label: 'Dripicons',
                        link: '/uikit/icons/dripicons'
                    },
                    {
                        label: 'Material Design',
                        link: '/uikit/icons/material'
                    },
                    {
                        label: 'Unicons',
                        link: '/uikit/icons/unicons'
                    }
                ]
            },
        ]
    },
    {
        label: 'Components',
        icon: 'uil-document-layout-center',
        children: [
            {
                label: 'Forms',
                children: [
                    {
                        label: 'Basic Elements',
                        link: '/forms'
                    },
                    {
                        label: 'Form Advanced',
                        link: '/forms/advanced'
                    },
                    {
                        label: 'Validation',
                        link: '/forms/validation'
                    },
                    {
                        label: 'Wizard',
                        link: '/forms/wizard'
                    },
                    {
                        label: 'File Upload',
                        link: '/forms/fileupload'
                    },
                    {
                        label: 'Editor',
                        link: '/forms/editor'
                    }
                ]
            },
            {
                label: 'Charts',
                children: [
                    {
                        label: 'Apex Charts',
                        link: '/charts/apex'
                    },
                    {
                        label: 'Chartjs',
                        link: '/charts/chartjs'
                    }
                ]
            },
            {
                label: 'Tables',
                children: [
                    {
                        label: 'Basic',
                        link: '/tables/basic'
                    },
                    {
                        label: 'Advanced',
                        link: '/tables/advanced'
                    }
                ]
            },
            {
                label: 'Google Maps',
                link: '/maps/google'
            },
        ]
    },
    {
        label: 'Multilevel',
        icon: 'uil-folder-plus',
        children: [
            {
                label: 'Second Level Item 1',
                link: '/item-2-1'
            },
            {
                label: 'Second Level Item 2',
                children: [
                    {
                        label: 'Third Level Item 1',
                        link: '/item-3-1'
                    },
                    {
                        label: 'Third Level Item 2',
                        link: '/item-3-2'
                    }
                ]
            }
        ]
    }
];
