import { motion } from "motion/react";
import { Leaf, Zap, Droplet, Recycle } from "lucide-react";
import windFarmImage from "../../assets/d3dc210bfd75dcec3cad6914273e8103c3fa4834.png";

export default function Environmental() {
  const initiatives = [
    {
      icon: Zap,
      title: "재생에너지 전환",
      description: "2030년까지 재생에너지 사용 비율 70% 달성 목표",
      stats: "현재 45%",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Leaf,
      title: "탄소 배출 감축",
      description: "2050 탄소중립을 위한 단계적 감축 로드맵 실행",
      stats: "30% 감축 달성",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Droplet,
      title: "수자원 관리",
      description: "용수 재활용 및 효율적 물 사용 시스템 구축",
      stats: "재활용률 60%",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Recycle,
      title: "순환경제",
      description: "폐기물 제로화 및 자원 순환 체계 확립",
      stats: "재활용률 85%",
      color: "from-teal-400 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${windFarmImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Environmental</h1>
          <p className="text-2xl text-gray-200">
            친환경 기술로 지구의 미래를 지킵니다
          </p>
        </motion.div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">환경 경영 핵심 과제</h2>
            <p className="text-xl text-gray-600">
              지속가능한 환경을 위한 우리의 노력
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, index) => (
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
                    <div className="text-3xl font-bold text-emerald-600">
                      {item.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-6">2050 탄소중립 로드맵</h2>
            <p className="text-xl mb-12 text-emerald-100">
              단계적이고 체계적인 접근으로 탄소중립을 실현합니다
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">2030</div>
                <div className="text-lg">50% 감축</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">2040</div>
                <div className="text-lg">75% 감축</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">2050</div>
                <div className="text-lg">탄소중립 달성</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
