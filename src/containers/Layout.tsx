import React from 'react'
import Header from '@components/Header'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <section className='Layout'>
      <Header />
      {children}
    </section>
  )
}

export default Layout
