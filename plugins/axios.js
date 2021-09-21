// import CryptoJS from 'crypto-js'
export default function ({ $axios, store, app, redirect }) {
  $axios.onError((error) => {
    try {
      const code = parseInt(error.response.status)
      if (code == 401) {
        // window.toastr.error(
        //   'Your session has expired, please log in again.',
        //   'Oh No!'
        // )
        // redirect('/logout')

      }
    } catch (err) {
      console.log(err)
    }
  })

  const getToken = () => {
    let token = ''
    if (window.localStorage.getItem('nqb8') !== null) {
      token = JSON.parse(window.localStorage.getItem('nqb8')).auth.token
    } else if (store.state.auth.token !== null) {
      token = store.state.auth.token
    }
    return token
  }

  $axios.setHeader('signatures', signature)
  $axios.setHeader('Authorization', getToken())
  $axios.onRequest((config) => {})
}
