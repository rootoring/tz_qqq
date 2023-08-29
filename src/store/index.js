import { defineStore } from "pinia"

export const useStore = defineStore({
  id: "userFilter",

  state: () =>({
    users:[],
    filterByCountry:null,
    filterByScore:null,
    preloaderStatus:false
  }),
  
  getters:{
    getFilteredUsers({users, filterByCountry, filterByScore}){
      let filteredUsers = users;
    
      if(filterByCountry) filteredUsers = filteredUsers.filter(i=>i.country === filterByCountry)

      if(!filterByScore) return filteredUsers 

      filteredUsers = filteredUsers.filter(i => {
        if(filterByScore == '20>') return i.score > 20 
        if(filterByScore == '<20') return i.score < 20 
      })
      
      return filteredUsers
    }
  },

  actions: {
    async fetchUsers(){
      const data = await fetch("../../api/data.json")
      this.users = await data.json()
    }
  }
})