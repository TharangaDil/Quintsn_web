import ThreeDImageRing from "./ui/imageRing";
import RaysBackground from "./ui/raysBackground";


export default function ImageRing() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <RaysBackground></RaysBackground>
      <ThreeDImageRing
        images={[
          "/img/img1.png",
          "/img/img2.png",
          "/img/img3.png",
          "/img/img4.png",
          "/img/img5.png",
          "/img/img6.png",
          "/img/img8.png",
          "/img/img9.png",
        ]}
        width={350}
        imageDistance={600}
        backgroundColor="#6EECA0"
      />
    </div>
  );
}
