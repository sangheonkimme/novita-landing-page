import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Folder,
  Image as ImageIcon,
  Search,
  Plus,
  User,
  LayoutGrid,
  Settings,
  Home as HomeIcon,
  Bell,
  Cloud,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: <RefreshCw className="h-8 w-8 text-[#6c4cf5]" />,
    title: "클라우드 동기화",
    description:
      "Worklife Dashboard와 실시간으로 동기화하여 PC와 모바일에서 언제든지 메모를 확인하고 편집하세요.",
  },
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
    <div className="min-h-screen bg-linear-to-b from-white via-[#f8f6ff] to-[#f0edff] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-100/50 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-2xl font-bold tracking-tight text-[#6c4cf5]">
            Novita
          </p>
          <nav className="flex items-center gap-8 text-sm font-medium text-slate-600">
            <a
              href="https://www.worklife-dashboard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#6c4cf5]"
            >
              Worklife Dashboard
            </a>
            <a href="#features" className="transition hover:text-[#6c4cf5]">
              주요 기능
            </a>

            <Link href="/privacy" className="transition hover:text-[#6c4cf5]">
              개인정보 처리방침
            </Link>
            <a
              href="#"
              style={{ color: "#ffffff" }}
              className="rounded-full bg-[#6c4cf5] px-5 py-2.5 text-sm font-semibold transition hover:bg-[#5a3dd6]"
            >
              다운로드
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
        <section className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6c4cf5]/10 px-4 py-2 text-sm font-semibold text-[#6c4cf5]">
                <span className="h-2 w-2 rounded-full bg-[#6c4cf5]" />
                나만의 안전한 기록 공간
              </div>
              <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                당신의 모든 생각을
                <br />
                <span className="bg-linear-to-r from-[#6c4cf5] to-[#9d8fff] bg-clip-text text-transparent">
                  쉽고 아름답게
                </span>
                <br />
                기록하세요.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-slate-600">
                Novita는 텍스트, 체크리스트, 사진까지 모든 것을 담을 수 있는
                당신만의 스마트한 노트 앱입니다.{" "}
                <a
                  href="https://www.worklife-dashboard.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6c4cf5] underline decoration-[#6c4cf5]/30 underline-offset-2 transition hover:decoration-[#6c4cf5]"
                >
                  Worklife Dashboard
                </a>
                와 연동하여 언제 어디서든 메모를 확인하세요.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-[#6c4cf5] hover:text-[#6c4cf5]"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-[#6c4cf5] hover:text-[#6c4cf5]"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                App Store
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <p className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#6c4cf5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                클라우드 동기화
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                빠르고 직관적인 UI
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 rounded-[42px] bg-[#d5ccff]/60 blur-3xl" />
            <div className="relative h-[640px] w-[320px] overflow-hidden rounded-[40px] bg-[#f7f4ff] border-[8px] border-white shadow-[0_25px_60px_rgba(18,11,54,0.15)]">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-5 pt-3">
                <div className="text-[11px] font-semibold text-slate-900">
                  9:44
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="h-4 w-4 text-slate-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                  </svg>
                  <svg
                    className="h-4 w-4 text-slate-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 22h20V2z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-slate-900"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect
                      x="2"
                      y="6"
                      width="18"
                      height="12"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <rect
                      x="4"
                      y="8"
                      width="14"
                      height="8"
                      rx="1"
                      fill="currentColor"
                    />
                    <rect
                      x="20"
                      y="9"
                      width="2"
                      height="6"
                      rx="0.5"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="h-full overflow-y-auto pb-28 scrollbar-hide">
                {/* Header */}
                <div className="mt-3 flex items-center justify-between px-5">
                  <div>
                    <p className="text-xs text-slate-400">Good Morning,</p>
                    <p className="text-2xl font-bold text-slate-900">Novita</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white">
                      <Bell className="h-5 w-5 text-slate-600" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 bg-slate-100">
                      <User className="h-5 w-5 text-slate-500" />
                    </div>
                  </div>
                </div>

                {/* Cloud Storage Card */}
                <div className="mt-5 px-5">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#8b7cf5] via-[#7c6cf5] to-[#9d8fff] p-5 text-white">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl translate-x-8 -translate-y-8" />
                    <div className="absolute left-1/2 bottom-0 h-24 w-24 rounded-full bg-white/10 blur-xl translate-y-8" />

                    <div className="flex items-start gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                        <Cloud className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/80">Cloud Storage</p>
                        <p className="text-lg font-bold">My Plan</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">0.0 GB used</span>
                        <span className="text-white/70">25 GB total</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-white/30">
                        <div className="h-full w-[1%] rounded-full bg-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pinned Notes */}
                <div className="mt-6 px-5">
                  <h3 className="text-lg font-bold text-slate-900">
                    Pinned Notes
                  </h3>

                  <div className="mt-3">
                    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                      <h4 className="font-semibold text-slate-900">
                        Happiness
                      </h4>
                      <p className="mt-1 text-sm text-slate-500">
                        how can I define happiness
                      </p>
                    </div>
                  </div>
                </div>

                {/* My Folders */}
                <div className="mt-6 px-5 pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      My Folders
                    </h3>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
                      <Plus className="h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <FolderCard
                      icon={<User className="h-5 w-5 text-[#6c8ef5]" />}
                      title="개인"
                      count="3 files"
                      iconBg="bg-[#e8f0ff]"
                    />
                    <FolderCard
                      icon={<Folder className="h-5 w-5 text-[#f87171]" />}
                      title="기타"
                      count="2 files"
                      iconBg="bg-[#fee2e2]"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 left-0 right-0 bg-white px-4 pb-6 pt-3">
                <div className="flex items-end justify-around">
                  <div className="flex flex-col items-center gap-1">
                    <HomeIcon className="h-6 w-6 text-[#6c4cf5]" />
                    <span className="text-[10px] font-semibold text-[#6c4cf5]">
                      Home
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Search className="h-6 w-6 text-slate-400" />
                    <span className="text-[10px] font-medium text-slate-400">
                      Search
                    </span>
                  </div>

                  {/* Center FAB */}
                  <div className="relative -top-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6c4cf5] shadow-lg shadow-[#6c4cf5]/40">
                      <Plus className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <LayoutGrid className="h-6 w-6 text-slate-400" />
                    <span className="text-[10px] font-medium text-slate-400">
                      Board
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Settings className="h-6 w-6 text-slate-400" />
                    <span className="text-[10px] font-medium text-slate-400">
                      Settings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="space-y-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6c4cf5]/10 px-4 py-2 text-sm font-semibold text-[#6c4cf5]">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              노트를 쓰는 모든 순간을
              <br />더 편리하게
            </h2>
            <p className="text-lg text-slate-600">
              입력, 정리, 검색, 기록까지. Novita가 모든 흐름을 매끄럽게 연결해
              드립니다.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6c4cf5]/5"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6c4cf5]/10">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/50 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col items-center gap-2 md:items-start">
              <p className="text-xl font-bold text-[#6c4cf5]">Novita</p>
              <p className="text-sm text-slate-500">
                당신만의 스마트한 노트 앱
              </p>
            </div>
            <div className="flex items-center gap-8 text-sm text-slate-600">
              <a href="#features" className="transition hover:text-[#6c4cf5]">
                주요 기능
              </a>
              <Link href="/privacy" className="transition hover:text-[#6c4cf5]">
                개인정보 처리방침
              </Link>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-100 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 Railit. All rights reserved.</p>
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
  iconBg: string;
};

function FolderCard({ icon, title, count, iconBg }: FolderCardProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
      >
        {icon}
      </div>
      <div className="mt-3">
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-xs text-slate-400">{count}</p>
      </div>
    </div>
  );
}
