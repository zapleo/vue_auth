export const login = ({ commit }, context ) => {
  return new Promise(function (resolve, reject) {
    context.$http.post('auth/login', {
      email: context.authForm.email,
      password: context.authForm.password
    }).then(response => {
      if(response.data.message == "Success") {
        commit('setUser', { type: 'user', item: response.data })
        commit('set', { type: 'authorized', item: true })
        commit('set', { type: 'token_expired', item: false })
      }
      resolve(response);
    }, response => {
      reject(err);
    });
  });  
}

export const check_login = ({ commit }, context ) => {
  context.$http.get('auth/check_login', {
    headers: {
      'Authorization': context.$store.getters.user.access_token
    }
  }).then(response => {
  	if(response.data.message == "hello") {
      commit('set', { type: 'authorized', item: true });
    } else if(response.status == 401) {
      commit('set', { type: 'token_expired', item: true });
    } else {
      commit('set', { type: 'authorized', item: false });
    }
  })
};

export const refresh_token = ({ commit }, context ) => {
  let user = JSON.parse(localStorage.user);

  context.$http.post('auth/refresh_token', {
    access_token: user.access_token
  }).then(response => {
    if(response.data.message == "Success") {
      user.access_token = response.data.access_token;
      
      commit('setUser', { type: 'user', item: user });
      commit('set', { type: 'token_expired', item: false });
    }
  })
};

export const logout = ({ commit }, context ) => {
  localStorage.removeItem("user");
  commit('set', { type: 'authorized', item: false });
  commit('set', { type: 'token_expired', item: true });
};
