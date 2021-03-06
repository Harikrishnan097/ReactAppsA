import React, { Component } from 'react';

import BarGroup from  '../Bargroup/bargroup';

class Barchart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                { name: 'Mon', value: 5000000},
                { name: 'Tue', value: 40 }
              ]
            
         }
    }
    render() { 
        let barHeight = 30
        
    let barGroups = this.state.data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}>
                                                    <BarGroup d={d} barHeight={barHeight} />
                                                  </g>)                         
    
        return ( 
<svg width="800" height="300" >
      <g className="container">
        <text className="title" x="10" y="30">Week beginning 9th July</text>
        <g className="chart" transform="translate(100,60)">
          {barGroups}
        </g>
      </g>
    </svg>

         );
    }
}
 
export default Barchart;