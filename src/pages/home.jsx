import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-background-custom min-h-screen relative font-sans text-on-surface selection:bg-primary/10">
    
      <main className="overflow-x-hidden">
        
        {/* HERO SECTION - REFINED WITH PERFECT DESKTOP SIDE-BY-SIDE ALIGNMENT */}
        <section className="relative asymmetric-grid min-h-[85vh] lg:min-h-[90vh] flex items-center px-6 md:px-12 lg:px-20 pt-12 pb-20 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Context is elegantly next to images */}
            <div className="lg:col-span-5 space-y-6 z-10 w-full">
              <div className="flex items-center gap-2">
                <div className="w-10 h-[2px] bg-tertiary"></div>
                <span className="text-tertiary font-sans text-xs font-bold tracking-widest uppercase">
                  Jamaican Resilience
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[50px] xl:text-[62px] text-gray-900 leading-[1.05] font-black tracking-tight select-none">
                Supporting <br />
                Jamaica's <br />
                <span className="text-primary font-display">Bleeding</span> <br />
                <span className="text-primary font-display">Disorders</span> <br />
                Community.
              </h1>

              <p className="font-sans text-sm sm:text-md text-gray-600 max-w-[380px] leading-relaxed">
                We are dedicated to improving the lives of Jamaicans living with haemophilia and other inherited bleeding disorders through advocacy, education, and access to essential care.
              </p>

              <div className="flex flex-wrap gap-4 items-center pt-2">
                <button
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-sans text-xs font-bold tracking-wider hover:shadow-xl transition-all cursor-pointer shadow-lg shadow-primary/10 active:scale-97"
                >
                  Donate Now
                </button>
                <button
                  className="inline-flex items-center gap-1.5 text-secondary font-sans text-xs font-bold tracking-wider hover:text-secondary-hover transition-colors group"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Stunning, highly stable absolute grid */}
            <div className="lg:col-span-7 relative select-none w-full flex items-center justify-center">
              
              {/* Desktop & Tablet high-fidelity collage - Perfectly proportioned and 100% side-by-side with text */}
              <div className="relative w-full h-[380px] sm:h-[480px] hidden sm:block">
                
                {/* 1. Doctor (Left) */}
                <div className="absolute left-[3%] top-[18%] w-[27%] aspect-[195/275] bg-white rounded-2xl overflow-hidden shadow-xl border border-white/50 hover:scale-[1.03] hover:z-25 transition-transform duration-300">
                  <img 
                    alt="Compassionate female doctor" 
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJUj4q4-5qsn38d3aT915nsxd85fMOfEidetX1vq0Ph_hwbWUhj56qfaKAPetHj3rPC-xW30nZWP8L1zeRueud9rz8bP7oguk5kBWf5ZecoUojXQldEjKh_7pleOZAzm2P5X6OPIrHfiR-a-rJeVu_eGX5BxUBotlWvLENZvRDG_lGp5aH1nUMQOwtSF0a_WZMjAXENDWCwA2LGV2R06VuBtkDiZYAPojwprvhfZAPFsrL7nyAd1O8DBCroe7WHgbARytc6JlWgjf6"
                  />
                </div>

                {/* 2. Community laughing (Middle Top) */}
                <div className="absolute left-[33%] top-[4%] w-[34%] aspect-[240/300] bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/50 hover:scale-[1.03] hover:z-25 transition-transform duration-300">
                  <img 
                    alt="Jamaican community laughing together" 
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEqlehIL4y1u6RUBr3LaVHz-yuMuA42GK7QPYuBL_AfR55IIBOeKuabh9UFIGZ1n7jLIlxKrYoLyeN4FqxgtIq5KVkdt8zMmNQPdCVP574XJ-iks00VW8crfhfIcEaWQxXbVMt3glCG0lwmepbP8H2sdUfbkj3vuopbh6pLSEcVTew8Pq-QV2bsqMO_5IOm8qz2MJSRqQVqNQon3J4r7B4RqyMwjvMX8IelEF39ixSiHxfbg5otxHeX06797ti_8hm2qrS8y9sJKo2"
                  />
                </div>

                {/* 3. Vial & Flag background (Middle Bottom) */}
                <div className="absolute left-[33%] top-[68%] w-[34%] aspect-[240/180] bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/50 hover:scale-[1.03] hover:z-25 transition-transform duration-300">
                  <img 
                    alt="Medicine vial and flag" 
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFuVz4n8BZnoYX6uygMtAdsy-7YUWuh6MjY3P2ouWcJE5N3GGXeWzF_vFRq3YeSQND3nEyByit82btRZMlTuoKYuhefeZwFZmu1EQio4XGoC75N27DJBikTWVXOyS4Nn0w_rodhY1YeGzwYroxcaQ0Y4OK3MyaBYiUyRMrq1iY052U46FI05tvfpl6HS24iN-WfWQhhUWCfnyoKLuaPxiLjvt-kkUmgKl1JrflYt7MjX8RKFym9TitfqJnVhrE52QqextckY-sVLyn"
                  />
                </div>

                {/* 4. Corridor (Right) */}
                <div className="absolute left-[70%] top-[4%] w-[26%] aspect-[175/235] bg-white rounded-2xl overflow-hidden shadow-xl border border-white/50 hover:scale-[1.03] hover:z-25 transition-transform duration-300">
                  <img 
                    alt="Modern healthcare facility corridor" 
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6rwpF_V_ZSVXnDqchbvOxiBBr-EvjLRKeFt8oMfJSPgC8C7TNnBVybOAfwR_c4JUAVCFMtixGxfqYr4LaoizLePsNX8FgiOZGSUVlzCQ-rwSCIRNcCN7vr8dJAwjm_Wn84kwNinyF-DOtAV2jD66iSdPKcj3dT7kSdp70KV_F6whIlJEIlkgvDvKKGVbKmgnzF-7V8C8v9wegh5DSRg2qVjjzniGnNo3QPi8Vwi9hbebJWIVCNM1LSHyqQL56QygRr8cdvYwEfMmm"
                  />
                </div>

              </div>

              {/* Mobile Fallback: Elegant 2x2 collage for small phone viewports */}
              <div className="w-full grid grid-cols-2 gap-3 sm:hidden mt-8">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <img 
                    alt="Doctor" 
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJUj4q4-5qsn38d3aT915nsxd85fMOfEidetX1vq0Ph_hwbWUhj56qfaKAPetHj3rPC-xW30nZWP8L1zeRueud9rz8bP7oguk5kBWf5ZecoUojXQldEjKh_7pleOZAzm2P5X6OPIrHfiR-a-rJeVu_eGX5BxUBotlWvLENZvRDG_lGp5aH1nUMQOwtSF0a_WZMjAXENDWCwA2LGV2R06VuBtkDiZYAPojwprvhfZAPFsrL7nyAd1O8DBCroe7WHgbARytc6JlWgjf6"
                  />
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <img 
                    alt="Community" 
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEqlehIL4y1u6RUBr3LaVHz-yuMuA42GK7QPYuBL_AfR55IIBOeKuabh9UFIGZ1n7jLIlxKrYoLyeN4FqxgtIq5KVkdt8zMmNQPdCVP574XJ-iks00VW8crfhfIcEaWQxXbVMt3glCG0lwmepbP8H2sdUfbkj3vuopbh6pLSEcVTew8Pq-QV2bsqMO_5IOm8qz2MJSRqQVqNQon3J4r7B4RqyMwjvMX8IelEF39ixSiHxfbg5otxHeX06797ti_8hm2qrS8y9sJKo2"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md col-span-2">
                  <img 
                    alt="Vial" 
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFuVz4n8BZnoYX6uygMtAdsy-7YUWuh6MjY3P2ouWcJE5N3GGXeWzF_vFRq3YeSQND3nEyByit82btRZMlTuoKYuhefeZwFZmu1EQio4XGoC75N27DJBikTWVXOyS4Nn0w_rodhY1YeGzwYroxcaQ0Y4OK3MyaBYiUyRMrq1iY052U46FI05tvfpl6HS24iN-WfWQhhUWCfnyoKLuaPxiLjvt-kkUmgKl1JrflYt7MjX8RKFym9TitfqJnVhrE52QqextckY-sVLyn"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
