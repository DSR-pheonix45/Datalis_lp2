import React from 'react';
import { motion } from 'framer-motion';

export default function Masonry({ data, columns = 3 }) {
  const createColumns = () => {
    const cols = Array.from({ length: columns }, () => []);
    data.forEach((item, i) => {
      cols[i % columns].push(item);
    });
    return cols;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {createColumns().map((column, i) => (
        <div key={i} className="flex flex-col gap-6">
          {column.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
