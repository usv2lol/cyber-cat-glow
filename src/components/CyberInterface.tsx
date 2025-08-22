import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Cat, Database } from 'lucide-react';
import CyberTabs from './CyberTabs';
import LoadingOverlay from './LoadingOverlay';
import ParticleAnimation from './ParticleAnimation';
import CatImageCard from './CatImageCard';

interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

const CyberInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Fetcher');
  const [isLoading, setIsLoading] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCatImages = useCallback(async () => {
    setError(null);
    setIsButtonVisible(false);
    setShowParticles(true);
    
    // Small delay for button animation
    setTimeout(() => {
      setIsLoading(true);
    }, 400);

    try {
      // Fetch multiple cat images
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=8');
      const images = await response.json();
      
      // Simulate network delay for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setCatImages(images);
    } catch (err) {
      setError('Failed to fetch cat images. Please try again.');
      setIsButtonVisible(true);
    } finally {
      setIsLoading(false);
      setShowParticles(false);
    }
  }, []);

  const resetInterface = useCallback(() => {
    setCatImages([]);
    setIsButtonVisible(true);
    setError(null);
  }, []);

  const renderSourcesTab = () => (
    <div className="text-center space-y-6 max-w-2xl mx-auto">
      <div className="bg-card-gradient border border-cyber-medium rounded-lg p-6 shadow-glow-soft">
        <Database className="w-12 h-12 text-cyber-glow mx-auto mb-4" />
        <h3 className="text-xl font-bold text-cyber-glow mb-3">Data Sources</h3>
        <p className="text-cyber-light mb-4">
          This application fetches high-quality cat images from The Cat API, a free service 
          providing access to thousands of adorable feline photos.
        </p>
        <div className="space-y-2 text-sm text-cyber-medium">
          <p>• API Endpoint: The Cat API v1</p>
          <p>• No authentication required</p>
          <p>• Rate limit: 1000 requests/hour</p>
          <p>• Image formats: JPG, PNG, GIF</p>
        </div>
      </div>
    </div>
  );

  const renderFetcherTab = () => (
    <div className="space-y-8">
      {error && (
        <div className="bg-destructive/20 border border-destructive rounded-lg p-4 text-center">
          <p className="text-destructive font-medium">{error}</p>
        </div>
      )}
      
      <div className="text-center space-y-6">
        {isButtonVisible && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-cyber-glow mb-2">
              Ready to fetch some cats?
            </h2>
            <p className="text-cyber-light text-lg mb-8">
              Click the button below to retrieve adorable cat images with our cyber-enhanced fetcher.
            </p>
            <Button
              variant="cyber-fetch"
              size="cyber"
              onClick={fetchCatImages}
              className="mx-auto"
            >
              <Cat className="w-5 h-5" />
              Fetch Cat Images
              <Download className="w-5 h-5" />
            </Button>
          </div>
        )}
        
        {catImages.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-cyber-glow">
                Successfully fetched {catImages.length} cats!
              </h3>
              <Button
                variant="cyber"
                size="default"
                onClick={resetInterface}
              >
                Fetch More
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {catImages.map((cat, index) => (
                <CatImageCard 
                  key={cat.id || index}
                  imageUrl={cat.url}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cyber-gradient text-foreground">
      <ParticleAnimation isVisible={showParticles} />
      <LoadingOverlay isVisible={isLoading} />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-cyber-glow mb-4 animate-glow-pulse">
            CyberCat Fetcher
          </h1>
          <p className="text-xl text-cyber-light">
            A futuristic interface for retrieving the internet's finest feline specimens
          </p>
        </header>

        <CyberTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="max-w-7xl mx-auto">
          {activeTab === 'Sources' ? renderSourcesTab() : renderFetcherTab()}
        </main>
      </div>
    </div>
  );
};

export default CyberInterface;