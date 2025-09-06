"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";

export default function LoadingScreen() {
  const { isLoaded } = useUser();

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500  to-blue-500"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-3xl font-bold text-white tracking-wide"
          >
            CineGen
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-2 text-white text-sm tracking-wide"
          >
            Crafting your video experience...
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "10rem" }}
            transition={{ duration: 2 }}
            className="mt-6 h-1 bg-white rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
