"use client";

import { useEffect } from "react";

export default function Button({ children, ...props }) {
  // Regsitration of navigator service worker on component mount
  useEffect(() => {
    navigator.serviceWorker.register("/sw.js");
  }, []);

  // Click event handler that generates a notification on each click
  function notificationBtnHandler() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification("Notification", {
            body: "You have subscribed to receive notifications.",
            icon: "/bell.png",
          });
        });
      } else {
        alert("No permission");
      }
    });
  }

  return (
    <div
      className={
        "p-px w-2/3 md:w-1/2 rounded-lg bg-gradient-to-r from-[#1c040c] from-[2%] via-[#DE502C] via-[54%] to-[#C6802C] to-[114%]"
      }
    >
      <button
        onClick={notificationBtnHandler}
        className={
          "w-full rounded-lg outline-none text-sm p-2 font-semibold bg-gradient-to-r from-[#1c040c] from-[2%] via-[#DF522B] via-[52%] to-[#291c0b] to-[96%]"
        }
      >
        {children}
      </button>
    </div>
  );
}
