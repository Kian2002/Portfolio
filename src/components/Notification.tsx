import React from "react";
import { motion } from "framer-motion";
import { NotificationProps } from "@/constants/types";

const Notification: React.FC<NotificationProps> = ({ message, index }) => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      transition={{
        type: "spring",
        delay: 0.5,
        duration: 0.75,
        ease: "easeOut",
      }}
      exit={{ opacity: 0 }}
      className="fixed right-[15%] z-50 flex justify-center items-center"
      style={{ top: `${index * 7 + 10}%` }}
    >
      <div className="bg-white text-primary font-black text-[14px] p-5 rounded-xl text-center">
        {message}
      </div>
    </motion.div>
  );
};

export default Notification;
