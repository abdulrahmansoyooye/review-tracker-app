import { useState, useEffect } from "react";

const NotificationButton = () => {
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    if (
      Notification.permission !== "denied" ||
      Notification.permission === "default"
    ) {
      Notification.requestPermission().then((permission) => {
        setPermission(permission);
      });
    }
  }, []);

  const showNotification = () => {
    if (permission === "granted") {
      new Notification("Hello, world!", {
        body: "This is a notification",
      });
    }
  };

  return (
    <button
      onClick={showNotification}
      className="bg-blue-900 text-white p-[0.5rem] rounded-lg"
      disabled={permission !== "granted"}
    >
      Show Notification
    </button>
  );
};

export default NotificationButton;
