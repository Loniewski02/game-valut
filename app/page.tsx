import Wrapper from "./components/layout/Wrapper";

export default function Home() {
  return (
    <header className="h-[60vh] px-2 py-6">
      <Wrapper className="relative h-full overflow-hidden rounded-2xl bg-[url('/assets/demoIMG.png')] bg-cover bg-no-repeat px-6 py-10">
        <div className=" absolute bottom-0 left-0 right-0 top-0 z-20 bg-[linear-gradient(45deg,_rgba(0,0,0,0.98)_0%,_rgba(0,0,0,0.94)_22%,_rgba(0,0,0,0.78)_42%,_rgba(3,18,52,0.68)_62%,_rgba(12,52,128,0.42)_82%,_rgba(38,92,190,0.16)_100%)]" />
      </Wrapper>
    </header>
  );
}
