import { motion } from "motion/react";
import { Users, Heart, Shield, GraduationCap } from "lucide-react";
import natureImage from "../../assets/13d512c1c0a455bad431ea37fff22729413aa24d.png";

export default function Social() {
  const programs = [
    {
      icon: Users,
      title: "다양성과 포용",
      description: "성별, 연령, 국적을 초월한 다양한 인재 채용 및 육성",
      stats: "여성 관리자 비율 35%",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Shield,
      title: "안전보건",
      description: "무재해 사업장 구현을 위한 안전관리 체계 강화",
      stats: "안전교육 100% 이수",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Heart,
      title: "사회공헌",
      description: "지역사회와 함께 성장하는 상생 프로그램 운영",
      stats: "100+ 프로젝트",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: GraduationCap,
      title: "인재개발",
      description: "체계적인 교육 프로그램을 통한 임직원 역량 강화",
      stats: "연평균 80시간 교육",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${natureImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Social</h1>
          <p className="text-2xl text-gray-200">
            사람이 중심이 되는 지속가능한 성장
          </p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">사회적 책임 실천</h2>
            <p className="text-xl text-gray-600">
              임직원과 지역사회의 행복을 위한 노력
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((item, index) => (
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
                    <div className="text-3xl font-bold text-blue-600">
                      {item.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-6">임직원 만족도</h2>
            <p className="text-xl mb-12 text-blue-100">
              행복한 직장, 건강한 조직문화를 만들어갑니다
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">92%</div>
                <div className="text-lg">직원 만족도</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">88%</div>
                <div className="text-lg">복지 만족도</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">95%</div>
                <div className="text-lg">근무환경 만족도</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
