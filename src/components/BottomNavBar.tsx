import React from 'react';
import { 
  Home, 
  Target, 
  PlusSquare, 
  Camera, 
  SlidersHorizontal,
  LogIn
} from 'lucide-react';

interface BottomNavBarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  onOpenCreateModal: () => void;
  isLoggedIn: boolean;
  onRequireLogin: (reason?: string) => void;
  savedCount?: number;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  currentTab,
  onTabChange,
  onOpenCreateModal,
  isLoggedIn,
  onRequireLogin,
  savedCount = 0,
}) => {
  const handleCenterPlusClick = () => {
    if (isLoggedIn) {
      onOpenCreateModal();
    } else {
      onRequireLogin('Silakan masuk sebagai pengelola untuk mempublikasikan kegiatan baru.');
    }
  };

  return (
    <nav 
      aria-label="Navigasi Utama"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-neutral-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-md sm:max-w-lg mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Tab 1: Ikhtisar / Beranda */}
          <button
            onClick={() => onTabChange('overview')}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-transform active:scale-95 group ${
              currentTab === 'overview' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            <div className="relative">
              <Home 
                className={`w-6 h-6 transition-all ${
                  currentTab === 'overview' ? 'stroke-[2.5px] scale-105' : 'stroke-[1.8px]'
                }`} 
              />
              {currentTab === 'overview' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-900" />
              )}
            </div>
            <span className={`text-[10px] mt-1 transition-colors ${
              currentTab === 'overview' ? 'font-bold text-neutral-900' : 'font-medium'
            }`}>
              Ikhtisar
            </span>
          </button>

          {/* Tab 2: Program Unggulan (2025-2029) */}
          <button
            onClick={() => onTabChange('programs')}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-transform active:scale-95 group ${
              currentTab === 'programs' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            <div className="relative">
              <Target 
                className={`w-6 h-6 transition-all ${
                  currentTab === 'programs' ? 'stroke-[2.5px] scale-105' : 'stroke-[1.8px]'
                }`} 
              />
              {currentTab === 'programs' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-900" />
              )}
            </div>
            <span className={`text-[10px] mt-1 transition-colors ${
              currentTab === 'programs' ? 'font-bold text-neutral-900' : 'font-medium'
            }`}>
              Program
            </span>
          </button>

          {/* Tab 3: Center Plus Action Button */}
          <div className="flex items-center justify-center flex-1 h-full">
            <button
              onClick={handleCenterPlusClick}
              title={isLoggedIn ? "Unggah & Tambah Data Baru" : "Masuk untuk Publikasi"}
              className="group flex flex-col items-center justify-center -mt-2 focus:outline-none"
            >
              <div className={`p-2 sm:p-2.5 rounded-2xl shadow-md transition-all ${
                isLoggedIn
                  ? 'bg-neutral-900 text-white ring-2 ring-emerald-500/50 group-hover:bg-neutral-800 group-hover:scale-105 group-active:scale-95 shadow-emerald-950/20'
                  : 'bg-neutral-800/80 text-neutral-200 group-hover:bg-neutral-900 group-hover:scale-105 group-active:scale-95'
              }`}>
                <PlusSquare className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2px]" />
              </div>
              <span className="text-[10px] font-semibold text-neutral-800 mt-0.5 flex items-center gap-1">
                {isLoggedIn && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                <span>{isLoggedIn ? 'Unggah' : 'Publikasi'}</span>
              </span>
            </button>
          </div>

          {/* Tab 4: Publikasi Foto Kegiatan (Instagram Feed) */}
          <button
            onClick={() => onTabChange('photo-feed')}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-transform active:scale-95 group ${
              currentTab === 'photo-feed' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            <div className="relative">
              <Camera 
                className={`w-6 h-6 transition-all ${
                  currentTab === 'photo-feed' ? 'stroke-[2.5px] scale-105 text-neutral-900' : 'stroke-[1.8px]'
                }`} 
              />
              {currentTab === 'photo-feed' && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-900" />
              )}
            </div>
            <span className={`text-[10px] mt-1 transition-colors ${
              currentTab === 'photo-feed' ? 'font-bold text-neutral-900' : 'font-medium'
            }`}>
              Foto Kegiatan
            </span>
          </button>

          {/* Tab 5: Dynamic LOGIN or ARSIP */}
          {isLoggedIn ? (
            <button
              onClick={() => onTabChange('manage')}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-transform active:scale-95 group ${
                currentTab === 'manage' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              <div className="relative">
                <SlidersHorizontal 
                  className={`w-6 h-6 transition-all ${
                    currentTab === 'manage' ? 'stroke-[2.5px] scale-105' : 'stroke-[1.8px]'
                  }`} 
                />
                {currentTab === 'manage' && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-900" />
                )}
              </div>
              <span className={`text-[10px] mt-1 transition-colors ${
                currentTab === 'manage' ? 'font-bold text-neutral-900' : 'font-medium'
              }`}>
                Arsip
              </span>
            </button>
          ) : (
            <button
              onClick={() => onTabChange('login')}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-transform active:scale-95 group ${
                currentTab === 'login' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-700'
              }`}
            >
              <div className="relative">
                <LogIn 
                  className={`w-6 h-6 transition-all ${
                    currentTab === 'login' ? 'stroke-[2.5px] scale-105 text-neutral-900' : 'stroke-[1.8px]'
                  }`} 
                />
                {currentTab === 'login' && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-900" />
                )}
              </div>
              <span className={`text-[10px] mt-1 transition-colors ${
                currentTab === 'login' ? 'font-bold text-neutral-900' : 'font-medium'
              }`}>
                Login
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
