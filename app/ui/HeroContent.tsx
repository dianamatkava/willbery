import Rating from "@/app/ui/rating";

export default function HeroComponent () {
  return (
    <>
      <h1 className={'text-xl text-white mb-2'}>Lorem Ipsum</h1>
      <p className={'text-sm font-thin text-dimmed-light mb-1'}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, </p>
      <span className={'text-highlight text-sm underline font-thin'}>Read more</span>
      <div className={'mt-4 flex justify-between'}>
        <div className={'flex'}>
          <Rating/>
          <span className={'text-primary text-sm pl-3'}>4.67</span>
        </div>
        <span className={'text-dimmed-light text-sm pl-3'}>&lt;&gt; 1467</span>
      </div>
    </>
  );
}