export default async function ({redirect, store, $auth}) {
    const loggedIn = $auth.loggedIn
    if (!loggedIn) {
      redirect({name: '/login'})
    }
  }