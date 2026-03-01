import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[85vh] items-center pt-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="https://avatars0.githubusercontent.com/u/3515448" alt="Merrick Sapsford" className="size-24 rounded-full shadow-lg" />
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">Merrick Sapsford</h1>
            <p className="mt-3 text-xl text-gray-500 sm:text-2xl dark:text-gray-400">Engineering Leader</p>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            10+ years experience building and scaling high-performing mobile teams across health tech and consumer products.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
