const DecorativeBackground = () => (
  <>
    <div className="absolute top-0 left-0 right-0 h-24 md:h-32 opacity-20 pointer-events-none overflow-hidden">
      <div className="absolute top-0 left-2 md:left-10 text-4xl md:text-7xl animate-fade-in">🌸</div>
      <div className="absolute top-2 left-16 md:left-28 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🍁</div>
      <div className="absolute top-1 left-28 md:left-48 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
      <div className="absolute top-0 right-2 md:right-12 text-5xl md:text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
      <div className="absolute top-3 right-16 md:right-32 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🌸</div>
      <div className="absolute top-1 right-28 md:right-52 text-4xl md:text-7xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍁</div>
      <div className="absolute top-4 left-1/3 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🍂</div>
      <div className="absolute top-0 right-1/3 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🌸</div>
    </div>
    
    <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 opacity-20 pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 text-5xl md:text-8xl animate-fade-in">🌸</div>
      <div className="absolute bottom-1 left-10 md:left-16 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.2s' }}>🌸</div>
      <div className="absolute bottom-3 left-20 md:left-32 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.4s' }}>🌸</div>
      <div className="absolute bottom-0 right-0 text-5xl md:text-8xl animate-fade-in" style={{ animationDelay: '0.1s' }}>🍂</div>
      <div className="absolute bottom-2 right-10 md:right-16 text-4xl md:text-7xl animate-fade-in" style={{ animationDelay: '0.3s' }}>🍁</div>
      <div className="absolute bottom-4 right-20 md:right-36 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.5s' }}>🍂</div>
      <div className="absolute bottom-2 left-1/3 text-3xl md:text-5xl animate-fade-in" style={{ animationDelay: '0.6s' }}>🌸</div>
      <div className="absolute bottom-0 right-1/3 text-4xl md:text-6xl animate-fade-in" style={{ animationDelay: '0.7s' }}>🍁</div>
    </div>
  </>
);

export default DecorativeBackground;
