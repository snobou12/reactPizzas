import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return(
        <ContentLoader 
        className="pizza-block"
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          
        >
          <circle cx="140" cy="140" r="140" /> 
          <rect x="0" y="285" rx="6" ry="6" width="280" height="35" /> 
          <rect x="2" y="329" rx="6" ry="6" width="280" height="84" /> 
          <rect x="5" y="428" rx="6" ry="6" width="90" height="30" /> 
          <rect x="140" y="418" rx="25" ry="25" width="117" height="40" />
        </ContentLoader>
      )
}

export default LoadingBlock;
