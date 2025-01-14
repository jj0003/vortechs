import { motion } from "framer-motion";

const localReviews = [
  {
    id: 1,
    name: "Gloria",
    title: "@FORART",
    review: "Jan is great. Highly recommended! He delivers excellent design and is fun to work with.",
  },
  {
    id: 2,
    name: "Daniel",
    title: "@HomeOfAccountants",
    review: "I have worked with Jan on multiple projects and he always delivers. He is very professional and has a great eye for design.",
  },
  {
    id: 3,
    name: "Marc",
    title: "@Hughe&Co.",
    review: "The team at vortechs have the unique combination of deep technical knowledge, creative spirit and independence. The vortechs team required minimal instruction to understand our value prop and build amazing screens. Highly recommend!",
  },
  {
    id: 4,
    name: "Zoe",
    title: "@Personal",
    review: "His work ethic is unparalleled. He is creative, detail-oriented, and delivers beyond expectations!",
  },
];

const WallOfLove = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Title */}
      <motion.h1
        className="lg:text-7xl md:text-6xl text-4xl uppercase satoshi-regular mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        WALL OF LOVE ❤️
      </motion.h1>

      {/* Reviews Section */}
      <div className="w-full overflow-x-auto mt-8 mb-20 scrollbar-hide">
        <div className="flex gap-6 px-4 lg:justify-center">
          {localReviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="flex-shrink-0 bg-white border-4 border-[#0049FF] text-black p-6 rounded-md lg:w-[300px] md:w-[260px] sm:w-[220px] w-[220px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.1 * index,
                  duration: 0.8,
                  ease: "easeOut",
                },
              }}
            >
              <h5 className="font-bold text-lg">{review.name}</h5>
              <p className="text-sm text-gray-400">{review.title}</p>
              <p className="mt-2 text-sm">&quot;{review.review}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
