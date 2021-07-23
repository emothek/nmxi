import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Email from '../assets/Email'
import Location from '../assets/Location'
import Phone from '../assets/Phone'
import Globe from '../assets/Globe'
import Factory from '../assets/Factory'
import Business from '../assets/Business'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        values: {
          EmailIcon: { 
            component: Email,
          },
          LocationIcon: { 
            component: Location,
          },
          PhoneIcon: { 
            component: Phone,
          },
          GlobeIcon: { 
            component: Globe,
          },
          BusinessIcon: { 
            component: Business,
          },
          FactoryIcon: { 
            component: Factory,
          },
        },
    },
});
