import { motion } from "motion/react";
import { Download, FileText, BarChart3, Calendar } from "lucide-react";

export default function Appendix() {
  const reports = [
    {
      year: "2025",
      title: "SK이터닉스 ESG 리포트 2025",
      description: "2025년 ESG 경영 성과 및 주요 활동",
      size: "12.5 MB",
      pages: "86 pages",
    },
    {
      year: "2024",
      title: "SK이터닉스 ESG 리포트 2024",
      description: "2024년 ESG 경영 성과 및 주요 활동",
      size: "11.8 MB",
      pages: "82 pages",
    },
    {
      year: "2023",
      title: "SK이터닉스 ESG 리포트 2023",
      description: "2023년 ESG 경영 성과 및 주요 활동",
      size: "10.2 MB",
      pages: "78 pages",
    },
  ];

  const dataSheets = [
    {
      icon: BarChart3,
      title: "ESG 성과 데이터",
      description: "환경, 사회, 지배구조 핵심 성과 지표",
      format: "Excel",
    },
    {
      icon: FileText,
      title: "GRI 인덱스",
      description: "GRI Standards 기준 공시 자료",
      format: "PDF",
    },
    {
      icon: Calendar,
      title: "이해관계자 참여",
      description: "이해관계자 소통 활동 보고서",
      format: "PDF",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0D47A1] to-[#1565C0] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Appendix</h1>
            <p className="text-2xl text-blue-100">
              ESG 리포트 및 관련 자료 다운로드
            </p>
          </motion.div>
        </div>
      </section>

      {/* ESG Reports */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">ESG 리포트</h2>
            <p className="text-xl text-gray-600">
              연도별 지속가능경영 보고서
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 gap-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                        {report.year.slice(2)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {report.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{report.description}</p>
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span>{report.size}</span>
                          <span>•</span>
                          <span>{report.pages}</span>
                        </div>
                      </div>
                    </div>
                    <button className="flex-shrink-0 flex items-center gap-2 bg-[#1E88E5] hover:bg-[#1565C0] text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105">
                      <Download className="w-5 h-5" />
                      다운로드
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sheets */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">추가 자료</h2>
            <p className="text-xl text-gray-600">
              ESG 관련 데이터 및 참고 자료
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataSheets.map((sheet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                  <div className="p-8">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-6">
                      <sheet.icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{sheet.title}</h3>
                    <p className="text-gray-600 mb-4">{sheet.description}</p>
                    <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                      {sheet.format}
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-[#1E88E5] hover:text-white text-gray-700 px-4 py-3 rounded-lg font-semibold transition-all">
                      <Download className="w-4 h-4" />
                      다운로드
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold mb-4">문의하기</h2>
            <p className="text-xl mb-8 text-blue-100">
              ESG 관련 문의사항이 있으시면 언제든지 연락주세요
            </p>
            <div className="space-y-2 text-lg">
              <p>이메일: esg@sketnics.com</p>
              <p>전화: 02-1234-5678</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
