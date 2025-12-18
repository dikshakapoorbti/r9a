export default function DemoLayout({ title, subtitle, children, project }) {
  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 sm:px-6 lg:px-10 py-10 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">{title}</h1>
        <p className="text-slate-600 mt-2 mb-8 text-lg max-w-3xl">{subtitle}</p>

        {/* Demo Section */}
        <div className="mb-12">
          {children}
        </div>

        {/* Project Details Section */}
        {project && (
          <div className="space-y-8 mt-12">
            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Objectives of Implementation</h2>
                <ul className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1 font-bold">✓</span>
                      <span className="text-slate-700 leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Executive Summary */}
            {project.executiveSummary && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Executive Summary</h2>
                <p className="text-slate-700 leading-relaxed">{project.executiveSummary}</p>
              </div>
            )}

            {/* Business Use Case Overview */}
            {project.businessUseCase && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Business Use Case Overview</h2>
                <p className="text-slate-700 leading-relaxed">{project.businessUseCase}</p>
              </div>
            )}

            {/* High-Level Design */}
            {project.hld && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">High-Level Design</h2>

                {/* Architecture Diagram */}
                {project.hld.architecture && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Architecture Diagram</h3>

                    {/* Visual Diagram */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
                      {project.slug === "ai-data-insights" && (
                        <div className="space-y-4">
                          {/* Top Layer */}
                          <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                              📊 Interactive Dashboard (React)
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-blue-400 h-8"></div>
                          </div>

                          {/* Middle Layer */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white border-2 border-blue-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🔮</div>
                              <div className="text-xs font-semibold">ML Models</div>
                              <div className="text-xs text-slate-600">Churn Prediction</div>
                            </div>
                            <div className="bg-white border-2 border-purple-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📈</div>
                              <div className="text-xs font-semibold">Forecasting Engine</div>
                              <div className="text-xs text-slate-600">Revenue Trends</div>
                            </div>
                            <div className="bg-white border-2 border-green-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🔔</div>
                              <div className="text-xs font-semibold">Alert System</div>
                              <div className="text-xs text-slate-600">Risk Notifications</div>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-blue-400 h-8"></div>
                          </div>

                          {/* Bottom Layer */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">⚡</div>
                              <div className="text-xs font-semibold">Data Pipeline (Kafka)</div>
                            </div>
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🗄️</div>
                              <div className="text-xs font-semibold">Database (PostgreSQL)</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.slug === "ai-policy-bot" && (
                        <div className="space-y-4">
                          {/* Top Layer */}
                          <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                              💬 Conversational Interface (React)
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-purple-400 h-8"></div>
                          </div>

                          {/* Middle Layer */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white border-2 border-purple-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🧠</div>
                              <div className="text-xs font-semibold">LLM Integration</div>
                              <div className="text-xs text-slate-600">OpenAI GPT-4</div>
                            </div>
                            <div className="bg-white border-2 border-blue-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🔍</div>
                              <div className="text-xs font-semibold">Vector Search</div>
                              <div className="text-xs text-slate-600">ChromaDB</div>
                            </div>
                            <div className="bg-white border-2 border-green-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">⚙️</div>
                              <div className="text-xs font-semibold">RAG Engine</div>
                              <div className="text-xs text-slate-600">LangChain</div>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-purple-400 h-8"></div>
                          </div>

                          {/* Bottom Layer */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📄</div>
                              <div className="text-xs font-semibold">Document Processing</div>
                            </div>
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">☁️</div>
                              <div className="text-xs font-semibold">Storage (AWS S3)</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.slug === "ai-kyc" && (
                        <div className="space-y-4">
                          {/* Top Layer */}
                          <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                              📱 Verification Interface (React)
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-green-400 h-8"></div>
                          </div>

                          {/* Middle Layer */}
                          <div className="grid grid-cols-4 gap-3">
                            <div className="bg-white border-2 border-green-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">📸</div>
                              <div className="text-xs font-semibold">OCR Engine</div>
                            </div>
                            <div className="bg-white border-2 border-blue-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">😊</div>
                              <div className="text-xs font-semibold">Face Match</div>
                            </div>
                            <div className="bg-white border-2 border-yellow-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">🛡️</div>
                              <div className="text-xs font-semibold">Fraud Detection</div>
                            </div>
                            <div className="bg-white border-2 border-red-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">⚠️</div>
                              <div className="text-xs font-semibold">Risk Scoring</div>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-green-400 h-8"></div>
                          </div>

                          {/* Bottom Layer */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🔗</div>
                              <div className="text-xs font-semibold">Third-party APIs</div>
                            </div>
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🔐</div>
                              <div className="text-xs font-semibold">Blockchain Audit</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.slug === "ai-social-media" && (
                        <div className="space-y-4">
                          {/* Top Layer */}
                          <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                              📱 Multi-Platform Dashboard (React)
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-purple-400 h-8"></div>
                          </div>

                          {/* Middle Layer */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white border-2 border-purple-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🤖</div>
                              <div className="text-xs font-semibold">n8n Workflows</div>
                              <div className="text-xs text-slate-600">Automation Engine</div>
                            </div>
                            <div className="bg-white border-2 border-blue-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">✨</div>
                              <div className="text-xs font-semibold">AI Content Gen</div>
                              <div className="text-xs text-slate-600">GPT-4 + DALL-E</div>
                            </div>
                            <div className="bg-white border-2 border-green-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">💬</div>
                              <div className="text-xs font-semibold">Auto-Response</div>
                              <div className="text-xs text-slate-600">Comment Bot</div>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-purple-400 h-8"></div>
                          </div>

                          {/* Bottom Layer */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🔗</div>
                              <div className="text-xs font-semibold">Social APIs</div>
                            </div>
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📊</div>
                              <div className="text-xs font-semibold">Analytics DB</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.slug === "ai-recruitment" && (
                        <div className="space-y-4">
                          {/* Top Layer */}
                          <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                              👥 HR Dashboard (React)
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-indigo-400 h-8"></div>
                          </div>

                          {/* Middle Layer */}
                          <div className="grid grid-cols-4 gap-3">
                            <div className="bg-white border-2 border-indigo-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">📄</div>
                              <div className="text-xs font-semibold">Resume Parser</div>
                            </div>
                            <div className="bg-white border-2 border-purple-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">🎯</div>
                              <div className="text-xs font-semibold">AI Matcher</div>
                            </div>
                            <div className="bg-white border-2 border-blue-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">📅</div>
                              <div className="text-xs font-semibold">Auto-Scheduler</div>
                            </div>
                            <div className="bg-white border-2 border-green-300 rounded-lg p-2 text-center shadow">
                              <div className="text-xl mb-1">📧</div>
                              <div className="text-xs font-semibold">Comm Engine</div>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-indigo-400 h-8"></div>
                          </div>

                          {/* Bottom Layer */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🗄️</div>
                              <div className="text-xs font-semibold">Candidate DB</div>
                            </div>
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📆</div>
                              <div className="text-xs font-semibold">Calendar APIs</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.slug === "ai-segmentation" && (
                        <div className="space-y-4">
                          {/* Top Layer */}
                          <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                              🎯 Marketing Dashboard (React)
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-pink-400 h-8"></div>
                          </div>

                          {/* Middle Layer */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white border-2 border-pink-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🧮</div>
                              <div className="text-xs font-semibold">ML Clustering</div>
                              <div className="text-xs text-slate-600">K-Means + XGBoost</div>
                            </div>
                            <div className="bg-white border-2 border-purple-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📊</div>
                              <div className="text-xs font-semibold">RFM Analysis</div>
                              <div className="text-xs text-slate-600">Behavioral Scoring</div>
                            </div>
                            <div className="bg-white border-2 border-blue-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🎯</div>
                              <div className="text-xs font-semibold">Campaign Engine</div>
                              <div className="text-xs text-slate-600">Auto-Targeting</div>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-pink-400 h-8"></div>
                          </div>

                          {/* Bottom Layer */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">💾</div>
                              <div className="text-xs font-semibold">Customer Data</div>
                            </div>
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">⚡</div>
                              <div className="text-xs font-semibold">Apache Spark</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.slug === "ai-reporting" && (
                        <div className="space-y-4">
                          {/* Top Layer */}
                          <div className="text-center">
                            <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                              📊 Report Generator (React)
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-teal-400 h-8"></div>
                          </div>

                          {/* Middle Layer */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white border-2 border-teal-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📄</div>
                              <div className="text-xs font-semibold">Data Processor</div>
                              <div className="text-xs text-slate-600">Pandas + NumPy</div>
                            </div>
                            <div className="bg-white border-2 border-blue-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">🧠</div>
                              <div className="text-xs font-semibold">AI Insights</div>
                              <div className="text-xs text-slate-600">GPT-4 Analysis</div>
                            </div>
                            <div className="bg-white border-2 border-green-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📈</div>
                              <div className="text-xs font-semibold">Chart Generator</div>
                              <div className="text-xs text-slate-600">Plotly + Matplotlib</div>
                            </div>
                          </div>

                          <div className="flex justify-center">
                            <div className="border-l-4 border-teal-400 h-8"></div>
                          </div>

                          {/* Bottom Layer */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">📊</div>
                              <div className="text-xs font-semibold">Excel/Sheets</div>
                            </div>
                            <div className="bg-white border-2 border-slate-300 rounded-lg p-3 text-center shadow">
                              <div className="text-2xl mb-1">☁️</div>
                              <div className="text-xs font-semibold">Cloud Storage</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <p className="text-slate-700 leading-relaxed mt-4">{project.hld.architecture}</p>
                  </div>
                )}

                {/* Components */}
                {project.hld.components && project.hld.components.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Key Components</h3>
                    <ul className="space-y-2">
                      {project.hld.components.map((component, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-slate-700">{component}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {project.hld.technologies && project.hld.technologies.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.hld.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Tech Stack - Layer Based Table */}
            {project.techStackLayers && project.techStackLayers.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Tech Stack by Layer</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-2 border-blue-200">
                        <th className="text-left py-3 px-4 text-slate-800 font-semibold">Layer</th>
                        <th className="text-left py-3 px-4 text-slate-800 font-semibold">Technologies</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.techStackLayers.map((item, index) => (
                        <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                          <td className="py-3 px-4 text-slate-700 font-medium">{item.layer}</td>
                          <td className="py-3 px-4 text-slate-600">{item.technologies}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* HLD Layer Breakdown */}
            {project.hldLayers && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Architecture Layer Details</h2>

                {/* Data Sources */}
                {project.hldLayers.dataSources && project.hldLayers.dataSources.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                      <span className="text-2xl mr-2">📥</span>
                      Data Sources
                    </h3>
                    <ul className="space-y-2 ml-8">
                      {project.hldLayers.dataSources.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Data Processing Layer */}
                {project.hldLayers.dataProcessing && project.hldLayers.dataProcessing.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                      <span className="text-2xl mr-2">⚙️</span>
                      Data Processing Layer
                    </h3>
                    <ul className="space-y-2 ml-8">
                      {project.hldLayers.dataProcessing.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Analytics & AI Layer */}
                {project.hldLayers.analyticsAI && project.hldLayers.analyticsAI.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                      <span className="text-2xl mr-2">🧠</span>
                      Analytics & AI Layer
                    </h3>
                    <ul className="space-y-2 ml-8">
                      {project.hldLayers.analyticsAI.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Visualization & Insights Layer */}
                {project.hldLayers.visualization && project.hldLayers.visualization.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                      <span className="text-2xl mr-2">📊</span>
                      Visualization & Insights Layer
                    </h3>
                    <ul className="space-y-2 ml-8">
                      {project.hldLayers.visualization.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-orange-500 mr-2 mt-1">•</span>
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Sample Dataset */}
            {project.sampleDataset && (
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-3">Sample Dataset Information</h2>
                <p className="text-slate-700 leading-relaxed">{project.sampleDataset}</p>
              </div>
            )}

            {/* Key Insights */}
            {project.keyInsights && project.keyInsights.length > 0 && (
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-sm border border-blue-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Key Insights Generated by SmartAnalytics AI</h2>
                <ul className="space-y-3">
                  {project.keyInsights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">💡</span>
                      <span className="text-slate-700 leading-relaxed">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Business Value */}
            {project.businessValue && project.businessValue.length > 0 && (
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm border border-green-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Business Value to the Client</h2>
                <ul className="space-y-3">
                  {project.businessValue.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-3 mt-1">💰</span>
                      <span className="text-slate-700 leading-relaxed">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Next Steps & Future Enhancements */}
            {project.nextSteps && project.nextSteps.length > 0 && (
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 shadow-sm border border-orange-200">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Next Steps & Future Enhancements</h2>
                <ul className="space-y-3">
                  {project.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-600 mr-3 mt-1">🚀</span>
                      <span className="text-slate-700 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
