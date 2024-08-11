import AppLogo from "@/app/ui/imges/logo";
import Rating from "@/app/ui/rating";


export default function Header() {
  return (
    <main>
      <div className={'bg-img-sm bg-cover bg-center w-full p-16'}>
        <div className="flex items-center justify-center">
          <AppLogo width={70} height={70}/>
        </div>
        <div className={'mt-8'}>
          <h1 className={'text-xl text-white mb-2'}>Energy Test</h1>
          <p className={'text-sm font-thin text-dimmed-light mb-1'}>
            Everyone Энергии есть в каждом из нас, и они влияют на нашу жизнь, зачастую в "-" пока мы сами ...
          </p>
          <span className={'text-highlight text-sm underline font-thin'}>Read more</span>
          <div className={'mt-4 flex justify-between'}>
            <div className={'flex'}>
              <Rating/>
              <span className={'text-primary text-sm pl-3'}>4.67</span>
            </div>
            <span className={'text-dimmed-light text-sm pl-3'}>&lt;&gt; 4.67</span>
          </div>
        </div>
      </div>
    </main>
  );
}
