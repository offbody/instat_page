import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const carbonData = [
  { month: 'JAN', emissions: 4000, target: 4200 },
  { month: 'FEB', emissions: 3800, target: 4100 },
  { month: 'MAR', emissions: 3500, target: 4000 },
  { month: 'APR', emissions: 3600, target: 3900 },
  { month: 'MAY', emissions: 3200, target: 3800 },
  { month: 'JUN', emissions: 3000, target: 3700 },
  { month: 'JUL', emissions: 2800, target: 3600 },
];

const esgScoreData = [
  { subject: 'E', A: 120, fullMark: 150 },
  { subject: 'S', A: 98, fullMark: 150 },
  { subject: 'G', A: 86, fullMark: 150 },
  { subject: 'Innovation', A: 99, fullMark: 150 },
  { subject: 'Ethics', A: 85, fullMark: 150 },
];

export const DashboardPreview: React.FC = () => {
  return (
    <section id="analytics" className="py-32 bg-brand-950 relative overflow-hidden">
      
      {/* Background Grid Texture instead of blurred shapes */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      <div className="w-full px-4 md:px-12 lg:px-24 relative z-10">
        <div className="mb-24">
          <span className="text-brand-accent tracking-[0.2em] uppercase text-sm font-bold mb-4 block">Dashboard Interface</span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase">
            АНАЛИТИКА <br />
            <span className="text-brand-500/50">В РЕАЛЬНОМ ВРЕМЕНИ</span>
          </h2>
        </div>

        {/* Dashboard "Glass" Container */}
        <div className="w-full bg-brand-900/30 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl overflow-hidden">
          
          {/* Dashboard Header UI */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/5 pb-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-right">
                <div className="text-xs text-brand-400 uppercase tracking-wider">Общий балл</div>
                <div className="text-2xl font-bold text-white">84.5 <span className="text-green-500 text-sm">AA</span></div>
              </div>
              <div className="text-right">
                <div className="text-xs text-brand-400 uppercase tracking-wider">CO2 Total</div>
                <div className="text-2xl font-bold text-white">12,450t</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-brand-950/50 rounded-2xl p-8 border border-white/5">
              <h3 className="text-lg font-medium text-white mb-6">Динамика выбросов (Scope 1+2)</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={carbonData}>
                    <defs>
                      <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="month" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc', borderRadius: '8px' }}
                      cursor={{ stroke: '#3b82f6', strokeWidth: 1 }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="emissions" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorEmissions)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="target" 
                      stroke="#06b6d4" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      fill="none" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Side Radar */}
            <div className="lg:col-span-1 bg-brand-950/50 rounded-2xl p-8 border border-white/5">
              <h3 className="text-lg font-medium text-white mb-6">Рейтинг факторов</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={esgScoreData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                    <Radar
                      name="Score"
                      dataKey="A"
                      stroke="#06b6d4"
                      strokeWidth={2}
                      fill="#06b6d4"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};