import React from 'react'
const DefaultLayout = React.lazy(()=>import('../Layout/DefaultLayout'));

function LandingPage() {
  return (
    <DefaultLayout>
      
    </DefaultLayout>
  )
}
export default React.memo(LandingPage)