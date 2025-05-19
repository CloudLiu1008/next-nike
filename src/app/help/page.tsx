/**
 * 帮助页面
 */
export default function HelpPage() {
  // 常见问题数据
  const faqs = [
    {
      question: '如何查询我的订单状态？',
      answer: '登录您的Nike账户，在"我的订单"部分可以查看所有订单的状态和详情。您也可以通过订单确认邮件中的链接直接查询。'
    },
    {
      question: 'Nike的退货政策是什么？',
      answer: 'Nike提供30天无理由退货服务。商品必须保持未穿着、未洗涤的原始状态，并附有原始标签和包装。'
    },
    {
      question: '如何成为Nike会员？',
      answer: '您可以在Nike官网或Nike应用程序上免费注册成为会员。注册后即可享受会员专属优惠、活动和服务。'
    },
    {
      question: 'Nike产品如何保养？',
      answer: '不同的Nike产品有不同的保养方法。一般来说，运动鞋可以用软刷和温和的肥皂水清洁，服装则应按照标签上的洗涤说明进行护理。'
    },
    {
      question: '如何联系Nike客服？',
      answer: '您可以通过在线聊天、电话或电子邮件联系Nike客服。客服团队会在工作时间内为您提供帮助。'
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">帮助中心</h1>
        
        {/* 帮助分类 */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a 
              href="/help/order-status" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">订单状态</h3>
              <p className="text-gray-600">查询订单信息</p>
            </a>
            
            <a 
              href="/help/shipping" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">配送信息</h3>
              <p className="text-gray-600">了解配送政策</p>
            </a>
            
            <a 
              href="/help/returns" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">退货政策</h3>
              <p className="text-gray-600">了解退货流程</p>
            </a>
            
            <a 
              href="/help/payment-options" 
              className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-bold mb-1">支付选项</h3>
              <p className="text-gray-600">了解支付方式</p>
            </a>
          </div>
        </section>
        
        {/* 常见问题 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">常见问题</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 联系我们 */}
        <section className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">电话</h3>
              <p className="text-gray-600">400-888-6666</p>
              <p className="text-gray-600 text-sm">周一至周日 9:00-22:00</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">邮件</h3>
              <p className="text-gray-600">service@nike.com.cn</p>
              <p className="text-gray-600 text-sm">我们会在24小时内回复</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">在线聊天</h3>
              <p className="text-gray-600">点击开始聊天</p>
              <p className="text-gray-600 text-sm">周一至周日 9:00-22:00</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}