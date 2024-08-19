import dynamic from "next/dynamic";
import Link from "next/link";

const Maps = dynamic(() => import("@/components/lokasi-component/Maps"), {
  ssr: false,
});

const Lokasi = () => {
  return (
    <main>
      <section className=" w-full h-screen bg-secondary overflow-hidden justify-center items-center" id="maps">
        <div className="flex-col w-full h-screen lg:grid-cols-1 lg:w-full lg:h-[1500px] max-w-full sm:rounded-xl">
          <div className="flex flex-col items-center w-full justify-center py-10">
            <h1 className="font-bold text-3xl uppercase font-serif italic underline">lokasi</h1>
            <Link
              href="https://www.google.co.id/maps/place/setu+kandang+sapi/@-6.51185,106.781632,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c3f48526329b:0xba55f76993af340b!8m2!3d-6.5118553!4d106.7842069!16s%2Fg%2F11vld46bbw?entry=ttu"
              className="mt-5 text-center font-serif text-blue-600 hover:underline lg:text-xl"
            >
              Alamat: Jl. Tanah Baru, RT.03/RW.06, Waringin Jaya, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat 16920
            </Link>
          </div>
          <Maps />
        </div>
      </section>
    </main>
  );
};

export default Lokasi;
