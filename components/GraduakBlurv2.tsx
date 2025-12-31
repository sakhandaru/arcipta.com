"use client";

import React, { CSSProperties, useEffect, useRef, useState, useMemo, PropsWithChildren } from 'react';

type GradualBlurProps = PropsWithChildren<{
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | 'scroll';
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
  responsive?: boolean;
  target?: 'parent' | 'page';
  className?: string;
  style?: CSSProperties;
  preset?: 'top' | 'bottom' | 'left' | 'right' | 'subtle' | 'intense' | 'smooth' | 'header' | 'footer' | 'page-header' | 'page-footer';
}>;

const DEFAULT_CONFIG: Partial<GradualBlurProps> = {
  position: 'bottom',
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 10,
  animated: false,
  duration: '0.4s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear',
  responsive: true,
  target: 'parent',
  className: '',
  style: {}
};

const PRESETS: Record<string, Partial<GradualBlurProps>> = {
  top: { position: 'top' },
  bottom: { position: 'bottom' },
  subtle: { height: '4rem', strength: 1, divCount: 3 },
  intense: { height: '10rem', strength: 4, divCount: 7, exponential: true },
  smooth: { height: '8rem', curve: 'bezier', divCount: 8 },
  header: { position: 'top', height: '5rem', curve: 'ease-out', zIndex: 50 },
  footer: { position: 'bottom', height: '5rem', curve: 'ease-out', zIndex: 50 },
  'page-header': { position: 'top', height: '12rem', target: 'page', strength: 3 },
  'page-footer': { position: 'bottom', height: '12rem', target: 'page', strength: 3 }
};

const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  'ease-in': p => p * p,
  'ease-out': p => 1 - Math.pow(1 - p, 2),
  'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

const GradualBlur: React.FC<GradualBlurProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi Mobile untuk optimasi performa
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const config = useMemo(() => {
    const presetConfig = props.preset ? PRESETS[props.preset] : {};
    return { ...DEFAULT_CONFIG, ...presetConfig, ...props } as Required<GradualBlurProps>;
  }, [props]);

  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    
    // OPTIMASI: Kurangi jumlah div jika di mobile untuk menghemat GPU
    const finalDivCount = isMobile ? Math.min(config.divCount, 3) : config.divCount;
    const increment = 100 / finalDivCount;
    const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= finalDivCount; i++) {
      let progress = i / finalDivCount;
      progress = curveFunc(progress);

      let blurValue: number;
      if (config.exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * config.strength;
      } else {
        blurValue = 0.0625 * (progress * finalDivCount + 1) * config.strength;
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;

      const direction = config.position === 'top' ? 'to top' : 
                        config.position === 'bottom' ? 'to bottom' : 
                        config.position === 'left' ? 'to left' : 'to right';

      const mask = `linear-gradient(${direction}, transparent ${p1}%, black ${p2}%)`;

      const divStyle: CSSProperties = {
        position: 'absolute',
        inset: 0,
        WebkitMaskImage: mask,
        maskImage: mask,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity: config.opacity,
        zIndex: i,
        // Akselerasi Hardware
        willChange: 'backdrop-filter',
        transform: 'translateZ(0)'
      };

      divs.push(<div key={i} style={divStyle} />);
    }
    return divs;
  }, [config, isMobile]);

  const containerStyle: CSSProperties = {
    position: config.target === 'page' ? 'fixed' : 'absolute',
    left: 0,
    right: 0,
    [config.position]: 0,
    height: ['top', 'bottom'].includes(config.position) ? config.height : '100%',
    width: ['left', 'right'].includes(config.position) ? config.width || config.height : '100%',
    zIndex: config.zIndex,
    pointerEvents: 'none',
    overflow: 'hidden',
    ...config.style
  };

  return (
    <div ref={containerRef} className={`gradual-blur-container ${config.className}`} style={containerStyle}>
      {blurDivs}
      {props.children}
    </div>
  );
};

export default React.memo(GradualBlur);