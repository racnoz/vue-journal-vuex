// Aquí es donde configuro Vuex

import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal';

const store = createStore({
    //Aquí se importan todos los stores de los módulos con los que va a trabajar Vuex
    modules:{
        //journal: journal (journalModule) - Toma la importación export defaul y gracias a eso renombramos la exportación y como redunda el nombre se pone solo el nombre de lo importado.
        journal, 
    }
})

export default store