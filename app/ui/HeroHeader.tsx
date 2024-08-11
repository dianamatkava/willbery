import AppLogo from "@/app/ui/imges/logo";
import Rating from "@/app/ui/rating";


export default function HeroHeader({children}) {
  return (
    <main>
      <div className={'bg-img-sm bg-cover bg-center w-full p-16'}>
        <div className="flex items-center justify-center">
          <AppLogo width={70} height={70}/>
        </div>
        <div className={'mt-8'}>
          {children}
        </div>
      </div>
    </main>
  );
}
