// This doesn't work:
import { T3TestComponent } from '@zact-nx/feature';

// This works:
// import { T3TestComponent } from './t3test';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <T3TestComponent />
    </main>
  );
}
