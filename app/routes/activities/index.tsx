import ActivitiesFilter from "~/components/Activities/ActivitiesFilter";
import ActivitiesCard from "../../components/Activities/ActivitiesCard";

export default function Activities() {
  return (
    <div className="w-full flex flex-col items-center gap-5 relative ml-2">
      <ActivitiesFilter />
      <div className="flex flex-col items-center w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full max-w-[300px] sm:max-w-full">
          <ActivitiesCard
            imgPath={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xQcwKitRgXfqdi34DYlocPSEXD2G2zZipg&s"
            }
          />
          <ActivitiesCard
            imgPath={
              "https://media.licdn.com/dms/image/D4D12AQHtI0C1YdohQA/article-cover_image-shrink_720_1280/0/1694192663813?e=2147483647&v=beta&t=PzCttA7epMxw1abHI7hk3ig4ZozBvCQ0hratnFnkK9M"
            }
          />
          <ActivitiesCard
            imgPath={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8zS9gnmJ5YG5_83c_5X4xSAkWWlNPFl-VA&s"
            }
          />
          <ActivitiesCard
            imgPath={
              "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Ftteuu4xw5tomxb7l0xjx.png"
            }
          />
          <ActivitiesCard
            imgPath={"https://datascientest.com/en/files/2023/06/CI_CD.webp"}
          />
          <ActivitiesCard
            imgPath={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQByQLtSgUP_AcoCC0GO3Xnt8qnTZGMQhEed1e2KsS91YaBaVuxtmHNjnrQWN3nhvCdby4&usqp=CAU"
            }
          />
        </div>
      </div>
    </div>
  );
}
