import React from 'react'
import Image from "next/image"
import Style from './Notification.module.css';
import Images from "../../../img"

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={Images.user1} alt="profile image" width={50} height={50}className={Style.notification_box_img}/>
        </div>
        <div className={Style.notification_box_info}>
          <h4>Ubetta</h4>
          <p>Measure action your user...</p>
          <small>3 Minutes ago</small>
        </div>
        <span className={Style.notification_box_new}>
          
        </span>
      </div>
    </div>
  )
}

export default Notification