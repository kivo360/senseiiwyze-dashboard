import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type Step3Props = Record<string, never>;

const Step3: React.FC<Step3Props> = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Step 3</h1>
          <p className="text-lg text-muted-foreground">
            This is Step 3 of the process.
          </p>
        </div>
        
        {/* Add your Step 3 content here */}
        <div className="bg-card p-6 rounded-lg shadow-sm border">
          <p className="text-card-foreground mb-4">
            Congratulations! You&apos;ve reached the final step of our multi-step process. Here you can add any content specific to Step 3.
          </p>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-start">
          <Link href="/step2">
            <Button variant="outline" className="px-6 py-2">
              Previous
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Step3;
