<template>
  <div>
    <h1>Profile</h1>
     <img :src="user.user_image" alt="profile image">
     </br>
     <p>{{ user.name }} </p>
     </br>
     <p>{{ user.user_email }} </p>
     </br>
     <p>{{ user.user_type }} </p>
     <el-button type="danger" @click="logout()" round>Logout</el-button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      user: this.$store.getters.user
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout', this);
      this.$router.push({path: '/'});
    }
  },
  created: function () {
  	this.$store.dispatch('check_login', this);

    if(this.$store.getters.authorized) {
      if(this.$store.getters.token_expired) {
        this.$store.dispatch('refresh_token', this);
      }  
    } else {
      this.$router.push({path: '/'});
    }
  }
}
</script>
