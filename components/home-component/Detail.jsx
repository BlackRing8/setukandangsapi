"use client";
import "./style-hc.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const Detail = () => {
  return (
    <section>
      <motion.div className="lg:flex grid-cols-1 w-full h-screen lg:h-[600px]" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="flex w-full lg:w-1/2 h-1/2 lg:h-full lg:justify-end lg:items-center">
          <div className="w-full h-full lg:w-[600px] lg:h-[500px]  justify-center flex">
            <Image className="rounded-lg" src="/footage/1g.jpeg" width={400} height={800} alt="" />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 h-1/2 lg:h-full lg:justify-start lg:items-center">
          <div className="w-full h-full lg:w-[600px] lg:h-[500px]  ">
            <h4 className="font-extrabold text-2xl lg:text-4xl text-center lg:text-start mt-10 lg:mt-20">Pemancingan Kiloan</h4>
            <p className=" text-xl lg:text-2xl text-center lg:text-start mt-10 px-1">
              Pemancingan kiloan sebuah konsep pemancingan dimana pengunjung membayar berdasarkan berat ikan yang mereka tangkap, bukan berdasarkan waktu atau jenis ikan. Pemancingan ini termasuk salah satu spot Utama pengunjung ketika
              berlibur di setu kandang sapi ini.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div className="lg:flex lg:flex-wrap flex flex-col-reverse w-full h-screen lg:h-[600px] " initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="flex w-full lg:w-1/2 h-1/2 lg:h-full lg:justify-end lg:items-center">
          <div className="w-full h-full lg:w-[600px] lg:h-[500px]  ">
            <h4 className="font-extrabold text-2xl lg:text-4xl text-center lg:text-end mt-10 lg:mt-20">Perahu bebek</h4>
            <p className=" text-xl lg:text-2xl  text-center lg:text-end mt-10 px-1">
              Kami memiliki Perahu bebek kayuh, perahu bebek kayuh ini berbentuk ikan dan digerakkan dengan cara dikayuh. Perahu ini aman untuk menikmati pemandangan sekitar danau Setu Kandang sapi.
            </p>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 h-1/2 lg:h-full lg:justify-start lg:items-center">
          <div className="w-full h-full lg:w-[600px] lg:h-[500px]  justify-center flex">
            <Image className="rounded-lg" src="/footage/f6.jpeg" width={400} height={800} alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div className="lg:flex grid-cols-1 w-full h-screen lg:h-[600px] " initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="flex w-full lg:w-1/2 h-1/2 lg:h-full lg:justify-end lg:items-center">
          <div className="w-full h-full lg:w-[600px] lg:h-[500px]  justify-center flex">
            <Image className="rounded-lg" src="/footage/f1.jpeg" width={400} height={800} alt="" />
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 h-1/2 lg:h-full lg:justify-start lg:items-center">
          <div className="w-full h-full lg:w-[600px] lg:h-[500px]  ">
            <h4 className="font-extrabold text-2xl lg:text-4xl text-center lg:text-start mt-10 lg:mt-20">Track lari</h4>
            <p className=" text-xl lg:text-2xl text-center lg:text-start mt-10 px-1">
              Setu kandang sapi juga memiliki Track lari yang mengelilingi danau Setu kandang sapi ini, Pengunjung atau warga sekitar biasanya berolahraga di pagi atau sore hari sekaligus menikmati pemandangan sekitar dan udara segar.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Detail;
