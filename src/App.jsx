import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Users, TrendingUp, Shield, Heart, DollarSign, CheckCircle, XCircle, Building, Award, Zap, ArrowRight, MapPin, Star, Target, Calculator, ExternalLink, Phone, Lock, LogOut, Baby, Sparkles, Package } from 'lucide-react';

const INVITE_CODE = 'UPANDUP2025';

const LoginGate = ({ onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.toUpperCase() === INVITE_CODE) {
      localStorage.setItem('target_access', 'granted');
      onSuccess();
    } else {
      setError('Invalid invite code');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md ${isShaking ? 'animate-shake' : ''}`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Confidential Proposal</h1>
          <p className="text-gray-600 text-sm">Enter your invite code to access this presentation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(''); }}
              placeholder="Enter invite code"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-center text-lg font-mono uppercase tracking-widest focus:border-cyan-500 focus:outline-none transition-colors"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all shadow-lg hover:shadow-xl"
          >
            Access Presentation
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
            <Shield size={14} />
            <span>InsurtechExpress × Mutual of Omaha</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};

const COLORS = {
  primary: '#0891B2',
  primaryDark: '#0E7490',
  primaryLight: '#22D3EE',
  navy: '#1E3A5F',
  navyDark: '#0F172A',
  accent: '#F59E0B',
  success: '#10B981',
  moo: '#003366',
  target: '#CC0000',
};

const CollapsibleSection = ({ id, title, icon: Icon, children, defaultOpen = false, color = COLORS.primary }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section id={id} className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
            <Icon size={20} style={{ color }} />
          </div>
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 text-left">{title}</h2>
        </div>
        <div className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown size={24} style={{ color }} />
        </div>
      </button>
      {isOpen && <div className="pt-6 px-2">{children}</div>}
    </section>
  );
};

const Flywheel = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  const segments = [
    { id: 'capital', label: 'Capital', icon: DollarSign, color: COLORS.primary, description: 'Connect startups with investors and funding opportunities' },
    { id: 'talent', label: 'Talent', icon: Users, color: COLORS.primaryDark, description: 'Match companies with skilled insurance technology professionals' },
    { id: 'marketing', label: 'Marketing', icon: TrendingUp, color: COLORS.navy, description: 'Amplify reach through 250,000+ industry network' },
    { id: 'technology', label: 'Technology', icon: Zap, color: COLORS.navyDark, description: 'Build and deploy cutting-edge insurance solutions' },
  ];

  return (
    <div className="relative w-full max-w-xs mx-auto aspect-square mb-16">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.navy})` }}>
          <span className="text-white font-bold text-xs text-center leading-tight">Insurtech<br/>Express</span>
        </div>
      </div>
      {segments.map((segment, index) => {
        const angle = (index * 90) - 45;
        const x = Math.cos((angle * Math.PI) / 180) * 90;
        const y = Math.sin((angle * Math.PI) / 180) * 90;
        return (
          <div
            key={segment.id}
            className="absolute top-1/2 left-1/2 cursor-pointer transform transition-transform hover:scale-110"
            style={{ marginLeft: x - 28, marginTop: y - 28 }}
            onMouseEnter={() => setActiveSegment(segment.id)}
            onMouseLeave={() => setActiveSegment(null)}
          >
            <div className="w-14 h-14 p-2 rounded-xl flex flex-col items-center justify-center text-white shadow-lg" style={{ backgroundColor: segment.color }}>
              <segment.icon size={18} />
              <span className="text-[10px] font-semibold mt-0.5">{segment.label}</span>
            </div>
          </div>
        );
      })}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <circle cx="50%" cy="50%" r="90" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
      </svg>
      {activeSegment && (
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-2 w-48 text-center z-30 border border-gray-200">
          <p className="text-gray-700 text-xs">{segments.find(s => s.id === activeSegment)?.description}</p>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label, color = COLORS.primary }) => (
  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: `${color}15` }}>
      <Icon size={16} style={{ color }} />
    </div>
    <div className="text-xl font-bold text-gray-900">{value}</div>
    <div className="text-gray-600 text-xs">{label}</div>
  </div>
);

const ProductOptionsTable = () => {
  const products = [
    {
      product: 'Term Life',
      targetAudience: 'New parents 25-45',
      targetInsureds: 'Primary earner',
      lifeEventTrigger: 'Birth of child',
      ecosystem: 'Income replacement if parent dies',
      whyPurchase: 'Affordable protection during child-raising years',
      whyDiaperBrands: 'Parents buying diapers are in prime life insurance buying window',
    },
    {
      product: 'Final Expense',
      targetAudience: 'Caregivers 40-65',
      targetInsureds: 'Aging parents',
      lifeEventTrigger: 'Parent needs incontinence care',
      ecosystem: 'Cover burial/funeral costs',
      whyPurchase: 'Relieve family of end-of-life expenses',
      whyDiaperBrands: 'Adult incontinence purchase signals mortality awareness',
    },
    {
      product: 'Whole Life',
      targetAudience: 'Established families',
      targetInsureds: 'Both parents',
      lifeEventTrigger: 'Child enters school/daycare',
      ecosystem: 'Permanent protection + cash value',
      whyPurchase: 'Legacy planning, college savings',
      whyDiaperBrands: 'Higher income families (premium brands) can afford',
    },
    {
      product: 'Chronic Illness/LTC',
      targetAudience: 'Sandwich generation',
      targetInsureds: 'Aging parents',
      lifeEventTrigger: 'Parent health decline',
      ecosystem: 'Cover long-term care costs',
      whyPurchase: 'Protect retirement savings',
      whyDiaperBrands: 'Incontinence often precedes LTC need',
    },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
      <table className="w-full text-[10px]">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-50">
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Product</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Target Audience</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Target Insureds</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Life Event Trigger</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Family Protection Ecosystem</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Why Purchase</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Why Diaper Brands</th>
          </tr>
        </thead>
        <tbody>
          {products.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-2 px-2 font-bold text-gray-900">{row.product}</td>
              <td className="py-2 px-2 text-gray-700">{row.targetAudience}</td>
              <td className="py-2 px-2 text-gray-700">{row.targetInsureds}</td>
              <td className="py-2 px-2 text-gray-700">{row.lifeEventTrigger}</td>
              <td className="py-2 px-2 text-gray-700">{row.ecosystem}</td>
              <td className="py-2 px-2 text-gray-700">{row.whyPurchase}</td>
              <td className="py-2 px-2 text-gray-700">{row.whyDiaperBrands}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const USStateHeatmap = () => {
  const [hoveredState, setHoveredState] = useState(null);

  const stateData = {
    'California': { priority: 'high', focus: 'Newborn Focus', color: '#CC0000' },
    'Texas': { priority: 'high', focus: 'Newborn Focus', color: '#CC0000' },
    'Florida': { priority: 'high', focus: 'Adult Incontinence Focus', color: '#CC0000' },
    'New York': { priority: 'high', focus: 'Newborn Focus', color: '#CC0000' },
    'Maine': { priority: 'high', focus: 'Adult Incontinence Focus', color: '#CC0000' },
    'Pennsylvania': { priority: 'high', focus: 'Adult Incontinence Focus', color: '#CC0000' },
    'Ohio': { priority: 'medium', focus: 'Newborn Focus', color: '#FF6633' },
    'Illinois': { priority: 'medium', focus: 'Newborn Focus', color: '#FF6633' },
    'Georgia': { priority: 'medium', focus: 'Newborn Focus', color: '#FF6633' },
    'North Carolina': { priority: 'medium', focus: 'Newborn Focus', color: '#FF6633' },
  };

  const highPriorityStates = Object.entries(stateData).filter(([_, data]) => data.priority === 'high');
  const newbornStates = highPriorityStates.filter(([_, data]) => data.focus === 'Newborn Focus');
  const incontinenceStates = highPriorityStates.filter(([_, data]) => data.focus === 'Adult Incontinence Focus');

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
      <h3 className="text-base font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
        <MapPin style={{ color: COLORS.target }} size={18} />
        US State Priority Heatmap
      </h3>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Baby style={{ color: COLORS.target }} size={20} />
            <h4 className="font-bold text-gray-900 text-sm">High Priority - Newborn Focus</h4>
          </div>
          <div className="space-y-1.5">
            {newbornStates.map(([state, data]) => (
              <div
                key={state}
                className="flex items-center justify-between bg-white rounded-lg p-2 cursor-pointer hover:shadow-md transition-shadow"
                onMouseEnter={() => setHoveredState(state)}
                onMouseLeave={() => setHoveredState(null)}
              >
                <span className="text-xs font-semibold text-gray-800">{state}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-600">{data.focus}</span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Heart style={{ color: '#9333EA' }} size={20} />
            <h4 className="font-bold text-gray-900 text-sm">High Priority - Adult Incontinence</h4>
          </div>
          <div className="space-y-1.5">
            {incontinenceStates.map(([state, data]) => (
              <div
                key={state}
                className="flex items-center justify-between bg-white rounded-lg p-2 cursor-pointer hover:shadow-md transition-shadow"
                onMouseEnter={() => setHoveredState(state)}
                onMouseLeave={() => setHoveredState(null)}
              >
                <span className="text-xs font-semibold text-gray-800">{state}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-gray-600">{data.focus}</span>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
        <p className="text-xs text-gray-600 text-center">
          <strong className="text-gray-800">Focus Strategy:</strong> High priority states selected based on Target store density and demographic alignment (birth rates for newborn, aging population for adult incontinence)
        </p>
      </div>
    </div>
  );
};

const FreeDiapersCalculator = () => {
  const products = [
    { product: 'Term Life', benefit: '$100', boxes: 3, months: '~1 month', highlight: false },
    { product: 'Whole Life', benefit: '$300', boxes: 8, months: '~2.7 months', highlight: true },
    { product: 'Final Expense', benefit: '$150', boxes: 4, months: '~1.3 months', highlight: false },
    { product: 'Chronic/LTC', benefit: '$50', boxes: 1, months: '~1 week', highlight: false },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Sparkles style={{ color: COLORS.accent }} size={20} />
          Free Up & Up Diapers Calculator
        </h3>
        <p className="text-sm text-gray-600 font-medium">
          "When you protect your family, we protect your diaper budget"
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-gray-200 bg-gray-50">
              <th className="text-left py-2 px-3 font-semibold text-gray-800">Insurance Product</th>
              <th className="text-center py-2 px-3 font-semibold text-gray-800">Partner Benefit</th>
              <th className="text-center py-2 px-3 font-semibold text-gray-800">Free Boxes</th>
              <th className="text-center py-2 px-3 font-semibold text-gray-800">Free Months</th>
            </tr>
          </thead>
          <tbody>
            {products.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-100 ${row.highlight ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
              >
                <td className="py-3 px-3 font-bold text-gray-900 flex items-center gap-2">
                  {row.product}
                  {row.highlight && <span className="text-amber-600">⭐ Best Value</span>}
                </td>
                <td className="text-center py-3 px-3 font-semibold text-gray-800">{row.benefit}</td>
                <td className="text-center py-3 px-3">
                  <span className={`font-bold ${row.highlight ? 'text-amber-600 text-lg' : 'text-gray-800'}`}>
                    {row.boxes} boxes
                  </span>
                </td>
                <td className="text-center py-3 px-3 text-gray-700">{row.months}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-3">
        <p className="text-xs text-center text-gray-700">
          <strong className="text-amber-700">Up & Up Price:</strong> $36.99/box (180ct) • Based on partner benefit conversion at Target retail price
        </p>
      </div>
    </div>
  );
};

const RevenueCalculatorNew = () => {
  const [showReferralCalc, setShowReferralCalc] = useState(false);
  const [showBoxCalc, setShowBoxCalc] = useState(false);

  // Referral Fee Calculator - Interactive Sliders
  const [annualBoxes, setAnnualBoxes] = useState(8000000);
  const [scanRate, setScanRate] = useState(20);
  const [conversionRate, setConversionRate] = useState(10);
  const [flatFee, setFlatFee] = useState(25);

  const scans = annualBoxes * (scanRate / 100);
  const conversions = scans * (conversionRate / 100);
  const referralRevenue = conversions * flatFee;

  // Guaranteed Box Purchases Calculator - Interactive Sliders
  const [quotes, setQuotes] = useState(160000);
  const [policyRate, setPolicyRate] = useState(5);
  const [avgBoxesPerPolicy, setAvgBoxesPerPolicy] = useState(8);
  const policies = quotes * (policyRate / 100);
  const totalBoxesSold = policies * avgBoxesPerPolicy;
  const boxPrice = 36.99; // Fixed for Up&Up
  const boxRevenue = totalBoxesSold * boxPrice;

  return (
    <div className="space-y-4">
      {/* Top Display - Two Big Numbers */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-6 text-white text-center shadow-xl" style={{ background: `linear-gradient(135deg, ${COLORS.accent}, #D97706)` }}>
          <DollarSign size={32} className="mx-auto mb-2" />
          <div className="text-3xl font-extrabold mb-1">${(referralRevenue / 1000000).toFixed(1)}M</div>
          <div className="text-white/90 text-sm font-semibold">Referral Fees per Year</div>
        </div>

        <div className="rounded-2xl p-6 text-white text-center shadow-xl" style={{ background: `linear-gradient(135deg, ${COLORS.target}, #990000)` }}>
          <Package size={32} className="mx-auto mb-2" />
          <div className="text-3xl font-extrabold mb-1">${(boxRevenue / 1000000).toFixed(1)}M</div>
          <div className="text-white/90 text-sm font-semibold">Guaranteed Diaper Sales</div>
        </div>
      </div>

      {/* Expandable Subsection 1: Referral Fee Calculator */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <button
          onClick={() => setShowReferralCalc(!showReferralCalc)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Calculator style={{ color: COLORS.accent }} size={20} />
            <h4 className="font-bold text-gray-800 text-sm">Referral Fee Calculator</h4>
          </div>
          <ChevronDown
            size={20}
            style={{ color: COLORS.accent }}
            className={`transition-transform ${showReferralCalc ? 'rotate-180' : ''}`}
          />
        </button>

        {showReferralCalc && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="bg-white rounded-lg p-4 mb-3">
              <div className="text-center mb-3">
                <div className="text-xs text-gray-600 font-medium mb-2">Formula: Annual Boxes × Scan Rate × Conversion Rate × Flat Fee</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                {/* Annual Boxes Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Annual Boxes Sold</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>{(annualBoxes / 1000000).toFixed(0)}M</span>
                  </div>
                  <input
                    type="range"
                    min="5000000"
                    max="50000000"
                    step="1000000"
                    value={annualBoxes}
                    onChange={(e) => setAnnualBoxes(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>5M</span>
                    <span>50M</span>
                  </div>
                </div>

                {/* Scan Rate Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Scan Rate</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>{scanRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={scanRate}
                    onChange={(e) => setScanRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>5%</span>
                    <span>40%</span>
                  </div>
                </div>

                {/* Conversion Rate Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Conversion Rate</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="25"
                    step="1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>2%</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Flat Fee Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Flat Fee per Lead</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>${flatFee}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={flatFee}
                    onChange={(e) => setFlatFee(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>$10</span>
                    <span>$50</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 text-white text-center" style={{ background: `linear-gradient(135deg, ${COLORS.accent}, #D97706)` }}>
              <div className="text-xs text-white/80 mb-1">Annual Referral Revenue</div>
              <div className="text-2xl font-bold">${(referralRevenue / 1000000).toFixed(2)}M</div>
              <div className="text-xs text-white/70 mt-1">{conversions.toLocaleString()} qualified leads × ${flatFee}</div>
            </div>
          </div>
        )}
      </div>

      {/* Expandable Subsection 2: Guaranteed Box Purchases Calculator */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <button
          onClick={() => setShowBoxCalc(!showBoxCalc)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Package style={{ color: COLORS.target }} size={20} />
            <h4 className="font-bold text-gray-800 text-sm">Guaranteed Box Purchases Calculator</h4>
          </div>
          <ChevronDown
            size={20}
            style={{ color: COLORS.target }}
            className={`transition-transform ${showBoxCalc ? 'rotate-180' : ''}`}
          />
        </button>

        {showBoxCalc && (
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="bg-white rounded-lg p-4 mb-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Quotes Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Insurance Quotes</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>{(quotes / 1000).toFixed(0)}K</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="50000"
                    value={quotes}
                    onChange={(e) => setQuotes(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>100K</span>
                    <span>1M</span>
                  </div>
                </div>

                {/* Policy Rate Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Policy Rate</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>{policyRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={policyRate}
                    onChange={(e) => setPolicyRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Avg Boxes Per Policy Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Avg Boxes per Policy</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>{avgBoxesPerPolicy}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="1"
                    value={avgBoxesPerPolicy}
                    onChange={(e) => setAvgBoxesPerPolicy(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>2</span>
                    <span>15</span>
                  </div>
                </div>

                {/* Box Price (Fixed) */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-600 text-xs font-medium">Box Price (Up&Up)</label>
                    <span className="text-base font-bold" style={{ color: COLORS.primaryLight }}>${boxPrice.toFixed(2)}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-300 rounded-lg"></div>
                  <div className="text-center text-[10px] text-gray-500 mt-1">Fixed at Target retail price</div>
                </div>
              </div>

              {/* Summary Boxes */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border-2 border-blue-200">
                  <div className="text-xs text-gray-600 mb-1">Policies Sold</div>
                  <div className="text-xl font-bold text-gray-900">{policies.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{quotes.toLocaleString()} quotes × {policyRate}%</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-3 border-2 border-red-200">
                  <div className="text-xs text-gray-600 mb-1">Total Boxes</div>
                  <div className="text-xl font-bold text-gray-900">{totalBoxesSold.toLocaleString()}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{policies.toLocaleString()} policies × {avgBoxesPerPolicy} boxes</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 text-white text-center" style={{ background: `linear-gradient(135deg, ${COLORS.target}, #990000)` }}>
              <div className="text-xs text-white/80 mb-1">Guaranteed Box Revenue</div>
              <div className="text-2xl font-bold">${(boxRevenue / 1000000).toFixed(2)}M</div>
              <div className="text-xs text-white/70 mt-1">{totalBoxesSold.toLocaleString()} boxes × ${boxPrice.toFixed(2)}/box</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const MarketingCreativeGallery = () => {
  const [activeImage, setActiveImage] = useState(0);

  const creatives = [
    { id: 'flyer', title: 'Flyer', description: 'Up & Up protects your baby today, Mutual of Omaha protects everything tomorrow', image: '/Target-Flyer.jpg' },
    { id: 'endcap', title: 'End Cap', description: 'In-store display showing the partnership value', image: '/Target-EndCap.png' },
    { id: 'donate', title: 'Donate', description: 'Buy insurance, unlock partner benefits – free diapers for your family', image: '/Target-donate.jpg' },
    { id: 'social', title: 'Social Media', description: 'Digital campaign creative for social platforms', image: '/Target-SocialMedia.png' }
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
      <h3 className="text-base font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
        <Star style={{ color: COLORS.accent }} size={18} />
        Marketing Creative Concepts
      </h3>

      <div className="flex justify-center gap-1.5 mb-4">
        {creatives.map((creative, index) => (
          <button
            key={creative.id}
            onClick={() => setActiveImage(index)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeImage === index ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            style={activeImage === index ? { background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` } : {}}
          >
            {creative.title}
          </button>
        ))}
      </div>

      <div className="max-w-sm mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <img
            src={creatives[activeImage].image}
            alt={creatives[activeImage].title}
            className="w-full h-auto object-contain"
          />
        </div>
        <p className="text-center text-gray-600 text-xs mt-2">{creatives[activeImage].description}</p>
      </div>

      <p className="text-center text-gray-500 text-[10px] mt-3">When you protect your family with insurance, you unlock partner benefits including free Up & Up diapers</p>
    </div>
  );
};

const KenLeibowBio = () => (
  <div className="rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
    <div className="flex flex-col md:flex-row items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-32 h-32 rounded-xl bg-white/20 overflow-hidden shadow-xl">
          <img
            src="/Ken-Leibow-e1643663858314.jpeg"
            alt="Ken Leibow"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1">Ken Leibow</h3>
        <p className="text-white/70 text-xs mb-2">Founder & CEO</p>
        <p className="text-white/90 text-xs leading-relaxed mb-3">
          <strong>38+ years</strong> insurance industry experience. Prior roles at <strong>Mutual of Omaha</strong>, <strong>Genworth Financial</strong>, and VP at <strong>Diversified Underwriters</strong>. Built the <strong>largest life insurance data exchange hub</strong> processing 1M+ policies/year.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">ACORD Leadership 2022</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">NAILBA ID20 Trailblazer</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">LIDMA Innovation 2022</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <a href="tel:402-740-7356" className="flex items-center gap-1 text-white/80 hover:text-white">
            <Phone size={12} /> 402-740-7356
          </a>
          <a href="https://www.insurtechexpress.com/leadership/ken-leibow/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white/80 hover:text-white">
            <ExternalLink size={12} /> Full Bio
          </a>
        </div>
      </div>
    </div>
  </div>
);

const NAICTable = () => {
  const rankings = [
    { rank: 1, name: 'Northwestern Mutual', premiums: '$17,929' },
    { rank: 2, name: 'New York Life', premiums: '$10,880' },
    { rank: 3, name: 'Massachusetts Mutual', premiums: '$9,476' },
    { rank: 17, name: 'Mutual of Omaha', premiums: '$2,436', highlight: true },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
      <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
        <TrendingUp style={{ color: COLORS.primary }} size={16} />
        Largest Life Insurers, 2024 (millions)
      </h3>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-50">
            <th className="text-left py-1.5 px-2 font-semibold text-gray-700">Rank</th>
            <th className="text-left py-1.5 px-2 font-semibold text-gray-700">Company</th>
            <th className="text-right py-1.5 px-2 font-semibold text-gray-700">Premiums</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((row) => (
            <tr key={row.rank} className={`border-b border-gray-100 ${row.highlight ? '' : 'hover:bg-gray-50'}`} style={row.highlight ? { backgroundColor: `${COLORS.primary}15` } : {}}>
              <td className="py-1.5 px-2 font-medium text-gray-800">#{row.rank}</td>
              <td className={`py-1.5 px-2 ${row.highlight ? 'font-bold' : ''}`} style={row.highlight ? { color: COLORS.moo } : { color: '#374151' }}>{row.name}</td>
              <td className="py-1.5 px-2 text-right font-semibold text-gray-800">{row.premiums}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-gray-500 mt-2">
        Source: <a href="https://www.acli.com/-/media/public/pdf/news-and-analysis/publications-and-research/2025fb/11_industry_rankings_acli_fact_book_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ACLI/NAIC data</a>
      </p>
    </div>
  );
};

const TargetPitchDeck = ({ onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const sections = [
    { id: 'hero', title: 'The Problem', icon: Target, color: COLORS.target },
    { id: 'opportunity', title: 'The Opportunity', icon: Sparkles, color: COLORS.accent },
    { id: 'product-options', title: 'Product Options', icon: Heart, color: COLORS.success },
    { id: 'revenue', title: 'Revenue Potential', icon: DollarSign, color: COLORS.accent },
    { id: 'ie-flywheel', title: 'InsurtechExpress Ecosystem', icon: Zap, color: COLORS.primary },
    { id: 'ie-facts', title: 'IE Quick Facts', icon: Star, color: COLORS.primaryDark },
    { id: 'moo-facts', title: 'Mutual of Omaha', icon: Shield, color: COLORS.moo },
    { id: 'next-steps', title: 'Next Steps', icon: ArrowRight, color: COLORS.navy },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowDropdown(false);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-lg" style={{ backgroundColor: `${COLORS.primary}15` }}>
              <span style={{ color: COLORS.primary }} className="font-bold text-xs">InsurtechExpress</span>
            </div>
            <span className="text-gray-400 text-xs">×</span>
            <div className="px-2 py-1 rounded-lg" style={{ backgroundColor: COLORS.moo }}>
              <span className="text-white font-bold text-xs">Mutual of Omaha</span>
            </div>
            <button onClick={onLogout} className="ml-2 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Exit presentation">
              <LogOut size={14} />
            </button>
          </div>

          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-medium text-xs shadow-md hover:shadow-lg transition-all" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
              Navigate Sections
              <ChevronDown size={14} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                {sections.map((section) => (
                  <button key={section.id} onClick={() => scrollToSection(section.id)} className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors text-left border-b border-gray-100 last:border-0">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${section.color}15` }}>
                      <section.icon size={12} style={{ color: section.color }} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{section.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section - The Problem */}
      <section id="hero" className="py-8 px-4" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <div className="bg-white rounded-lg px-3 py-1.5 shadow-md border border-gray-200">
              <span style={{ color: COLORS.primary }} className="font-bold text-sm">InsurtechExpress</span>
            </div>
            <span className="text-xl text-gray-400">×</span>
            <div className="rounded-lg px-3 py-1.5 shadow-md" style={{ backgroundColor: COLORS.moo }}>
              <span className="text-white font-bold text-sm">Mutual of Omaha</span>
            </div>
            <span className="text-xl text-gray-400">×</span>
            <div className="rounded-lg px-3 py-1.5 shadow-md" style={{ backgroundColor: COLORS.target }}>
              <span className="text-white font-bold text-sm">Target</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Diapers are low margin and highly competitive.<br/><span style={{ color: COLORS.target }}>How do we fix this?</span>
          </h1>

          <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
            Partner with insurance to create a <strong className="text-gray-900">Family Protection Ecosystem</strong> that uses <strong style={{ color: COLORS.primary }}>life event triggers</strong> to offer protection during critical moments.
          </p>

          <button onClick={toggleDropdown} className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all text-sm" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
            Explore the Solution
            <ChevronDown size={18} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Opportunity Section */}
        <CollapsibleSection id="opportunity" title="The Opportunity: Insurance Partnership" icon={Sparkles} defaultOpen={true} color={COLORS.accent}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Create <strong>"Target Family Protection"</strong> by offering life insurance to new parents and caregivers at the point of diaper purchase - a powerful <strong style={{ color: COLORS.primary }}>life event trigger</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Baby style={{ color: COLORS.target }} size={16} />
                    <h4 className="font-bold text-gray-800 text-xs">Life Event Trigger</h4>
                  </div>
                  <p className="text-gray-600 text-xs">New parents buying diapers are in prime life insurance buying window. Adult incontinence signals mortality awareness.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Package style={{ color: COLORS.primary }} size={16} />
                    <h4 className="font-bold text-gray-800 text-xs">Package Integration</h4>
                  </div>
                  <p className="text-gray-600 text-xs">QR codes on Up & Up diaper boxes with scannable offer at checkout and on packaging.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign style={{ color: COLORS.success }} size={16} />
                    <h4 className="font-bold text-gray-800 text-xs">Dual Revenue Streams</h4>
                  </div>
                  <p className="text-gray-600 text-xs">Referral fees PLUS guaranteed diaper purchases through free box benefits.</p>
                </div>
              </div>

              <div className="rounded-xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.target}, #990000)` }}>
                <h4 className="font-bold text-sm mb-3">Target × Up & Up</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">Brand</span><span className="font-bold">Up & Up</span></div>
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">Manufacturer</span><span className="font-bold">Attindas</span></div>
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">Target Stores</span><span className="font-bold">1,900+</span></div>
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">180ct Price</span><span className="font-bold">$36.99</span></div>
                  <div className="flex justify-between"><span className="text-white/80">Annual Boxes</span><span className="font-bold">8,000,000</span></div>
                </div>
              </div>
            </div>

            <USStateHeatmap />
          </div>

          <MarketingCreativeGallery />
        </CollapsibleSection>

        {/* Product Options Section */}
        <CollapsibleSection id="product-options" title="Product Options Available for Partnership" icon={Heart} color={COLORS.success}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Multiple insurance products aligned with <strong>life event triggers</strong> and the <strong style={{ color: COLORS.primary }}>Family Protection Ecosystem</strong>.
            </p>

            <ProductOptionsTable />

            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Heart className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="font-bold text-gray-800 text-xs mb-1">Family Protection Ecosystem</h4>
                  <p className="text-gray-700 text-xs">Each product addresses a different life stage and protection need, from new parents to caregivers managing aging parents.</p>
                </div>
              </div>
            </div>
          </div>

          <FreeDiapersCalculator />
        </CollapsibleSection>

        {/* Revenue Potential Section */}
        <CollapsibleSection id="revenue" title="Revenue Potential for Target" icon={DollarSign} color={COLORS.accent}>
          <div className="mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Two powerful revenue streams: <strong>Referral fees</strong> from insurance signups AND <strong>guaranteed diaper sales</strong> from free box benefits.
            </p>
            <RevenueCalculatorNew />
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
            <h4 className="font-bold text-gray-800 mb-2 text-xs">How the Flat Referral Fee Works:</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-700 text-xs">
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />$25 per qualified referral</div>
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />No commission splits</div>
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />Fee paid on policy issuance</div>
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />No insurance license needed</div>
            </div>
          </div>
        </CollapsibleSection>

        {/* InsurtechExpress Flywheel Section */}
        <CollapsibleSection id="ie-flywheel" title="InsurtechExpress: The Innovation Ecosystem" icon={Zap} color={COLORS.primary}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-sm text-gray-700 mb-6">
              <strong style={{ color: COLORS.primary }}>The Insurance & FinTech Innovation Ecosystem</strong><br/>
              <span className="text-gray-600">Connecting innovators with <strong>capital</strong>, <strong>talent</strong>, & <strong>marketing</strong></span>
            </p>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <Flywheel />
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border-l-4" style={{ borderLeftColor: COLORS.primary }}>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Founded by Industry Veterans</h4>
                  <p className="text-gray-600 text-xs">Ken Leibow, CEO with 38+ years experience at Mutual of Omaha, Oracle, EBIX, Genworth.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4" style={{ borderLeftColor: COLORS.primaryDark }}>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Navigator AI Platform</h4>
                  <p className="text-gray-600 text-xs">World's largest content hub for life insurance technology, launched June 2024.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4" style={{ borderLeftColor: COLORS.navy }}>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">IE Capital Connect</h4>
                  <p className="text-gray-600 text-xs">Funding and advisory services for insurtech ventures, launched September 2025.</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* IE Quick Facts Section */}
        <CollapsibleSection id="ie-facts" title="IE Quick Facts" icon={Star} color={COLORS.primaryDark}>
          <div className="grid grid-cols-4 gap-3 mb-4">
            <StatCard icon={Users} value="250K+" label="B2B Network" color={COLORS.primary} />
            <StatCard icon={Globe} value="150K+" label="Monthly Views" color={COLORS.primaryDark} />
            <StatCard icon={TrendingUp} value="33K+" label="LinkedIn" color={COLORS.navy} />
            <StatCard icon={Star} value="3M+" label="Views/Year" color={COLORS.success} />
          </div>
          <KenLeibowBio />
        </CollapsibleSection>

        {/* Mutual of Omaha Section */}
        <CollapsibleSection id="moo-facts" title="Mutual of Omaha: 116 Years of Trust" icon={Shield} color={COLORS.moo}>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="rounded-xl p-4 text-white text-center" style={{ background: `linear-gradient(135deg, ${COLORS.moo}, #004080)` }}>
              <Award size={28} className="mx-auto mb-1 text-yellow-400" />
              <div className="text-2xl font-bold">#1</div>
              <div className="text-white/80 text-xs">J.D. Power 2025</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
              <div className="text-2xl font-bold" style={{ color: COLORS.moo }}>A+</div>
              <div className="text-gray-600 text-xs mb-1">Financial Strength</div>
              <div className="flex flex-wrap justify-center gap-1 text-[10px]">
                <span className="bg-gray-100 px-1.5 py-0.5 rounded-full">AM Best</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded-full">S&P</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
              <div className="text-2xl font-bold" style={{ color: COLORS.moo }}>#299</div>
              <div className="text-gray-600 text-xs">Fortune 500</div>
              <div className="text-lg font-bold mt-1" style={{ color: COLORS.primary }}>$14.6B</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            <StatCard icon={Building} value="1909" label="Founded" color={COLORS.moo} />
            <StatCard icon={Users} value="22M" label="Covered" color={COLORS.moo} />
            <StatCard icon={Shield} value="$52B" label="Assets" color={COLORS.moo} />
            <StatCard icon={Heart} value="6.5M+" label="Policies" color={COLORS.moo} />
          </div>
          <NAICTable />
        </CollapsibleSection>

        {/* Next Steps Section */}
        <CollapsibleSection id="next-steps" title="Next Steps" icon={ArrowRight} color={COLORS.navy}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Ready to Discuss This Opportunity?</h3>
              <p className="text-sm text-gray-600">Contact Nichole Gaines, Chief Revenue Officer at InsurtechExpress</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 mb-4 border-2 border-blue-200">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
                  <Building size={28} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Nichole Gaines, CRO</h4>
                <a href="mailto:nichole@insurtechexpress.com" className="text-lg font-bold mb-4" style={{ color: COLORS.primary }}>
                  nichole@insurtechexpress.com
                </a>

                <div className="w-full max-w-md">
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">Topics to Discuss:</h5>
                  <ul className="text-left space-y-1.5 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5 flex-shrink-0" />
                      Up & Up annual sales volume and geographic distribution
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5 flex-shrink-0" />
                      Target Circle integration capabilities
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5 flex-shrink-0" />
                      Packaging redesign timeline with Attindas
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5 flex-shrink-0" />
                      Marketing co-op budget and pilot program structure
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href="mailto:nichole@insurtechexpress.com?subject=Target%20Family%20Protection%20Partnership%20Inquiry"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-sm"
                style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}
              >
                Contact Nichole Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </CollapsibleSection>
      </main>

      <footer className="py-4 px-4 text-center" style={{ background: `linear-gradient(135deg, ${COLORS.navyDark}, ${COLORS.navy})` }}>
        <p className="text-white/60 text-xs">© 2025 InsurtechExpress × Mutual of Omaha. Confidential Partnership Proposal.</p>
        <div className="mt-1 text-[10px] text-white/40">
          Sources:{' '}
          <a href="https://www.swissre.com/dam/jcr:0a92d176-548a-4b2a-9b27-6f83548987b9/Embedded%20Insurance%202.0%20-%20Incumbent%20Strategy%20-%20International%20Peer%20Group%20Report%20-%20June%202022.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">Swiss Re EI 2.0</a>
          {' | '}
          <a href="https://www.bcg.com/publications/2025/embedded-insurance-success-get-your-tech-stack-right" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">BCG</a>
          {' | '}
          <a href="https://www.acli.com/-/media/public/pdf/news-and-analysis/publications-and-research/2025fb/11_industry_rankings_acli_fact_book_2025.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">ACLI/NAIC</a>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('target_access') === 'granted';
  });

  const handleLogout = () => {
    localStorage.removeItem('target_access');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <TargetPitchDeck onLogout={handleLogout} />;
}
