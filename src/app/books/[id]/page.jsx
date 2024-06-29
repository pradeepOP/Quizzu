import Image from "next/image";
const BookDetail = () => {
  return (
    <div className="w-[90%] px-5 mx-auto mt-6 max-w-[1140px] md:h-[800px] mb-10 bg-white border-2 rounded-xl border-[#BBD6FF] ">
      <div className="flex flex-col h-full md:flex-row">
        {/* left div */}
        <div className=" flex w-60 md:flex-col gap-12 mt-4 md:mt-0 items-center md:border-r-2  border-[#BBD6FF]">
          <div className="w-4/5 mx-auto md:mt-10">
            <Image src="/book.png" alt="book image" width={162} height={243} />
          </div>
          <div className="flex flex-col gap-4 mx-auto md:w-4/5 md:gap-9">
            <p className="text-[#0E0F0F] ">Author’s Name</p>
            <p className="text-[#0E0F0F] ">Publication</p>
            <p className="text-[#0E0F0F] ">Edition</p>
          </div>
        </div>
        {/* right div */}
        <div className=" md:flex-1">
          <h1 className="text-[#0E0F0F] font-bold italic text-3xl md:text-5xl  mt-6 md:mt-0 py-7 pl-10  border-b-2 border-[#BBD6FF]">
            A Million To One
          </h1>
          <p className="md:w-[752px] md:h-[408px] pt-9 text-sm md:pl-10">
            Sed egestas tincidunt diam, a mattis nisl efficitur maximus. Donec
            tempus fringilla nunc, quis commodo purus cursus sed. Praesent
            ultricies massa turpis, in efficitur risus faucibus eu. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Sed maximus mollis
            magna eu hendrerit. Aenean quis lacinia elit. Sed dictum faucibus
            arcu, at vehicula tortor. Duis porttitor aliquam quam, convallis
            placerat neque lobortis auctor. Vestibulum rhoncus nunc in eros
            iaculis, id hendrerit justo dignissim. Etiam mattis arcu sed sapien
            laoreet, id volutpat magna varius. Suspendisse massa elit, mattis
            sit amet sapien sed, vestibulum tincidunt massa. Nulla efficitur
            felis ut urna lobortis aliquet. Ut a tempor mauris. Suspendisse non
            pulvinar ex. Maecenas et imperdiet magna Fusce lobortis auctor
            libero nec feugiat. Curabitur semper lorem nec diam venenatis
            congue. Aliquam feugiat tempus dignissim. Fusce nec erat ac erat
            varius imperdiet. Pellentesque non sem a metus finibus ultrices. Sed
            quis scelerisque orci, eu pulvinar nisi. Mauris non tellus vitae
            tellus sodales pretium vitae non elit. Curabitur ut mollis risus.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per incepto s himenaeos. Pellentesque eget risus orci. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Morbi dolor elit, imperdiet non volutpat sit amet,
            volutpat vel arcu. Quisque et bibe ndum ex. Vestibulum volutpat
            lacinia elit at cursus. Suspendisse libero lorem, aliquet et dapibus
            porta, orna re in erat. Proin mattis libero tempus mi commodo, a
            vulputate sem auctor. Fusce vitae tortor non dolor ultri ces
            euismod. Ut rhoncus condimentum cursus. Praesent malesuada tincidunt
            facilisis. Ut ac luctus sapien. In gravida lacus augue, at gravida
            est laoreet sit amet. Nullam pharetra vulputate tortor. Aenean
            tempus arcu augue, in sagittis nulla venenatis in. Phase llus in
            interdum nunc, nec finibus tellus. Cras tincidunt arcu vitae
            ultricies maximus. Ut in risus vel nibh dictu
          </p>
          <button className="md:mt-36 mt-8 md:ml-10 mb-4 bg-[#063173] py-2 px-4 rounded-xl text-white">
            Mark as favourite
          </button>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
