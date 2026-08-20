import VCard from './VCard';
import Grainient from './components/Grainient';

export default function App() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Grainient
          color1="#189b3e"
          color2="#e77c42"
          color3="#7c8d8a"
          timeSpeed={0.25}
          colorBalance={-0.05}
          warpStrength={1.1}
          warpFrequency={4.5}
          warpSpeed={1.8}
          warpAmplitude={32}
          blendAngle={0.0}
          blendSoftness={0.08}
          rotationAmount={400.0}
          noiseScale={1.8}
          grainAmount={0.06}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.2}
          gamma={1.1}
          saturation={0.95}
          centerX={0.0}
          centerY={0.0}
          zoom={0.95}
        />
      </div>
      <VCard />
    </>
  );
}
