export default async function ({redirect, store, $auth}) {
    const loggedIn = $auth.loggedIn
    
    if ($auth.user.role != "company" || !loggedIn) {
      redirect({name: '/'})
    } else (
        console.log('a company')
    )
  }