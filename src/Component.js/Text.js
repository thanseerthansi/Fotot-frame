import React, { useEffect } from 'react'
import Scripts from './Scripts'

export default function Text() {
    useEffect(() => {
      Scripts()
    }, [])
    
  return (
    <div>
      
      <h2>Tooltip</h2>
<p>Move the mouse over the text below:</p>

<div class="tooltip">Hover over me
  <span class="tooltiptext">Tooltip text</span>
</div>

   

    </div>
  )
}
