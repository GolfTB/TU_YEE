import React from 'react'
import '../styles/transport.css'
import BusRoute from '../assets/bus-route.png'

export const Transportation = () => {
  return (
    <div className='dashboard--content2'>
        <div className="sub--header">
                <h2>Transportation</h2>
        </div>
        <div className="bus-pic">
            <img src={BusRoute} />
        </div>
        <div className="bus-detail">
            <div className='bus-name'>
              <h4>Bus now</h4>
              <div className='busbox'>
                <div className="line-bus">
                  <div>red line (1A)</div>
                  <div>1SC Canteen</div>
                </div>
                <div className="line-bus">
                  <div>yellow line (1B)</div>
                  <div>A,B,C Dorm</div>
                </div>
                <div className="line-bus">
                  <div>green line (2)</div>
                  <div>EV Station</div>
                </div>
                <div className="line-bus">
                  <div>purple line (3)</div>
                  <div>TU Dome Station</div>
                </div>
                <div className="line-bus">
                  <div>blue line (5)</div>
                  <div>Science Faculty</div>
                </div>
              </div>
              <div className='to-next'>
                <div>next</div>
                <div>next</div>
                <div>next</div>
                <div>next</div>
                <div>next</div>
              </div>
              <div className='busbox'>
              <div className="line-bus2">Green Canteen</div>
              <div className="line-bus2">Green Canteen</div>
              <div className="line-bus2">Thammasat hospital</div>
              <div className="line-bus2">Chiangrak Gate</div>
              <div className="line-bus2">Education Faculty</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Transportation