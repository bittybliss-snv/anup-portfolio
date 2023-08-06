import React from 'react'
import '../style/Exp.css'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import WorkIcon from "@mui/icons-material/Work"

const Expcontent = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e597a'>
        <VerticalTimelineElement className='vertical-timeline-work' date='2019-2022' iconStyle={{background:"#3e597a", color:'#fff'}} icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            WordPress Web Developer - DCastello
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Muvattupuzha, Ernakulam
          </h4>
          <p>Developed and mainted WordPress website</p>
        </VerticalTimelineElement>      
        <VerticalTimelineElement className='vertical-timeline-work' date='2015-2018' iconStyle= {{background:"#3e597a", color:'#fff'}} icon={<WorkIcon />}
          >
          <h3 className='vertical-timeline-element-title'>
            HTML/WordPress Web Developer - Alamo Media
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Kaloor, Ernakulam
          </h4>
          <p>Developed both HTML and WordPress websites</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-work' date='2014' iconStyle= {{background:"#3e597a", color:'#fff'}} icon={<WorkIcon />}
          >
          <h3 className='vertical-timeline-element-title'>
            Web Developer - Creatif
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Vytilla, Ernakulam
          </h4>
          <p>Developed HTML/CSS websites</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-work' date='2012-2013' iconStyle= {{background:"#3e597a", color:'#fff'}} icon={<WorkIcon />}
          >
          <h3 className='vertical-timeline-element-title'>
            Web Developer - Salt Mango Tree
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            MG Foad, Ernakulam
          </h4>
          <p>Developed HTML/CSS websites</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-work' date='2010-2012' iconStyle= {{background:"#3e597a", color:'#fff'}} icon={<WorkIcon />}
          >
          <h3 className='vertical-timeline-element-title'>
            Web Developer - Ubiqurio
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Kaloor, Ernakulam
          </h4>
          <p>Developed HTML/CSS websites</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  )
}

export default Expcontent