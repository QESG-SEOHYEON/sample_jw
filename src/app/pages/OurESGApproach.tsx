import { motion } from "motion/react";
import { Target, TrendingUp, Globe, Heart } from "lucide-react";

export default function OurESGApproach() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const visionCards = [
    {
      icon: Target,
      title: "비전",
      description: "2050 탄소중립 달성과 지속가능한 성장을 통해 글로벌 ESG 선도 기업으로 도약",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "전략",
      description: "친환경 기술 혁신, 사회적 가치 창출, 투명한 지배구조를 핵심 전략으로 추진",
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
    {
      icon: Globe,
      title: "목표",
      description: "UN SDGs 달성에 기여하며 이해관계자 모두가 만족하는 지속가능경영 실현",
      color: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
    {
      icon: Heart,
      title: "가치",
      description: "인간 존중, 환경 보호, 윤리 경영을 기반으로 사회적 책임을 다하는 기업 문화 조성",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#0D47A1] to-[#1565C0] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Our ESG Approach
            </h1>
            <p className="text-2xl text-blue-100">
              SK이터닉스의 지속가능경영 철학과 실천 방향
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">ESG 경영 체계</h2>
            <p className="text-xl text-gray-600">
              우리의 비전, 전략, 목표, 가치
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className={`${card.color} p-8 rounded-2xl text-white h-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <card.icon className="w-16 h-16 mb-6" strokeWidth={1.5} />
                  <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Priorities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-12 text-center">
              ESG 핵심 과제
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-emerald-500 pl-6 py-4">
                <h3 className="text-2xl font-bold mb-3 text-emerald-700">환경 (Environmental)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 2050년까지 탄소중립 달성</li>
                  <li>• 재생에너지 사용 비율 70% 확대</li>
                  <li>• 친환경 제품 개발 및 순환경제 실현</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h3 className="text-2xl font-bold mb-3 text-blue-700">사회 (Social)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 안전하고 건강한 일터 조성</li>
                  <li>• 지역사회 상생 및 사회공헌 활동 강화</li>
                  <li>• 다양성과 포용성을 존중하는 기업 문화</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6 py-4">
                <h3 className="text-2xl font-bold mb-3 text-indigo-700">지배구조 (Governance)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 투명하고 윤리적인 경영 실천</li>
                  <li>• 이사회 독립성 및 전문성 강화</li>
                  <li>• 리스크 관리 체계 고도화</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
