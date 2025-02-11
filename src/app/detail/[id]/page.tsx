export default async function DetailPage({ params }: { params: { id: string } }) {
  // TODO 等待 params.id
  const id = await params.id

  return (
    <main className="min-h-screen pt-16 pb-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          项目 {id} 详情
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            这是项目 {id} 的详细描述...
          </p>
          <div className="prose dark:prose-invert">
            <h2>项目特点</h2>
            <ul>
              <li>特点 1</li>
              <li>特点 2</li>
              <li>特点 3</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
} 