import VCard from './VCard';
import Grainient from './components/Grainient';

export default function App() {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Grainient
          color1="#4A5A2B"
          color2="#B5452A"
          color3="#1E293B"
          timeSpeed={0.35}
          colorBalance={-0.07}
          warpStrength={1.2}
          warpFrequency={5.0}
          warpSpeed={2.3}
          warpAmplitude={36}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={2.0}
          grainAmount={0.08}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.4}
          gamma={1.0}
          saturation={1.1}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>
      <VCard />
    </>
  );
}
