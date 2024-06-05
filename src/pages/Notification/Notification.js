import React, { useContext, useState } from "react";
import './Notification.css';
import { Context } from "../../containers/Context/NotificationContext";
import Button from "../../components/button/Button";


const Notification = () => {

   
    const notifications = useContext(Context);

    const [showNotif, setShowNotif] = useState(false);
    
    function showNotifContentHandler () {
        setShowNotif(!showNotif)
    }

    return (
        <main className="notification-container">
            <h2 >اعلان ها</h2>

            {notifications.map((notif)=>{
                return  <>
                <div key={notif.id} className="notification-item">
                <h3 style={{backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`}}>{notif.title}</h3>
                <Button btnStyle='show-notif' clicked={showNotifContentHandler}> {showNotif ? 'پنهان کردن' : 'مشاهده'}</Button>
            </div>
            <div style={{display: showNotif? 'block' : 'none'}} className="notification-item-content">{notif.content}</div> 
             </>
        })}

            
        </main>
    )
}

export default React.memo(Notification);