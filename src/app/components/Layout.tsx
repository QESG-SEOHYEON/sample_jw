import { Link, Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Search, Globe, MessageCircle } from "lucide-react";
import logo from "../../assets/be5b606e003a683edce707616960499420ff58c3.png";

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Our ESG Approach", path: "/our-esg-approach" },
    { name: "Governance", path: "/governance" },
    { name: "Environmental", path: "/environmental" },
    { name: "Social", path: "/social" },
    { name: "Appendix", path: "/appendix" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg py-3"
            : "bg-black/50 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="SK Eternix" className="h-10" style={{ filter: 'brightness(0) invert(1)' }} />
          </Link>

          <ul className="flex items-center justify-center gap-12 flex-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-base font-medium transition-colors hover:text-white ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-white/90"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button className="text-white/90 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white/90 hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="text-white/90 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-6 border-t border-gray-200">
        <div className="container mx-auto px-6">
          {/* Share Section */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center justify-between py-2" style={{ width: '100%', maxWidth: '1152px' }}>
              <span className="text-sm font-medium text-gray-900">페이지 공유하기</span>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 mb-4"></div>

          <div className="flex justify-center">
            <div style={{ width: '100%', maxWidth: '1152px' }}>
          {/* Footer Columns */}
          <div className="mb-16">
            <div className="flex justify-between">
            {/* Column 1: Our ESG Approach */}
            <div>
              <h3 className="font-bold mb-4 text-base">Our ESG Approach</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/" className="hover:text-[#EA002C] transition-colors">CEO Message</Link></li>
                <li><Link to="/" className="hover:text-[#EA002C] transition-colors">Company Overview</Link></li>
                <li><Link to="/environmental" className="hover:text-[#EA002C] transition-colors">Green Energy Solutions</Link></li>
                <li><Link to="/our-esg-approach" className="hover:text-[#EA002C] transition-colors">ESG Strategy</Link></li>
                <li><Link to="/our-esg-approach" className="hover:text-[#EA002C] transition-colors">중요성 평가</Link></li>
              </ul>
            </div>

            {/* Column 2: Governance */}
            <div>
              <h3 className="font-bold mb-4 text-base">Governance</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/governance" className="hover:text-[#EA002C] transition-colors">지배구조</Link></li>
                <li><Link to="/governance" className="hover:text-[#EA002C] transition-colors">윤리 및 준법경영</Link></li>
                <li><Link to="/governance" className="hover:text-[#EA002C] transition-colors">리스크 관리</Link></li>
              </ul>
            </div>

            {/* Column 3: Environmental */}
            <div>
              <h3 className="font-bold mb-4 text-base">Environmental</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/environmental" className="hover:text-[#EA002C] transition-colors">환경경영</Link></li>
                <li><Link to="/environmental" className="hover:text-[#EA002C] transition-colors">기후변화 대응</Link></li>
              </ul>
            </div>

            {/* Column 4: Social */}
            <div>
              <h3 className="font-bold mb-4 text-base">Social</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/social" className="hover:text-[#EA002C] transition-colors">구성원</Link></li>
                <li><Link to="/social" className="hover:text-[#EA002C] transition-colors">안전보건</Link></li>
                <li><Link to="/social" className="hover:text-[#EA002C] transition-colors">협력사</Link></li>
                <li><Link to="/social" className="hover:text-[#EA002C] transition-colors">지역사회</Link></li>
              </ul>
            </div>

            {/* Column 5: Appendix */}
            <div>
              <h3 className="font-bold mb-4 text-base">Appendix</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><Link to="/appendix" className="hover:text-[#EA002C] transition-colors">About this Report</Link></li>
                <li><Link to="/appendix" className="hover:text-[#EA002C] transition-colors">ESG Data</Link></li>
                <li><Link to="/appendix" className="hover:text-[#EA002C] transition-colors">정책 및 인증</Link></li>
                <li><Link to="/appendix" className="hover:text-[#EA002C] transition-colors">보고 프레임워크</Link></li>
                <li><Link to="/appendix" className="hover:text-[#EA002C] transition-colors">PDF Download</Link></li>
              </ul>
            </div>
            </div>
          </div>

          {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between pt-8">
            {/* Logo and Copyright */}
            <div className="mb-6 md:mb-0">
              <img src={logo} alt="SK Eternix" className="h-10 mb-3" style={{ mixBlendMode: 'multiply' }} />
              <p className="text-xs text-gray-500">
                Copyright© SK eternix Co., Ltd. All Rights Reserved.
              </p>
            </div>

            {/* Bottom Links */}
            <div className="flex items-center gap-6 text-sm text-gray-700">
              <Link to="/" className="hover:text-[#EA002C] transition-colors">SK윤리경영 상담/제보</Link>
              <Link to="/" className="hover:text-[#EA002C] transition-colors">인권경영 성과/제보</Link>
              <Link to="/" className="hover:text-[#EA002C] transition-colors">SK eternix 홈페이지</Link>
              <button className="hover:text-[#EA002C] transition-colors flex items-center gap-2 border border-gray-300 px-4 py-2">
                패밀리 사이트
                <span className="text-lg">+</span>
              </button>
            </div>
            </div>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#00BCD4] hover:bg-[#00ACC1] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50">
          <MessageCircle className="w-6 h-6" />
        </button>
      </footer>
    </div>
  );
}