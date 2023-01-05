import React,{Suspense} from 'react'
import Loading from './Loading'

export default function LazyLoad(Com) {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Com/>
      </Suspense>
    </div>
  )
}
