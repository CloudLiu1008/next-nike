import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";

/**
 * 首页组件 - Nike官网风格的首页
 * 包含Hero轮播图和产品展示区
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero轮播图区域 */}
      <Hero />
      
      {/* 产品展示区域 */}
      <ProductShowcase />
      
      {/* 会员专区 */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">成为Nike会员</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">注册成为Nike会员，获取最新产品、灵感和社区故事。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/membership/join" 
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              加入我们
            </a>
            <a 
              href="/membership/signin" 
              className="border border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors"
            >
              登录
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}