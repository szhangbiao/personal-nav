import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen pt-16 pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          szhangbiao 的个人导航网站
        </h1>
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
