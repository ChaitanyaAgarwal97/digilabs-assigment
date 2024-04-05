"use client";

export default function Button({ children, ...props }) {
  function notificationBtnHandler() {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        const notification = new Notification("Notification", {
          body: "You have subscribed to receive notifications.",
          icon: "/bell.png",
        });
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
