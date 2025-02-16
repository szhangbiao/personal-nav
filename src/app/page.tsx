import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen pt-16 pb-16">
      <div className="container mx-auto px-4 py-8 space-y-16">
        <section className="flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="mx-auto max-w-3xl text-3xl font-bold lg:text-7xl tracking-tighter">
            <span className="inline-block">个人导航网站</span>
            </h1>
            <h2 className="text-2xl tracking-tight sm:text-3xl md:text-3xl lg:text-3xl">开源、无数据库架构的开发者工具资源导航平台</h2>
            <p className="mx-auto max-w-[700px] md:text-xl tracking-tight">在这里找到您在开发旅程中需要的每一种开发者工具</p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Link
              key={item}
              href={`/detail/${item}`}
              className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                项目 {item}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                这是项目 {item} 的简介描述...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
