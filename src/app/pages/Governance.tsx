import { motion } from "motion/react";
import { Scale, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import heroImage from "../../assets/a86fbd2e5ad2f278288b664d2f98e64210438a4d.png";

export default function Governance() {
  const principles = [
    {
      icon: Scale,
      title: "투명한 지배구조",
      description: "독립적이고 전문적인 이사회 운영으로 경영 투명성 확보",
      stats: "사외이사 비율 60%",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "윤리경영",
      description: "준법경영과 윤리강령 준수를 통한 신뢰 구축",
      stats: "준수율 95%",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: CheckCircle,
      title: "정보공개",
      description: "이해관계자에게 정확하고 신속한 정보 제공",
      stats: "공시 적기율 100%",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: AlertTriangle,
      title: "리스크 관리",
      description: "체계적인 리스크 관리 시스템 운영",
      stats: "정기점검 연 4회",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Governance</h1>
          <p className="text-2xl text-gray-200">
            투명하고 윤리적인 경영으로 신뢰를 만듭니다
          </p>
        </motion.div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">지배구조 핵심 원칙</h2>
            <p className="text-xl text-gray-600">
              건전한 지배구조를 통한 지속가능한 성장
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} text-white mb-6`}>
                      <item.icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="text-3xl font-bold text-indigo-600">
                      {item.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Composition */}
      <section className="py-24 bg-gradient-to-b from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold mb-12 text-center">이사회 구성</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">이사회 독립성</h3>
                <div className="text-5xl font-bold mb-2">60%</div>
                <p className="text-blue-100">
                  사외이사 비율을 통해 독립적이고 객관적인 의사결정 보장
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">이사회 전문성</h3>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-blue-100">
                  재무, 법률, 기술 등 다양한 분야의 전문가로 구성
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">윤리경영 실천</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>임직원 윤리강령 및 행동규범 제정·운영</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>내부신고 제도 운영 및 신고자 보호</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>정기적인 윤리경영 교육 실시</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  <span>공정거래 및 반부패 정책 준수</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
