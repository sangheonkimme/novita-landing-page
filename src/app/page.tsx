import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Folder,
  Image as ImageIcon,
  Search,
  Plus,
  Pin,
  Hash,
  User,
  Briefcase,
  GraduationCap,
  LayoutGrid,
  Settings,
  Home as HomeIcon,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: <FileText className="h-8 w-8 text-[#6c4cf5]" />,
    title: "풍부한 노트 작성",
    description:
      "일반 텍스트는 물론, 할 일을 관리할 수 있는 체크리스트까지 한 번에 기록하세요.",
  },
  {
    icon: <Folder className="h-8 w-8 text-[#6c4cf5]" />,
    title: "스마트한 정리",
    description:
      "폴더와 태그로 원하는 방식으로 분류하고, 중요한 노트는 상단에 고정할 수 있습니다.",
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-[#6c4cf5]" />,
    title: "이미지 첨부",
    description:
      "갤러리나 카메라로 촬영한 사진을 바로 추가해 더 생생한 기록을 남겨보세요.",
  },
  {
    icon: <Search className="h-8 w-8 text-[#6c4cf5]" />,
    title: "강력한 검색",
    description:
      "제목, 내용, 태그를 한 번에 검색해 필요한 노트를 순식간에 찾을 수 있습니다.",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f2eeff] to-[#e6e3ff] text-slate-900">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <p className="text-xl font-semibold tracking-tight text-[#6c4cf5]">
          Novita
        </p>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          <a href="#features" className="transition hover:text-[#6c4cf5]">
            주요 기능
          </a>
          <Link href="/privacy" className="transition hover:text-[#6c4cf5]">
            개인정보 처리방침
          </Link>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-8">
        <section className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6c4cf5]">
                나만의 안전한 기록 공간
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                당신의 모든 생각을 쉽고 아름답게 기록하세요.
              </h1>
              <p className="text-lg text-slate-600">
                Novita는 텍스트, 체크리스트, 사진까지 모든 것을 담을 수 있는
                당신만의 스마트한 노트 앱입니다. 데이터는 오직 당신의 기기에만
                저장되어 더 안전합니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(108,76,245,0.15)] transition hover:-translate-y-0.5 hover:border-[#6c4cf5] hover:text-[#6c4cf5]"
              >
                Google Play에서 받기
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[#2d1db6] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(45,29,182,0.35)] transition hover:-translate-y-0.5 hover:bg-[#241794]"
              >
                App Store에서 받기
              </a>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#6c4cf5]" />
                데이터는 클라우드로 업로드되지 않습니다.
              </p>
              <p className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#6c4cf5]" />
                학생, 직장인 모두를 위한 직관적인 인터페이스
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 rounded-[42px] bg-[#d5ccff]/60 blur-3xl" />
            <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[40px] bg-[#f7f4ff] border-[8px] border-white shadow-[0_25px_60px_rgba(18,11,54,0.15)]">
              {/* Status Bar */}
              <div className="flex justify-between px-6 pt-4">
                <div className="text-xs font-semibold text-slate-900">10:32</div>
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-slate-900/20" />
                  <div className="h-3 w-3 rounded-full bg-slate-900/20" />
                  <div className="h-3 w-3 rounded-full bg-slate-900/20" />
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="h-full overflow-y-auto pb-24 scrollbar-hide">
                {/* Header */}
                <div className="mt-4 flex items-center justify-between px-6">
                  <div>
                    <p className="text-xs text-slate-500">Welcome back,</p>
                    <p className="text-xl font-bold text-slate-900">Novita</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
                      <Bell className="h-4 w-4 text-slate-700" />
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6e3ff] text-[#6c4cf5]">
                      <User className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Storage Card */}
                <div className="mt-6 px-6">
                  <div className="relative overflow-hidden rounded-3xl bg-[#6c4cf5] p-5 text-white shadow-lg shadow-[#6c4cf5]/20">
                    <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                    
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                        <div className="h-5 w-5 rounded-full border-2 border-white/80" />
                      </div>
                      <div>
                        <p className="text-xs text-white/80">Available Space</p>
                        <p className="text-sm font-semibold">0.00 GB of 25 GB Used</p>
                      </div>
                    </div>
                    <div className="mt-4 h-1.5 w-full rounded-full bg-black/20">
                      <div className="h-full w-[2%] rounded-full bg-white" />
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-3 gap-3 px-6">
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f1ff] text-[#6c4cf5]">
                      <Plus className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">새 노트</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f1ff] text-[#6c4cf5]">
                      <Pin className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">고정됨</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 shadow-sm">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f1ff] text-[#6c4cf5]">
                      <Hash className="h-4 w-4" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-700">태그 관리</span>
                  </div>
                </div>

                {/* My Folders */}
                <div className="mt-8 px-6 pb-6">
                  <h3 className="text-lg font-bold text-slate-900">나의 폴더</h3>
                  <p className="text-xs text-slate-500">노트를 상황에 맞게 정리해보세요.</p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <FolderCard 
                      icon={<User className="h-5 w-5 text-[#3b82f6]" />}
                      title="개인"
                      count="2 files"
                      bg="bg-[#e0f2fe]"
                    />
                    <FolderCard 
                      icon={<ImageIcon className="h-5 w-5 text-[#a855f7]" />}
                      title="기타"
                      count="0 files"
                      bg="bg-[#f3e8ff]"
                    />
                    <FolderCard 
                      icon={<Briefcase className="h-5 w-5 text-[#22c55e]" />}
                      title="업무"
                      count="0 files"
                      bg="bg-[#dcfce7]"
                    />
                    <FolderCard 
                      icon={<GraduationCap className="h-5 w-5 text-[#f97316]" />}
                      title="학업"
                      count="0 files"
                      bg="bg-[#ffedd5]"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around bg-white px-6 pb-6 pt-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col items-center gap-1">
                  <div className="flex h-8 w-12 items-center justify-center rounded-full bg-[#f0f1ff]">
                    <HomeIcon className="h-5 w-5 text-[#6c4cf5]" />
                  </div>
                  <span className="text-[10px] font-medium text-slate-900">홈</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <Search className="h-5 w-5" />
                  <span className="text-[10px] font-medium">검색</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <LayoutGrid className="h-5 w-5" />
                  <span className="text-[10px] font-medium">보드</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-slate-400">
                  <Settings className="h-5 w-5" />
                  <span className="text-[10px] font-medium">설정</span>
                </div>
                
                {/* Floating Action Button */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6c4cf5] shadow-lg shadow-[#6c4cf5]/40">
                    <Plus className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-10">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6c4cf5]">
              Features
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              노트를 쓰는 모든 순간을 더 편리하게
            </h2>
            <p className="text-base text-slate-600">
              입력, 정리, 검색, 기록까지. Novita가 모든 흐름을 매끄럽게 연결해
              드립니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-7 shadow-[0_20px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
              >
                <div className="text-2xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Railit. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-[#6c4cf5]">
              주요 기능
            </a>
            <Link href="/privacy" className="hover:text-[#6c4cf5]">
              개인정보 처리방침
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

type FolderCardProps = {
  icon: React.ReactNode;
  title: string;
  count: string;
  bg: string;
};

function FolderCard({ icon, title, count, bg }: FolderCardProps) {
  return (
    <div className={`flex flex-col gap-3 rounded-3xl p-4 ${bg}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/60">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-xs text-slate-500">{count}</p>
      </div>
    </div>
  );
}
