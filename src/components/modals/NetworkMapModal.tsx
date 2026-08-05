import React, { useState } from 'react';
import { X, Globe, Server, Activity, ShieldCheck, RefreshCw } from 'lucide-react';
import { GLOBAL_NETWORK_NODES } from '../../data/mockData';

interface NetworkMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const NetworkMapModal: React.FC<NetworkMapModalProps> = ({ isOpen, onClose, onNotify }) => {
  const [selectedNode, setSelectedNode] = useState(GLOBAL_NETWORK_NODES[0]);
  const [pinging, setPinging] = useState(false);

  if (!isOpen) return null;

  const handleTestPing = (nodeName: string) => {
    setPinging(true);
    setTimeout(() => {
      setPinging(false);
      onNotify(`Ping test to ${nodeName} edge POP complete: 0.78ms (0% packet loss)`);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1c30]/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3525cd]/10 rounded-xl flex items-center justify-center text-[#3525cd]">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0b1c30]">Global Anycast Edge Network</h3>
            <p className="text-xs text-[#464555]">Sub-millisecond route optimization across 18 PoPs</p>
          </div>
        </div>

        {/* Network Map Simulated SVG Grid */}
        <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden p-6 border border-slate-800 mb-6 flex flex-col justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(#3525cd_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          
          <div className="relative z-10 flex justify-between items-center text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              GLOBAL EDGE BACKBONE: ACTIVE
            </span>
            <span>24/24 NODES ONLINE</span>
          </div>

          {/* Nodes plotting */}
          <div className="relative z-10 w-full h-full my-4">
            {GLOBAL_NETWORK_NODES.map((node) => (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                style={{ top: `${node.coordinates.y}%`, left: `${node.coordinates.x}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all cursor-pointer ${
                  selectedNode.id === node.id ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                }`}
              >
                <span className={`block w-3.5 h-3.5 rounded-full ${
                  selectedNode.id === node.id ? 'bg-amber-400 ring-4 ring-amber-400/30' : 'bg-[#3525cd] shadow-md shadow-[#3525cd]'
                }`} />
                <span className="absolute left-1/2 -translate-x-1/2 top-4 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded whitespace-nowrap opacity-80 group-hover:opacity-100">
                  {node.city} ({node.latency}ms)
                </span>
              </button>
            ))}
          </div>

          <div className="relative z-10 flex justify-between items-end text-xs text-slate-300">
            <div>
              <p className="font-bold text-white text-sm">{selectedNode.city}, {selectedNode.country}</p>
              <p className="text-[11px] text-slate-400 font-mono">POP Servers: {selectedNode.servers} • Latency: {selectedNode.latency}ms</p>
            </div>
            <button
              onClick={() => handleTestPing(selectedNode.city)}
              disabled={pinging}
              className="bg-[#3525cd] hover:bg-[#281bb3] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${pinging ? 'animate-spin' : ''}`} />
              <span>{pinging ? 'Measuring...' : 'Test Ping'}</span>
            </button>
          </div>
        </div>

        {/* Node Table Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GLOBAL_NETWORK_NODES.slice(0, 4).map((node) => (
            <div key={node.id} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <p className="text-xs font-bold text-[#0b1c30]">{node.city}</p>
              <p className="text-[11px] text-[#464555] font-mono">{node.latency}ms average</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
