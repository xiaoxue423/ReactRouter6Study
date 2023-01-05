import React,{Suspense} from 'react'


export default function LazyLoad(Com) {
  return (
    <div>
      <Suspense fallback={<h1>Loading......</h1>}>
        <Com/>
      </Suspense>
    </div>
  )
}
