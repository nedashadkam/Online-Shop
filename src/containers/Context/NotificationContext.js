import { createContext, useState, useEffect } from "react";
import { notificationService } from '../../services/NotificationService';

export const NotificationContext = createContext();
const NotificationContextProvider = (props) => {

  const [notificationsValue, setNotificationsValue] = useState('')
  const [notificationNumber, setNotificationNumbr] = useState(0)
  useEffect(() => {
    notificationService()
      .then((response) => response.json()).then((jsonResponse) => {
        // console.log(jsonResponse);
        setNotificationsValue(jsonResponse);
        setNotificationNumbr(jsonResponse.length);
      })

  }, [])

  return (
    <NotificationContext.Provider value={{ notificationsValue, setNotificationsValue, notificationNumber, setNotificationNumbr }}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContextProvider;