import React from 'react'
import ContentLoader from 'react-content-loader'




export const TodoLoader = () => {
  return (
    <div>
      <ContentLoader
      backgroundColor={'#f4f4f4'}
      foregroundColor={'#cccccc'}
       viewBox="0 0 380 200"
       >
        <rect x="0" y="0" rx="4" ry="4" width="380" height="20" />
        <rect x="0" y="30" rx="3" ry="3" width="380" height="20" />
        <rect x="0" y="60" rx="3" ry="3" width="380" height="20" />
        <rect x="0" y="90" rx="3" ry="3" width="380" height="20" />
        <rect x="0" y="120" rx="3" ry="3" width="380" height="20" />
        <rect x="0" y="150" rx="3" ry="3" width="380" height="20" />
      </ContentLoader>
    </div>
  )
}
