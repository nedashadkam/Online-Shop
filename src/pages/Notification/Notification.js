import React, { useContext, useState } from "react";
import './Notification.css';
import { NotificationContext } from "../../containers/Context/NotificationContext";
import Button from "../../components/button/Button";

const Notification = () => {

    const { notificationsValue, setNotificationsValue, notificationNumber, setNotificationNumbr } = useContext(NotificationContext);
    const [currentIndex, setCurrentIndex] = useState(null);

    function decrease() {
        setNotificationNumbr(notificationNumber - 1)
    }

    const clicked = (index) => {
        if (currentIndex == index) {
            setCurrentIndex(null);
        } else {
            setCurrentIndex(index);
            if (!notificationsValue[index]?.status) {
                notificationsValue[index] = { ...notificationsValue[index], status: true };
                setNotificationsValue(notificationsValue);
                decrease();
            }
        }
    }

    return (
        <main className="notification-container">
            {notificationsValue?.length ? <h2>اعلان ها</h2> : <h2>اعلانی وجود ندارد</h2>}

            {notificationsValue?.length && notificationsValue.map((notif, index) => {
                return <div style={{ width: "100%" }} key={index}>
                    <div className="notification-item">
                        <h3 style={{ backgroundColor: `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)` }}>{notif.title}</h3>
                        <Button btnStyle='show-notif' clicked={() => clicked(index)}> {currentIndex == index ? 'پنهان کردن' : 'مشاهده'}</Button>
                        <span>{notif?.status ? 'read' : 'unread'}</span>
                    </div>
                    <div style={{ display: currentIndex == index ? 'block' : 'none' }} className="notification-item-content">{notif.content}</div>
                </div>
            })}
        </main>
    )
}

export default React.memo(Notification);