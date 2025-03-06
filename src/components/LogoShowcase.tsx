import { useEffect, useRef } from "react";
import "./LogoShowcase.css";

interface ClientLogo {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

interface LogoShowcaseProps {
  clientLogos: ClientLogo[];
}

export const LogoShowcase = ({ clientLogos }: LogoShowcaseProps) => {
  // Split logos into two groups for different rows
  const firstRowLogos = clientLogos.slice(0, Math.ceil(clientLogos.length / 2));
  const secondRowLogos = clientLogos.slice(Math.ceil(clientLogos.length / 2));

  return (
    <div className="logo-showcase">
      <div className="brands_list">
        {/* First Row - Left to Right */}
        <div className="brands_list-row">
          <div className="ticker-wrapper">
            <div className="ticker-component">
              {/* First Copy */}
              <div className="ticker-content ticker-left">
                <div className="ticker-items">
                  {firstRowLogos.map((logo) => (
                    <img
                      key={`first-${logo.id}`}
                      src={logo.logo}
                      alt={logo.alt}
                    />
                  ))}
                </div>
              </div>
              {/* Second Copy */}
              <div className="ticker-content ticker-left">
                <div className="ticker-items">
                  {firstRowLogos.map((logo) => (
                    <img
                      key={`second-${logo.id}`}
                      src={logo.logo}
                      alt={logo.alt}
                    />
                  ))}
                </div>
              </div>
              {/* Third Copy */}
              <div className="ticker-content ticker-left">
                <div className="ticker-items">
                  {firstRowLogos.map((logo) => (
                    <img
                      key={`third-${logo.id}`}
                      src={logo.logo}
                      alt={logo.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="brands_list-row">
          <div className="ticker-wrapper">
            <div className="ticker-component">
              {/* First Copy */}
              <div className="ticker-content ticker-right">
                <div className="ticker-items">
                  {secondRowLogos.map((logo) => (
                    <img
                      key={`first-${logo.id}`}
                      src={logo.logo}
                      alt={logo.alt}
                    />
                  ))}
                </div>
              </div>
              {/* Second Copy */}
              <div className="ticker-content ticker-right">
                <div className="ticker-items">
                  {secondRowLogos.map((logo) => (
                    <img
                      key={`second-${logo.id}`}
                      src={logo.logo}
                      alt={logo.alt}
                    />
                  ))}
                </div>
              </div>
              {/* Third Copy */}
              <div className="ticker-content ticker-right">
                <div className="ticker-items">
                  {secondRowLogos.map((logo) => (
                    <img
                      key={`third-${logo.id}`}
                      src={logo.logo}
                      alt={logo.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
