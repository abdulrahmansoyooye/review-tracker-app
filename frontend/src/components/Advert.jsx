import imageUrlBuilder from "@sanity/image-url";
import Skeleton from "@mui/material/Skeleton";
import sanityClient from "../sanityClient";
import { useEffect, useState } from "react";
const builder = imageUrlBuilder(sanityClient);

const Advert = () => {
  const urlFor = (source) => {
    return builder.image(source);
  };
  const [promotionData, setPromotionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await sanityClient.fetch(`*[_type == "advert"]{
        Text,
        poster{
          asset{
            _ref
          },
         caption,
        }
      }`);

      setPromotionData(response);
    };
    fetchData();
  }, []);
  return (
    <div className="p-[1.25rem] flex flex-col max-md:flex-col gap-[0.94rem] bg-[#FCFCFC] rounded-[0.9375rem] ">
      <h1 className="font-[700]">Tech Update</h1>
      {promotionData ? (
        <div className=" grid grid-cols-3 max-md:grid-cols-1  gap-[1.5rem] ">
          {promotionData.map(({ Text, poster }, index) => (
            <div key={`${index}-for-${Text}`}>
              <div className="flex-col   space-y-[1.5rem]" data-aos="fade-up">
                <img
                  src={urlFor(poster.asset._ref).url()}
                  alt="news"
                  className="rounded-[0.9375rem] max-md:w-full object-cover w-[20.5625rem] h-[11.625rem] "
                />

                {/* Text && Heading */}
                <div className="flex gap-[4.44rem] max-md:w-full justify-between">
                  {/* Links */}
                  <div className="flex flex-col gap-[0.5rem]">
                    <h1 className="text-[1rem] font-[600] text-[#11142D] w-full">
                      {Text}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" flex max-md:flex-col gap-[1.5rem]">
          <Skeleton variant="text" width={400} height={100} />
          <Skeleton variant="text" width={400} animation="wave" height={100} />
          <Skeleton variant="text" width={400} animation={false} height={100} />
        </div>
      )}
    </div>
  );
};

export default Advert;
