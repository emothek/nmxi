<template>
  <v-app v-bind:style='{backgroundColor:"#f2f5fa"}'>
    <v-app-bar
      app
      color='white'
      dense
    >
    </v-app-bar>

    <v-main v-bind:style='{margin:"10px"}'>
      <v-row class="my-6">
        <v-col
      
          >
          <v-text-field
            label="Find customers"
            solo
            dense
            v-model="searchKw"
            @input="search()"
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>

        <v-col  
          class="d-none d-sm-flex"
        >
        </v-col>

        <v-col >
          <v-select
            :items="sortingItems"
            label="Sort by"
            dense
            solo
            v-model="selectedSortingFilter"
            item-text="label"
            item-value="value"
            @change="onSortingChange()"
          >
          </v-select>
        </v-col>

      </v-row>
      <div class="my-6"></div>

      <v-row>
        <template v-if="filteredUsers && filteredUsers.length > 0">
          <v-col v-for="user in filteredUsers" :key="user.id">
            <UserCard 
              v-bind:name="user.name"
              v-bind:username="user.username"
              
              v-bind:catchPhrase="user.company && user.company.catchPhrase"
              v-bind:email="user.email"
              v-bind:address="
                user.address && `${user.address.street}, ${user.address.suite},\n ${user.address.city}, ${user.address.zipcode}\n ${user.address.geo.lat}, ${user.address.geo.lng}`
              "
              v-bind:phone="user.phone"
              v-bind:website="user.website"
              v-bind:bs="user.company.bs"
              v-bind:companyName="user.company.name"
            />
          </v-col>
        </template>
        <template v-else-if="!searchKw">
          <v-col v-for="user in users" :key="user.id">
            <UserCard 
              v-bind:name="user.name"
              v-bind:username="user.username"
              
              v-bind:catchPhrase="user.company && user.company.catchPhrase"
              v-bind:email="user.email"
              v-bind:address="
                user.address && `${user.address.street}, ${user.address.suite},\n ${user.address.city}, ${user.address.zipcode}\n ${user.address.geo.lat}, ${user.address.geo.lng}`
              "
              v-bind:phone="user.phone"
              v-bind:website="user.website"
              v-bind:bs="user.company.bs"
              v-bind:companyName="user.company.name"
            />
          </v-col>
        </template>
        <template v-else>
          <div>
            No customer(s) found with the search criteria.
          </div>
        </template>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>
import UserCard from './components/UserCard';

export default { 
  name: 'App',

  components: {
    UserCard
  },

  data: () => ({
    //
    searchKw: '',
    users: null,
    filteredUsers: null,
    sortingItems: [{
        value: "az",
        label: "Name (A-Z)"
      },
      {
        value: "za",
        label: "Name (Z-A)"
      }],
    selectedSortingFilter: null
  }),

  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.users = data
        });
  },

  methods:{
    onSortingChange() {
      if(this.selectedSortingFilter == 'az'){
        this.users.sort((a, b) => a.name.localeCompare(b.name)) 
        this.filteredUsers.sort((a, b) => a.name.localeCompare(b.name)) 
      }
      else{
        this.users.sort((a, b) => a.name.localeCompare(b.name)).reverse()
        this.filteredUsers.sort((a, b) => a.name.localeCompare(b.name)).reverse()
      }
    },

    search() {
        this.filteredUsers = this.users.filter((user) =>
          this.searchKw
            ? user.name.toLowerCase().includes(this.searchKw.trim().toLowerCase())
            : user
        )
    }
  },

 
};
</script>
