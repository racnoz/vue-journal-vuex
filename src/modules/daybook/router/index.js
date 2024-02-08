// Aquí vamos a poner todas las rutas que van a estar disponibles en el módulo 'daybook'

export default {
    name: 'daybook',
    // Componente asociado a esta ruta, para que se cargue bajo demanda
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]
}