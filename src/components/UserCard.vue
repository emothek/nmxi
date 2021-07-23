 <template>
  <v-card
    class="mx-auto my-12"
    max-width="300"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://i.pravatar.cc/300"
    >
        <div v-if="hover" v-bind:style='{display:"flex", justifyContent:"center", alignContent:"center", height:"100%"}'>
        <v-card-actions>
            <v-btn
            color="#D2D5D8"
            style="{color:'red'}"
            >
            Edit
            </v-btn>
            <v-btn
            color="#1575BF"
            dark
            >
            View
            </v-btn>
        </v-card-actions>
        </div>
    </v-img>

    <v-card-title>{{name}}</v-card-title>
    <v-card-title class="text-subtitle-1" v-bind:style='{color:"#909090"}'>
        @{{username}}
    </v-card-title>

    <v-card-text v-bind:style='{color:"black"}'>
 
      <div v-bind:style='{color:"#51C5FF"}'>"{{catchPhrase}}"</div>

      <div v-bind:style='{padding:"10px", marginTop:"20px"}'>
          <v-row v-bind:style='{paddingTop:"5px"}'>
              <div>
                <v-icon size="18px">$EmailIcon</v-icon>
              </div>
              <div>{{email}}</div>
          </v-row>
          
          <v-row v-bind:style='{paddingTop:"5px"}'>
                <div>
                    <v-icon size="18px">$LocationIcon</v-icon>
                    {{address}}
                </div>
          </v-row>
    
          <v-row v-bind:style='{paddingTop:"5px"}'>
                <div>
                <v-icon size="18px">$PhoneIcon</v-icon>
                </div>
                <div>{{phone}}</div>
          </v-row>
        
          <v-row v-bind:style='{paddingTop:"5px"}'>
                <div>
                <v-icon size="18px">$GlobeIcon</v-icon>
                </div>
                <div>{{website}}</div>
          </v-row>

          <v-row v-bind:style='{paddingTop:"5px"}'>
                <div>
                <v-icon size="18px">$BusinessIcon</v-icon>
                </div>
                <div>{{bs}}</div>
          </v-row>

          <v-row v-bind:style='{paddingTop:"5px"}'>
                <div>
                <v-icon size="18px">$FactoryIcon</v-icon>
                </div>
                <div>{{companyName}}</div>
          </v-row>
        

        
      </div>
    </v-card-text>
 



  </v-card>
</template>

<script>

export default {
    name: 'UserCard',
    props: ['image', 'name', 'username', 'catchPhrase', 'email', 'address', 'phone', 'website', 'bs', 'companyName'],
    data() {
        return {
        hover: false,
        };
    }
}
</script>
