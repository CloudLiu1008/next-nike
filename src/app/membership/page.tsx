/**
 * 会员页面
 */
export default function MembershipPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Nike会员</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">加入Nike会员计划，获取专属优惠、活动邀请和个性化服务</p>
        </div>
        
        {/* 会员特权 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">会员特权</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">专属优惠</h3>
              <p className="text-gray-600">会员专享折扣和限时优惠</p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">个性化推荐</h3>
              <p className="text-gray-600">根据您的喜好提供个性化产品推荐</p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">独家活动</h3>
              <p className="text-gray-600">获取独家活动邀请和提前购买资格</p>
            </div>
          </div>
        </section>
        
        {/* 会员注册 */}
        <section className="bg-gray-100 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">立即加入</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="/membership/join" 
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors text-center"
            >
              注册会员
            </a>
            <a 
              href="/membership/signin" 
              className="border border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors text-center"
            >
              会员登录
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}