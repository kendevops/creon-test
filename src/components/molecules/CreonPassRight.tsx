export default function CreonPassRight() {
  return (
    <>
      <>
        <aside className="hidden xl:flex w-1/2 relative overflow-hidden">
          <video
            width="808"
            height="808"
            autoPlay
            loop
            muted
            className="flex-shrink-0"
          >
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/935630556139161368/TEAM/2f74/56c3/-b645-4e00-ba7a-db1f08b78d66?Expires=1701043200&Signature=YTG9kSMrNVEZul~WgmxHzbS6yw-gA~lQpRygCKOkEWrGZzt91vTWjqS65hPr88V5nd2Jf84JjnSfVf3VSjX3~fjNh9O3rASZ~PiP3Vm1rPADzymyy5trRSdL6qrNUk-UVqq8zx8jSc6NOibGPLNpBVzRvmmA4ja1GUwVzC5jAICOujdwfT71SfVweI-Jihmr9NxPFE9jOIRP7c39EdG6z221SxpnFCiS7hvX4fxPpOtiD0Kv0MbAAZ5N4UeoHskZGI2Tx8Q2E~jMhkyk4guqTLarHA4sb1cxCNUUv8BASGOwkHbU0hJWck3AXGaxRANr~6-E5qaF9aHZo-GH6E5FpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              type="video/mp4"
            />
          </video>
          <div className="absolute w-[808px] h-[808px] rounded-md inset-0 bg-video-pattern mix-blend-soft-light"></div>
          {/* Ellipse at the top */}
          <div className="absolute top-0 left-[80%] transform -translate-x-1/2 -translate-y-1/2 w-[1288px] h-[134px] bg-black rounded-[1288px] overflow-hidden"></div>

          {/* Ellipse at the bottom */}
          <div className="absolute bottom-0 left-[80%] transform -translate-x-1/2 translate-y-1/2 w-[1288px] h-[134px] bg-black rounded-[1288px]  overflow-hidden"></div>

          {/* Ellipse at the left */}
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-[808px] h-[170px] bg-black rounded-[808px] rotate-90 overflow-hidden"></div>

          {/* Ellipse at the right */}
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[808px] h-[170px] bg-back rounded-[808px] rotate-90 overflow-hidden"></div>
        </aside>
      </>
      <>
        <aside className="hidden md:flex w-1/2  xl:hidden">
          <video
            width="694"
            height="694"
            autoPlay
            loop
            muted
            className="flex-shrink-0 object-cover absolute w-[694px] h-[694px] bottom-0 -right-20 -z-10"
          >
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/935630556139161368/TEAM/2f74/56c3/-b645-4e00-ba7a-db1f08b78d66?Expires=1701043200&Signature=YTG9kSMrNVEZul~WgmxHzbS6yw-gA~lQpRygCKOkEWrGZzt91vTWjqS65hPr88V5nd2Jf84JjnSfVf3VSjX3~fjNh9O3rASZ~PiP3Vm1rPADzymyy5trRSdL6qrNUk-UVqq8zx8jSc6NOibGPLNpBVzRvmmA4ja1GUwVzC5jAICOujdwfT71SfVweI-Jihmr9NxPFE9jOIRP7c39EdG6z221SxpnFCiS7hvX4fxPpOtiD0Kv0MbAAZ5N4UeoHskZGI2Tx8Q2E~jMhkyk4guqTLarHA4sb1cxCNUUv8BASGOwkHbU0hJWck3AXGaxRANr~6-E5qaF9aHZo-GH6E5FpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              type="video/mp4"
            />
          </video>
          <div className="absolute w-[694px] h-[694px] rounded-md bg-video-pattern mix-blend-soft-light bottom-0 -right-20 -z-[5]"></div>
        </aside>
      </>
      <>
        <aside className="flex md:hidden w-1/2">
          <video
            width="485"
            height="485"
            autoPlay
            loop
            muted
            className="flex-shrink-0 object-cover absolute w-[485px] h-[485px] top-[22rem] right-0 -z-10"
          >
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/935630556139161368/TEAM/2f74/56c3/-b645-4e00-ba7a-db1f08b78d66?Expires=1701043200&Signature=YTG9kSMrNVEZul~WgmxHzbS6yw-gA~lQpRygCKOkEWrGZzt91vTWjqS65hPr88V5nd2Jf84JjnSfVf3VSjX3~fjNh9O3rASZ~PiP3Vm1rPADzymyy5trRSdL6qrNUk-UVqq8zx8jSc6NOibGPLNpBVzRvmmA4ja1GUwVzC5jAICOujdwfT71SfVweI-Jihmr9NxPFE9jOIRP7c39EdG6z221SxpnFCiS7hvX4fxPpOtiD0Kv0MbAAZ5N4UeoHskZGI2Tx8Q2E~jMhkyk4guqTLarHA4sb1cxCNUUv8BASGOwkHbU0hJWck3AXGaxRANr~6-E5qaF9aHZo-GH6E5FpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              type="video/mp4"
            />
          </video>
          <div className="absolute w-[485px] h-[485px] rounded-md bg-video-pattern mix-blend-soft-light top-[22rem] right-0 -z-[5]"></div>
        </aside>
      </>
    </>
  );
}
