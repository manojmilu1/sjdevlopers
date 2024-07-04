'use client'
import HTMLFlipBook from "react-pageflip";
import Image from 'next/image'; // Import next/image for optimized image handling

export default function Home() {
    return (
      <>
        <div className="container container-fluid container-sm">
            
          <div className="justify-center">
            <HTMLFlipBook width={500} height={500}>
              <div className="demoPage">
                {/* Use next/image component */}
                <Image
                  src="/images/amaze.jpg"
                  alt="Page 1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="demoPage">
              <Image
                  src="/images/amaze1.jpg"
                  alt="Page 1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="demoPage">
              <Image
                  src="/images/amaze2.jpg"
                  alt="Page 1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="demoPage">
              <Image
                  src="/images/amaze3.jpg"
                  alt="Page 1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="demoPage">
              <Image
                  src="/images/dummy.jpg"
                  alt="Page 1"
                  width={500}
                  height={500}
                />
              </div>
              <div className="demoPage">
              <Image
                  src="/images/dummy.jpg"
                  alt="Page 1"
                  width={500}
                  height={500}
                />
              </div>
            </HTMLFlipBook>
          </div>
        </div>
      </>
    );
}
