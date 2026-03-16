import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { ChevronRight, Leaf, Users, Scale, Download, FileCheck, Database, FileText } from "lucide-react";
import Slider from "react-slick";
import heroImage from "../../assets/8e64374228c2febb58f045e879f5183f40510ce0.png";
import transitionImage from "../../assets/a86fbd2e5ad2f278288b664d2f98e64210438a4d.png";
import windFarmImage from "../../assets/d3dc210bfd75dcec3cad6914273e8103c3fa4834.png";
import windTurbineImage from "../../assets/12692e28fb6cfcf57755e2781838813091ff74a8.png";
import solarPanelImage from "../../assets/7ed84336d6ab04a36f2ac616d9ca40f441913836.png";
import essImage from "../../assets/5c8d2b774f4a11012e953550201d96f731a0262e.png";
import fuelCellImage from "../../assets/16380cb8066aabe44c9b72401334433b6f39e0ed.png";
import environmentalImage from "../../assets/1e05665071eb4c2164869d24766275cb4641e945.png";
import natureImage from "../../assets/13d512c1c0a455bad431ea37fff22729413aa24d.png";
import mountainImage from "../../assets/1290426f275f21b9ff1471801524dd3c7201850a.png";
import governanceImage from "../../assets/5086c614e3d84d56f226809e1a0a77fa124d7d9d.png";
import cloud1 from "../../assets/cloud1.png";
import cloud2 from "../../assets/cloud2.png";
import cloud3 from "../../assets/cloud3.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const transitionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!transitionRef.current || !imageRef.current || !overlayRef.current || !progressRef.current || !text1Ref.current || !text2Ref.current) return;

    const ctx = gsap.context(() => {
      // Main timeline with pin
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: transitionRef.current,
          start: "top top",
          end: "+=300vh",
          pin: true,
          scrub: 1,
        },
      });

      // 1) Clip-path expand (이미지 좌우 확장)
      timeline.fromTo(
        imageRef.current,
        { clipPath: "inset(0px 10% 0px 10%)" },
        { clipPath: "inset(0px 0% 0px 0%)", duration: 1, ease: "power2.out" },
        0
      );

      // 2) Image scale (약간의 줌인 효과)
      timeline.fromTo(
        imageRef.current?.querySelector('img'),
        { scale: 1.1 },
        { scale: 1, duration: 1.2, ease: "power2.out" },
        0
      );

      // 3) Overlay fade (어두운 오버레이 살짝 밝아지기)
      timeline.fromTo(
        overlayRef.current,
        { opacity: 0.5 },
        { opacity: 0.3, duration: 0.8 },
        0.2
      );

      // 4) Progress bar 채우기
      timeline.fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power2.inOut" },
        0.3
      );

      // 5) 텍스트 1 fade-in (stagger)
      timeline.fromTo(
        text1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.5
      );

      // 6) 텍스트 2 fade-in (stagger)
      timeline.fromTo(
        text2Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        0.8
      );
    });

    return () => ctx.revert();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const esgCards = [
    {
      title: "Environmental",
      subtitle: "환경",
      description: "친환경 기술과 재생에너지로 탄소 중립을 실현합니다",
      icon: Leaf,
      color: "from-emerald-500 to-teal-600",
      path: "/environmental",
      image: windFarmImage,
    },
    {
      title: "Social",
      subtitle: "사회",
      description: "포용적 성장과 상생을 통해 사회적 가치를 창출합니다",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      path: "/social",
      image: natureImage,
    },
    {
      title: "Governance",
      subtitle: "지배구조",
      description: "투명하고 윤리적인 경영으로 신뢰를 구축합니다",
      icon: Scale,
      color: "from-indigo-500 to-blue-600",
      path: "/governance",
      image: governanceImage,
    },
  ];

  const stats = [
    { value: "45%", label: "재생에너지 사용률", suffix: "" },
    { value: "30%", label: "탄소 배출량 감축", suffix: "" },
    { value: "100+", label: "사회공헌 프로젝트", suffix: "" },
    { value: "95%", label: "윤리경영 준수율", suffix: "" },
  ];

  const ctaBoxes = [
    {
      title: "보고서 다운로드",
      icon: Download,
      path: "/appendix",
    },
    {
      title: "정책 및 인증",
      icon: FileCheck,
      path: "/governance",
    },
    {
      title: "ESG 데이터",
      icon: Database,
      path: "/our-esg-approach",
    },
    {
      title: "GRI·SASB·TCFD",
      icon: FileText,
      path: "/appendix",
    },
  ];

  const librarySlides = [
    {
      title: "인권헌장",
      image: "https://images.unsplash.com/photo-1621944190272-ec775aad58d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJpbGl0eSUyMHJlcG9ydCUyMGNvdmVyJTIwtaW5pbWFsfGVufDF8fHx8MTc3MzYyNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "윤리규정",
      image: "https://images.unsplash.com/photo-1503467431153-c403061ea50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJpZ2h0cyUyMHBvbGljeSUyMGRvY3VtZW50JTIwY292ZXIlMjBibHVlfGVufDF8fHx8MTc3MzYyNDQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "-50px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-all" />
    ),
  };

  return (
    <div className="min-h-screen">
      {/* Stacking cloud animation */}
      <style>{`
        @keyframes cloud-bg-scroll {
          0% { background-position: 0 center; }
          100% { background-position: -200vw center; }
        }
        @keyframes cloud-bg-scroll-reverse {
          0% { background-position: 0 center; }
          100% { background-position: 200vw center; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Cloud PNG Layers - stacking scroll */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
          {/* Cloud Layer 1 - back, slowest */}
          <div
            className="absolute inset-x-0"
            style={{
              top: '-15%',
              height: '70%',
              backgroundImage: `url(${cloud1})`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 100%',
              animation: 'cloud-bg-scroll 280s linear infinite',
              opacity: 0.6,
              filter: 'blur(8px)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 65%, transparent 100%)',
            }}
          />

          {/* Cloud Layer 2 - mid, reverse */}
          <div
            className="absolute inset-x-0"
            style={{
              top: '-5%',
              height: '65%',
              backgroundImage: `url(${cloud2})`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 100%',
              animation: 'cloud-bg-scroll-reverse 240s linear infinite',
              animationDelay: '-40s',
              opacity: 0.5,
              filter: 'blur(6px)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)',
            }}
          />

          {/* Cloud Layer 3 - front, slightly faster */}
          <div
            className="absolute inset-x-0"
            style={{
              top: '-10%',
              height: '60%',
              backgroundImage: `url(${cloud3})`,
              backgroundRepeat: 'repeat-x',
              backgroundSize: 'auto 100%',
              animation: 'cloud-bg-scroll 200s linear infinite',
              animationDelay: '-50s',
              opacity: 0.45,
              filter: 'blur(5px)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-32 flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
            {/* Left Side - Main Title */}
            <div className="space-y-2 lg:pl-16">
              <div className="text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                >
                  <div className="text-4xl md:text-5xl font-bold leading-tight">2025</div>
                  <div className="text-4xl md:text-5xl font-bold leading-tight">SK이터닉스</div>
                  <div className="text-4xl md:text-5xl font-bold leading-tight">지속가능경영보고서</div>
                </motion.div>
              </div>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="flex justify-end lg:pr-16">
              <div className="space-y-4 w-full max-w-xs" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.3)' }}>
                {ctaBoxes.map((box, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 1.1 + index * 0.12 }}
                  >
                    <Link
                      to={box.path}
                      className="flex items-center justify-between text-white py-3 border-b border-white/30 hover:border-white/60 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <box.icon className="w-5 h-5" strokeWidth={2} />
                        <span className="text-lg font-medium">{box.title}</span>
                      </div>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
          className="relative z-10 pb-16 px-6"
        >
          <div className="container mx-auto lg:pl-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)' }}>
              <span className="font-bold">Energy Solutions</span> for <span className="font-bold">Eternity</span>
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Section 1 - Arrow Intro */}
      <section className="relative h-[15vh] flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <svg 
            width="60" 
            height="60" 
            viewBox="0 0 60 60" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-black rotate-90"
          >
            <path 
              d="M20 15 L35 30 L20 45" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Transition Section with GSAP ScrollTrigger */}
      <section 
        ref={transitionRef}
        className="relative overflow-hidden bg-white"
      >
        <div className="w-full h-screen flex items-center justify-center overflow-hidden">
          {/* Image with Overlay Container */}
          <div
            ref={imageRef}
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: "inset(0px 5% 0px 5%)" }}
          >
            <img
              src={transitionImage}
              alt="Wind turbines at sunset"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-black/30"
            />
          </div>

          {/* Progress Bar */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-white/30 rounded-full overflow-hidden z-20">
            <div
              ref={progressRef}
              className="h-full bg-white origin-left"
              style={{ scaleX: 0 }}
            />
          </div>

          {/* CEO Message */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
            <p
              ref={text1Ref}
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 font-light"
              style={{ opacity: 0 }}
            >
              "기후변화와 에너지 안보 위기에 직면한 지금,<br />
              SK이터닉스는 친환경에너지 사업을 통해<br />
              인류와 지구의 지속가능한 미래에 기여하며<br />
              국내외 에너지 전환을 함께 이끌어 나가겠습니다."
            </p>
            <div
              ref={text2Ref}
              className="text-lg"
              style={{ opacity: 0 }}
            >
              <p className="font-semibold">김해중</p>
              <p className="text-white/90">SK이터닉스 대표이사</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Section - 섹션2 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Side - Our Business Title + Description + Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="space-y-8">
                {/* Title */}
                <div>
                  <h2 className="text-5xl font-bold text-black mb-4">
                    Our Business
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    신재생에너지의 무한한 가능성을 현실로 만들며,<br />
                    에너지의 미래를 새롭게 씁니다.
                  </p>
                </div>

                {/* Timeline */}
                <div className="relative pt-8">
                  {/* Vertical Line */}
                  <div className="absolute left-[9px] top-8 bottom-0 w-[2px] bg-orange-500" />

                  {/* Timeline Items */}
                  <div className="space-y-12">
                    {/* 2008 */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-[3px] border-orange-500 bg-white" />
                      <div className="text-sm font-bold text-orange-500 mb-2">2008</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">남원 태양광발전소 시작</h4>
                      <p className="text-sm text-gray-500">국내 신재생에너지 시장 진출, 태양광 사업의 첫 걸음</p>
                    </div>

                    {/* 2020 */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-[3px] border-orange-500 bg-white" />
                      <div className="text-sm font-bold text-orange-500 mb-2">2020</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">ESS 사업 본격 확대</h4>
                      <p className="text-sm text-gray-500">국내 No.1 ESS 사업자로 도약, 에너지 저장 기술 선도</p>
                    </div>

                    {/* 2024 */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-[3px] border-orange-500 bg-white" />
                      <div className="text-sm font-bold text-orange-500 mb-2">2024</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">SK이터닉스 출범</h4>
                      <p className="text-sm text-gray-500">SK디앤디에서 인적분할, 신재생에너지 전문 기업으로 독립</p>
                    </div>

                    {/* 2050 */}
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-5 h-5 rounded-full border-[3px] border-orange-500 bg-white" />
                      <div className="text-sm font-bold text-orange-500 mb-2">2050</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">탄소중립 달성 목표</h4>
                      <p className="text-sm text-gray-500">국가 탄소중립 목표에 맞춘 에너지 전환 완성</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Business Cards Grid */}
            <div className="lg:col-span-9">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
              >
                {/* 태양광 - 높게 (연료전지보다 높음) */}
                <motion.div variants={fadeInUp} className="mt-16">
                  <Link to="/environmental" className="block group">
                    <div className="relative h-[600px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${solarPanelImage})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        {/* Content */}
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">태양광</h3>
                            <p className="text-base opacity-90">설명 문구</p>
                          </div>
                          {/* Arrow - Bottom Right */}
                          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* 풍력 - 가장 높게 */}
                <motion.div variants={fadeInUp} className="mt-0">
                  <Link to="/environmental" className="block group">
                    <div className="relative h-[600px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${windTurbineImage})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        {/* Content */}
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">풍력</h3>
                            <p className="text-base opacity-90">설명 문구</p>
                          </div>
                          {/* Arrow - Bottom Right */}
                          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* 연료전지 - 가장 낮게 */}
                <motion.div variants={fadeInUp} className="mt-28">
                  <Link to="/environmental" className="block group">
                    <div className="relative h-[600px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${fuelCellImage})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        {/* Content */}
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">연료전지</h3>
                            <p className="text-base opacity-90">설명 문구</p>
                          </div>
                          {/* Arrow - Bottom Right */}
                          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* ESS - 풍력보다 낮고 태양광보다 높게 */}
                <motion.div variants={fadeInUp} className="mt-12">
                  <Link to="/environmental" className="block group">
                    <div className="relative h-[600px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${essImage})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      <div className="relative h-full flex flex-col justify-end p-8 text-white">
                        {/* Content */}
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">ESS</h3>
                            <p className="text-base opacity-90">설명 문구</p>
                          </div>
                          {/* Arrow - Bottom Right */}
                          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Cards Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section 3-E: Environmental */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1721290174144-fcdc8d0c7487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjByZW5ld2FibGUlMjBlbmVyZ3klMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzczNjI1NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Environmental" 
                  className="w-full h-auto"
                />
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-black">
                  Environment
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-black leading-relaxed">
                    SK이터닉스는 탄소중립 실현을 위해 재생에너지 발전과 에너지 효율화에 앞장서고 있습니다. 
                    태양광, 풍력, 연료전지, ESS 등 다양한 신재생에너지 솔루션을 통해 온실가스 배출을 줄이고, 
                    청정에너지 전환을 가속화하고 있습니다.
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    환경경영 체계를 강화하고 환경 리스크를 체계적으로 관리하며, 
                    생태계 보전과 순환경제 실현을 위한 다양한 활동을 전개하고 있습니다.
                  </p>
                </div>
                <Link
                  to="/environmental"
                  className="inline-block border-b-2 border-black text-black text-lg font-semibold pb-2 hover:opacity-60 transition-all"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>

          {/* Section 3-S: Social */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-black">
                  Social
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-black leading-relaxed">
                    SK이터닉스는 사회적 책임을 다하며 미래로 함께 나아갑니다.
                    상생협력과 인권존중, 다양성과 포용성을 바탕으로 지속 가능한 사회적 가치를 창출하고 있습니다.
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    혁신적인 인재양성과 안전보건관리 강화를 통해 구성원의 성장을 지원하며,
                    기술로 자립을 만들고 사회공헌 활동으로 더불어 사는 미래를 만들어 나가고 있습니다.
                  </p>
                </div>
                <Link
                  to="/social"
                  className="inline-block border-b-2 border-black text-black text-lg font-semibold pb-2 hover:opacity-60 transition-all"
                >
                  자히 보기
                </Link>
              </div>

              {/* Right Side - Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1617153817979-283ffdcd52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzczNjI1NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Social" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Section 3-G: Governance */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Image */}
              <div className="relative">
                <img 
                  src={governanceImage}
                  alt="Governance" 
                  className="w-full h-auto"
                />
              </div>

              {/* Right Side - Content */}
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-black">
                  Governance
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-black leading-relaxed">
                    SK이터닉스는 투명하고 윤리적인 지배구조를 통해 지속가능한 미래를 위해 
                    책임경영을 실천합니다. 이사회 중심의 경영으로 독립성과 전문성을 강화하고 있습니다.
                  </p>
                  <p className="text-lg text-black leading-relaxed">
                    또한 지속가능성 거버넌스 체계를 고도화하며 위험 관리와 내부통제를 강화하고, 
                    윤리경영과 컴플라이언스를 통해 모든 이해관계자와의 신뢰를 구축하고 있습니다.
                  </p>
                </div>
                <Link
                  to="/governance"
                  className="inline-block border-b-2 border-black text-black text-lg font-semibold pb-2 hover:opacity-60 transition-all"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold text-black">2025 Highlight</h2>
          </motion.div>

          {/* Grid Layout - 6 cards left, 1 large card right */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left side - 2x3 grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative overflow-hidden rounded-lg h-[220px] group cursor-pointer"
                style={{ backgroundColor: '#EEF0F5' }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-start items-start">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    ISO 14001<br />인증 획득
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative overflow-hidden rounded-lg h-[220px] group cursor-pointer"
                style={{ backgroundColor: '#EEF0F5' }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-start items-start">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    사회적 가치<br />xxx 창출
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative overflow-hidden rounded-lg h-[220px] group cursor-pointer"
                style={{ backgroundColor: '#EEF0F5' }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-start items-start">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    윤리규정 수립 및<br />반부패 문화 조성
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative overflow-hidden rounded-lg h-[220px] group cursor-pointer"
                style={{ backgroundColor: '#EEF0F5' }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-start items-start">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    신재생에너지 발전량<br />xxx GWh 달성
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative overflow-hidden rounded-lg h-[220px] group cursor-pointer"
                style={{ backgroundColor: '#EEF0F5' }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-start items-start">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    사업장 중대재해<br />Zero
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Card 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative overflow-hidden rounded-lg h-[220px] group cursor-pointer"
                style={{ backgroundColor: '#EEF0F5' }}
              >
                <div className="absolute inset-0 p-6 flex flex-col justify-start items-start">
                  <h3 className="text-xl font-bold text-gray-800 leading-tight">
                    공정거래 위반<br />Zero
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>

            {/* Right side - Large vertical card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="lg:col-span-1"
            >
              <div className="relative overflow-hidden rounded-lg h-[220px] lg:h-[458px] group cursor-pointer">
                <img
                  src={natureImage}
                  alt="Nature"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Image Only */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${windFarmImage})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Digital Library Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-12"
          >
            Digital Library
          </motion.h2>

          {/* Button Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            {/* Button 1 */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group flex items-center justify-between bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white px-6 py-5 border border-white transition-all duration-300"
            >
              <span className="text-lg font-semibold">인권헌장</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Button 2 */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group flex items-center justify-between bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white px-6 py-5 border border-white transition-all duration-300"
            >
              <span className="text-lg font-semibold">안전보건매뉴얼</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Button 3 */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group flex items-center justify-between bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white px-6 py-5 border border-white transition-all duration-300"
            >
              <span className="text-lg font-semibold">윤리규정</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Button 4 */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group flex items-center justify-between bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white px-6 py-5 border border-white transition-all duration-300"
            >
              <span className="text-lg font-semibold">협력사 행동규범</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}